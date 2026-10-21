import React from "react";

export function Algolia({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 145 32" className={className} fill="currentColor" {...props}>
      <g transform="translate(0, 3) scale(1.1)">
        <path d="M10 3C4.5 3 0 7.5 0 13s4.5 10 10 10 10-4.5 10-10S15.5 3 10 3zm4.8 12.2l-2.7 2.7a1 1 0 01-1.4 0l-2.7-2.7a1 1 0 010-1.4l2.7-2.7a1 1 0 011.4 0l2.7 2.7a1 1 0 010 1.4z" />
      </g>
      <text x="34" y="23" fill="currentColor" fontSize="19" fontWeight="700" letterSpacing="-0.03em" fontFamily="system-ui, -apple-system, sans-serif">
        algolia
      </text>
    </svg>
  );
}
