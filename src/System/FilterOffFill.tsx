import * as React from "react";
import { SVGProps } from "react";
const SvgFilterOffFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6.929.515 21.07 14.657l-1.414 1.414-3.823-3.822L14 15v7h-4v-7L4 6H3V4h4.585l-2.07-2.071L6.929.515zM21 4v2h-1l-1.915 2.872L13.213 4H21z" />
  </svg>
);
export default SvgFilterOffFill;
