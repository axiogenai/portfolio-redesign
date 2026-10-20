"use client";

import React from "react";

interface Partner {
  name: string;
  role: string;
  badgeText: string;
  href: string;
  svg: React.ReactNode;
}

const partners: Partner[] = [
  {
    name: "Microsoft for Startups",
    role: "Cloud & AI Infrastructure",
    badgeText: "Founders Hub",
    href: "https://foundershub.startups.microsoft.com/",
    svg: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 23 23" fill="none">
        <rect width="10.5" height="10.5" fill="#f25022" />
        <rect x="12.5" width="10.5" height="10.5" fill="#7fba00" />
        <rect y="12.5" width="10.5" height="10.5" fill="#00a4ef" />
        <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#ffb900" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    role: "Frontend Cloud & Edge",
    badgeText: "Powered by Vercel",
    href: "https://vercel.com?utm_source=team-axiogen&utm_campaign=oss",
    svg: (
      <svg className="w-4 h-4 shrink-0 fill-current text-white" viewBox="0 0 1155 1000">
        <path d="m577.3 0 577.4 1000H0z" />
      </svg>
    ),
  },
  {
    name: "Cloudflare",
    role: "Edge Security & Workers",
    badgeText: "Protected by Cloudflare",
    href: "https://www.cloudflare.com/",
    svg: (
      <svg className="w-5 h-4 shrink-0" viewBox="0 0 48 32" fill="none">
        <path
          d="M37.5 13.5c-.8-4.5-4.7-8-9.5-8-3.7 0-6.9 2-8.5 5.1-1-.4-2.1-.6-3.2-.6-4.6 0-8.3 3.6-8.5 8.1C3.4 18.7 0 22.4 0 27c0 5 4 9 9 9h29c5.5 0 10-4.5 10-10 0-5.1-3.8-9.3-8.8-9.8l-1.7-.2v-2.5z"
          fill="#F6821F"
        />
        <path
          d="M37.8 26H18.7c-.5 0-.9-.3-1-.7-.2-.6.2-1.3.8-1.4l19.5-1.9c1.6-.2 3-1.4 3.4-3 .1-.4.5-.6.9-.6.6 0 1 .4 1.1 1 .5 3.6-2 6.6-6.6 6.6z"
          fill="#FAAD3F"
        />
      </svg>
    ),
  },
  {
    name: "Sentry",
    role: "Telemetry & Performance",
    badgeText: "Monitored with Sentry",
    href: "https://sentry.io/",
    svg: (
      <svg className="w-4 h-4 shrink-0 fill-current text-white" viewBox="0 0 72 66">
        <path d="M29.5 0C13.2 0 0 13.2 0 29.5c0 7.4 2.8 14.2 7.4 19.4L18.8 37c-1.4-2.2-2.2-4.8-2.2-7.5 0-7.7 6.2-13.9 13.9-13.9 4.3 0 8.2 2 10.8 5.1l11.6-11.6C46.8 3.4 38.6 0 29.5 0zm19.9 14.5L37.8 26.1c1.4 2.2 2.2 4.8 2.2 7.5 0 7.7-6.2 13.9-13.9 13.9-4.3 0-8.2-2-10.8-5.1L3.7 54C9.8 61.2 18.9 65.8 29.5 65.8 45.8 65.8 59 52.6 59 36.3c0-8.3-3.4-15.8-8.9-21.3l-.7-.5z" />
      </svg>
    ),
  },
  {
    name: "Algolia",
    role: "Instant Search",
    badgeText: "Search by Algolia",
    href: "https://www.algolia.com/",
    svg: (
      <svg className="w-4 h-4 shrink-0 fill-current text-[#5468FF]" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 14.64l-3.21 3.21a1.2 1.2 0 01-1.7 0l-3.21-3.21a1.2 1.2 0 010-1.7l3.21-3.21a1.2 1.2 0 011.7 0l3.21 3.21a1.2 1.2 0 010 1.7z" />
      </svg>
    ),
  },
  {
    name: "MongoDB Atlas",
    role: "Vector Database",
    badgeText: "MongoDB Startups",
    href: "https://www.mongodb.com/",
    svg: (
      <svg className="w-3.5 h-4 shrink-0 fill-current text-[#00ED64]" viewBox="0 0 24 24">
        <path d="M12 0C11.5 0 9 6.5 9 12c0 5 2.5 8 3 12 .5-4 3-7 3-12 0-5.5-2.5-12-3-12z" />
      </svg>
    ),
  },
];

export default function InfrastructurePartners() {
  return (
    <div className="w-full border-t border-white/10 pt-8 pb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-400">
            Backed &amp; Powered By
          </p>
          <h4 className="text-sm sm:text-base font-bold text-white tracking-tight mt-0.5">
            Cloud, Security &amp; Developer Infrastructure
          </h4>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00ED64]" />
          <span>PRODUCTION-TIER ECOSYSTEM</span>
        </div>
      </div>

      {/* Grid of Partner Sponsor Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 select-none"
            aria-label={`${partner.name} - ${partner.role}`}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="w-6 h-6 rounded flex items-center justify-center shrink-0">
                {partner.svg}
              </div>
              <span className="text-[9px] font-mono text-neutral-400 group-hover:text-white transition-colors">
                ↗
              </span>
            </div>

            <div>
              <p className="text-xs font-bold text-white tracking-tight truncate">
                {partner.name}
              </p>
              <p className="text-[10px] font-mono text-neutral-400 tracking-tight truncate mt-0.5">
                {partner.badgeText}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
