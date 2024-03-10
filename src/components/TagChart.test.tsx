import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import TagChart from "./TagChart.tsx";

describe("Chart", () => {
  test("should render chart when tags have data", () => {
    render(
      <TagChart
        ids={["4182", "3841", "3843", "1685"]}
        chartName="Players"
        tags={{
          4182: {
            gameCount: 37,
            playtime: 17893,
            name: "Singleplayer",
            rankings:{},
            id: "4182"
          },
          3841: {
            gameCount: 128,
            playtime: 5264,
            name: "Local Co-op",
            rankings:{},
            id: "3841"
          },
          3843: {
            gameCount: 72,
            playtime: 495,
            name: "Online Co-op",
            rankings:{},
            id: "3843"
          },
          1685: {
            gameCount: 523,
            playtime: 79841,
            name: "Co-op",
            rankings:{},
            id: "1685"
          },
        }}
      />
    );
    expect(screen.getAllByText(/Co-op/i)).toBeTruthy()
  });
  test("should not render chart when tags have no data", () => {
    render(
      <TagChart
        ids={["4182", "3841", "3843", "1685"]}
        chartName="Players"
        tags={{
          4182: {
            gameCount: 0,
            playtime: 17893,
            name: "Singleplayer",
            rankings:{},
            id: "4182"
          },
          3841: {
            gameCount: 0,
            playtime: 5264,
            name: "Local Co-op",
            rankings:{},
            id: "3841"
          },
          3843: {
            gameCount: 0,
            playtime: 495,
            name: "Online Co-op",
            rankings:{},
            id: "3843"
          },
          1685: {
            gameCount: 0,
            playtime: 79841,
            name: "Co-op",
            rankings:{},
            id: "1685"
          },
        }}
      />
    );
    expect(screen.getAllByText(/Co-op/i)).toBeFalsy()
  });
});
