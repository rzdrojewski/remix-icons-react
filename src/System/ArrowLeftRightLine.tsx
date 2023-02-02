import * as React from "react";
import { SVGProps } from "react";
const SvgArrowLeftRightLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16.05 12.05 21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10 1.414 1.414L6.828 6H20v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z" />
  </svg>
);
export default SvgArrowLeftRightLine;
