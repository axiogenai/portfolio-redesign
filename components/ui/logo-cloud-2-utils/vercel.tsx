import React from "react";

export function VercelFull({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 145 32" className={className} fill="currentColor" {...props}>
      <path d="M13 4l13 23H0z" />
      <text x="36" y="23" fill="currentColor" fontSize="20" fontWeight="700" letterSpacing="-0.04em" fontFamily="system-ui, -apple-system, sans-serif">
        Vercel
      </text>
    </svg>
  );
}
