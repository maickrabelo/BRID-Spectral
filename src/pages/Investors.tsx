import React, { useEffect, useRef, useState } from 'react';
import { PageHero } from '@/src/components/ui/PageHero';
import { Section } from '@/src/components/layout/Section';
import { Eyebrow } from '@/src/components/ui/Eyebrow';
import { Button } from '@/src/components/ui/Button';
import { Reveal } from '@/src/components/ui/Reveal';
import { cn } from '@/src/lib/utils';

// Helper component for animated bar chart
function AnimatedBar({ label, amount, total, color, delay }: { label: string, amount: number, total: number, color: string, delay: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  const targetWidth = (amount / total) * 100;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setWidth(targetWidth);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [targetWidth, delay]);

  return (
    <div className="mb-4 sm:mb-6" ref={ref}>
      <div className="flex justify-between text-xs sm:text-[14px] mb-1.5 sm:mb-2">
        <span className="text-white/90 font-medium">{label}</span>
        <span className="text-white/60 font-mono">€{amount.toLocaleString()}</span>
      </div>
      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%`, background: color }}
        />
      </div>
    </div>
  );
}

export function Investors() {
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    email: '',
    profile: '',
    interest: 'Investment',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Investor Inquiry — bridspectraltech.com");
    const body = encodeURIComponent(`Name: ${formData.name}\nCompany: ${formData.company}\nPosition: ${formData.position}\nEmail: ${formData.email}\nProfile: ${formData.profile}\nInterested in: ${formData.interest}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:contact@bridspectraltech.com?subject=${subject}&body=${body}`;
    setFormData({ name: '', company: '', position: '', email: '', profile: '', interest: 'Investment', message: '' });
  };

  return (
    <>
      <PageHero 
        breadcrumb="Ecosystem / Investors"
        eyebrow="Investor Information"
        title="Building the First 18 Months of Evidence"
        lead="BRID Spectral Technologies is preparing an initial financing round to fund the transition from proprietary mathematical architecture to experimentally validated engineering technology."
      />

      <Section variant="graphite">
        <Reveal>
          <Eyebrow>18-Month Roadmap</Eyebrow>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-8 sm:mb-16">Build. Prove. Commercialize.</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <Reveal delay={1}>
            <div className="bg-[#0f1523] border border-white/10 rounded-2xl p-5 sm:p-8 border-t-2 border-t-blue-400 h-full flex flex-col">
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/50 mb-3 sm:mb-4">Phase I</div>
              <h3 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2 text-white">Build</h3>
              <div className="text-blue-400 text-xs sm:text-[12px] mb-4 sm:mb-8 font-mono">Months 0–6</div>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-[13px] text-white/80">
                <li>· Spectral Engine Alpha</li>
                <li>· Two computational modules</li>
                <li>· IP architecture</li>
                <li>· First benchmarks</li>
                <li>· Research pipeline</li>
              </ul>
            </div>
          </Reveal>
          
          <Reveal delay={2}>
            <div className="bg-[#0f1523] border border-white/10 rounded-2xl p-5 sm:p-8 border-t-2 border-t-teal-400 h-full flex flex-col">
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/50 mb-3 sm:mb-4">Phase II</div>
              <h3 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2 text-white">Prove</h3>
              <div className="text-teal-400 text-xs sm:text-[12px] mb-4 sm:mb-8 font-mono">Months 7–12</div>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-[13px] text-white/80">
                <li>· Prospective predictions</li>
                <li>· Independent experiments</li>
                <li>· Spectral Engine Beta</li>
                <li>· First protected technology packages</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="bg-[#0f1523] border border-white/10 rounded-2xl p-5 sm:p-8 border-t-2 border-t-indigo-400 h-full flex flex-col">
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/50 mb-3 sm:mb-4">Phase III</div>
              <h3 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2 text-white">Commercialize</h3>
              <div className="text-indigo-400 text-xs sm:text-[12px] mb-4 sm:mb-8 font-mono">Months 13–18</div>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-[13px] text-white/80">
                <li>· Validated demonstrators</li>
                <li>· Industrial pilots</li>
                <li>· Joint-development pipeline</li>
                <li>· Spectral Engine v1.0</li>
                <li>· Follow-on financing readiness</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section variant="dark" className="text-center py-14 sm:py-24">
        <Reveal>
          <Eyebrow centered>Initial Capital Objective</Eyebrow>
          <div className="text-[clamp(44px,10vw,120px)] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-400 my-4 sm:my-6 leading-none">
            €750,000
          </div>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Indicative initial capital requirement for an approximately 18-month validation programme.
          </p>
        </Reveal>
      </Section>

      <Section variant="light">
        <Reveal>
          <Eyebrow>Use of Funds</Eyebrow>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-8 sm:mb-16">€750K Seed Round — 18-Month Allocation</h2>
        </Reveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="w-full">
            {[
              { label: 'Executive management', amount: 234000, color: '#28d8e0' },
              { label: 'Scientific / computational hires', amount: 100000, color: '#2ecae3' },
              { label: 'External laboratories / research', amount: 95000, color: '#33bbe5' },
              { label: 'Prototypes / testing', amount: 60000, color: '#39ace8' },
              { label: 'Software engineering / development', amount: 55000, color: '#3f9ceb' },
              { label: 'Contingency', amount: 56000, color: '#448eed' },
              { label: 'IP / legal', amount: 45000, color: '#5784f0' },
              { label: 'Business development / partnerships', amount: 40000, color: '#6678f0' },
              { label: 'HPC / cloud / data', amount: 35000, color: '#7470f0' },
              { label: 'Hamburg operations', amount: 30000, color: '#7c6cf0' },
            ].map((item, idx) => (
              <AnimatedBar 
                key={item.label}
                label={item.label}
                amount={item.amount}
                total={234000} // Highest bar is 100%
                color={item.color}
                delay={idx * 50}
              />
            ))}
          </div>

          <div className="lg:pl-8">
            <div className="bg-[#0f1523] border border-white/10 border-l-2 border-l-blue-400 p-5 sm:p-8 rounded-xl mb-6 sm:mb-8">
              <p className="text-base sm:text-[18px] font-medium text-white leading-relaxed">
                Seed capital is intended to buy evidence, IP and technological optionality — not expensive fixed laboratory infrastructure.
              </p>
            </div>
            <p className="text-xs sm:text-[13px] text-white/60 leading-relaxed">
              Management bonuses are not included as guaranteed seed expenditure. Figures are indicative planning assumptions, to be confirmed during due diligence.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="graphite">
        <Reveal>
          <Eyebrow>Five-Year Technology & Value-Creation Roadmap</Eyebrow>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-8 sm:mb-16">Staged, Evidence-Dependent Growth</h2>
        </Reveal>

        <div className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-16">
          {[
            { year: '2026–27', phase: 'VALIDATE', desc: 'Materials Engine, first prospective tests, first IP', highlight: 'text-blue-400' },
            { year: '2027–28', phase: 'EXPAND', desc: 'Photonics · EM systems, energy materials, industrial pilots', highlight: 'text-teal-400' },
            { year: '2028–29', phase: 'INDUSTRIALIZE', desc: 'Licensing, industrial software, multiple IP families', highlight: 'text-blue-300' },
            { year: '2029–30', phase: 'SCALE', desc: 'Semiconductors, aerospace materials, international licensing', highlight: 'text-purple-400' },
            { year: '2030+', phase: 'FRONTIER', desc: 'Plasma · propulsion, effective geometry — only with evidence', highlight: 'text-white/50' },
          ].map((row, idx) => (
            <Reveal key={row.year} delay={Math.min(idx, 4) as any}>
              <div className="bg-[#0f1523] border border-white/10 p-4 sm:p-6 rounded-xl flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 md:gap-12">
                <div className="text-sm sm:text-[16px] font-semibold text-white sm:w-24 shrink-0 font-mono">{row.year}</div>
                <div className={cn("text-xs sm:text-[13px] uppercase tracking-wider sm:w-32 shrink-0 font-semibold", row.highlight)}>{row.phase}</div>
                <div className="text-xs sm:text-sm text-white/80">{row.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
        
        <Reveal>
          <p className="text-white/50 text-xs sm:text-[13px] max-w-4xl leading-relaxed">
            Figures are management planning scenarios, not forecasts. Frontier programmes remain optional and evidence-dependent.
          </p>
        </Reveal>
      </Section>

      <Section variant="dark" className="pt-14 sm:pt-24 pb-8 sm:pb-12">
        <Reveal>
          <div className="bg-[#0f1523] border border-blue-500/30 p-6 sm:p-12 md:p-16 rounded-2xl max-w-5xl mx-auto text-center mb-12 sm:mb-24 shadow-[0_0_30px_rgba(96,165,250,0.08)]">
            <Eyebrow centered>Investment Thesis</Eyebrow>
            <p className="text-[17px] sm:text-[20px] md:text-[24px] text-white leading-relaxed mt-4 sm:mt-6">
              Build a protected deep-tech nucleus in Hamburg. Use proprietary mathematics to generate testable industrial designs. Validate them through Germany's scientific infrastructure. Protect what survives experiment. Commercialize through industrial R&D, licensing and software.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section variant="graphite" className="text-center pt-8 sm:pt-12 pb-16 sm:pb-32">
        <Reveal>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-8 max-w-5xl mx-auto leading-tight">
            INVEST IN THE VALIDATION,<br/>NOT IN THE PROMISE.
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            We are seeking investors who understand the asymmetric economics of deep technology: disciplined early capital can establish whether a proprietary scientific architecture is capable of generating technologies addressing very large industrial markets.
          </p>
        </Reveal>
      </Section>

      <Section variant="dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
          <Reveal>
            <Eyebrow>Request Investor Materials</Eyebrow>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-4 sm:mb-8">Start a confidential conversation.</h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Investor materials, including the Investment Memorandum, are not published on this website. Complete the form and the team will follow up under an appropriate confidentiality process.
            </p>
            <div className="bg-[#0f1523] border border-white/10 p-5 sm:p-6 rounded-xl mb-6">
              <p className="text-white/70 text-xs sm:text-[14px] leading-relaxed">
                The proposed seed financing is €750,000. The financing instrument, valuation, investor equity, governance rights and any reserved matters are negotiated only after corporate, financial and IP due diligence.
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <form onSubmit={handleSubmit} className="bg-[#0f1523] border border-white/10 p-5 sm:p-8 rounded-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-2">Name *</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-[#0a0d17] border border-white/20 rounded-xl p-3 text-white focus:outline-none focus:border-blue-400 min-h-[46px]" />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-2">Company / Fund</label>
                  <input type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full bg-[#0a0d17] border border-white/20 rounded-xl p-3 text-white focus:outline-none focus:border-blue-400 min-h-[46px]" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-2">Position</label>
                  <input type="text" value={formData.position} onChange={e => setFormData({...formData, position: e.target.value})} className="w-full bg-[#0a0d17] border border-white/20 rounded-xl p-3 text-white focus:outline-none focus:border-blue-400 min-h-[46px]" />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-2">Email *</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-[#0a0d17] border border-white/20 rounded-xl p-3 text-white focus:outline-none focus:border-blue-400 min-h-[46px]" />
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-2">Investment Profile</label>
                <input type="text" value={formData.profile} onChange={e => setFormData({...formData, profile: e.target.value})} className="w-full bg-[#0a0d17] border border-white/20 rounded-xl p-3 text-white focus:outline-none focus:border-blue-400 min-h-[46px]" />
              </div>

              <div className="mb-4 sm:mb-6">
                <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-2.5">Interested in:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {['Investment', 'Strategic partnership', 'Industrial collaboration', 'Research collaboration'].map(opt => (
                    <label key={opt} className="flex items-center gap-3 cursor-pointer group min-h-[40px] px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors">
                      <div className={cn(
                        "w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors",
                        formData.interest === opt ? "border-blue-400" : "border-white/30 group-hover:border-white/60"
                      )}>
                        {formData.interest === opt && <div className="w-2 h-2 rounded-full bg-blue-400" />}
                      </div>
                      <span className="text-xs sm:text-[14px] text-white/80">{opt}</span>
                      <input 
                        type="radio" 
                        name="interest" 
                        value={opt} 
                        checked={formData.interest === opt} 
                        onChange={() => setFormData({...formData, interest: opt})}
                        className="hidden" 
                      />
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6 sm:mb-8">
                <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-2">Message</label>
                <textarea rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-[#0a0d17] border border-white/20 rounded-xl p-3 text-white focus:outline-none focus:border-blue-400 resize-none" />
              </div>

              <Button type="submit" withArrow className="w-full sm:w-auto">
                Request Investor Materials
              </Button>

              <p className="text-[11px] text-white/40 mt-4 sm:mt-6 text-center sm:text-left leading-relaxed">
                Submitting this form opens a pre-filled email to the founding team. No investor materials are sent automatically.
              </p>
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
