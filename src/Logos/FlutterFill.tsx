import * as React from "react";
import { SVGProps } from "react";
const SvgFlutterFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m13.503 2.001-10 10 3.083 3.083 13.08-13.083h-6.163zm-.006 9.198L8.122 16.62 13.494 22h6.189l-5.387-5.4 5.389-5.4h-6.188z" />
  </svg>
);
export default SvgFlutterFill;
