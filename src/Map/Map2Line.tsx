import * as React from "react";
import { SVGProps } from "react";
const SvgMap2Line = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m2 5 7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V5zm14 14.395 4-1.714V5.033l-4 1.714v12.648zm-2-.131V6.736l-4-2v12.528l4 2zm-6-2.011V4.605L4 6.319v12.648l4-1.714z" />
  </svg>
);
export default SvgMap2Line;
