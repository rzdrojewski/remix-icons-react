import * as React from "react";
import { SVGProps } from "react";
const SvgCloudFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 7a8.003 8.003 0 0 0-7.493 5.19l1.874.703A6.002 6.002 0 0 1 23 15a6 6 0 0 1-6 6H7A6 6 0 0 1 5.008 9.339a7 7 0 0 1 13.757-2.143A8.027 8.027 0 0 0 17 7z" />
  </svg>
);
export default SvgCloudFill;
