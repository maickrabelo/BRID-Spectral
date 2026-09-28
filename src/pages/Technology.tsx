import React from 'react';
import { PageHero } from '@/src/components/ui/PageHero';
import { Section } from '@/src/components/layout/Section';
import { Eyebrow } from '@/src/components/ui/Eyebrow';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { Reveal } from '@/src/components/ui/Reveal';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export function Technology() {
  return (
    <>
      <PageHero 
        breadcrumb="Platform / Technology"
        eyebrow="The Spectral Engine"
        title={<>A computational architecture for states, transitions, stability and inverse engineering.</>}
        lead={<>The research programme originates from the Spectral Theory of Matter, a multi-volume theoretical framework investigating the organization, stability and transitions of physical states. BRID Spectral Technologies builds the engineering layer above it.</>}
      />

      <Section variant="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 lg:gap-24">
          <Reveal>
            <Eyebrow>Mathematical Foundation</Eyebrow>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-4 sm:mb-6">Published theory. Unpublished engineering.</h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              The research programme originates from the Spectral Theory of Matter, a multi-volume theoretical framework investigating the organization, stability and transitions of physical states.
            </p>
          </Reveal>
          
          <Reveal delay={1}>
            <Eyebrow>Computational Translation</Eyebrow>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-4 sm:mb-6">The engineering layer above the theory.</h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              BRID Spectral Technologies is developing the engineering layer that sits above the published theoretical foundation: computational representations, algorithms, parameterization methods, inverse-design procedures and experimental decision systems.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section variant="dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
          <Reveal>
            <Eyebrow>Proprietary Layer</Eyebrow>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-6 sm:mb-8">From Proprietary Mathematics to Industrial Technology</h2>
            <div className="border-l-2 border-blue-400 pl-4 sm:pl-6 py-2 text-base sm:text-[18px] text-white/90 mb-6 sm:mb-8 uppercase tracking-wide">
              The equations are the foundation.<br/>The engineering system is the product.
            </div>
            <div className="bg-[#0f1523] border border-white/10 p-5 sm:p-6 rounded-xl relative">
              <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-2 font-semibold">Principle</div>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">Established physics remains primary; the Spectral layer must improve prediction, design or control.</p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="flex flex-col mx-auto w-full max-w-sm">
              {[
                { label: 'Published Scientific Foundation', bg: 'bg-[#0f1523]', text: 'text-white/70 border border-white/10' },
                { label: 'Unpublished Mathematical Development', bg: 'bg-[#11192b]', text: 'text-white/80 border border-white/15' },
                { label: 'Spectral Algorithms', bg: 'bg-[#142038]', text: 'text-blue-300 border border-blue-500/30' },
                { label: 'Computational Implementation', bg: 'bg-[#172748]', text: 'text-blue-400 border border-blue-500/40' },
                { label: 'Proprietary Data', bg: 'bg-[#1b2f56]', text: 'text-blue-300 border border-blue-400/40' },
                { label: 'Experimental Validation', bg: 'bg-[#1f3764]', text: 'text-blue-200 border border-blue-400/50' },
                { label: 'Application-Specific IP', bg: 'bg-blue-500/25', text: 'text-blue-400 border-2 border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.5)]' },
              ].map((step, idx, arr) => (
                <React.Fragment key={step.label}>
                  <div className={cn("px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl text-center text-[11px] sm:text-[12px] uppercase tracking-wider sm:tracking-widest font-medium transition-transform", step.bg, step.text)}>
                    {step.label}
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="flex justify-center my-1 text-blue-400/60">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section variant="paper">
        <Reveal>
          <Eyebrow>Computational Modules</Eyebrow>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-4 sm:mb-6">The Spectral State Engine (SSE)</h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-4xl mb-8 sm:mb-16">
            Six modules under active development, moving from reusable computational infrastructure toward a pilot-ready industrial software layer.
          </p>
        </Reveal>

        <Reveal delay={1}>
          {/* Mobile view: Stacked module cards */}
          <div className="block md:hidden space-y-3 mb-8">
            {[
              { m: 'SSE Core', f: 'State-space construction and model orchestration', o: 'Reusable computational engine' },
              { m: 'SSE Stability', f: 'Local stability, basin and perturbation analysis', o: 'Robustness maps' },
              { m: 'SSE Transitions', f: 'Accessibility and transition pathway analysis', o: 'Candidate control routes' },
              { m: 'SSE Inverse', f: 'Optimization from desired function to control variables', o: 'Ranked candidate designs' },
              { m: 'SSE Materials', f: 'Materials-specific descriptors and screening', o: 'Spectral Materials Engine' },
              { m: 'SSE Industrial API', f: 'Data ingestion, visualization and integrations', o: 'Pilot-ready software layer' },
            ].map((row) => (
              <div key={row.m} className="bg-[#0f1523] border border-white/10 rounded-xl p-4 space-y-2">
                <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{row.m}</div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Function</div>
                  <div className="text-xs text-white/80">{row.f}</div>
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Initial Output</div>
                  <div className="text-xs text-blue-300/90">{row.o}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop view: Table */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0f1523] text-blue-400 text-[10px] uppercase tracking-widest border-b border-white/10">
                  <th className="px-6 py-4">Module</th>
                  <th className="px-6 py-4">Function</th>
                  <th className="px-6 py-4">Initial Output</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { m: 'SSE Core', f: 'State-space construction and model orchestration', o: 'Reusable computational engine' },
                  { m: 'SSE Stability', f: 'Local stability, basin and perturbation analysis', o: 'Robustness maps' },
                  { m: 'SSE Transitions', f: 'Accessibility and transition pathway analysis', o: 'Candidate control routes' },
                  { m: 'SSE Inverse', f: 'Optimization from desired function to control variables', o: 'Ranked candidate designs' },
                  { m: 'SSE Materials', f: 'Materials-specific descriptors and screening', o: 'Spectral Materials Engine' },
                  { m: 'SSE Industrial API', f: 'Data ingestion, visualization and integrations', o: 'Pilot-ready software layer' },
                ].map((row, idx) => (
                  <tr key={row.m} className={cn("border-b border-white/5", idx % 2 === 0 ? "bg-white/[0.02]" : "bg-[#0c101c]")}>
                    <td className="px-6 py-5 text-blue-400 text-sm font-medium">{row.m}</td>
                    <td className="px-6 py-5 text-white/80 text-sm">{row.f}</td>
                    <td className="px-6 py-5 text-white/80 text-sm">{row.o}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      <Section variant="graphite">
        <Reveal>
          <Eyebrow>Intellectual Property</Eyebrow>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-8 sm:mb-16">Protected by Architecture, Not by a Single Equation</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <Reveal delay={1}>
            <Card variant="dark" className="h-full flex flex-col">
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-blue-400">Layer 01 — Background Science</h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">Published scientific research and theoretical foundations.</p>
            </Card>
          </Reveal>
          <Reveal delay={2}>
            <Card variant="dark" className="h-full flex flex-col">
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-blue-400">Layer 02 — Proprietary Know-How</h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">Unpublished mathematical extensions, algorithms, parameterization, computational architecture and research workflows.</p>
            </Card>
          </Reveal>
          <Reveal delay={3}>
            <Card variant="dark" className="h-full flex flex-col">
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-blue-400">Layer 03 — Foreground IP</h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">New software, processes, materials, designs and patentable technologies generated through validation and industrial development.</p>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={1}>
          <div className="text-[12px] sm:text-[14px] uppercase tracking-wider text-blue-400 mb-4 sm:mb-8 font-semibold">
            IP First. Publication Second.
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight max-w-3xl mb-8 sm:mb-12">The equations are the foundation. The engineering system is the product.</h2>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6">
            <Button variant="primary" as={Link} to="/validation" withArrow className="w-full sm:w-auto">
              See the Validation Model
            </Button>
            <Button variant="outline-dark" as={Link} to="/applications" withArrow className="w-full sm:w-auto">
              See Applications
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
