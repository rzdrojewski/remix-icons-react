import * as React from "react";
import { SVGProps } from "react";
const SvgRecordCircleFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  </svg>
);
export default SvgRecordCircleFill;
