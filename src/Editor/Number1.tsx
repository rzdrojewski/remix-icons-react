import * as React from "react";
import { SVGProps } from "react";
const SvgNumber1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M14 1.5V22h-2V3.704L7.5 4.91V2.839l5-1.339z" />
  </svg>
);
export default SvgNumber1;
