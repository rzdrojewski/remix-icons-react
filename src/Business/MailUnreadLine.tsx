import * as React from "react";
import { SVGProps } from "react";
const SvgMailUnreadLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16.1 3a5.023 5.023 0 0 0 0 2H4.511l7.55 6.662 5.049-4.52c.426.527.958.966 1.563 1.285l-6.601 5.911L4 7.216V19h16V8.9a5.023 5.023 0 0 0 2 0V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h13.1zM21 7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
  </svg>
);
export default SvgMailUnreadLine;
