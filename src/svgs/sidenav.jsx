const inactiveColor = "#A3AED0";
const activeColor = "white";

export function DashboardSvg(active) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 10H7C7.55 10 8 9.55 8 9V1C8 0.45 7.55 0 7 0H1C0.45 0 0 0.45 0 1V9C0 9.55 0.45 10 1 10ZM1 18H7C7.55 18 8 17.55 8 17V13C8 12.45 7.55 12 7 12H1C0.45 12 0 12.45 0 13V17C0 17.55 0.45 18 1 18ZM11 18H17C17.55 18 18 17.55 18 17V9C18 8.45 17.55 8 17 8H11C10.45 8 10 8.45 10 9V17C10 17.55 10.45 18 11 18ZM10 1V5C10 5.55 10.45 6 11 6H17C17.55 6 18 5.55 18 5V1C18 0.45 17.55 0 17 0H11C10.45 0 10 0.45 10 1Z"
        fill={active ? activeColor : inactiveColor}
      />
    </svg>
  );
}

export function CoursesSvg(active) {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="16"
        height="17"
        rx="1"
        stroke={active ? activeColor : inactiveColor}
        stroke-width="2"
      />
      <line
        x1="4.5"
        y1="5.5"
        x2="8.5"
        y2="5.5"
        stroke={active ? activeColor : inactiveColor}
        stroke-linecap="round"
      />
      <line
        x1="4.5"
        y1="9.5"
        x2="13.5"
        y2="9.5"
        stroke={active ? activeColor : inactiveColor}
        stroke-linecap="round"
      />
      <line
        x1="4.5"
        y1="13.5"
        x2="13.5"
        y2="13.5"
        stroke={active ? activeColor : inactiveColor}
        stroke-linecap="round"
      />
    </svg>
  );
}

export function FilesSvg(active) {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 2C1 1.44772 1.44772 1 2 1H16C16.5523 1 17 1.44772 17 2V16.7299C17 17.5778 16.0111 18.0409 15.3598 17.4981L10.9206 13.7988C9.80802 12.8716 8.19199 12.8716 7.07945 13.7988L2.64019 17.4981C1.98886 18.0409 1 17.5778 1 16.7299V2Z"
        stroke={active ? activeColor : inactiveColor}
        stroke-width="2"
      />
    </svg>
  );
}

export function MyAccountSvg(active) {
  return (
    <svg
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 8C11.21 8 13 6.21 13 4C13 1.79 11.21 0 9 0C6.79 0 5 1.79 5 4C5 6.21 6.79 8 9 8ZM9 2C10.1 2 11 2.9 11 4C11 5.1 10.1 6 9 6C7.9 6 7 5.1 7 4C7 2.9 7.9 2 9 2ZM9 10.55C6.64 8.35 3.48 7 0 7V18C3.48 18 6.64 19.35 9 21.55C11.36 19.36 14.52 18 18 18V7C14.52 7 11.36 8.35 9 10.55ZM16 16.13C13.47 16.47 11.07 17.43 9 18.95C6.94 17.43 4.53 16.46 2 16.12V9.17C4.1 9.55 6.05 10.52 7.64 12L9 13.28L10.36 12.01C11.95 10.53 13.9 9.56 16 9.18V16.13V16.13Z"
        fill={active ? activeColor : inactiveColor}
      />
    </svg>
  );
}

