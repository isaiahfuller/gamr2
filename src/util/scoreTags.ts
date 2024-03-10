import { TagStats } from "../interfaces";

export default function scoreTags(tags: TagStats){
    const scores: {
      [key: string]: { score: number; gameCount: number; name: string };
    } = {};
    for (const [id, { gameCount, rankings, playtime, name }] of Object.entries(
      tags
    )) {
      scores[id] = {
        score: playtime / gameCount || 0,
        gameCount,
        name: name,
      };
      const numRanks = Object.values(rankings).length;
      for (const [rank] of Object.entries(rankings)) {
        scores[id].score -=
          parseInt(rank) / numRanks + playtime / scores[id].score;
      }
    }
    return scores
}