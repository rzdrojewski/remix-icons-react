import * as React from "react";
import { SVGProps } from "react";
const SvgVideoDownloadLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14zm-1 2H3v12h12V6zm-5 2v4h3l-4 4-4-4h3V8h2zm11 .841-4 2.8v.718l4 2.8V8.84z" />
  </svg>
);
export default SvgVideoDownloadLine;
