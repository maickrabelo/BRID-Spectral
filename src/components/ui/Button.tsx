import React from 'react';
import { cn } from '@/src/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline-dark' | 'outline-light';
  withArrow?: boolean;
  as?: any;
  to?: string;
  href?: string;
}

export function Button({ 
  children, 
  className, 
  variant = 'primary', 
  withArrow = false,
  as: Component = 'button',
  ...props 
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all whitespace-nowrap uppercase tracking-wider sm:tracking-widest text-[11px] sm:text-xs px-6 sm:px-8 py-3 sm:py-3.5 min-h-[44px] group active:scale-[0.98]";
  
  const variants = {
    primary: "bg-blue-400 text-[#0a0a0f] hover:bg-blue-300 shadow-[0_0_20px_rgba(96,165,250,0.3)]",
    'outline-dark': "bg-transparent border border-white/20 text-white hover:bg-white/5",
    'outline-light': "bg-transparent border border-white/20 text-white hover:bg-white/5",
  };

  return (
    <Component
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
      {withArrow && (
        <ArrowRight className="ml-2 sm:ml-3 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </Component>
  );
}
