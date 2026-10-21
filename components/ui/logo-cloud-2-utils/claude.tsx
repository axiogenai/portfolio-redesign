import React from "react";

export function Claude({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V15a1 1 0 0 1 2 0v1.93A8 8 0 0 1 8.07 10H10a1 1 0 0 1 0 2H8.07A8 8 0 0 1 15 16.93z" />
    </svg>
  );
}
