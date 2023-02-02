import * as React from "react";
import { SVGProps } from "react";
const SvgInvisionLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm1.988 9.065.77-3.271H6.564l.362-1.39h2.868l-1.132 4.67a3.071 3.071 0 0 0-.106.72c0 .298.141.386.362.437.135.032 1.208.01 1.791-1.34l.744-3.097h-1.208l.363-1.39h2.58l-.331 1.578c.452-.88 1.358-1.715 2.248-1.715.95 0 1.736.704 1.736 2.055 0 .345-.046.721-.166 1.145l-.483 1.805a2.159 2.159 0 0 0-.076.487c0 .314.121.47.347.47.227 0 .514-.172.846-1.13l.664.267c-.393 1.429-1.102 2.025-1.993 2.025-1.041 0-1.539-.643-1.539-1.523 0-.25.03-.518.106-.785l.498-1.853a1.96 1.96 0 0 0 .075-.565c0-.596-.347-.958-.905-.958-.71 0-1.178.53-1.419 1.55l-.966 4.032h-1.69l.303-1.267c-.497.85-1.187 1.375-2.038 1.375-1.026 0-1.509-.615-1.509-1.542 0-.235.03-.523.09-.79zm1.637-5.44a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25z" />
  </svg>
);
export default SvgInvisionLine;
