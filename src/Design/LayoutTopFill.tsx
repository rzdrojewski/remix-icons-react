import * as React from "react";
import { SVGProps } from "react";
const SvgLayoutTopFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 10v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10h20zm-1-7a1 1 0 0 1 1 1v4H2V4a1 1 0 0 1 1-1h18z" />
  </svg>
);
export default SvgLayoutTopFill;
