import * as React from "react";
import { SVGProps } from "react";
const SvgHailFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18.995 17.794a4 4 0 0 0-5.085-3.644A4.001 4.001 0 0 0 6 15c0 1.08.428 2.059 1.122 2.778a8 8 0 1 1 9.335-10.68 5.5 5.5 0 0 1 2.537 10.696zM10 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-5 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
  </svg>
);
export default SvgHailFill;