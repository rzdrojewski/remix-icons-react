import * as React from "react";
import { SVGProps } from "react";
const SvgSlideshow2Line = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 17v3h5v2H6v-2h5v-3H4a1 1 0 0 1-1-1V4H2V2h20v2h-1v12a1 1 0 0 1-1 1h-7zm-8-2h14V4H5v11zm5-9 5 3.5-5 3.5V6z" />
  </svg>
);
export default SvgSlideshow2Line;
