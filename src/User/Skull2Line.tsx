import * as React from "react";
import { SVGProps } from "react";
const SvgSkull2Line = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2c5.523 0 10 4.477 10 10v3.764a2 2 0 0 1-1.106 1.789L18 19v1a3 3 0 0 1-2.824 2.995L14.95 23a2.5 2.5 0 0 0 .044-.33L15 22.5V22a2 2 0 0 0-1.85-1.995L13 20h-2a2 2 0 0 0-1.995 1.85L9 22v.5c0 .171.017.339.05.5H9a3 3 0 0 1-3-3v-1l-2.894-1.447A2 2 0 0 1 2 15.763V12C2 6.477 6.477 2 12 2zm0 2a8 8 0 0 0-7.996 7.75L4 12v3.764l4 2v1.591l.075-.084a3.992 3.992 0 0 1 2.723-1.266L11 18l2.073.001.223.01a3.99 3.99 0 0 1 2.55 1.177l.154.167v-1.591l4-2V12a8 8 0 0 0-8-8zm-4 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
  </svg>
);
export default SvgSkull2Line;
