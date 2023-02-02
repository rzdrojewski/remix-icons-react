import * as React from "react";
import { SVGProps } from "react";
const SvgArrowLeftSLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m10.828 12 4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
  </svg>
);
export default SvgArrowLeftSLine;
