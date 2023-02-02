import * as React from "react";
import { SVGProps } from "react";
const SvgSubtractFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5 11h14v2H5z" />
  </svg>
);
export default SvgSubtractFill;
