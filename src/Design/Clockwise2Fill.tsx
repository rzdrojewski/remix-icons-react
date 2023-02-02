import * as React from "react";
import { SVGProps } from "react";
const SvgClockwise2Fill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10 4V1l5 4-5 4V6H8a3 3 0 0 0-3 3v4H3V9a5 5 0 0 1 5-5h2zm-1 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V11z" />
  </svg>
);
export default SvgClockwise2Fill;