export function SettingsSvg(active) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.43 10.98C17.47 10.66 17.5 10.34 17.5 10C17.5 9.66 17.47 9.34 17.43 9.02L19.54 7.37C19.73 7.22 19.78 6.95 19.66 6.73L17.66 3.27C17.57 3.11 17.4 3.02 17.22 3.02C17.16 3.02 17.1 3.03 17.05 3.05L14.56 4.05C14.04 3.65 13.48 3.32 12.87 3.07L12.49 0.42C12.46 0.18 12.25 0 12 0H8.00002C7.75002 0 7.54002 0.18 7.51002 0.42L7.13002 3.07C6.52002 3.32 5.96002 3.66 5.44002 4.05L2.95002 3.05C2.89002 3.03 2.83002 3.02 2.77002 3.02C2.60002 3.02 2.43002 3.11 2.34002 3.27L0.340022 6.73C0.210022 6.95 0.270023 7.22 0.460023 7.37L2.57002 9.02C2.53002 9.34 2.50002 9.67 2.50002 10C2.50002 10.33 2.53002 10.66 2.57002 10.98L0.460023 12.63C0.270023 12.78 0.220022 13.05 0.340022 13.27L2.34002 16.73C2.43002 16.89 2.60002 16.98 2.78002 16.98C2.84002 16.98 2.90002 16.97 2.95002 16.95L5.44002 15.95C5.96002 16.35 6.52002 16.68 7.13002 16.93L7.51002 19.58C7.54002 19.82 7.75002 20 8.00002 20H12C12.25 20 12.46 19.82 12.49 19.58L12.87 16.93C13.48 16.68 14.04 16.34 14.56 15.95L17.05 16.95C17.11 16.97 17.17 16.98 17.23 16.98C17.4 16.98 17.57 16.89 17.66 16.73L19.66 13.27C19.78 13.05 19.73 12.78 19.54 12.63L17.43 10.98V10.98ZM15.45 9.27C15.49 9.58 15.5 9.79 15.5 10C15.5 10.21 15.48 10.43 15.45 10.73L15.31 11.86L16.2 12.56L17.28 13.4L16.58 14.61L15.31 14.1L14.27 13.68L13.37 14.36C12.94 14.68 12.53 14.92 12.12 15.09L11.06 15.52L10.9 16.65L10.7 18H9.30002L9.11002 16.65L8.95002 15.52L7.89002 15.09C7.46002 14.91 7.06002 14.68 6.66002 14.38L5.75002 13.68L4.69002 14.11L3.42002 14.62L2.72002 13.41L3.80002 12.57L4.69002 11.87L4.55002 10.74C4.52002 10.43 4.50002 10.2 4.50002 10C4.50002 9.8 4.52002 9.57 4.55002 9.27L4.69002 8.14L3.80002 7.44L2.72002 6.6L3.42002 5.39L4.69002 5.9L5.73002 6.32L6.63002 5.64C7.06002 5.32 7.47002 5.08 7.88002 4.91L8.94002 4.48L9.10002 3.35L9.30002 2H10.69L10.88 3.35L11.04 4.48L12.1 4.91C12.53 5.09 12.93 5.32 13.33 5.62L14.24 6.32L15.3 5.89L16.57 5.38L17.27 6.59L16.2 7.44L15.31 8.14L15.45 9.27ZM10 6C7.79002 6 6.00002 7.79 6.00002 10C6.00002 12.21 7.79002 14 10 14C12.21 14 14 12.21 14 10C14 7.79 12.21 6 10 6ZM10 12C8.90002 12 8.00002 11.1 8.00002 10C8.00002 8.9 8.90002 8 10 8C11.1 8 12 8.9 12 10C12 11.1 11.1 12 10 12Z"
        fill={active ? activeColor : inactiveColor}
      />
    </svg>
  );
}

export function AnnouncementsSvg(active) {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 2C1 1.44772 1.44772 1 2 1H16C16.5523 1 17 1.44772 17 2V11.8858C17 12.4599 16.5177 12.9161 15.9445 12.8843L9.84178 12.5452C9.08379 12.5031 8.33802 12.7499 7.75482 13.2359L2.64019 17.4981C1.98886 18.0409 1 17.5778 1 16.7299V2Z"
        stroke={active ? activeColor : inactiveColor}
        stroke-width="2"
      />
    </svg>
  );
}

export function StudentsSvg(active) {
  return (
    <svg
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="7"
        cy="5"
        r="4"
        stroke={active ? activeColor : inactiveColor}
        stroke-width="2"
      />
      <circle
        cx="7"
        cy="5"
        r="4"
        stroke={active ? activeColor : inactiveColor}
        stroke-width="2"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 17H14C14 13.134 10.866 10 7 10C3.13401 10 0 13.134 0 17H2C2 14.2386 4.23858 12 7 12C9.76142 12 12 14.2386 12 17Z"
        fill={active ? activeColor : inactiveColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 17H14C14 13.134 10.866 10 7 10C3.13401 10 0 13.134 0 17H2C2 14.2386 4.23858 12 7 12C9.76142 12 12 14.2386 12 17Z"
        fill={active ? activeColor : inactiveColor}
      />
      <circle
        cx="14.9117"
        cy="6.5"
        r="1.5"
        stroke={active ? activeColor : inactiveColor}
        stroke-width="2"
      />
      <circle
        cx="14.9117"
        cy="6.5"
        r="1.5"
        stroke={active ? activeColor : inactiveColor}
        stroke-width="2"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.4118 13H18.4118C18.4118 10.9533 16.7526 9.29413 14.7059 9.29413C12.6592 9.29413 11 10.9533 11 13H13C13 12.0579 13.7637 11.2941 14.7059 11.2941C15.648 11.2941 16.4118 12.0579 16.4118 13Z"
        fill={active ? activeColor : inactiveColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.4118 13H18.4118C18.4118 10.9533 16.7526 9.29413 14.7059 9.29413C12.6592 9.29413 11 10.9533 11 13H13C13 12.0579 13.7637 11.2941 14.7059 11.2941C15.648 11.2941 16.4118 12.0579 16.4118 13Z"
        fill={active ? activeColor : inactiveColor}
      />
    </svg>
  );
}

export function CalendarSvg(active) {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 2H17V0H15V2H5V0H3V2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H2V9H18V20ZM18 7H2V4H18V7Z"
        fill={active ? activeColor : inactiveColor}
      />
    </svg>
  );
}
