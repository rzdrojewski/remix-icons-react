import * as React from "react";
import { SVGProps } from "react";
const SvgFolderAddFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM11 12H8v2h3v3h2v-3h3v-2h-3V9h-2v3z" />
  </svg>
);
export default SvgFolderAddFill;
