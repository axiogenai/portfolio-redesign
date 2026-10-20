'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/base-ui/button';
import { Card } from '@/components/base-ui/card';
import { ArrowRight } from 'lucide-react';
import { FaArrowRight } from 'react-icons/fa6';

export interface ErrorHeroProps {
  code?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
  onAction?: () => void;
}

function BackgroundGrid() {
  return (
    <div className="mask-size-2xl mask-radial-from-muted absolute inset-0 z-0 overflow-hidden rounded-lg mask-radial-to-transparent mask-radial-at-center pointer-events-none">
      <div className="grid h-full w-full grid-cols-12 grid-rows-6 opacity-40">
        {Array.from({ length: 72 }).map((_, index) => (
          <div
            key={index}
            className="border-border/30 hover:bg-white/[0.04] border transition-colors duration-300"
          />
        ))}
      </div>
    </div>
  );
}

function ErrorContent({
  title,
  description,
  buttonLabel,
  href = '/',
  onAction,
}: Omit<ErrorHeroProps, 'code'>) {
  const buttonInner = (
    <Button
      onClick={onAction}
      className="group pointer-events-auto rounded-lg px-6 py-3 cursor-pointer shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.7),inset_0_-2px_4px_0_rgba(0,0,0,0.2)] dark:shadow-[inset_0_-2px_4px_0_rgba(0,0,0,0.2),inset_0_2px_4px_0_rgba(255,255,255,0.15)] flex items-center gap-2"
      size="lg"
    >
      <span>{buttonLabel}</span>
      <span className="flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
        <ArrowRight className="size-4" />
      </span>
    </Button>
  );

  return (
    <div className="relative z-10 flex max-w-md flex-col items-center justify-center gap-6 text-center sm:items-start sm:text-start">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-zinc-900/80 border border-zinc-800 text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          HTTP 404 &bull; Resource Missing
        </div>
        <h1 className="text-foreground text-3xl sm:text-4xl lg:text-5xl leading-tight font-bold tracking-tight">
          {title}
        </h1>
        <p className="text-muted-foreground max-w-sm text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {href ? (
        <Link href={href} className="pointer-events-auto">
          {buttonInner}
        </Link>
      ) : (
        buttonInner
      )}
    </div>
  );
}

function ErrorCode({ code }: Pick<ErrorHeroProps, 'code'>) {
  return (
    <div className="pointer-events-none relative z-10 flex items-center justify-center">
      <span className="text-foreground/20 font-mono translate-y-4 text-[7rem] leading-none font-extralight tracking-tighter select-none sm:translate-y-0 sm:text-[9rem] md:text-[11rem] lg:text-[13rem]">
        {code}
      </span>
    </div>
  );
}

export function SystemErrorPanel({
  code = '404',
  title = 'This destination isn’t accessible.',
  description = 'The resource you attempted to open may have been moved, archived, or temporarily disconnected from the network.',
  buttonLabel = 'Return to Base',
  href = '/',
  onAction,
}: ErrorHeroProps) {
  return (
    <div className="p-4 w-full flex items-center justify-center min-h-[70vh]">
      <Card className="bg-zinc-950/80 border border-zinc-800/80 mx-auto relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-14 w-full max-w-5xl shadow-2xl backdrop-blur-md">
        <BackgroundGrid />

        <div className="relative z-10 grid min-h-[420px] grid-cols-1 gap-10 sm:grid-cols-2 sm:items-center">
          <div className="order-2 sm:order-1 flex justify-center sm:justify-start">
            <ErrorContent
              title={title}
              description={description}
              buttonLabel={buttonLabel}
              href={href}
              onAction={onAction}
            />
          </div>

          <div className="order-1 sm:order-2 flex justify-center">
            <ErrorCode code={code} />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default SystemErrorPanel;
