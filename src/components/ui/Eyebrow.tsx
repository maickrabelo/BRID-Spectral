import React from 'react';
import { cn } from '@/src/lib/utils';

interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'cyan' | 'violet';
  centered?: boolean;
}

export function Eyebrow({ children, className, variant = 'cyan', centered = false, ...props }: EyebrowProps) {
  return (
    <div
      className={cn(
        "text-blue-400 text-xs font-bold tracking-widest uppercase mb-4",
        centered ? "text-center" : "text-left",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
