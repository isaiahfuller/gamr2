import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  List,
  ListItem,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { OwnedGameList, TagStat, TagStats } from "../interfaces";
import TagChart from "./TagChart";
import { SetStateAction, useEffect, useMemo, useState } from "react";
import { tagCategories } from "../util/tagCategories";
import { Select } from "chakra-react-select";
import useWindowDimensions from "../hooks/windowDimensions.ts";
import GameTabEntry from "./GameTabEntry.tsx";
import { relevanceSort } from "../util/relevanceSort.ts";

interface CategoryChartsProps {
  tags: TagStats;
  games: OwnedGameList;
}

export default function CategoryCharts({ tags, games }: CategoryChartsProps) {
  const [selectedTagList, setSelectedTagList] = useState("Top-Level Genres");
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  const [ownedLoading, setOwnedLoading] = useState(true);
  const [minimumPlaytime, setMinimumPlaytime] = useState(0);
  const [nameFilter, setNameFilter] = useState("");
  const [displayLargeList, setDisplayLargeList] = useState(false);
  const [filteredTags, setFilteredTags] = useState<TagStat[]>([]);
  const { width, height } = useWindowDimensions();
  const categorySelectOptions = useMemo(() => {
    const res = [];
    for (const e of Object.keys(tagCategories))
      res.push({ value: e, label: e });
    return res;
  }, []);

  const displayedGames = useMemo(() => {
    if (!filteredTags.length) return games.apps;
    return (
      games.apps
        .filter((e) => {
          for (const tag of filteredTags) {
            if (e.appinfo.common.store_tags) {
              setOwnedLoading(false);
              if (Object.values(e.appinfo.common.store_tags).includes(tag.id))
                return true;
            }
          }
          setOwnedLoading(false);
        })
    );
  }, [games.apps, selectedTagList, filteredTags]);

  const filteredGames = useMemo(() => {
    if (hoveredTag) {
      const games = relevanceSort(
        displayedGames.filter((e) => {
          if (
            e.appinfo.common.store_tags &&
            Object.values(e.appinfo.common.store_tags).includes(hoveredTag)
          ) {
            return true;
          }
        }),
        nameFilter
      ).slice(0, 9);
      setOwnedLoading(false);
      return games;
    }
    const games = relevanceSort(displayedGames, nameFilter);
    setOwnedLoading(false);
    return games;
  }, [displayedGames, nameFilter, hoveredTag]);

  useEffect(() => console.log("filteredgames", filteredGames), [filteredGames]);

  const maximumPlaytime = useMemo(() => {
    let max = 0;
    for (const g of displayedGames) {
      max = Math.max(max, g.personal.playtime_forever);
    }
    console.log(max);
    return max;
  }, [displayedGames]);

  function handleFilter(e: { target: { value: SetStateAction<string> } }) {
    setNameFilter(e.target.value);
  }

  return (
    <Flex
      direction={width < 1200 ? "column" : "row"}
      alignItems="top"
      justifyContent="center"
    >
      <Box width={width < 1200 ? "100%" : "60%"}>
        <VStack>
          <Container width="100%">
            <Select
              options={categorySelectOptions}
              defaultValue={categorySelectOptions[0]}
              size="lg"
              // value={selectedTagList}
              onChange={(e) => setSelectedTagList(e!.value)}
            />
            <Box borderWidth="1px" borderRadius="lg" padding="5" marginY={5}>
              <Heading size="sm">Minimum Playtime</Heading>
              <Text>
                {minimumPlaytime < 300 ? (
                  <>{minimumPlaytime} mins</>
                ) : (
                  <>{Math.floor(minimumPlaytime / 60)} hrs</>
                )}
              </Text>
              <Slider
                defaultValue={0}
                onChange={setMinimumPlaytime}
                min={0}
                max={maximumPlaytime}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>
          </Container>
          <Container centerContent={true}>
            <Box>
              <TagChart
                ids={tagCategories[selectedTagList as keyof object]}
                chartName={
                  selectedTagList === "Top-Level Genres"
                    ? "All"
                    : selectedTagList
                }
                tags={tags!}
                // setSelectedTagList={setSelectedTagList}
                setHoveredTag={setHoveredTag}
                setOwnedLoading={setOwnedLoading}
                minimumPlaytime={minimumPlaytime}
                setFilteredTags={setFilteredTags}
                filteredTags={filteredTags}
              />
            </Box>
          </Container>
        </VStack>
      </Box>
      <Tabs
        width={width < 1200 ? "100%" : "40%"}
        align={width < 1200 ? "center" : "start"}
      >
        <TabList>
          <Tab>Owned Games</Tab>
          <Tab>All Games</Tab>
        </TabList>
        <Input
          variant="flushed"
          placeholder="Search for a game..."
          value={nameFilter}
          onChange={handleFilter}
        />

        <TabPanels>
          <TabPanel>
            {filteredGames.length > 50 && !displayLargeList ? (
              <>
                <Text>Large lists might cause slowdown.</Text>
                <Button onClick={() => setDisplayLargeList(true)}>
                  Display anyway?
                </Button>
              </>
            ) : ownedLoading ? (
              <Spinner />
            ) : (
              <List overflow="scroll" maxHeight={600}>
                {filteredGames!.map((e) => {
                  return (
                    <ListItem key={e.appinfo.appid}>
                      <GameTabEntry game={e} />
                    </ListItem>
                  );
                })}
              </List>
            )}
          </TabPanel>
          <TabPanel>
            <Box>All</Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
