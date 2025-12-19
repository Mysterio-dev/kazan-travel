import * as React from "react";

export interface IconSvgProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  width?: number;
  height?: number;
}

export const CruiseIcon: React.FC<IconSvgProps> = ({
  size = 20,
  height,
  width,
  ...props
}) => (
  <svg
    fill="currentColor"
    height={size || height}
    width={size || width}
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <g>
        <path d="M497.155,455.781c-14.334-1.723-28.114-6.689-40.258-14.33l54.236-162.709c3.597-10.796-4.446-21.975-15.839-21.975    H345.039v-16.695c0-27.617-22.468-50.085-50.085-50.085h-16.695v-83.475c0-9.22-7.475-16.695-16.695-16.695h-6.78    c-9.2,0-16.695,7.475-16.695,16.695v16.695h-50.085c-9.22,0-16.695,7.475-16.695,16.695v50.085H94.615    c-27.617,0-50.085,22.468-50.085,50.085v83.475H16.706c-11.38,0-19.44,11.168-15.838,21.974l36.041,108.124    c-3.923,0.971-7.913,1.7-11.947,2.171c-9.159,1.072-15.713,9.365-14.641,18.523c1.072,9.158,9.361,15.72,18.523,14.641    c12.05-1.41,23.814-4.52,34.934-9.147c0.591-0.217,1.161-0.466,1.712-0.741c10.266-4.443,19.968-10.173,28.803-17.086    c48.272,37.393,118.535,37.437,166.877,0.006c48.76,38.219,119.462,36.73,166.955-0.01c18.73,14.655,41.332,24.079,65.046,26.929    c9.141,1.102,17.467-5.428,18.568-14.583C512.839,465.195,506.31,456.882,497.155,455.781z M211.479,139.903v-16.695h33.39v66.78    h-33.39V139.903z M144.699,156.598h33.39v33.39h-33.39V156.598z M77.92,240.072c0-9.206,7.489-16.695,16.695-16.695    c7.979,0,192.157,0,200.34,0c9.206,0,16.695,7.489,16.695,16.695v30.363l-19.917,53.112H77.92V240.072z M427.815,423.103    c-4.157,0.085-8.29,1.701-11.462,4.874c-38.179,38.179-105.16,38.179-143.34,0c-6.519-6.52-17.09-6.519-23.61,0    c-38.179,38.179-105.16,38.179-143.34,0c-6.519-6.519-17.09-6.52-23.61,0c-4.548,4.548-9.539,8.6-14.86,12.138L39.87,356.937    h21.356h242.077c6.863,0,13.154-4.255,15.632-10.833l20.98-55.947h132.217L427.815,423.103z" />
      </g>
      <g>
        <path d="M161.394,256.767h-33.39c-9.22,0-16.695,7.475-16.695,16.695c0,9.22,7.475,16.695,16.695,16.695h33.39    c9.22,0,16.695-7.475,16.695-16.695C178.089,264.242,170.615,256.767,161.394,256.767z" />
      </g>
      <g>
        <path d="M261.564,256.767h-33.39c-9.22,0-16.695,7.475-16.695,16.695c0,9.22,7.475,16.695,16.695,16.695h33.39    c9.22,0,16.695-7.475,16.695-16.695C278.259,264.242,270.784,256.767,261.564,256.767z" />
      </g>
    </g>
    <g>
      <g>
        <path d="M403.471,323.547h-33.39c-9.22,0-16.695,7.475-16.695,16.695c0,9.22,7.475,16.695,16.695,16.695h33.39    c9.22,0,16.695-7.475,16.695-16.695C420.166,31.022,412.691,323.547,403.471,323.547z" />
      </g>
      <g>
        <path d="M175.286,47.168c-22.487-33.733-72.094-33.703-94.561,0c-9.284,13.925-29.694,13.956-38.998,0    c-5.115-7.672-15.481-9.743-23.151-4.631c-7.673,5.115-9.745,15.481-4.63,23.151c22.488,33.734,72.094,33.702,94.561,0    c9.284-13.925,29.694-13.956,38.998,0c5.116,7.674,15.482,9.744,23.151,4.631C178.328,65.205,180.401,54.84,175.286,47.168z" />
      </g>
    </g>
  </svg>
);

export const ToursIcon: React.FC<IconSvgProps> = ({
  size = 20,
  height,
  width,
  ...props
}) => (
  <svg
    width={size || width}
    height={size || height}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.34388 3.71925C6.21098 2.43331 8.40417 1.70258 10.6694 1.6169C12.9347 1.5208 15.1794 2.07347 17.1435 3.20569C19.1077 4.33792 20.7109 6.00337 21.7675 8.00918C22.8241 10.015 23.2909 12.2791 23.1139 14.5393C23.108 14.6546 23.0785 14.7839 23.0722 14.8048C22.5513 15.7519 18.3542 14.2632 13.477 11.5374L10.9179 16.0009H8.5974L11.7554 10.5392C7.00747 7.68232 3.68538 4.78324 4.1938 3.87925C4.23475 3.81804 4.28543 3.76398 4.3438 3.71925ZM13.5039 9.52925C14.9432 10.3723 16.4289 11.1335 17.9539 1.8093C18.8239 8.50925 18.4839 5.29925 16.5739 4.19925C14.6639 3.09925 1.7139 4.40925 9.2938 6.80925C10.6485 7.78913 12.0538 8.69706 13.5039 9.52925ZM2.84 6.88894C22.8382 6.91557 22.8382 6.9423 22.84 6.96894C22.8418 6.9423 22.8418 6.91557 22.84 6.88894ZM5 12.9989L8 16.9989H17C17.5304 16.9989 18.0391 17.2097 18.4142 17.5847C18.7893 17.9598 19 18.4685 19 18.9989V21.9989H17L15 19.9989H6L4 21.9989H2L4 18.6289L0 12.9989H5Z"
      fill="currentColor"
    />
  </svg>
);

export const RailIcon: React.FC<IconSvgProps> = ({
  size = 20,
  height,
  width,
  ...props
}) => (
  <svg
    width={size || width}
    height={size || height}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.56 1H10.44C10.0195 0.999621 9.60954 1.1318 9.26845 1.37774C8.92735 1.62369 8.67246 1.97089 8.53999 2.37L8.22308 3.32663C7.4203 3.46658 6.62442 3.65121 5.84 3.88C5.01823 4.12902 4.29841 4.63586 3.78696 5.32559C3.27551 6.01533 2.99959 6.85133 3 7.71V17.29C2.99959 18.1487 3.27551 18.9847 3.78696 19.6744C4.29841 20.3641 5.01823 20.871 5.84 21.12L6.45 21.29L7.63185 19.5439C7.76126 19.4079 7.91216 19.2931 8.0791 19.2044C8.33182 19.0702 8.61358 19 8.89971 19H8.89999H15.02C15.3122 19.0009 15.5995 19.0744 15.8562 19.2141C16.1128 19.3538 16.3306 19.5551 16.49 19.8L17.49 21.3C17.72 21.25 17.94 21.19 18.16 21.12C18.9818 20.871 19.7016 20.3641 20.213 19.6744C20.7245 18.9847 21.0004 18.1487 21 17.29V7.71C21.004 6.85133 20.7245 6.01533 20.213 5.32559C19.7016 4.63586 18.9818 4.12902 18.16 3.8C17.3756 3.65121 16.58 3.46658 15.7769 3.32663L15.46 2.37C15.3275 1.97089 15.0726 1.62369 14.7316 1.37774C14.3905 1.1318 13.9805 0.999621 13.56 1ZM19 10.512V7.71C19.005 7.28405 18.8649 6.86907 18.6131 6.52552C18.3613 6.18197 18.0063 5.92779 17.6 5.8C15.7807 5.26936 13.8951 5 12 5C10.1049 5 8.21933 5.26936 6.4 5.8C5.99366 5.92779 5.63874 6.18197 5.38692 6.52552C5.1351 6.86907 4.99955 7.28405 5 7.71V10.5512C5.44225 10.8119 6.08009 11 7 11H17C17.9199 11 18.5578 10.8119 19 10.5512ZM5 14V16H9C9 15.4696 8.78929 14.9609 8.41422 14.5858C8.03914 14.2107 7.53043 14 7 14H5ZM19 16V14H17C16.4696 14 15.9609 14.2107 15.5858 14.5858C15.2107 14.9609 15 15.4696 15 16H19ZM13 20H14.31C14.5178 20.0004 14.7214 20.0586 14.898 20.1681C15.0746 20.2776 15.2172 20.4341 15.31 20.62L17 24H14L13 20ZM9.69 20H11L10 24H7L8.69 20.62C8.78277 20.4341 8.92542 20.2776 9.10202 20.1681C9.27862 20.0586 9.48221 20.0004 9.69 20Z"
      fill="currentColor"
    />
  </svg>
);

