import * as React from "react";
import { SVGProps } from "react";
const SvgArrowGoForwardFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16 7h-5a6 6 0 1 0 0 12h9v2h-9a8 8 0 1 1 0-16h5V1l6 5-6 5V7z" />
  </svg>
);
export default SvgArrowGoForwardFill;
