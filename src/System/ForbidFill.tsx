import * as React from "react";
import { SVGProps } from "react";
const SvgForbidFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM8.523 7.109A6.04 6.04 0 0 0 7.11 8.523l8.368 8.368a6.04 6.04 0 0 0 1.414-1.414L8.523 7.109z" />
  </svg>
);
export default SvgForbidFill;
