import React from 'react';
import { PageHero } from '@/src/components/ui/PageHero';
import { Section } from '@/src/components/layout/Section';
import { Eyebrow } from '@/src/components/ui/Eyebrow';
import { Button } from '@/src/components/ui/Button';
import { Reveal } from '@/src/components/ui/Reveal';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export function Ecosystem() {
  return (
    <>
      <PageHero 
        breadcrumb="Ecosystem / Research Ecosystem"
        eyebrow="Target Research Ecosystem"
        title="Germany's Deep-Tech Infrastructure, Not Ours to Build"
        lead="Organizations shown on this page represent potential research infrastructure, collaboration environments or technology ecosystems. Their inclusion does not imply an existing partnership, endorsement or contractual relationship."
      />

      <Section variant="dark" className="text-center pt-12 sm:pt-24 pb-16 sm:pb-32 bg-[radial-gradient(circle_at_center,_#083344_0%,_#000000_70%)]">
        <Reveal>
          <div className="relative w-[180px] sm:w-[190px] h-[180px] sm:h-[190px] mx-auto rounded-2xl bg-black/60 border border-blue-500/30 flex flex-col items-center justify-center mb-12 sm:mb-24 z-10 shadow-[0_0_25px_rgba(96,165,250,0.3)]">
            <img 
              src="/logo-brid.png" 
              alt="BRID Spectral Technologies" 
              className="h-7 sm:h-8 w-auto object-contain px-2 mb-1 drop-shadow-[0_0_10px_rgba(34,169,242,0.3)]" 
            />
            <div className="text-[9px] uppercase tracking-widest text-white/60 mt-3 px-4 leading-relaxed">
              Mathematics · Computation<br/>IP · Scientific Direction
            </div>
            
            {/* Connecting lines for desktop */}
            <div className="absolute hidden lg:block top-1/2 left-full w-[150px] h-[1px] bg-blue-400/50" />
            <div className="absolute hidden lg:block top-1/2 right-full w-[150px] h-[1px] bg-blue-400/50" />
            <div className="absolute hidden lg:block left-1/2 top-full w-[1px] h-[80px] bg-blue-400/50" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12 max-w-6xl mx-auto mb-12 sm:mb-20 text-left">
          {[
            { t: 'Fraunhofer Ecosystem', r: 'Applied R&D · Engineering', i: ['Materials development', 'Synthesis', 'Testing', 'Prototype development'] },
            { t: 'DESY', r: 'Advanced Characterization', i: ['Photon science', 'PETRA III / PETRA IV', 'Advanced X-ray methods', 'Atomic / nanoscale investigation'] },
            { t: 'Helmholtz Ecosystem', r: 'Large-Scale Research', i: ['Physics', 'Materials', 'Energy', 'Scientific infrastructure'] },
            { t: 'Universities', r: 'Scientific Collaboration', i: ['Physics', 'Applied mathematics', 'Materials science', 'Computation'] },
            { t: 'Industry', r: 'Problem Owners · Scale & Market', i: ['BASF / Siemens-type groups', 'Application requirements', 'Validation and market access'] },
            { t: 'Funding', r: 'Co-Funded R&D · Scale-Up Capital', i: ['IFB Hamburg', 'European Innovation Council', 'Co-funded research grants'] },
          ].map((block, idx) => (
            <Reveal key={block.t} delay={Math.min(idx % 3, 3) as any}>
              <div className="bg-[#0f1523] border border-white/10 p-5 sm:p-8 rounded-2xl h-full flex flex-col relative z-20 hover:border-blue-500/30 transition-colors">
                <h3 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2 text-white">{block.t}</h3>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-blue-400 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-white/10">{block.r}</div>
                <ul className="space-y-2.5 sm:space-y-3 mt-auto text-xs sm:text-[13px] text-white/70">
                  {block.i.map(item => (
                    <li key={item} className="flex gap-2.5"><span className="text-blue-400">·</span> {item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2}>
          <div className="border border-white/10 bg-[#0f1523] p-5 sm:p-6 rounded-xl text-left max-w-4xl mx-auto">
            <p className="text-white/50 text-xs sm:text-[13px] leading-relaxed">
              Institutional names identify target ecosystems, public programmes or examples of adjacent research and industrial infrastructure. They do not imply an existing partnership, funding approval or endorsement of BRID Spectral Technologies.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section variant="graphite" className="text-center">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-8 max-w-4xl mx-auto leading-tight">
            WE DON'T NEED TO BUILD THE LABORATORY. GERMANY HAS ALREADY BUILT IT.
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Our strategy is to own the intellectual architecture while selectively accessing world-class external infrastructure for simulation, fabrication, measurement and validation.
          </p>
        </Reveal>
      </Section>

      <Section variant="light">
        <Reveal>
          <Eyebrow>Why Hamburg</Eyebrow>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-4 sm:mb-8 max-w-3xl">A Credible Location for an Asset-Light Deep-Tech Model</h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-4xl mb-6 sm:mb-12">
            Hamburg provides a credible location for an asset-light deep-tech model because DESY operates major photon-science infrastructure and an industry-facing innovation and technology-transfer function in the city. The wider German ecosystem adds Fraunhofer contract research, Helmholtz large-scale science, universities, industrial groups and public innovation programmes — multiple routes to test, validate and industrialize technologies without building every capability internally.
          </p>
          
          <div className="text-xs sm:text-[14px] uppercase tracking-wider text-blue-400 mb-6 sm:mb-8 font-semibold">
            Own the intelligence. Access the infrastructure.
          </div>
          <Button variant="primary" as={Link} to="/investors" withArrow className="w-full sm:w-auto">
            Investor Information
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
