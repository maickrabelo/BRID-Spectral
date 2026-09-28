import React from 'react';
import { PageHero } from '@/src/components/ui/PageHero';
import { Section } from '@/src/components/layout/Section';
import { Eyebrow } from '@/src/components/ui/Eyebrow';
import { Button } from '@/src/components/ui/Button';
import { Card } from '@/src/components/ui/Card';
import { Reveal } from '@/src/components/ui/Reveal';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export function About() {
  return (
    <>
      <PageHero 
        breadcrumb="Company / About"
        eyebrow="About"
        title="From Research to Engineering"
        lead="BRID Spectral Technologies is the deep-technology and computational engineering platform of BRID Logistics GmbH, headquartered in Hamburg, Germany."
      />

      <Section variant="light">
        <Reveal>
          <div className="max-w-4xl mb-12 sm:mb-16">
            <p className="text-[18px] sm:text-[22px] md:text-[24px] text-white font-medium leading-relaxed mb-6 sm:mb-8">
              The initiative was created to investigate the industrial implications of a long-term mathematical research programme and transform selected theoretical structures into computational tools, experimental programmes and potentially protectable technologies.
            </p>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              BRID Spectral Technologies is intentionally designed as an IP and computational-engineering nucleus rather than a capital-intensive laboratory. A compact scientific core in Hamburg formulates models, builds the Spectral State Engine, protects know-how, designs experiments and originates industrial programmes — while synthesis, specialized testing and characterization are performed through external research infrastructure and contract-research relationships.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <Reveal delay={1}>
            <Card variant="light" className="h-full">
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-blue-400">Our Mission</h3>
              <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed">To discover whether new mathematical representations of complex physical systems can generate measurable engineering advantages.</p>
            </Card>
          </Reveal>
          <Reveal delay={2}>
            <Card variant="light" className="h-full">
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-blue-400">Our Operating Principle</h3>
              <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed">Model → Predict → Test → Protect → Industrialize.</p>
            </Card>
          </Reveal>
          <Reveal delay={3}>
            <Card variant="light" className="h-full">
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-blue-400">Our Location</h3>
              <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed">Hamburg, Germany</p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section variant="dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          <Reveal>
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-6 sm:mb-8">Founder</h2>
            
            <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] rounded-full bg-[#0f1523] border border-blue-500/30 flex items-center justify-center text-[20px] sm:text-[24px] text-blue-400 shrink-0 shadow-[0_0_15px_rgba(96,165,250,0.2)]">
                MA
              </div>
              <div>
                <div className="text-[18px] sm:text-[20px] font-semibold text-white">Maurício Araquam</div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-blue-400 mt-1">Founder · CEO & Scientific Director</div>
              </div>
            </div>
            
            <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              Maurício Araquam leads the scientific programme, core intellectual property, and industrial and investor strategy of BRID Spectral Technologies. His work spans the long-term development of the Spectral Theory research programme and the entrepreneurial build-out of BRID's activity in Germany — including the transition from theoretical research toward applied, testable engineering.
            </p>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              As CEO & Scientific Director, he leads the company's scientific strategy, its Spectral Engine roadmap, and its relationships with research institutions and industrial partners.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section variant="paper">
        <Reveal>
          <Eyebrow>Structure</Eyebrow>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-8 sm:mb-10 max-w-3xl">Governance & Responsibilities</h2>
        </Reveal>

        <Reveal delay={1}>
          {/* Mobile view: Clean stacked cards */}
          <div className="block md:hidden space-y-3 mb-10">
            {[
              { r: 'CEO & Scientific Director — Maurício Araquam', d: 'Scientific programme, core IP, Spectral Engine, research partnerships, technology strategy, investor and industrial leadership' },
              { r: 'Administrative & Financial Director', d: 'Finance, runway, grants, governance, contract / IP administration, German / EU project administration, investor reporting' },
              { r: 'Scientific / Computational Team', d: 'Applied mathematics, computational physics, software engineering, data and model validation' },
              { r: 'Strategic Partnerships / BD', d: 'Industrial opportunity origination, research consortia, funding and commercial pipeline' },
              { r: 'Scientific Advisers', d: 'Independent domain review for materials, photonics, energy / plasma and other validated verticals — engaged as the programme matures' },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#0f1523] border border-white/10 rounded-xl p-4">
                <div className="text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wide">{item.r}</div>
                <div className="text-xs text-white/70 leading-relaxed">{item.d}</div>
              </div>
            ))}
          </div>

          {/* Desktop view: Elegant dark table */}
          <div className="hidden md:block overflow-x-auto mb-16 rounded-xl border border-white/10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0f1523] text-blue-400 text-[11px] uppercase tracking-wider border-b border-white/10">
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Initial Responsibility</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { r: 'CEO & Scientific Director — Maurício Araquam', d: 'Scientific programme, core IP, Spectral Engine, research partnerships, technology strategy, investor and industrial leadership' },
                  { r: 'Administrative & Financial Director', d: 'Finance, runway, grants, governance, contract / IP administration, German / EU project administration, investor reporting' },
                  { r: 'Scientific / Computational Team', d: 'Applied mathematics, computational physics, software engineering, data and model validation' },
                  { r: 'Strategic Partnerships / BD', d: 'Industrial opportunity origination, research consortia, funding and commercial pipeline' },
                  { r: 'Scientific Advisers', d: 'Independent domain review for materials, photonics, energy / plasma and other validated verticals — engaged as the programme matures' },
                ].map((row, idx) => (
                  <tr key={idx} className={cn("border-b border-white/5", idx % 2 === 0 ? "bg-white/[0.02]" : "bg-[#0c101c]")}>
                    <td className="px-6 py-4 font-semibold text-white text-sm max-w-[250px]">{row.r}</td>
                    <td className="px-6 py-4 text-white/70 text-sm leading-relaxed">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight max-w-3xl mb-8 sm:mb-12">From proprietary mathematics to industrial technology.</h2>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6">
            <Button variant="primary" as={Link} to="/contact" withArrow className="w-full sm:w-auto">
              Get in Touch
            </Button>
            <Button variant="outline-light" as={Link} to="/investors" withArrow className="w-full sm:w-auto">
              Investor Information
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
