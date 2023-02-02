import * as React from "react";
import { SVGProps } from "react";
const SvgInkBottleLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m16 9 4.371 1.749a1 1 0 0 1 .629.928V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.323c0-.409.249-.777.629-.928L8 9h8zm-.385 2h-7.23L5 12.354V20h14v-1H8v-5h11v-1.646L15.615 11zM16 3a1 1 0 0 1 1 1v4H7V4a1 1 0 0 1 1-1h8zm-1 2H9v1h6V5z" />
  </svg>
);
export default SvgInkBottleLine;
