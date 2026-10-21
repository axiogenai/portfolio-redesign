import React from "react";

export function Hulu({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 32" className={className} fill="currentColor" {...props}>
      <path d="M12.4 0v11.6C14.2 9.5 17 8.3 20.3 8.3c7.2 0 11.3 4.9 11.3 12.8V32h-7.7v-9.6c0-4.6-2.1-7.1-5.7-7.1-3.7 0-5.8 2.6-5.8 7.1V32H4.7V0h7.7zm30.3 8.8h7.7V22c0 2.8 1.4 4 3.9 4 2.5 0 3.9-1.2 3.9-4V8.8h7.7V21c0 7.8-4.5 11.4-11.6 11.4-7.1 0-11.6-3.6-11.6-11.4V8.8zm33.1-8.8h7.7V32h-7.7V0z" />
    </svg>
  );
}
