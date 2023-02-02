import * as React from "react";
import { SVGProps } from "react";
const SvgFilter2Fill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10 14 4 5V3h16v2l-6 9v6l-4 2z" />
  </svg>
);
export default SvgFilter2Fill;