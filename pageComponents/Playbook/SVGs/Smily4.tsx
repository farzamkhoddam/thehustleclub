import React from "react";

interface Props {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  className?: string;
  opacity?: string;
}

const HomeIcon: React.FC<Props> = ({
  width,
  height,
  viewBox,
  fill,
  className,
  opacity,
}) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity={opacity}>
      <g clipPath="url(#clip0)">
        <path
          d="M20 0C8.97201 0 0 8.97201 0 20C0 31.028 8.97201 40 20 40C31.028 40 40 31.028 40 20C40 8.97201 31.0281 0 20 0ZM20 37.8378C15.1003 37.8378 10.6562 35.8518 7.42915 32.6431C6.14049 31.3618 5.04655 29.885 4.19479 28.262C2.89761 25.7905 2.16219 22.9796 2.16219 20C2.16219 10.1642 10.1642 2.16219 20 2.16219C24.6653 2.16219 28.9173 3.9633 32.0992 6.90577C33.749 8.4312 35.1113 10.2631 36.0936 12.3107C37.2112 14.6403 37.8378 17.2483 37.8378 20C37.8378 29.8358 29.8358 37.8378 20 37.8378Z"
          fill="#DBBD82"
          stroke="#DBBD82"
          strokeWidth="0.5"
        />
        <path
          d="M13.1635 15.4596C14.3257 15.4596 15.2712 16.351 15.2712 17.5673H17.4334C17.4334 15.1348 15.518 13.2974 13.1635 13.2974C10.809 13.2974 8.89355 15.1348 8.89355 17.5673H11.0557C11.0557 16.351 12.0014 15.4596 13.1635 15.4596Z"
          fill="#DBBD82"
          stroke="#DBBD82"
          strokeWidth="0.5"
        />
        <path
          d="M26.8354 15.4596C27.9975 15.4596 28.9431 16.351 28.9431 17.5673H31.1053C31.1053 15.1348 29.1898 13.2974 26.8354 13.2974C24.4809 13.2974 22.5654 15.1348 22.5654 17.5673H24.7276C24.7276 16.351 25.6732 15.4596 26.8354 15.4596Z"
          fill="#DBBD82"
          stroke="#DBBD82"
          strokeWidth="0.5"
        />
        <path
          d="M19.9624 31.0809C24.1455 31.0809 28.1543 28.9416 30.4496 25.3898L28.6335 24.2163C26.5259 27.4778 22.6694 29.2981 18.81 28.8526C15.8016 28.5057 13.0195 26.7724 11.3677 24.2163L9.55176 25.3898C11.5504 28.483 14.9189 30.5803 18.5621 31.0005C19.0299 31.0545 19.4969 31.0809 19.9624 31.0809Z"
          fill="#DBBD82"
          stroke="#DBBD82"
          strokeWidth="0.5"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </g>
  </svg>
  //
);
export default HomeIcon;
