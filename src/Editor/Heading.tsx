import * as React from "react";
import { SVGProps } from "react";
const SvgHeading = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7z" />
  </svg>
);
export default SvgHeading;
