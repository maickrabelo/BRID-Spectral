import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/src/lib/utils';

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
}

export function Reveal({ children, className, delay = 0, ...props }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const delays = {
    0: 'delay-[0s]',
    1: 'delay-[80ms]',
    2: 'delay-[160ms]',
    3: 'delay-[240ms]',
    4: 'delay-[320ms]',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-[800ms] ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[22px]',
        delays[delay],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
