import {
  Box,
  Container,
  Flex,
  Heading,
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
import { OwnedGameList, TagStats } from "../interfaces";
import TagChart from "./TagChart";
import { useMemo, useState } from "react";
import { tagCategories } from "../util/tagCategories";
import { Select } from "chakra-react-select";

interface CategoryChartsProps {
  tags: TagStats;
  games: OwnedGameList;
}

export default function CategoryCharts({ tags, games }: CategoryChartsProps) {
  const [selectedTagList, setSelectedTagList] = useState("Top-Level Genres");
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  const [ownedLoading, setOwnedLoading] = useState(true);
  const [minimumPlaytime, setMinimumPlaytime] = useState(0);
  const categorySelectOptions = useMemo(() => {
    const res = [];
    for (const e of Object.keys(tagCategories))
      res.push({ value: e, label: e });
    return res;
  }, []);
  const displayedGames = useMemo(() => {
    if (hoveredTag) {
      return games.apps.filter((e) => {
        if (
          e.appinfo.common.store_tags &&
          Object.values(e.appinfo.common.store_tags).includes(hoveredTag)
        ) {
          setOwnedLoading(false);
          return true;
        }
      });
    }
    return games.apps.filter((e) => {
      if (
        tagCategories[selectedTagList as keyof object].some((r) => {
          if (e.appinfo.common.store_tags) {
            return Object.values(e.appinfo.common.store_tags).includes(r);
          }
        })
      ) {
        setOwnedLoading(false);
        return e;
      }
    });
  }, [games.apps, hoveredTag, selectedTagList]);
  const maximumPlaytime = useMemo(() => {
    let max = 0;
    for (const g of displayedGames) {
      max = Math.max(max, g.personal.playtime_forever);
    }
    console.log(max);
    return max;
  }, [displayedGames]);
  return (
    <Flex direction="row" alignItems="top" justifyContent="center">
      <Box width="60%">
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
              />
            </Box>
          </Container>
        </VStack>
      </Box>
      <Tabs width="40%">
        <TabList>
          <Tab>Owned Games</Tab>
          <Tab>All Games</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {ownedLoading ? (
              <Spinner />
            ) : (
              <List overflow="scroll" maxHeight={600}>
                {displayedGames!.map((e) => {
                  return <ListItem>{e.appinfo.common.name}</ListItem>;
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
