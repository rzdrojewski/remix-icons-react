import * as React from "react";
import { SVGProps } from "react";
const SvgCss3Line = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2.8 14h2.04l-.545 2.725 5.744 2.154 7.227-2.41L18.36 11H3.4l.4-2h14.96l.8-4H4.6L5 3h17l-3 15-9 3-8-3z" />
  </svg>
);
export default SvgCss3Line;
