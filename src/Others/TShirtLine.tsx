import * as React from "react";
import { SVGProps } from "react";
const SvgTShirtLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m14.515 5 2.606-2.607a1 1 0 0 1 1.415 0l4.242 4.243a1 1 0 0 1 0 1.414L19 11.828V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9.172L1.222 8.05a1 1 0 0 1 0-1.414l4.242-4.243a1 1 0 0 1 1.415 0L9.485 5h5.03zm.828 2H8.657L6.172 4.515 3.343 7.343 7 11v9h10v-9l3.657-3.657-2.829-2.828L15.343 7z" />
  </svg>
);
export default SvgTShirtLine;
