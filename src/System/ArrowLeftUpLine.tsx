import * as React from "react";
import { SVGProps } from "react";
const SvgArrowLeftUpLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m9.414 8 8.607 8.607-1.414 1.414L8 9.414V17H6V6h11v2z" />
  </svg>
);
export default SvgArrowLeftUpLine;
