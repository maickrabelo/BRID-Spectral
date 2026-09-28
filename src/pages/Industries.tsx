import React from 'react';
import { PageHero } from '@/src/components/ui/PageHero';
import { Section } from '@/src/components/layout/Section';
import { Eyebrow } from '@/src/components/ui/Eyebrow';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { Reveal } from '@/src/components/ui/Reveal';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export function Industries() {
  return (
    <>
      <PageHero 
        breadcrumb="Ecosystem / Industries"
        eyebrow="Industries"
        title="Industrial Problems Become Research Programmes"
        lead="Industrial outreach is problem-led rather than prestige-led. BRID Spectral Technologies supplies the proprietary search and inverse-design layer; industrial partners supply the target property, application requirements and scale-up context."
      />

      <Section variant="light">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { id: '01', title: 'Chemicals & Materials', desc: 'Relevant to materials discovery, process-state optimization and formulation search across chemical and materials groups.' },
            { id: '02', title: 'Industrial Technology', desc: 'Physical-state intelligence, digital twins and optimization for complex industrial equipment and processes.' },
            { id: '03', title: 'Energy', desc: 'Materials, plasma regimes, energy pathways and asset intelligence for energy conversion and storage systems.' },
            { id: '04', title: 'Semiconductors & Photonics', desc: 'Materials, electromagnetic states and optical systems relevant to semiconductor and photonic device development.' },
            { id: '05', title: 'Mobility', desc: 'Advanced materials, sensing and structural intelligence for lightweight, resilient transport systems.' },
            { id: '06', title: 'Aerospace', desc: 'Extreme-environment materials, energy systems and propulsion optimization for demanding operating conditions.' },
          ].map((item, idx) => (
            <Reveal key={item.id} delay={Math.min(idx % 3, 3) as any}>
              <Card variant="light" className="h-full flex flex-col">
                <div className="text-blue-400 font-mono text-sm mb-3 sm:mb-4">{item.id}</div>
                <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-4 text-white">{item.title}</h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section variant="paper">
        <Reveal>
          <Eyebrow>Target Industrial Ecosystem</Eyebrow>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-4 sm:mb-6">Categories of Future Technology Relationships</h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-4xl mb-8 sm:mb-12">
            Potential future technology relationships may include leading German and European industrial groups in chemicals, industrial automation, energy, mobility, aerospace and advanced manufacturing.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Reveal delay={1}>
            <Card variant="light" className="h-full">
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-blue-400">BASF-type materials and chemical groups</h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">Relevant where materials discovery, process-state optimization or formulation-search problems are well defined and measurable.</p>
            </Card>
          </Reveal>
          <Reveal delay={2}>
            <Card variant="light" className="h-full">
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-blue-400">Siemens-type industrial technology groups</h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">Relevant for physics-informed digital twins, industrial sensing, automation and cyber-physical state intelligence.</p>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={1}>
          <div className="bg-[#0f1523] p-5 sm:p-6 border-l-2 border-l-blue-400 rounded-xl relative">
            <p className="text-white/50 text-[11px] sm:text-[12px] uppercase tracking-wider leading-relaxed">
              Company names above are illustrative examples of the type of industrial group a given technology programme could eventually serve. Their inclusion does not imply an existing partnership, customer relationship, or endorsement of BRID Spectral Technologies.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section variant="light">
        <Reveal>
          {/* Mobile view: Stacked Commercial Routes */}
          <div className="block md:hidden space-y-3 mb-10">
            {[
              { r: 'Paid feasibility / R&D', d: 'Defined technical problem and benchmark', l: 'Project fees' },
              { r: 'Joint Development Agreement', d: 'Co-development with industrial partner', l: 'R&D fees + IP economics' },
              { r: 'Licensing', d: 'License protected software, process or material IP', l: 'Upfront + milestones + royalties' },
              { r: 'Software / API', d: 'Access to selected Spectral Engine modules', l: 'Subscription / enterprise license' },
              { r: 'Strategic spin-off', d: 'Separate vertical when justified by evidence', l: 'Equity value + licensing' },
            ].map((item) => (
              <div key={item.r} className="bg-[#0f1523] border border-white/10 rounded-xl p-4 space-y-2">
                <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{item.r}</div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Description</div>
                  <div className="text-xs text-white/80">{item.d}</div>
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Revenue Logic</div>
                  <div className="text-xs text-blue-300 font-medium">{item.l}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto mb-16 rounded-xl border border-white/10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0f1523] text-blue-400 text-[10px] uppercase tracking-widest border-b border-white/10">
                  <th className="px-6 py-4">Commercial Route</th>
                  <th className="px-6 py-4">Description</th>
                  <th className="px-6 py-4">Revenue Logic</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { r: 'Paid feasibility / R&D', d: 'Defined technical problem and benchmark', l: 'Project fees' },
                  { r: 'Joint Development Agreement', d: 'Co-development with industrial partner', l: 'R&D fees + IP economics' },
                  { r: 'Licensing', d: 'License protected software, process or material IP', l: 'Upfront + milestones + royalties' },
                  { r: 'Software / API', d: 'Access to selected Spectral Engine modules', l: 'Subscription / enterprise license' },
                  { r: 'Strategic spin-off', d: 'Separate vertical when justified by evidence', l: 'Equity value + licensing' },
                ].map((row, idx) => (
                  <tr key={row.r} className={cn("border-b border-white/5", idx % 2 === 0 ? "bg-white/[0.02]" : "bg-[#0c101c]")}>
                    <td className="px-6 py-5 text-blue-400 font-medium text-sm">{row.r}</td>
                    <td className="px-6 py-5 text-white/80 text-sm">{row.d}</td>
                    <td className="px-6 py-5 text-white/80 text-sm">{row.l}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-6 sm:mb-10 max-w-3xl">Bring us a problem worth solving.</h2>
          <Button variant="primary" as={Link} to="/contact" withArrow className="w-full sm:w-auto">
            Contact the Team
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
