import React, { useState } from 'react';
import { PageHero } from '@/src/components/ui/PageHero';
import { Section } from '@/src/components/layout/Section';
import { Eyebrow } from '@/src/components/ui/Eyebrow';
import { Reveal } from '@/src/components/ui/Reveal';
import { Button } from '@/src/components/ui/Button';
import { Link } from 'react-router-dom';
import { Plus, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const SECTORS = [
  {
    id: '01',
    title: 'Advanced Materials',
    status: 'Current primary focus',
    challenge: 'Finding combinations of composition, structure and processing that satisfy multiple target properties simultaneously.',
    approach: 'State-space representation, candidate prioritization and inverse design applied to material configurations.',
    validation: 'Conventional simulation, synthesis and characterization, benchmarked against withheld experimental data.',
    commercial: 'Joint development → IP → licensing / industrial implementation.'
  },
  {
    id: '02',
    title: 'Industrial Systems',
    status: 'Prospective programme',
    challenge: 'Detecting and predicting stability, drift and failure states across complex industrial assets and processes.',
    approach: 'State and transition mapping of operating regimes; stability and perturbation analysis.',
    validation: 'Comparison against sensor data, digital twins and historical operating records.',
    commercial: 'Paid feasibility study → pilot deployment → software licensing.'
  },
  {
    id: '03',
    title: 'Energy',
    status: 'Prospective programme',
    challenge: 'Identifying stable, efficient operating regimes for energy conversion, storage and routing under variable conditions.',
    approach: 'Spectral mapping of energy-pathway state space; transition and stability analysis.',
    validation: 'Benchmarking against established energy models and pilot-scale testing.',
    commercial: 'Joint development with energy-sector partners → licensing.'
  },
  {
    id: '04',
    title: 'Photonics',
    status: 'Prospective programme',
    challenge: 'Finding stable, controllable electromagnetic and optical configurations for a target performance envelope.',
    approach: 'State-space search over resonant and optical configurations; inverse design of structures.',
    validation: 'Comparison with established electromagnetic simulation and optical characterization.',
    commercial: 'Feasibility study → joint prototyping → licensing.'
  },
  {
    id: '05',
    title: 'Semiconductors',
    status: 'Later stage',
    challenge: 'Navigating vast electronic-material and process configuration spaces for target electrical and thermal properties.',
    approach: 'Spectral state representation of electronic materials; candidate reduction ahead of DFT and device simulation.',
    validation: 'Benchmarked against known semiconductor systems before any prospective search.',
    commercial: 'Later-stage programme, contingent on materials-engine validation.'
  },
  {
    id: '06',
    title: 'Mobility',
    status: 'Prospective programme',
    challenge: 'Structural and sensing systems that require lightweight, resilient, failure-aware configurations.',
    approach: 'Physical-state intelligence applied to structural and sensing systems.',
    validation: 'Comparison with structural simulation and test-rig data.',
    commercial: 'Industrial R&D engagement with mobility-sector partners.'
  },
  {
    id: '07',
    title: 'Aerospace',
    status: 'Long-horizon',
    challenge: 'Extreme-environment materials and energy systems operating near physical limits.',
    approach: 'Spectral analysis of stability regions under thermal, radiative and mechanical stress.',
    validation: 'Conventional simulation, specialist laboratory testing, staged validation.',
    commercial: 'Long-horizon programme, funded only by later evidence, partnerships or dedicated research capital.'
  },
  {
    id: '08',
    title: 'Critical Infrastructure',
    status: 'Prospective programme',
    challenge: 'Monitoring and predicting the physical state of infrastructure systems under stress or degradation.',
    approach: 'Physical-state intelligence — states, transitions and stability — applied to infrastructure monitoring.',
    validation: 'Comparison against sensor networks, inspection records and structural models.',
    commercial: 'Paid feasibility / R&D → pilot → software / API licensing.'
  }
];

export function Applications() {
  const [openId, setOpenId] = useState<string | null>('01');

  return (
    <>
      <PageHero 
        breadcrumb="Platform / Applications"
        eyebrow="Applications"
        title="From Mathematics to Industrial Problems"
        lead="Eight sectors where a state-space engineering layer may offer measurable value. Each begins as a hypothesis to be tested — not a delivered result."
      />

      <Section variant="light">
        <Reveal>
          <Eyebrow>By Sector</Eyebrow>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-8 sm:mb-16 max-w-4xl">Select a sector to see the problem, approach, validation method and commercial pathway.</h2>
        </Reveal>

        <div className="flex flex-col gap-2.5 sm:gap-3 mb-12 sm:mb-16">
          {SECTORS.map((sector, idx) => {
            const isOpen = openId === sector.id;
            return (
              <Reveal key={sector.id} delay={Math.min(idx % 4, 3) as any}>
                <div className={cn("border border-white/10 rounded-xl overflow-hidden transition-all duration-300", isOpen ? "bg-[#0f1523]" : "bg-white/5 hover:border-white/10")}>
                  <button 
                    onClick={() => setOpenId(isOpen ? null : sector.id)}
                    className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between min-h-[52px]"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 sm:gap-6 pr-2">
                      <span className="text-blue-400 font-mono text-sm sm:text-base font-semibold">{sector.id}</span>
                      <span className="text-sm sm:text-[18px] text-white/90 uppercase tracking-wide font-medium">{sector.title}</span>
                    </div>
                    <div className={cn("transition-transform duration-300 text-white/50 shrink-0", isOpen ? "rotate-45 text-blue-400" : "")}>
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </button>
                  
                  <div className={cn("grid transition-all duration-500 ease-in-out border-t border-white/10", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-6 pb-6 sm:pb-8 pt-4">
                        <div className="inline-block border border-blue-400/30 bg-blue-500/10 text-blue-400 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                          {sector.status}
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
                          <div>
                            <h4 className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Industrial Challenge</h4>
                            <p className="text-xs sm:text-[14px] text-white/80 leading-relaxed">{sector.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Spectral Approach</h4>
                            <p className="text-xs sm:text-[14px] text-white/80 leading-relaxed">{sector.approach}</p>
                          </div>
                          <div>
                            <h4 className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Validation</h4>
                            <p className="text-xs sm:text-[14px] text-white/80 leading-relaxed">{sector.validation}</p>
                          </div>
                          <div>
                            <h4 className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Commercial Pathway</h4>
                            <p className="text-xs sm:text-[14px] text-white/80 leading-relaxed">{sector.commercial}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="bg-[#0f1523] p-5 sm:p-6 border-l-2 border-l-blue-400 rounded-xl mb-10 sm:mb-16 shadow-[0_0_15px_rgba(96,165,250,0.1)]">
            <p className="text-white/90 text-sm sm:text-[15px] leading-relaxed">
              Advanced Materials is the company's current primary validation focus. All other sectors are prospective application areas to be tested only after the materials engine demonstrates measurable predictive or design value.
            </p>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-6 sm:mb-10 max-w-3xl">A theory becomes engineering only when it survives experiment.</h2>
          <Button variant="primary" as={Link} to="/validation" withArrow className="w-full sm:w-auto">
            See the Validation Model
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
