import * as React from "react";
import { SVGProps } from "react";
const SvgTempColdFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8 10.255V5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0zM8 16a4 4 0 1 0 8 0H8z" />
  </svg>
);
export default SvgTempColdFill;
