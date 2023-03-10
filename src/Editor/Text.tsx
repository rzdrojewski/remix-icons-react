import * as React from "react";
import { SVGProps } from "react";
const SvgText = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 6v15h-2V6H5V4h14v2z" />
  </svg>
);
export default SvgText;
