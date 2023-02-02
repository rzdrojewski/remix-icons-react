import * as React from "react";
import { SVGProps } from "react";
const SvgRidingFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5.5 21a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm13 3a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-6.969-8.203L13 12v6h-2v-5l-2.719-2.266A2 2 0 0 1 8 7.671l2.828-2.828a2 2 0 0 1 2.829 0l1.414 1.414a6.969 6.969 0 0 0 3.917 1.975l-.01 2.015a8.962 8.962 0 0 1-5.321-2.575L11.53 9.797zM16 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
  </svg>
);
export default SvgRidingFill;
