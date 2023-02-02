import * as React from "react";
import { SVGProps } from "react";
const SvgH3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m22 8-.002 2-2.505 2.883a3.75 3.75 0 1 1-4.675 4.334l1.964-.382a1.75 1.75 0 1 0 .924-1.895l-1.307-1.547L19.35 10H15V8h7zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z" />
  </svg>
);
export default SvgH3;
