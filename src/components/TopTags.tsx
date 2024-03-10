import { useEffect, useMemo, useState } from "react";
import { OwnedGameList, TagStat, TagStats } from "../interfaces";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import scoreTags from "../util/scoreTags";
import CategoryCharts from "./CategoryCharts";

export interface TopTagsProps {
  games: OwnedGameList;
}
export default function TopTags({ games }: TopTagsProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [scores, setScores] = useState<{
    [key: string]: {
      score: number;
      gameCount: number;
      name: string;
    };
  }>();

  const allTags = useMemo(() => {
    const tagMap: TagStats = {};
    for (const game of games.apps) {
      if (!game.appinfo.common.store_tags) continue;
      const tags = Object.values(game.appinfo.common.store_tags);

      for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        if (!(tag in tagMap)) {
          tagMap[tag] = {
            gameCount: 0,
            playtime: 0,
            rankings: {},
            name: games.tags[tag as keyof object].name,
            id: tag,
          };
        }
        tagMap[tag].gameCount++;
        tagMap[tag].playtime += game.personal.playtime_forever;
        tagMap[tag].rankings[i] =
          i in tagMap[tag].rankings ? tagMap[tag].rankings[i] + 1 : 1;
      }
    }
    return tagMap;
  }, [games.apps, games.tags]);

  useEffect(() => {
    const scores = scoreTags(allTags);
    setScores(scores);
    setLoading(false);
  }, [allTags]);

  if (loading) return <Spinner />;
  return (
    <Box>
      <CategoryCharts tags={allTags!} games={games} />
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Heading size="md">Top Tags - Owned Games</Heading>
          </AccordionButton>
          <AccordionPanel>
            <List>
              {Object.entries(allTags!)
                .sort((a, b) => b[1].gameCount - a[1].gameCount)
                .map((e) => {
                  const [_id, data]: [string, TagStat] = e;
                  return (
                    <ListItem key={e[0]}>
                      {data.name} - {data.gameCount} games
                    </ListItem>
                  );
                })}
            </List>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Heading size="md">Top Tags - Playtime/gamecount based</Heading>
          </AccordionButton>
          <AccordionPanel>
            <List>
              {Object.entries(scores!)
                .sort((a, b) => b[1].score - a[1].score)
                .map((e) => {
                  return (
                    <ListItem key={e[0]}>
                      {e[1].name} - {e[1].score}
                    </ListItem>
                  );
                })}
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
