import React from "react";

export function SupabaseFull({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 165 32" className={className} fill="currentColor" {...props}>
      <g transform="translate(0, 3) scale(0.24)">
        <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fillOpacity="0.8" />
        <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" />
      </g>
      <text x="36" y="23" fill="currentColor" fontSize="19" fontWeight="700" letterSpacing="-0.03em" fontFamily="system-ui, -apple-system, sans-serif">
        supabase
      </text>
    </svg>
  );
}
