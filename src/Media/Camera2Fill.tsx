import * as React from "react";
import { SVGProps } from "react";
const SvgCamera2Fill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 2a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm6-12v2h2V5h-2z" />
  </svg>
);
export default SvgCamera2Fill;
