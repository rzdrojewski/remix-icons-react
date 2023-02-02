import * as React from "react";
import { SVGProps } from "react";
const SvgHospitalFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 20h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v17zM11 8H9v2h2v2h2v-2h2V8h-2V6h-2v2zm3 12h2v-6H8v6h2v-4h4v4z" />
  </svg>
);
export default SvgHospitalFill;
