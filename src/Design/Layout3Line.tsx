import * as React from "react";
import { SVGProps } from "react";
const SvgLayout3Line = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4zm4-11H5v9h3v-9zm11 0h-9v9h9v-9zm0-5H5v3h14V5z" />
  </svg>
);
export default SvgLayout3Line;
