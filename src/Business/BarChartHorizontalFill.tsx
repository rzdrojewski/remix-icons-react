import * as React from "react";
import { SVGProps } from "react";
const SvgBarChartHorizontalFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 3v4H3V3h9zm4 14v4H3v-4h13zm6-7v4H3v-4h19z" />
  </svg>
);
export default SvgBarChartHorizontalFill;
