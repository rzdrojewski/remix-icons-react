import * as React from "react";
import { SVGProps } from "react";
const SvgSuitcaseFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15 3a1 1 0 0 1 1 1v2h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5V4a1 1 0 0 1 1-1h6zM8 8H6v11h2V8zm10 0h-2v11h2V8zm-4-3h-4v1h4V5z" />
  </svg>
);
export default SvgSuitcaseFill;
