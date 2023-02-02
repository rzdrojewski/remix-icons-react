import * as React from "react";
import { SVGProps } from "react";
const SvgArrowUpFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 12v8h-2v-8H4l8-8 8 8z" />
  </svg>
);
export default SvgArrowUpFill;
