import * as React from "react";
import { SVGProps } from "react";
const SvgGalleryUploadLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8 1v4H4v14h16V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2zm4 7 4 4h-3v4h-2v-4H8l4-4zm6-7v4h-8V3h6V1h2z" />
  </svg>
);
export default SvgGalleryUploadLine;
