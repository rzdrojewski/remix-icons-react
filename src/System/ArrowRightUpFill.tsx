import * as React from "react";
import { SVGProps } from "react";
const SvgArrowRightUpFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m13.05 12.36-5.656 5.658-1.414-1.415 5.657-5.656-4.95-4.95H18V17.31z" />
  </svg>
);
export default SvgArrowRightUpFill;
