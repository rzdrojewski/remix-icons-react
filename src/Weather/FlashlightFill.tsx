import * as React from "react";
import { SVGProps } from "react";
const SvgFlashlightFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 10h7l-9 13v-9H4l9-13z" />
  </svg>
);
export default SvgFlashlightFill;
