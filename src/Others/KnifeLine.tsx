import * as React from "react";
import { SVGProps } from "react";
const SvgKnifeLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4.342 1.408 22.373 19.44a1.5 1.5 0 0 1-2.121 2.122l-4.596-4.597L12.12 20.5l-7.778-7.778a8 8 0 0 1-.174-11.135l.174-.179zm.241 3.07-.051.11a6.005 6.005 0 0 0 1.047 6.535l.177.185 6.363 6.363 2.829-2.828L4.583 4.478z" />
  </svg>
);
export default SvgKnifeLine;
