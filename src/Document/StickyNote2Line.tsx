import * as React from "react";
import { SVGProps } from "react";
const SvgStickyNote2Line = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3.998 21A.996.996 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.447.993.999V16l-5.003 5H3.998zM5 19h10.169L19 15.171V5H5v14z" />
  </svg>
);
export default SvgStickyNote2Line;
