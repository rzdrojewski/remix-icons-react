import * as React from "react";
import { SVGProps } from "react";
const SvgChatSmileFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM7 10a5 5 0 0 0 10 0h-2a3 3 0 0 1-6 0H7z" />
  </svg>
);
export default SvgChatSmileFill;
