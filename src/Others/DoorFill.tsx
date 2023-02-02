import * as React from "react";
import { SVGProps } from "react";
const SvgDoorFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zm-4 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
  </svg>
);
export default SvgDoorFill;
