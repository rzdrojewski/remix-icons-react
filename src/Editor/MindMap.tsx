import * as React from "react";
import { SVGProps } from "react";
const SvgMindMap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 3a3 3 0 1 1 0 6h-3a3 3 0 0 1-2.829-2H11c-1.1 0-2 .9-2 2v.171a3 3 0 0 1 0 5.658V15c0 1.1.9 2 2 2h1.17A3.003 3.003 0 0 1 15 15h3a3 3 0 1 1 0 6h-3a3 3 0 0 1-2.829-2H11c-2.21 0-4-1.79-4-4H5a3 3 0 1 1 0-6h2c0-2.21 1.79-4 4-4h1.17A3.003 3.003 0 0 1 15 3h3zm0 14h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2zM8 11H5a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2zm10-6h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2z" />
  </svg>
);
export default SvgMindMap;
