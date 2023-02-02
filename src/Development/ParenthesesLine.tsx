import * as React from "react";
import { SVGProps } from "react";
const SvgParenthesesLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6.923 21C5.113 18.664 4 15.493 4 12c0-3.493 1.113-6.664 2.923-9h2.014C7.235 5.388 6.2 8.542 6.2 12s1.035 6.612 2.737 9H6.923zm10.151 0H15.06c1.702-2.388 2.737-5.542 2.737-9s-1.035-6.612-2.737-9h2.014c1.81 2.336 2.923 5.507 2.923 9 0 3.493-1.112 6.664-2.923 9z" />
  </svg>
);
export default SvgParenthesesLine;
