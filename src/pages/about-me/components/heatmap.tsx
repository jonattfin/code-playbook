import { HeatMap } from "@nivo/heatmap";

import { generateXYSeries } from "@nivo/generators";
import { NoSsr } from "@mui/material";

const sampleData = generateXYSeries({

  serieIds: [
    "Japan",
    "France",
    "US",
    "Germany",
    "Norway",
    "Iceland",
    "UK",
    "Vietnam",
  ],
  x: {
    values: [
      "Train",
      "Subway",
      "Bus",
      "Car",
      "Boat",
      "Moto",
      "Moped",
      "Bicycle",
      "Others",
    ],
  },
  y: {
    length: NaN,
    min: -100_000,
    max: 100_000,
    round: true,
  },
});

const commonProperties = {
  width: 900,
  height: 500,
  margin: { top: 60, right: 80, bottom: 60, left: 80 },
  data: sampleData,
};

export function CustomHeatmap() {
  return (
    <NoSsr>
      <HeatMap<any, Record<string, unknown>>
        {...commonProperties}
        valueFormat=">-.2s"
        cellComponent="circle"
        sizeVariation={{
          sizes: [0.6, 1],
        }}
        forceSquare
        enableGridX={true}
        enableGridY={true}
      />
    </NoSsr>
  );
}
