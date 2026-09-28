import React from 'react';
import { Eyebrow } from './Eyebrow';

interface PageHeroProps {
  breadcrumb: string;
  eyebrow: string;
  title: React.ReactNode;
  lead: React.ReactNode;
}

export function PageHero({ breadcrumb, eyebrow, title, lead }: PageHeroProps) {
  return (
    <div className="relative pt-24 sm:pt-32 lg:pt-40 pb-10 sm:pb-16 lg:pb-24 overflow-hidden bg-[#060608]">
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-white/50 text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest mb-4 sm:mb-8 flex items-center gap-2.5">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa] shrink-0"></div>
          <span className="truncate">{breadcrumb}</span>
        </div>
        
        <Eyebrow>{eyebrow}</Eyebrow>
        
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-semibold mb-4 sm:mb-8 max-w-4xl leading-tight lg:leading-[1.1] tracking-tight">
          {title}
        </h1>
        
        <p className="text-sm sm:text-base lg:text-lg text-white/70 max-w-3xl font-light leading-relaxed">
          {lead}
        </p>
      </div>
    </div>
  );
}
