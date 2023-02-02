import * as React from "react";
import { SVGProps } from "react";
const SvgArrowLeftFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 13v7l-8-8 8-8v7h8v2z" />
  </svg>
);
export default SvgArrowLeftFill;
