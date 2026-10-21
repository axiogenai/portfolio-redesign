"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Shopify } from "@/components/ui/logo-cloud-2-utils/shopify";
import { Sentry } from "@/components/ui/logo-cloud-2-utils/sentry";
import { VercelFull } from "@/components/ui/logo-cloud-2-utils/vercel";
import { SupabaseFull } from "@/components/ui/logo-cloud-2-utils/supabase";
import { Cloudflare } from "@/components/ui/logo-cloud-2-utils/cloudflare";
import { Microsoft } from "@/components/ui/logo-cloud-2-utils/microsoft";
import { Payload } from "@/components/ui/logo-cloud-2-utils/payload";
import { PostHog } from "@/components/ui/logo-cloud-2-utils/posthog";
import { Neon } from "@/components/ui/logo-cloud-2-utils/neon";
import { Algolia } from "@/components/ui/logo-cloud-2-utils/algolia";

export default function InfrastructurePartners() {
  return (
    <div className="w-full border-t border-white/10 py-12">
      <div className="group relative m-auto max-w-6xl px-4 sm:px-6">
        {/* Floating pill link on hover */}
        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
          <Link
            href="/about-us"
            className="inline-flex items-center text-xs sm:text-sm font-medium text-white duration-150 hover:opacity-85 bg-neutral-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl"
          >
            <span>Meet Our Infrastructure &amp; Ecosystem Partners</span>
            <ChevronRight className="ml-1 inline-block size-3.5" />
          </Link>
        </div>

        {/* Strictly 5 Columns across all views */}
        <div
          className="group-hover:blur-xs **:fill-white [&_svg]:fill-current [&_svg]:text-white mx-auto transition-all duration-500 group-hover:opacity-35 items-center justify-items-center w-full"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
            columnGap: "clamp(0.75rem, 2.5vw, 2.5rem)",
            rowGap: "2.5rem",
          }}
        >
          <div className="flex items-center justify-center w-full">
            <Shopify className="h-5 sm:h-6 w-auto max-w-[125px]" />
          </div>
          <div className="flex items-center justify-center w-full">
            <Sentry className="h-5 sm:h-6 w-auto max-w-[125px]" />
          </div>
          <div className="flex items-center justify-center w-full">
            <VercelFull className="h-4 sm:h-5 w-auto max-w-[115px]" />
          </div>
          <div className="flex items-center justify-center w-full">
            <SupabaseFull className="h-5 sm:h-6 w-auto max-w-[130px]" />
          </div>
          <div className="flex items-center justify-center w-full">
            <Cloudflare className="h-4 sm:h-5 w-auto max-w-[135px]" />
          </div>
          <div className="flex items-center justify-center w-full">
            <Microsoft className="h-5 sm:h-6 w-auto max-w-[125px]" />
          </div>
          <div className="flex items-center justify-center w-full">
            <Payload className="h-5 sm:h-6 w-auto max-w-[120px]" />
          </div>
          <div className="flex items-center justify-center w-full">
            <PostHog className="h-5 sm:h-6 w-auto max-w-[120px]" />
          </div>
          <div className="flex items-center justify-center w-full">
            <Neon className="h-5 sm:h-6 w-auto max-w-[115px]" />
          </div>
          <div className="flex items-center justify-center w-full">
            <Algolia className="h-5 sm:h-6 w-auto max-w-[120px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
