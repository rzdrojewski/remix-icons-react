import * as React from "react";
import { SVGProps } from "react";
const SvgFolderChartFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM11 9v8h2V9h-2zm4 3v5h2v-5h-2zm-8 2v3h2v-3H7z" />
  </svg>
);
export default SvgFolderChartFill;
