import { useEffect, useState } from "react";
import { TagStat, TagStats } from "../interfaces";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, Text } from "recharts";

interface TagChartProps {
  ids: string[];
  tags: TagStats;
  chartName: string;
  minimumPlaytime: number;
  // setSelectedTagList: () => unknown;
  setHoveredTag: (_id: string | null) => unknown;
  setOwnedLoading: (_state: boolean) => unknown;
}
export default function TagChart({
  tags,
  chartName,
  ids,
  setHoveredTag,
  setOwnedLoading,
  minimumPlaytime,
}: TagChartProps) {
  const [usedTags, setUsedTags] = useState<TagStat[]>([]);

  useEffect(() => {
    const tagArray = [];
    for (const id of ids)
      if (
        tags[id] &&
        tags[id].gameCount &&
        tags[id].playtime >= minimumPlaytime
      )
        tagArray.push(tags[id]);
    tagArray.sort((a, b) => a.name.localeCompare(b.name));
    console.log(tagArray);
    setUsedTags(tagArray);
  }, [ids, tags, minimumPlaytime]);

  function handleClick(e: {
    coordinate: number;
    index: number;
    offset: number;
    value: string;
  }) {
    const selectedTag = usedTags.filter((t) => e.value === t.name)[0];
    console.log(selectedTag);
  }

  function handleHover(e: { value: string }) {
    setOwnedLoading(true);
    console.log(e.value);
    const tag = Object.values(tags).filter((r) => r.name === e.value)[0];
    console.log(tag);
    setHoveredTag(tag.id);
  }
  
  // https://stackoverflow.com/questions/65447592/recharts-is-there-a-way-to-add-a-padding-between-the-chart-and-labels-for-rada
  function renderPolarAngleAxis({
    payload,
    x,
    y,
    cx,
    cy,
    ...rest
  }: {
    x: number;
    y: number;
    cx: number;
    cy: number;
    payload: { value: number };
  }) {
    return (
      <Text
        {...rest}
        verticalAnchor="middle"
        y={y + (y - cy) / 70}
        x={x + (x - cx) / 70}
      >
        {payload.value}
      </Text>
    );
  }

  if (!usedTags.length) return null;
  return (
    <RadarChart outerRadius="60%" width={500} height={500} data={usedTags}>
      <PolarGrid />
      <PolarAngleAxis
        dataKey="name"
        onClick={handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={() => setHoveredTag(null)}
        tick={(props) => renderPolarAngleAxis(props)}
      />
      <Radar
        name={`${chartName} games`}
        dataKey="gameCount"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      {/* <Radar
        name={`${chartName} playtime`}
        dataKey="playtime"
        stroke="#0084d8"
        fill="#0084d8"
        fillOpacity={0.6}
      /> */}
      {/* <Legend /> */}
    </RadarChart>
  );
}
