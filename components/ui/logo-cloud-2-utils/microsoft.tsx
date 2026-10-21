import React from "react";

export function Microsoft({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 32" className={className} fill="currentColor" {...props}>
      <g transform="translate(0, 5) scale(0.085)">
        <path d="M121.666 121.666H0V0h121.666z" />
        <path d="M256 121.666H134.335V0H256z" fillOpacity="0.8" />
        <path d="M121.663 256.002H0V134.336h121.663z" fillOpacity="0.8" />
        <path d="M256 256.002H134.335V134.336H256z" fillOpacity="0.6" />
      </g>
      <text x="32" y="22" fill="currentColor" fontSize="18" fontWeight="600" letterSpacing="-0.02em" fontFamily="system-ui, -apple-system, sans-serif">
        Microsoft
      </text>
    </svg>
  );
}
