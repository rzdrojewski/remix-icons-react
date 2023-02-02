import * as React from "react";
import { SVGProps } from "react";
const SvgPauseFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6 5h2v14H6V5zm10 0h2v14h-2V5z" />
  </svg>
);
export default SvgPauseFill;