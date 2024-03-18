import {
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text,
  Image,
  Box,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  Tag,
} from "@chakra-ui/react";
import { SteamGameDetails } from "../interfaces";

// http://media.steampowered.com/steamcommunity/public/images/apps/{appid}/{hash}.jpg
const SteamImageUrl =
  "https://media.steampowered.com/steamcommunity/public/images/apps";
export default function GameTabEntry({ game }: { game: SteamGameDetails }) {
  const gameIconUrl = `${SteamImageUrl}/${game.appinfo.appid}/${game.appinfo.common.icon}.jpg`;
  function scoreColor() {
    const reviewScore = parseInt(game.appinfo.common.review_percentage);
    switch (true) {
      case reviewScore <= 35:
        return "red.500";
      case reviewScore <= 50:
        return "orange.400";
      case reviewScore <= 70:
        return "yellow.500";
      case reviewScore <= 80:
        return "green.500";
      case reviewScore <= 100:
        return "green.700";
      default:
        return "gray.500";
    }
  }
  return (
    <Popover>
      <PopoverTrigger>
        <Box
          borderWidth="1px"
          borderRadius="lg"
          padding={1}
          marginY={1}
          width="100%"
        >
          <Flex justify="space-between" alignItems="center">
            <Box padding={1}>
              <Image src={gameIconUrl} />
            </Box>
            <Text width="100%">{game.appinfo.common.name}</Text>
            <CircularProgress
              value={parseInt(game.appinfo.common.review_percentage)}
              color={scoreColor()}
            >
              <CircularProgressLabel>
                {game.appinfo.common.review_percentage}%
              </CircularProgressLabel>
            </CircularProgress>
          </Flex>
        </Box>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader></PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            {Object.values(game.appinfo.common.store_tags).map(e=><Tag key={e}>{e}</Tag>)}
          </PopoverBody>
          <PopoverFooter></PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