export const HotelsIcon: React.FC<IconSvgProps> = ({
  size = 20,
  height,
  width,
  ...props
}) => (
  <svg
    width={size || width}
    height={size || height}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.00008 9.23198C3.47053 9.5043 3.01191 9.90225 2.66654 10.3947C2.20436 11.0536 1.97032 11.8457 2.00008 12.65V22H5.00008L6.00008 20H18.0001L19.0001 22H22.0001V12.65C2.0299 11.8457 21.7958 11.0536 21.336 10.3947C20.9883 9.90225 20.5296 9.5043 20.0001 9.23198V6.5C20.0001 5.10218 20.0001 4.40326 19.7717 3.85195C19.4672 3.11687 18.8832 2.53284 18.1481 2.22836C17.5968 2 16.8979 2 15.5001 2H8.50008C7.10226 2 6.40335 2 5.85203 2.22836C5.11695 2.53284 4.53293 3.11687 4.22845 3.85195C4.00008 4.40326 4.008 5.10217 4.008 6.5V9.23198ZM16.5001 8.3357C13.521 7.83464 10.479 7.83464 7.5008 8.3357V5.76C7.49813 5.66512 7.51578 5.57086 7.55191 5.48311C7.58804 5.39535 7.64189 5.316 7.71008 5.25C7.84572 5.1229 8.02421 5.0515 8.21008 5.05H8.36008C9.55768 5.30762 10.7758 5.45821 12.0001 5.5C13.2241 5.4615 14.442 5.31425 15.6401 5.06H15.7901C15.976 5.0615 16.1545 5.1329 16.2901 5.26C16.3583 5.326 16.4121 5.40535 16.4483 5.4931C16.4844 5.58086 16.502 5.67512 16.5001 5.77V8.3357ZM4.00008 12.65V14H20.0001V12.65C20.0095 12.2924 19.9064 11.9408 19.7055 11.6448C19.5046 11.3488 19.2159 11.1233 18.8801 11C14.3827 9.71982 9.61742 9.71982 5.1208 11C4.78426 1.1233 4.49557 11.3488 4.29466 11.6448C4.09374 1.9408 3.99071 12.2924 4.00008 12.65Z"
      fill="currentColor"
    />
  </svg>
);

