import * as React from "react";
import { SVGProps } from "react";
const SvgDoorLockBoxLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 7.792a2.5 2.5 0 1 1 2 0V16h-2v-3.208z" />
  </svg>
);
export default SvgDoorLockBoxLine;