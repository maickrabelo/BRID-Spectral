import React from 'react';
import { cn } from '@/src/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'light' | 'dark' | 'frontier';
  children: React.ReactNode;
}

export function Card({ variant = 'light', children, className, ...props }: CardProps) {
  const variants = {
    light: 'bg-[#0f1523] border border-white/10 rounded-2xl p-5 sm:p-8 hover:border-blue-500/30 transition-colors',
    dark: 'bg-[#151c2c] border border-blue-500/30 rounded-2xl p-5 sm:p-8 shadow-[0_0_30px_rgba(96,165,250,0.05)]',
    frontier: 'bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8 hover:border-blue-500/50 transition-colors',
  };

  return (
    <div className={cn(variants[variant], className)} {...props}>
      {children}
    </div>
  );
}
