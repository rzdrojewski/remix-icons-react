import * as React from "react";
import { SVGProps } from "react";
const SvgDownloadFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 19h18v2H3v-2zM13 9h7l-8 8-8-8h7V1h2v8z" />
  </svg>
);
export default SvgDownloadFill;
