const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const ArrowIcon = ({ size = 20 }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24">
    <path d="M5 19L19 5M9 5h10v10" />
  </svg>
);

export const HeartIcon = ({ size = 32 }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24">
    <path d="M12 21C5 15.5 3 12 3 8.8A4.8 4.8 0 0 1 7.8 4c1.8 0 3.2.9 4.2 2.4C13 4.9 14.4 4 16.2 4A4.8 4.8 0 0 1 21 8.8C21 12 19 15.5 12 21z" />
  </svg>
);

export const TargetIcon = ({ size = 32 }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
  </svg>
);

export const PlusIcon = ({ size = 18 }) => (
  <svg {...base} strokeWidth={2} width={size} height={size} viewBox="0 0 24 24">
    <path d="M12 4v16M4 12h16" />
  </svg>
);

