import * as React from "react";
import { SVGProps } from "react";
const SvgMicrosoftLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M11 5H5v6h6V5zm2 0v6h6V5h-6zm6 8h-6v6h6v-6zm-8 6v-6H5v6h6zM3 3h18v18H3V3z" />
  </svg>
);
export default SvgMicrosoftLine;
