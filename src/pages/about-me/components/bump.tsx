import { NoSsr } from "@mui/material";
import { ResponsiveBump, BumpSvgProps, Bump } from "@nivo/bump";

interface ICustomBumpProps {
  data: any[];
}

export function CustomBump({ data }: ICustomBumpProps) {
  return (
    <NoSsr>
      <ResponsiveBump
        {...{ data }}
        {...{ margin: { top: 40, right: 100, bottom: 40, left: 100 } }}
      />
    </NoSsr>
  );
}