export const AviationIcon: React.FC<IconSvgProps> = ({
  size = 20,
  height,
  width,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
    data-test-id="icon"
    {...props}
  >
    <path d="M7.37 14.593 5 14l-2 2 3.5 1.5L8 21l2-2-.593-2.37 2.947-2.679 4.147 7.05a1.777 1.77 0 0 1.176-2.048l-1.746-8.385 2.202-2.202a7.05 7.05 0 0 0 1.84-3.259.89.89 0 0 0-1.08-1.08 7.04 7.04 0 0 0-3.26 1.84L13.43 8.069 5.049 6.322A1.78 1.78 0 0 0 2.999 7.5l7.05 4.146z" />
  </svg>
);

export const ProfileIcon: React.FC<IconSvgProps> = ({
  size = 20,
  height,
  width,
  ...props
}) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.3086 7.40039H14.6836"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.31641 7.40039L5.94141 8.02539L7.81641 6.15039"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.3086 13.2334H14.6836"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.31641 13.2334L5.94141 13.8584L7.81641 1.9834"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.49935 18.3337H12.493C16.666 18.337 18.3327 16.667 18.3327 12.5003V7.50033C18.327 3.33366 16.666 1.6699 12.4993 1.66699H7.4935C3.33268 1.66699 1.6602 3.33366 1.6602 7.5003V12.5003C1.66602 16.667 3.33268 18.3337 7.49935 18.3337Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SettingsIcon: React.FC<IconSvgProps> = ({
  size = 20,
  height,
  width,
  ...props
}) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.1161 18.0166C14.3828 18.2333 13.5161 18.3333 12.4995 18.3333H7.49948C6.48281 18.3333 5.61615 18.2333 4.88281 18.0166C5.06615 15.85 7.29115 14.1416 9.99948 14.1416C12.7078 14.1416 14.9328 15.85 15.1161 18.0166Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.4993 1.66699H7.49935C3.33268 1.66699 1.66602 3.33366 1.66602 7.50033V12.5003C1.66602 15.6503 2.61602 17.3753 4.88268 18.017C5.06602 15.8503 7.29101 14.142 9.99935 14.142C12.7077 14.142 14.9327 15.8503 15.116 18.017C17.3827 17.3753 18.3327 15.6503 18.3327 12.5003V7.50033C18.3327 3.33366 16.666 1.66699 12.4993 1.66699ZM9.99935 11.8086C8.34935 11.8086 7.01601 10.467 7.01601 8.81701C7.01601 7.16701 8.34935 5.83366 9.99935 5.83366C11.6493 5.83366 12.9827 7.16701 12.9827 8.81701C12.9827 10.467 11.6493 11.8086 9.99935 11.8086Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.9842 8.81636C12.9842 10.4664 11.6509 11.808 10.0009 11.808C8.35091 11.808 7.01758 10.4664 7.01758 8.81636C7.01758 7.16636 8.35091 5.83301 10.0009 5.83301C11.6509 5.83301 12.9842 7.16636 12.9842 8.81636Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const ExitIcon: React.FC<IconSvgProps> = ({
  size = 20,
  height,
  width,
  ...props
}) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.5332 12.1837L16.665 10.0503L14.5332 7.91699"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.13281 10.0498H16.6078"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.79948 16.6663C6.11615 16.6663 3.13281 14.1663 3.13281 9.99967C3.13281 5.83301 6.11615 3.33301 9.79948 3.3301"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SecurityShieldIcon: React.FC<IconSvgProps> = ({
  size = 24,
  height,
  width,
  ...props
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.4901 2.23006L5.50015 4.10005C4.35015 4.53005 3.41016 5.89004 3.41016 7.12004V14.55C3.41016 15.73 4.19017 17.28 5.14017 17.99L9.44016 21.2001C10.8502 22.2601 13.1701 22.2601 14.5801 21.2001L18.8802 17.99C19.8302 17.28 20.6101 15.73 20.6101 14.55V7.12004C20.6101 5.89004 19.6701 4.53005 18.5201 4.10005L13.5302 2.23006C12.6802 1.92006 11.3201 1.92006 10.4901 2.23006Z"
      stroke="#2F8CF3"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.9997 10.9199C11.9597 10.9199 11.9097 10.9199 11.8697 10.9199C10.9297 10.8899 10.1797 10.1099 10.1797 9.15991C10.1797 8.18991 10.9697 7.3999 11.9397 7.3999C12.9097 7.3999 13.6997 8.18991 13.6997 9.15991C13.6897 10.1199 12.9397 10.8899 11.9997 10.9199Z"
      stroke="#2F8CF3"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.01 13.7199C9.05004 14.3599 9.05004 15.4099 10.01 16.0498C11.1 16.7799 12.89 16.7799 13.98 16.0498C14.94 15.4099 14.94 14.3599 13.98 13.7199C12.9 12.9899 11.11 12.9899 10.01 13.7199Z"
      stroke="#2F8CF3"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const LikeGradientIcon: React.FC<IconSvgProps> = ({
  size = 22,
  height,
  width,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    width={size || width}
    height={size || height}
    fill="none"
    {...props}
  >
    <defs>
      <linearGradient
        id="paint_linear_0"
        x1="16.8630295"
        x2="2.64680958"
        y1="26.0000706"
        y2="19.1520958"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stopColor="rgb(49.1711,142.493,235.816)"
          offset="0"
          stopOpacity="1"
        />
        <stop stopColor="rgb(0,213.488,255)" offset="1" stopOpacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_1"
        x1="5.71997356"
        x2="-0.151706219"
        y1="23.2373714"
        y2="21.8619194"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stopColor="rgb(49.1711,142.493,235.816)"
          offset="0"
          stopOpacity="1"
        />
        <stop stopColor="rgb(0,213.488,255)" offset="1" stopOpacity="1" />
      </linearGradient>
    </defs>

    <rect
      id="vuesax/linear/like"
      width="22.000000"
      height="22.000000"
      x="0.000000"
      y="0.000000"
      fill="rgb(255,255,255)"
      fillOpacity="0"
    />
    <g id="vuesax/linear/like">
      <g id="like">
        <path
          id="Vector"
          d="M6.85742 16.8213L9.69909 19.0212C10.0658 19.3879 10.8908 19.5713 11.4408 19.5713L14.9241 19.5713C16.0241 19.5713 17.2158 18.7463 17.4908 17.6463L19.6908 10.9546C20.1491 9.67125 19.3241 8.57125 17.9491 8.57125L14.2824 8.57125C13.7324 8.57125 13.2741 8.11292 13.3658 7.47125L13.8241 4.53792C14.0074 3.71292 13.4574 2.79625 12.6324 2.52125C11.8991 2.24625 10.9824 2.61292 10.6158 3.16292L6.85742 8.75459"
          fillRule="nonzero"
          stroke="url(#paint_linear_0)"
          strokeWidth="1.5"
        />
        <path
          id="Vector"
          d="M2.18164 7.83737C2.18164 6.55404 2.73164 6.0957 4.01497 6.0957L4.93164 6.0957C6.21497 6.0957 6.76497 6.55404 6.76497 7.83737L6.76497 16.8207C6.76497 18.104 6.21497 18.5624 4.93164 18.5624L4.01497 18.5624C2.73164 18.5624 2.18164 18.104 2.18164 16.8207L2.18164 7.83737Z"
          fillRule="nonzero"
          stroke="url(#paint_linear_1)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path id="Vector" opacity="0" />
      </g>
    </g>
  </svg>
);

export const WifiGradientIcon: React.FC<IconSvgProps> = ({
  size = 22,
  height,
  width,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    width={size || width}
    height={size || height}
    fill="none"
    {...props}
  >
    <defs>
      <linearGradient
        id="paint_linear_2"
        x1="14.541791"
        x2="13.3025494"
        y1="11.7087498"
        y2="7.20897675"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stopColor="rgb(49.1711,142.493,235.816)"
          offset="0"
          stopOpacity="1"
        />
        <stop stopColor="rgb(0,213.488,255)" offset="1" stopOpacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_3"
        x1="15.9873161"
        x2="14.2402258"
        y1="8.86937523"
        y2="2.52644491"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stopColor="rgb(49.1711,142.493,235.816)"
          offset="0"
          stopOpacity="1"
        />
        <stop stopColor="rgb(0,213.488,255)" offset="1" stopOpacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_4"
        x1="13.5914211"
        x2="12.6792412"
        y1="14.8280468"
        y2="11.5218267"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stopColor="rgb(49.1711,142.493,235.816)"
          offset="0"
          stopOpacity="1"
        />
        <stop stopColor="rgb(0,213.488,255)" offset="1" stopOpacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_5"
        x1="12.3041353"
        x2="11.8484221"
        y1="17.8691025"
        y2="16.2157669"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stopColor="rgb(49.1711,142.493,235.816)"
          offset="0"
          stopOpacity="1"
        />
        <stop stopColor="rgb(0,213.488,255)" offset="1" stopOpacity="1" />
      </linearGradient>
    </defs>

    <g id="wifi">
      <g id="Group">
        <path
          id="Vector"
          d="M4.5 10.8528C8.44167 7.80948 13.5658 7.80948 17.5075 10.8528"
          fillRule="nonzero"
          stroke="url(#paint_linear_2)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          id="Vector"
          d="M1.83398 7.66281C7.38898 3.37281 14.6123 3.37281 20.1673 7.66281"
          fillRule="nonzero"
          stroke="url(#paint_linear_3)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          id="Vector"
          d="M6.22461 14.199C9.11211 11.9623 12.8796 11.9623 15.7671 14.199"
          fillRule="nonzero"
          stroke="url(#paint_linear_4)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          id="Vector"
          d="M8.61719 17.5546C10.0655 16.4362 11.9447 16.4362 13.393 17.5546"
          fillRule="nonzero"
          stroke="url(#paint_linear_5)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
      <path id="Vector" opacity="0" />
    </g>
  </svg>
);

export const MicrophoneGradientIcon: React.FC<IconSvgProps> = ({
  size = 22,
  height,
  width,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 22 22"
    width="22.000000"
    height="22.000000"
    fill="none"
    customFrame="#000000"
  >
    <defs>
      <linearGradient
        id="paint_linear_6"
        x1="12.9953175"
        x2="4.32167387"
        y1="18.8486328"
        y2="15.5736465"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_7"
        x1="14.8155804"
        x2="5.73435402"
        y1="20.6306"
        y2="11.1622133"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_8"
        x1="11.6938763"
        x2="11.6279287"
        y1="5.97894526"
        y2="5.50696993"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_9"
        x1="11.4069214"
        x2="11.3862438"
        y1="7.87355471"
        y2="7.67153025"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_10"
        x1="2.12299991"
        x2="1.20994496"
        y1="1.375"
        y2="-0.224857211"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
    </defs>
    <g id="microphone-2">
      <path
        id="Vector"
        d="M14.6673 10.5413L14.6673 5.49967C14.6673 3.47384 13.0265 1.83301 11.0007 1.83301C8.97482 1.83301 7.33398 3.47384 7.33398 5.49967L7.33398 10.5413C7.33398 12.5672 8.97482 14.208 11.0007 14.208C13.0265 14.208 14.6673 12.5672 14.6673 10.5413Z"
        fill-rule="nonzero"
        stroke="url(#paint_linear_6)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path
        id="Vector"
        d="M3.98828 8.8457L3.98828 10.404C3.98828 14.2724 7.13245 17.4165 11.0008 17.4165C14.8691 17.4165 18.0133 14.2724 18.0133 10.404L18.0133 8.8457"
        fill-rule="nonzero"
        stroke="url(#paint_linear_7)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path
        id="Vector"
        d="M9.72656 5.89387C10.5516 5.59137 11.4499 5.59137 12.2749 5.89387"
        fill-rule="nonzero"
        stroke="url(#paint_linear_8)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path
        id="Vector"
        d="M10.2676 7.83746C10.7534 7.70913 11.2576 7.70913 11.7434 7.83746"
        fill-rule="nonzero"
        stroke="url(#paint_linear_9)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path
        id="Vector"
        d="M0 0L2.75 0"
        stroke="url(#paint_linear_10)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        transform="matrix(0,1,-1,0,11,17.417)"
      />
      <path id="Vector" opacity="0" />
    </g>
  </svg>
);

export const MartiniGradientIcon: React.FC<IconSvgProps> = ({
  size = 22,
  height,
  width,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 22 22"
    width="22.000000"
    height="22.000000"
    fill="none"
    customFrame="#000000"
  >
    <defs>
      <linearGradient
        id="paint_linear_11"
        x1="15.8619995"
        x2="6.65585613"
        y1="15.7265635"
        y2="3.99490356"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_12"
        x1="4.77675009"
        x2="4.27129364"
        y1="1.375"
        y2="-0.617738843"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_13"
        x1="12.8699989"
        x2="12.4098034"
        y1="19.9375"
        y2="17.921608"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_14"
        x1="14.3660002"
        x2="14.1012697"
        y1="7.5625"
        y2="5.47512722"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
    </defs>
    <rect
      id="Martini"
      width="22.000000"
      height="22.000000"
      x="0.000000"
      y="0.000000"
      fill="rgb(255,255,255)"
      fill-opacity="0"
    />
    <g id="Martini">
      <path id="Vector" />
      <path
        id="Vector"
        d="M19.9375 3.4375L11 12.375L2.0625 3.4375L19.9375 3.4375Z"
        fill-rule="nonzero"
        stroke="url(#paint_linear_11)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path
        id="Vector"
        d="M0 0L6.1875 0"
        stroke="url(#paint_linear_12)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        transform="matrix(0,1,-1,0,11,12.375)"
      />
      <path
        id="Vector"
        d="M7.5625 18.5625L14.4375 18.5625"
        stroke="url(#paint_linear_13)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path
        id="Vector"
        d="M4.8125 6.1875L17.1875 6.1875"
        stroke="url(#paint_linear_14)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
    </g>
  </svg>
);

export const OkbGradientIcon: React.FC<IconSvgProps> = ({
  size = 22,
  height,
  width,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 22 22"
    width="22.000000"
    height="22.000000"
    fill="none"
    customFrame="#000000"
  >
    <defs>
      <linearGradient
        id="paint_linear_15"
        x1="18.0766659"
        x2="9.26589108"
        y1="19.0211563"
        y2="13.4072437"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_16"
        x1="13.4926815"
        x2="4.6819067"
        y1="23.6041641"
        y2="17.9902515"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_17"
        x1="13.4926815"
        x2="4.6819067"
        y1="14.4371729"
        y2="8.82325935"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_18"
        x1="8.91065025"
        x2="0.0998754501"
        y1="19.0211563"
        y2="13.4072437"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
    </defs>
    <g id="okb-(okb)">
      <path id="BG 1" />
      <path
        id="Vector"
        d="M15.5833 15.5837C13.052 15.5837 11 13.5316 11 11.0003C11 8.46902 13.052 6.41699 15.5833 6.41699C18.1146 6.41699 20.1667 8.46902 20.1667 11.0003C20.1667 13.5316 18.1146 15.5837 15.5833 15.5837Z"
        stroke="url(#paint_linear_15)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path
        id="Vector"
        d="M10.9993 20.1667C8.46804 20.1667 6.41602 18.1146 6.41602 15.5833C6.41602 13.052 8.46804 11 10.9993 11C13.5307 11 15.5827 13.052 15.5827 15.5833C15.5827 18.1146 13.5307 20.1667 10.9993 20.1667Z"
        stroke="url(#paint_linear_16)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path
        id="Vector"
        d="M10.9993 10.9997C8.46804 10.9997 6.41602 8.94765 6.41602 6.41634C6.41602 3.88504 8.46804 1.83301 10.9993 1.83301C13.5307 1.83301 15.5827 3.88504 15.5827 6.41634C15.5827 8.94765 13.5307 10.9997 10.9993 10.9997Z"
        stroke="url(#paint_linear_17)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path
        id="Vector"
        d="M6.41732 15.5837C3.88601 15.5837 1.83398 13.5316 1.83398 11.0003C1.83398 8.46902 3.88601 6.41699 6.41732 6.41699C8.94862 6.41699 11.0007 8.46902 11.0007 11.0003C11.0007 13.5316 8.94862 15.5837 6.41732 15.5837Z"
        stroke="url(#paint_linear_18)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path id="Vector" opacity="0" />
    </g>
  </svg>
);

export const ForkKnifeGradientIcon: React.FC<IconSvgProps> = ({
  size = 22,
  height,
  width,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 22 22"
    width="22.000000"
    height="22.000000"
    fill="none"
    customFrame="#000000"
  >
    <defs>
      <linearGradient
        id="paint_linear_19"
        x1="2.6537497"
        x2="1.8524313"
        y1="1.375"
        y2="-0.380090475"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_20"
        x1="7.16512489"
        x2="6.8164444"
        y1="1.375"
        y2="-0.686985493"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_21"
        x1="8.90175056"
        x2="2.46107101"
        y1="12.6757812"
        y2="9.15826225"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_22"
        x1="16.434"
        x2="10.1475363"
        y1="25.4374981"
        y2="24.2692242"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
    </defs>
    <g id="ForkKnife">
      <path id="Vector" />
      <path
        id="Vector"
        d="M0 0L3.4375 0"
        stroke="url(#paint_linear_19)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        transform="matrix(0,1,-1,0,7.21875,2.75)"
      />
      <path
        id="Vector"
        d="M0 0L9.28125 0"
        stroke="url(#paint_linear_20)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        transform="matrix(0,1,-1,0,7.21875,9.96875)"
      />
      <path
        id="Vector"
        d="M9.625 2.75L10.3125 6.875C10.3125 7.69551 9.98655 8.48242 9.40636 9.06261C8.82617 9.6428 8.03926 9.96875 7.21875 9.96875C6.39824 9.96875 5.61133 9.6428 5.03114 9.06261C4.45095 8.48242 4.125 7.69551 4.125 6.875L4.8125 2.75"
        fill-rule="nonzero"
        stroke="url(#paint_linear_21)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path
        id="Vector"
        d="M17.5312 13.75L12.7188 13.75C12.7188 13.75 13.75 4.125 17.5312 2.75L17.5312 19.25"
        fill-rule="nonzero"
        stroke="url(#paint_linear_22)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
    </g>
  </svg>
);

export const TripIcon: React.FC<IconSvgProps> = ({
  size = 16,
  height,
  width,
  ...props
}) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.6673 7.16699C14.9406 7.16699 15.1673 6.94033 15.1673 6.66699V6.00033C15.1673 3.06033 14.274 2.16699 11.334 2.16699H7.16732V3.66699C7.16732 3.94033 6.94065 4.16699 6.66732 4.16699C6.39398 4.16699 6.16732 3.94033 6.16732 3.66699V2.16699H4.66732C1.72732 2.16699 0.833984 3.06033 0.833984 6.00033V6.33366C0.833984 6.60699 1.06065 6.83366 1.33398 6.83366C1.97398 6.83366 2.50065 7.36033 2.50065 8.00033C2.50065 8.64033 1.97398 9.16699 1.33398 9.16699C1.06065 9.16699 0.833984 9.39366 0.833984 9.66699V10.0003C0.833984 12.9403 1.72732 13.8337 4.66732 13.8337H6.16732V12.3337C6.16732 12.0603 6.39398 11.8337 6.66732 11.8337C6.94065 11.8337 7.16732 12.0603 7.16732 12.3337V13.8337H11.334C14.274 13.8337 15.1673 12.9403 15.1673 10.0003C15.1673 9.72699 14.9406 9.50033 14.6673 9.50033C14.0273 9.50033 13.5007 8.97366 13.5007 8.33366C13.5007 7.69366 14.0273 7.16699 14.6673 7.16699ZM7.16732 9.44699C7.16732 9.72033 6.94065 9.94699 6.66732 9.94699C6.39398 9.94699 6.16732 9.72033 6.16732 9.44699V6.55366C6.16732 6.28033 6.39398 6.05366 6.66732 6.05366C6.94065 6.05366 7.16732 6.28033 7.16732 6.55366V9.44699Z"
      fill="currentColor"
    />
  </svg>
);

export const FavoriteIcon: React.FC<IconSvgProps> = ({
  size = 16,
  height,
  width,
  ...props
}) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.9597 2.06667C9.75301 2.06667 8.67301 2.65333 7.99967 3.55333C7.32634 2.65333 6.24634 2.06667 5.03967 2.06667C2.99301 2.06667 1.33301 3.73333 1.33301 5.79333C1.33301 6.58667 1.45967 7.32 1.67967 8C2.73301 11.3333 5.97967 13.3267 7.58634 13.8733C7.81301 13.9533 8.18634 13.9533 8.41301 13.8733C10.0197 13.3267 13.2663 11.3333 14.3197 8C14.5397 7.32 14.6663 6.58667 14.6663 5.79333C14.6663 3.73333 13.0063 2.06667 10.9597 2.06667Z"
      fill="currentColor"
    />
  </svg>
);

export const JournalIcon: React.FC<IconSvgProps> = ({
  size = 16,
  height,
  width,
  ...props
}) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.03356 13.44C8.86023 13.5133 8.67356 13.58 8.47356 13.6467L7.42023 13.9933C4.77356 14.8467 3.38023 14.1333 2.52023 11.4867L1.66689 8.85333C0.813561 6.20667 1.52023 4.80667 4.16689 3.95333L5.19356 3.61333C5.06689 3.93333 4.96023 4.3 4.86023 4.71333L4.20689 7.50667C3.47356 10.6467 4.54689 12.38 7.68689 13.1267L8.80689 13.3933C8.88023 13.4133 8.96023 13.4267 9.03356 13.44Z"
      fill="currentColor"
    />
    <path
      d="M11.4465 2.14L10.3331 1.88C8.10646 1.35333 6.77979 1.78667 5.9979 3.4C5.79979 3.80667 5.63979 4.3 5.50646 4.86667L4.85313 7.66C4.19979 10.467 5.05979 11.82 7.83979 12.48L8.95979 12.7467C9.34646 12.84 9.70646 12.9 10.0398 12.9267C12.1198 13.1267 13.2265 12.1533 13.7865 9.74667L14.4398 6.96C15.0931 4.17333 14.2398 2.79333 11.4465 2.14Z"
      fill="currentColor"
    />
  </svg>
);

export const SupportIcon: React.FC<IconSvgProps> = ({
  size = 16,
  height,
  width,
  ...props
}) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.3133 11.22L12.5733 13.3267C12.6399 13.88 12.0466 14.2667 11.5733 13.98L9.2666 12.6067C9.1066 12.5133 9.0666 12.3133 9.15326 12.1533C9.4866 11.54 9.6666 10.8467 9.6666 10.1533C9.6666 7.71333 7.57326 5.72667 4.99993 5.72667C4.47326 5.72667 3.95993 5.80666 3.47993 5.96666C3.23326 6.04667 2.99326 5.82 3.05326 5.56667C3.65993 3.14 5.99326 1.33333 8.77993 1.33333C12.0333 1.33333 14.6666 3.79333 14.6666 6.82666C14.6666 8.62666 13.7399 10.22 12.3133 11.22Z"
      fill="currentColor"
    />
    <path
      d="M8.66634 10.1533C8.66634 10.9467 8.37301 11.68 7.87967 12.26C7.21967 13.06 6.17301 13.5733 4.99967 13.5733L3.25967 14.6067C2.96634 14.7867 2.59301 14.54 2.63301 14.2L2.79967 12.8867C1.90634 12.2667 1.33301 11.2733 1.33301 10.1533C1.33301 8.98 1.95967 7.94667 2.91967 7.33333C3.51301 6.94667 4.22634 6.72667 4.99967 6.72667C7.02634 6.72667 8.66634 8.26 8.66634 10.1533Z"
      fill="currentColor"
    />
  </svg>
);

export const CurrencyIcon: React.FC<IconSvgProps> = ({
  size = 16,
  height,
  width,
  ...props
}) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.10004 13.94C5.08004 13.94 5.05337 13.9533 5.03337 13.9533C3.74004 13.3133 2.68671 12.2533 2.04004 10.96C2.04004 10.94 2.05337 10.9133 2.05337 10.8933C2.86671 11.1333 3.70671 11.3133 4.54004 11.4533C4.68671 12.2933 4.86004 13.1267 5.10004 13.94Z"
      fill="currentColor"
    />
    <path
      d="M13.9604 10.9667C13.3004 12.2933 12.2004 13.3667 10.8604 14.0133C11.1137 13.1667 11.327 12.3133 11.467 11.4533C12.307 11.3133 13.1337 11.1333 13.947 10.8933C13.9404 10.92 13.9604 10.9467 13.9604 10.9667Z"
      fill="currentColor"
    />
    <path
      d="M14.0137 5.14C13.1737 4.88667 12.327 4.68 11.467 4.53333C11.327 3.67333 11.1204 2.82 10.8604 1.98667C12.2404 2.64667 13.3537 3.76 14.0137 5.14Z"
      fill="currentColor"
    />
    <path
      d="M5.09966 2.06C4.85966 2.87333 4.68633 3.7 4.54633 4.54C3.68633 4.67333 2.83299 4.88667 1.98633 5.14C2.63299 3.8 3.70633 2.7 5.03299 2.04C5.05299 2.04 5.07966 2.06 5.09966 2.06Z"
      fill="currentColor"
    />
    <path
      d="M10.3262 4.39333C8.77952 4.22 7.21952 4.22 5.67285 4.39333C5.83952 3.48 6.05285 2.56667 6.35285 1.68667C6.36618 1.63333 6.35952 1.59333 6.36618 1.54C6.89285 1.41333 7.43285 1.33333 7.99952 1.33333C8.55952 1.33333 9.10618 1.41333 9.62618 1.54C9.63285 1.59333 9.63285 1.63333 9.64618 1.68667C9.94619 2.57333 10.1595 3.48 10.3262 4.39333Z"
      fill="currentColor"
    />
    <path
      d="M4.39301 10.3267C3.47301 10.16 2.56634 9.94667 1.68634 9.64667C1.63301 9.63333 1.59301 9.64 1.53967 9.63333C1.41301 9.10667 1.33301 8.56667 1.33301 8C1.33301 7.44 1.41301 6.89333 1.53967 6.37333C1.59301 6.36667 1.63301 6.36667 1.68634 6.35333C2.57301 6.06 3.47301 5.84 4.39301 5.67333C4.22634 7.22 4.22634 8.78 4.39301 10.3267Z"
      fill="currentColor"
    />
    <path
      d="M14.6664 8C14.6664 8.56667 14.5864 9.10667 14.4598 9.63333C14.4064 9.64 14.3664 9.63333 14.3131 9.64667C13.4264 9.94 12.5198 10.16 11.6064 10.3267C11.7798 8.78 11.7798 7.22 11.6064 5.67333C12.5198 5.84 13.4331 6.05333 14.3131 6.35333C14.3664 6.36667 14.4064 6.37333 14.4598 6.37333C14.5864 6.9 14.6664 7.44 14.6664 8Z"
      fill="currentColor"
    />
    <path
      d="M10.3262 11.6067C10.1595 12.5267 9.94619 13.4333 9.64618 14.3133C9.63285 14.3667 9.63285 14.4067 9.62618 14.46C9.10618 14.5867 8.55952 14.6667 7.99952 14.6667C7.43285 14.6667 6.89285 14.5867 6.36618 14.46C6.35952 14.4067 6.36618 14.3667 6.35285 14.3133C6.05952 13.4267 5.83952 12.5267 5.67285 11.6067C6.44618 11.6933 7.21952 11.7533 7.99952 11.7533C8.77952 11.7533 9.55952 11.6933 10.3262 11.6067Z"
      fill="currentColor"
    />
    <path
      d="M10.5086 10.5089C8.84116 10.7193 7.15818 10.7193 5.49079 10.5089C5.28041 8.84149 5.28041 7.15851 5.49079 5.49111C7.15818 5.28074 8.84116 5.28074 10.5086 5.49111C10.7189 7.15851 10.7189 8.84149 10.5086 10.5089Z"
      fill="currentColor"
    />
  </svg>
);

export const AirplaneIcon: React.FC<IconSvgProps> = ({
  size = 20,
  height,
  width,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 30 30"
    width="30.000000"
    height="30.000000"
    fill="none"
    {...props}
  >
    <defs>
      <linearGradient
        id="paint_linear_0"
        x1="21.9682674"
        x2="11.3038568"
        y1="17.6427269"
        y2="3.50345993"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_1"
        x1="20.677681"
        x2="6.08024979"
        y1="32.6988525"
        y2="16.9868736"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
    </defs>
    <rect
      id="airplane 1"
      width="30.000000"
      height="30.000000"
      x="0.000000"
      y="0.000000"
      fill="rgb(255,255,255)"
      fill-opacity="0"
    />
    <path
      id="Vector"
      d="M25.8074 8.44841C26.7608 7.49508 27.1874 5.65841 26.7708 4.3673C26.6219 3.92064 26.2641 3.56286 25.8174 3.41397C24.5363 3.00675 22.6897 3.44397 21.7363 4.39675L18.698 7.43508C18.5191 7.61397 18.1719 7.68341 17.9335 7.60397L9.84076 4.37675C8.95688 4.00953 7.66632 4.2873 6.99077 4.96286L5.68021 6.27341C4.83632 7.1173 5.05465 8.17008 6.17688 8.61675L13.2963 11.4467C13.8524 11.6651 13.9613 12.1917 13.5347 12.6184L12.4324 13.7206L23.1963 13.7206L22.6008 12.2512C22.5213 12.0129 22.5908 11.6651 22.7697 11.4867L25.8074 8.44841Z"
      fill="url(#paint_linear_0)"
      fill-rule="nonzero"
    />
    <path
      id="Vector"
      d="M25.8376 20.3535L23.1964 13.7207L12.4326 13.7207L10.6453 15.5079C10.417 15.7363 9.96034 15.9351 9.64256 15.9351L5.02533 15.9451C4.54867 15.9451 3.97256 16.3024 3.74422 16.7496L2.84089 18.5468C2.43367 19.3113 2.82089 20.2546 3.64533 20.5229L7.99422 20.9001C8.65978 20.9496 9.24533 21.5357 9.29478 22.2007L9.672 26.5496C9.94978 27.364 10.8837 27.7607 11.6676 27.3735L13.4648 26.4701C13.9014 26.2518 14.2692 25.6657 14.2692 25.189L14.2792 20.5718C14.2692 20.244 14.4681 19.7874 14.6964 19.559L17.5859 16.6696C18.0131 16.2424 18.5192 16.3518 18.7576 16.9079L21.5876 24.0274C22.0342 25.1496 23.087 25.3679 23.9309 24.524L25.2414 23.2135C25.9164 22.5385 26.1948 21.2474 25.837 20.354L25.8376 20.3535Z"
      opacity="0.400000006"
      fill="url(#paint_linear_1)"
      fill-rule="nonzero"
    />
  </svg>
);

export const ВedIcon: React.FC<IconSvgProps> = ({
  size = 20,
  height,
  width,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 30 30"
    width="30.000000"
    height="30.000000"
    fill="none"
    {...props}
  >
    <defs>
      <linearGradient
        id="paint_linear_2"
        x1="22.1399994"
        x2="9.83695793"
        y1="30.4384823"
        y2="13.5543518"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_3"
        x1="20.6099987"
        x2="13.4386644"
        y1="15.3228369"
        y2="3.13863373"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
    </defs>
    <rect
      id="bed 3"
      width="30.000000"
      height="30.000000"
      x="0.000000"
      y="0.000000"
      fill="rgb(255,255,255)"
      fill-opacity="0"
    />
    <path
      id="Vector"
      d="M25.3125 14.0732C24.7215 13.8138 24.083 13.6801 23.4375 13.6807L6.5625 13.6807C5.91709 13.68 5.2786 13.8135 4.6875 14.0727C3.85207 14.438 3.14117 15.0388 2.6417 15.8017C2.14222 16.5645 1.8758 17.4563 1.875 18.3682L1.875 24.9307C1.875 25.1793 1.97377 25.4178 2.14959 25.5936C2.3254 25.7694 2.56386 25.8682 2.8125 25.8682C3.06114 25.8682 3.2996 25.7694 3.47541 25.5936C3.65123 25.4178 3.75 25.1793 3.75 24.9307L3.75 24.4619C3.75152 24.3381 3.80139 24.2197 3.88897 24.1321C3.97655 24.0446 4.0949 23.9947 4.21875 23.9932L25.7812 23.9932C25.9051 23.9947 26.0234 24.0446 26.111 24.1321C26.1986 24.2197 26.2485 24.3381 26.25 24.4619L26.25 24.9307C26.25 25.1793 26.3488 25.4178 26.5246 25.5936C26.7004 25.7694 26.9389 25.8682 27.1875 25.8682C27.4361 25.8682 27.6746 25.7694 27.8504 25.5936C28.0262 25.4178 28.125 25.1793 28.125 24.9307L28.125 18.3682C28.1241 17.4564 27.8576 16.5647 27.3581 15.802C26.8587 15.0393 26.1478 14.4385 25.3125 14.0732Z"
      fill="url(#paint_linear_2)"
      fill-rule="evenodd"
    />
    <path
      id="Vector"
      d="M22.0312 4.6875L7.96875 4.6875C7.09851 4.6875 6.26391 5.0332 5.64856 5.64856C5.0332 6.26391 4.6875 7.09851 4.6875 7.96875L4.6875 12.1875C4.68753 12.2238 4.69599 12.2596 4.71223 12.2921C4.72847 12.3246 4.75204 12.3529 4.78107 12.3747C4.81011 12.3965 4.84382 12.4113 4.87954 12.4178C4.91526 12.4244 4.95202 12.4226 4.98691 12.4125C5.49871 12.2628 6.02927 12.187 6.5625 12.1875L6.81035 12.1875C6.8682 12.1879 6.92414 12.1668 6.96741 12.1284C7.01068 12.09 7.03822 12.037 7.04473 11.9795C7.09586 11.5214 7.31394 11.0982 7.65732 10.7907C8.0007 10.4832 8.44531 10.313 8.90625 10.3125L12.1875 10.3125C12.6487 10.3125 13.0938 10.4826 13.4375 10.7901C13.7813 11.0976 13.9996 11.5211 14.0508 11.9795C14.0573 12.037 14.0848 12.09 14.1281 12.1284C14.1714 12.1668 14.2273 12.1879 14.2852 12.1875L15.7184 12.1875C15.7762 12.1879 15.8322 12.1668 15.8754 12.1284C15.9187 12.09 15.9462 12.037 15.9527 11.9795C16.0038 11.5217 16.2217 11.0987 16.5647 10.7913C16.9077 10.4838 17.3519 10.3134 17.8125 10.3125L21.0938 10.3125C21.555 10.3125 22 10.4826 22.3438 10.7901C22.6875 11.0976 22.9059 11.5211 22.957 11.9795C22.9635 12.037 22.9911 12.09 23.0343 12.1284C23.0776 12.1668 23.1336 12.1879 23.1914 12.1875L23.4375 12.1875C23.9708 12.1872 24.5013 12.2632 25.0131 12.4131C25.048 12.4232 25.0848 12.425 25.1206 12.4184C25.1564 12.4118 25.1901 12.397 25.2192 12.3751C25.2482 12.3532 25.2718 12.3249 25.288 12.2923C25.3042 12.2598 25.3126 12.2239 25.3125 12.1875L25.3125 7.96875C25.3125 7.09851 24.9668 6.26391 24.3514 5.64856C23.7361 5.0332 22.9015 4.6875 22.0312 4.6875Z"
      opacity="0.400000006"
      fill="url(#paint_linear_3)"
      fill-rule="evenodd"
    />
  </svg>
);

export const TrIcon: React.FC<IconSvgProps> = ({
  size = 20,
  height,
  width,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="30.000000"
    height="30.000000"
    fill="none"
    {...props}
  >
    <defs>
      <linearGradient
        id="paint_linear_4"
        x1="22.2536507"
        x2="19.1625633"
        y1="27.8113842"
        y2="17.7198486"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_5"
        x1="11.2715902"
        x2="6.60980034"
        y1="14.238553"
        y2="6.7121954"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_6"
        x1="23.1612282"
        x2="14.5193567"
        y1="15.7530518"
        y2="4.44166183"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_7"
        x1="22.2536507"
        x2="6.52720737"
        y1="24.6974182"
        y2="6.82524109"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
    </defs>
    <rect
      id="TR 2"
      width="30.000000"
      height="30.000000"
      x="0.000000"
      y="0.000000"
      fill="rgb(255,255,255)"
      fill-opacity="0"
    />
    <path
      id="Vector"
      d="M27.5525 24.2975L19.027 24.2975C20.9742 24.1031 22.5281 22.5847 22.7825 20.6553L14.4242 20.6553C14.6787 22.5847 16.2325 24.1031 18.1798 24.2975L8.14477 24.2975C10.092 24.1031 11.6459 22.5847 11.9003 20.6553L3.54199 20.6553C3.79644 22.5847 5.35088 24.1031 7.29755 24.2975L2.4481 24.2975C2.01644 24.2975 1.66699 24.6475 1.66699 25.0786C1.66699 25.5097 2.01699 25.8597 2.4481 25.8597L27.5525 25.8597C27.9842 25.8597 28.3336 25.5097 28.3336 25.0786C28.3336 24.6475 27.9836 24.2975 27.5525 24.2975Z"
      fill="url(#paint_linear_4)"
      fill-rule="nonzero"
    />
    <path
      id="Vector"
      d="M14.0487 11.9145C14.1698 11.6223 14.1025 11.2867 13.8792 11.0634L10.532 7.71619C10.3853 7.56953 10.187 7.4873 9.97977 7.4873L1.66699 7.4873L1.66699 12.3973L13.327 12.3973C13.6431 12.3973 13.9275 12.2067 14.0487 11.9151L14.0487 11.9145Z"
      fill="url(#paint_linear_5)"
      fill-rule="nonzero"
    />
    <path
      id="Vector"
      d="M19.0405 12.3963L26.9277 12.3963L27.1172 12.5858L25.3655 10.8341L20.1255 5.59409C19.1877 4.65631 17.941 4.13965 16.6144 4.13965L9.7666 4.13965L17.3044 11.678C17.7683 12.1413 18.3849 12.3963 19.0405 12.3963Z"
      fill="url(#paint_linear_6)"
      fill-rule="nonzero"
    />
    <path
      id="Vector"
      d="M27.1175 12.5858L26.9281 12.3963L19.0409 12.3963C18.3853 12.3963 17.7692 12.1413 17.3048 11.678L9.76699 4.13965L2.4481 4.13965C2.01644 4.13965 1.66699 4.48965 1.66699 4.92076L1.66699 7.48687L9.97977 7.48687C10.187 7.48687 10.3859 7.56909 10.532 7.71576L13.8792 11.063C14.1025 11.2863 14.1698 11.6224 14.0487 11.9141C13.9275 12.2063 13.6425 12.3963 13.327 12.3963L1.66699 12.3963L1.66699 18.3096C1.66699 18.7413 2.01699 19.0908 2.4481 19.0908L24.7659 19.0908C26.7331 19.0908 28.3336 17.4902 28.3336 15.5219C28.3336 14.4124 27.902 13.3702 27.1175 12.5858Z"
      opacity="0.400000006"
      fill="url(#paint_linear_7)"
      fill-rule="nonzero"
    />
  </svg>
);

export const ShipIcon: React.FC<IconSvgProps> = ({
  size = 20,
  height,
  width,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 30 30"
    width="30.000000"
    height="30.000000"
    fill="none"
    {...props}
  >
    <defs>
      <linearGradient
        id="paint_linear_8"
        x1="17.0425301"
        x2="13.8047733"
        y1="7.58711052"
        y2="2.85746813"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_9"
        x1="19.979435"
        x2="13.4235001"
        y1="15.9897156"
        y2="5.07136726"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_10"
        x1="21.734684"
        x2="8.48343086"
        y1="30.2088013"
        y2="13.8450794"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_11"
        x1="21.95014"
        x2="21.157198"
        y1="27.8520737"
        y2="22.679512"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
      <linearGradient
        id="paint_linear_12"
        x1="19.0698624"
        x2="16.9572048"
        y1="20.6914902"
        y2="14.5063457"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stop-color="rgb(49.1711,142.493,235.816)"
          offset="0"
          stop-opacity="1"
        />
        <stop stop-color="rgb(0,213.488,255)" offset="1" stop-opacity="1" />
      </linearGradient>
    </defs>
    <rect
      id="cruise 1"
      width="30.000000"
      height="30.000000"
      x="0.000000"
      y="0.000000"
      fill="rgb(255,255,255)"
      fill-opacity="0"
    />
    <path
      id="Vector"
      d="M15.025 6.35899L18.7544 6.35899L18.7544 5.87399C18.7544 4.33565 17.5028 3.08398 15.9644 3.08398L14.0361 3.08398C12.4978 3.08398 11.2461 4.33565 11.2461 5.87399L11.2461 6.35899L15.025 6.35899Z"
      opacity="0.400000006"
      fill="url(#paint_linear_8)"
      fill-rule="nonzero"
    />
    <path
      id="Vector"
      d="M15.1895 11.021L24.1534 13.3633L24.1534 9.85326C24.1534 7.92382 22.5889 6.35938 20.6595 6.35938L9.34057 6.35938C7.41112 6.35938 5.84668 7.92382 5.84668 9.85326L5.84668 13.3633L14.8106 11.021C14.9345 10.9888 15.0656 10.9888 15.1895 11.021Z"
      fill="url(#paint_linear_9)"
      fill-rule="nonzero"
    />
    <path
      id="Vector"
      d="M27.162 16.4666C26.9081 15.9744 26.4553 15.6116 25.9192 15.4716L24.1531 15.0099L15.1892 12.6677C15.0653 12.6355 14.9348 12.6355 14.8109 12.6677L5.84697 15.0099L4.08086 15.4716C3.54475 15.6116 3.09197 15.9744 2.83808 16.4666C2.5842 16.9588 2.55142 17.5383 2.74864 18.0561L5.27753 24.7088C5.70031 24.5466 6.22475 24.4199 6.98142 24.4199C8.15975 24.4199 8.77642 24.7266 9.32031 24.9977C9.79253 25.2327 10.1653 25.4183 10.9914 25.4183C11.8175 25.4183 12.1903 25.2327 12.6625 24.9977C13.2064 24.7272 13.8225 24.4199 15.0009 24.4199C16.1792 24.4199 16.7959 24.7266 17.3392 24.9977C17.8114 25.2327 18.1842 25.4183 19.0103 25.4183C19.8364 25.4183 20.2092 25.2327 20.6814 24.9977C21.2253 24.7272 21.8414 24.4199 23.0198 24.4199C23.7764 24.4199 24.3009 24.5466 24.7236 24.7088L27.2525 18.0561C27.4492 17.5383 27.4164 16.9588 27.1625 16.4666L27.162 16.4666Z"
      opacity="0.400000006"
      fill="url(#paint_linear_10)"
      fill-rule="nonzero"
    />
    <path
      id="Vector"
      d="M27.0289 25.4183C26.2028 25.4183 25.83 25.2327 25.3578 24.9977C25.1628 24.9005 24.9589 24.7994 24.7228 24.7088C24.3 24.5466 23.7756 24.4199 23.0189 24.4199C21.8406 24.4199 21.2239 24.7266 20.6806 24.9977C20.2083 25.2327 19.8356 25.4183 19.0095 25.4183C18.1833 25.4183 17.8106 25.2327 17.3383 24.9977C16.7945 24.7271 16.1783 24.4199 15 24.4199C13.8217 24.4199 13.205 24.7266 12.6617 24.9977C12.1895 25.2327 11.8167 25.4183 10.9906 25.4183C10.1645 25.4183 9.79112 25.2327 9.31946 24.9977C8.77557 24.7271 8.15946 24.4199 6.98057 24.4199C6.2239 24.4199 5.69946 24.5466 5.27668 24.7088C5.04112 24.7994 4.83668 24.901 4.64168 24.9977C4.16946 25.2327 3.79668 25.4183 2.97057 25.4183C2.55724 25.4183 2.22168 25.7533 2.22168 26.1671C2.22168 26.581 2.55668 26.916 2.97057 26.916C4.1489 26.916 4.76557 26.6094 5.3089 26.3383C5.78112 26.1033 6.1539 25.9177 6.98001 25.9177C7.80612 25.9177 8.17946 26.1033 8.65112 26.3383C9.19501 26.6088 9.81112 26.916 10.99 26.916C12.1689 26.916 12.785 26.6094 13.3283 26.3383C13.8006 26.1033 14.1733 25.9177 14.9995 25.9177C15.8256 25.9177 16.1983 26.1033 16.6706 26.3383C17.2145 26.6088 17.8306 26.916 19.0089 26.916C20.1872 26.916 20.8039 26.6094 21.3472 26.3383C21.8195 26.1033 22.1922 25.9177 23.0183 25.9177C23.8445 25.9177 24.2172 26.1033 24.6895 26.3383C25.2333 26.6088 25.8495 26.916 27.0278 26.916C27.4411 26.916 27.7767 26.581 27.7767 26.1671C27.7767 25.7533 27.4417 25.4183 27.0278 25.4183L27.0289 25.4183Z"
      fill="url(#paint_linear_11)"
      fill-rule="nonzero"
    />
    <path
      id="Vector"
      d="M8.45636 19.4458L14.9997 17.7364L21.543 19.4458C21.6064 19.4625 21.6702 19.4703 21.733 19.4703C22.0652 19.4703 22.3691 19.2475 22.4569 18.9108C22.5614 18.5108 22.3219 18.1019 21.9219 17.9969L15.1891 16.238C15.0652 16.2058 14.9347 16.2058 14.8108 16.238L8.07803 17.9969C7.67803 18.1014 7.43859 18.5103 7.54303 18.9108C7.64747 19.3114 8.05581 19.5503 8.45636 19.4458Z"
      fill="url(#paint_linear_12)"
      fill-rule="nonzero"
    />
  </svg>
);

export const CalendarIcon: React.FC<IconSvgProps> = ({
  size = 20,
  height,
  width,
  ...props
}) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 1.5V3.75"
      stroke="#2F8CF3"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 1.5V3.75"
      stroke="#2F8CF3"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.625 6.81738H15.375"
      stroke="#2F8CF3"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z"
      stroke="#2F8CF3"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.7713 10.2749H11.778"
      stroke="#2F8CF3"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.7713 12.5249H11.778"
      stroke="#2F8CF3"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.99686 10.2749H9.00359"
      stroke="#2F8CF3"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.99686 12.5249H9.00359"
      stroke="#2F8CF3"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.22049 10.2749H6.22723"
      stroke="#2F8CF3"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.22049 12.5249H6.22723"
      stroke="#2F8CF3"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const ArrowDownIcon: React.FC<IconSvgProps> = ({
  size = 20,
  height,
  width,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path
      d="M14.9396 6.7124L10.0496 11.6024C9.47207 12.1799 8.52707 12.1799 7.94957 11.6024L3.05957 6.7124"
      stroke="#2F8CF3"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
