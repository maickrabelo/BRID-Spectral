import React from 'react';
import { cn } from '@/src/lib/utils';

type SectionVariant = 'light' | 'paper' | 'dark' | 'graphite';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: SectionVariant;
  compact?: boolean;
}

export function Section({ children, className, variant = 'light', compact = false, ...props }: SectionProps) {
  const bgStyles = {
    light: 'bg-[#060608] text-white',
    paper: 'bg-[#0a0e17] text-white',
    dark: 'bg-gradient-to-b from-[#060608] via-[#0a0f18] to-[#060608] text-white',
    graphite: 'bg-[#0f1523] text-white',
  };

  return (
    <section 
      className={cn(
        'relative z-10',
        compact ? 'py-8 sm:py-12 lg:py-16' : 'py-12 sm:py-16 lg:py-24',
        bgStyles[variant],
        className
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
