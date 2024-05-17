import styled from "styled-components";
export function BoxIconsSvg() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28" cy="28" r="28" fill="url(#paint0_linear_174_393)" />
      <g clip-path="url(#clip0_174_393)">
        <path
          d="M20.2 33.78L25.5 28.48L28.75 31.73C29.16 32.14 29.82 32.12 30.2 31.69L37.37 23.62C37.72 23.23 37.7 22.63 37.33 22.25C36.93 21.85 36.26 21.86 35.88 22.29L29.49 29.47L26.2 26.18C25.81 25.79 25.18 25.79 24.79 26.18L18.7 32.28C18.31 32.67 18.31 33.3 18.7 33.69L18.79 33.78C19.18 34.17 19.82 34.17 20.2 33.78V33.78Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_174_393"
          x1="0"
          y1="0"
          x2="56"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#868CFF" />
          <stop offset="1" stop-color="#0066FF" />
        </linearGradient>
        <clipPath id="clip0_174_393">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(16 16)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function BoxIconsSvg2() {
  return (
    <svg
      width="62"
      height="32"
      viewBox="0 0 62 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 29.7041C2 29.7041 8.14585 31.4949 14.2916 29.7041C28.6144 25.5305 24 -1 35 5.99999C48.1784 14.3863 58.6562 13.9388 60.5 2"
        stroke="url(#paint0_linear_160_106)"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_160_106"
          x1="-35"
          y1="38"
          x2="48.5597"
          y2="-12.866"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0066FF" />
          <stop offset="1" stop-color="#4F2CFF" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CourseIconSvg() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="#F6F8FD" />
      <g clip-path="url(#clip0_160_70)">
        <path
          d="M16 18H32V20H16V18ZM18 14H30V16H18V14ZM32 22H16C14.9 22 14 22.9 14 24V32C14 33.1 14.9 34 16 34H32C33.1 34 34 33.1 34 32V24C34 22.9 33.1 22 32 22ZM32 32H16V24H32V32ZM22 24.73V31.26L28 28L22 24.73Z"
          fill="#FFB547"
        />
      </g>
      <defs>
        <clipPath id="clip0_160_70">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(12 12)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Arrow({color}) {
  return (
    <i className={`text-${color}`}>
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.37114e-07 7L14.17 7L10.59 10.59L12 12L18 6L12 -5.24537e-07L10.59 1.41L14.17 5L6.11959e-07 5L4.37114e-07 7Z"
        fill="currentColor"
      />
    </svg>
    </i>
  );
}
