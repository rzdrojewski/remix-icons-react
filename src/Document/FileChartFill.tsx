import * as React from "react";
import { SVGProps } from "react";
const SvgFileChartFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m16 2 5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-5 5v10h2V7h-2zm4 4v6h2v-6h-2zm-8 2v4h2v-4H7z" />
  </svg>
);
export default SvgFileChartFill;