import React from "react";

export function Neon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 135 32" className={className} fill="currentColor" {...props}>
      <g transform="translate(0, 4) scale(0.38)">
        <path d="M63 0.0177909V63.5526L38.4178 42.2501V63.5526H0V0L63 0.0177909ZM7.72251 55.8389H30.6953V25.3238L55.2779 47.0476V7.72922L7.72251 7.71559V55.8389Z" />
      </g>
      <text x="34" y="23" fill="currentColor" fontSize="19" fontWeight="800" letterSpacing="0.06em" fontFamily="system-ui, -apple-system, sans-serif">
        NEON
      </text>
    </svg>
  );
}
