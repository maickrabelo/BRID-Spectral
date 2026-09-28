import React from 'react';
import { PageHero } from '@/src/components/ui/PageHero';
import { Section } from '@/src/components/layout/Section';
import { Eyebrow } from '@/src/components/ui/Eyebrow';
import { Button } from '@/src/components/ui/Button';
import { Reveal } from '@/src/components/ui/Reveal';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, RotateCcw } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Validation() {
  return (
    <>
      <PageHero 
        breadcrumb="Platform / Validation Model"
        eyebrow="Scientific Discipline"
        title="Predict. Test. Measure. Learn."
        lead="A theory becomes engineering only when it survives experiment. This page describes the methodological discipline BRID Spectral Technologies applies to every research line."
      />

      <Section variant="dark" className="overflow-hidden">
        <Reveal>
          <Eyebrow>Closed-Loop Discovery Engine</Eyebrow>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-8 sm:mb-16 max-w-3xl">Continuous experimental feedback improves the next generation of candidates.</h2>
        </Reveal>

        <Reveal delay={1}>
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2.5 sm:gap-3 mb-10 sm:mb-16 overflow-x-auto pb-4 touch-scroll">
            {[
              'Industrial Problem',
              'Target Properties',
              'Spectral Engine',
              'Conventional Simulation',
              'Make / Synthesize',
              'Measure / Characterize',
              'Validate + Learn',
              'IP + Market'
            ].map((step, idx, arr) => (
              <React.Fragment key={step}>
                <div className={cn(
                  "flex-shrink-0 border border-white/10 px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl flex items-center gap-3 min-w-[160px] sm:min-w-[180px]",
                  idx === 2 ? "bg-blue-500/20 text-blue-400 border-blue-400/40 shadow-[0_0_15px_rgba(96,165,250,0.3)]" : "bg-[#0f1523] text-white/90"
                )}>
                  <span className={cn("text-[12px] sm:text-[13px] font-mono", idx === 2 ? "text-blue-400 font-bold" : "text-white/40")}>0{idx + 1}</span>
                  <span className="text-[11px] sm:text-[13px] tracking-wider uppercase font-medium">{step}</span>
                </div>
                {idx < arr.length - 1 && (
                  <div className="flex-shrink-0 text-white/40 hidden lg:block">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
                {idx < arr.length - 1 && (
                  <div className="flex-shrink-0 text-blue-400/50 flex justify-center lg:hidden my-0.5">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          <div className="flex items-start gap-3 sm:gap-4 text-white/80 max-w-3xl">
            <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Results from step 7 continuously feed back into step 3, refining the Spectral Engine's model of the relevant state space before the next candidate generation.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section variant="light">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-4 sm:mb-6">Prediction before observation.</h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-4xl mb-8 sm:mb-12">
            Wherever possible, predictions and success criteria will be defined before experimental results are known. Calibration data and validation data should be separated. Research lines that repeatedly fail to demonstrate measurable predictive or design value should be revised, narrowed or discontinued.
          </p>
          
          <div className="bg-[#0f1523] border border-white/10 border-l-2 border-l-blue-400 p-5 sm:p-8 rounded-xl max-w-4xl mb-12 sm:mb-20 relative">
            <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-2 sm:mb-3 font-semibold">Success condition</div>
            <p className="text-base sm:text-[18px] text-white/90 leading-relaxed">
              The Spectral layer succeeds only if it produces prospective predictive, design or control value beyond its calibration data and beyond a reasonable conventional baseline.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <Eyebrow>Decision Gates</Eyebrow>
          
          {/* Mobile Decision Gates Cards */}
          <div className="block md:hidden space-y-3 mb-6">
            {[
              { p: 'Build', m: '0–6 Months', o: 'Engine Alpha; two computational modules; IP vault; first benchmark; research pipeline', g: 'Functioning prototype + prospective validation protocol' },
              { p: 'Prove', m: '7–12 Months', o: 'Freeze calibrated model; first prospective prediction; independent validation; Engine Beta + first IP', g: 'Measurable predictive / design value or explicit re-evaluation' },
              { p: 'Commercialize', m: '13–18 Months', o: 'Engine v1.0; validated demonstrator; 1–3 protected packages; industrial pilots; next-round readiness', g: 'Evidence supports commercial continuation' },
            ].map((gate) => (
              <div key={gate.p} className="bg-[#0f1523] border border-white/10 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">{gate.p}</span>
                  <span className="text-[10px] text-white/50 uppercase tracking-widest">{gate.m}</span>
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Primary Objectives</div>
                  <div className="text-xs text-white/80 leading-relaxed">{gate.o}</div>
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Gate</div>
                  <div className="text-xs text-blue-300 leading-relaxed">{gate.g}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto mb-8 rounded-xl border border-white/10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0f1523] text-blue-400 text-[10px] uppercase tracking-widest border-b border-white/10">
                  <th className="px-6 py-4">Phase</th>
                  <th className="px-6 py-4">Months</th>
                  <th className="px-6 py-4">Primary Objectives</th>
                  <th className="px-6 py-4">Gate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { p: 'Build', m: '0–6', o: 'Engine Alpha; two computational modules; IP vault; first benchmark; research pipeline', g: 'Functioning prototype + prospective validation protocol' },
                  { p: 'Prove', m: '7–12', o: 'Freeze calibrated model; first prospective prediction; independent validation; Engine Beta + first IP', g: 'Measurable predictive / design value or explicit re-evaluation' },
                  { p: 'Commercialize', m: '13–18', o: 'Engine v1.0; validated demonstrator; 1–3 protected packages; industrial pilots; next-round readiness', g: 'Evidence supports commercial continuation' },
                ].map((row, idx) => (
                  <tr key={row.p} className={cn("border-b border-white/5", idx % 2 === 0 ? "bg-white/[0.02]" : "bg-[#0c101c]")}>
                    <td className="px-6 py-5 text-blue-400 font-semibold">{row.p}</td>
                    <td className="px-6 py-5 text-white/60 text-sm font-mono">{row.m}</td>
                    <td className="px-6 py-5 text-white/80 text-sm">{row.o}</td>
                    <td className="px-6 py-5 text-white/80 text-sm">{row.g}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-white/60 max-w-4xl text-xs sm:text-[15px] leading-relaxed">
            A research line that repeatedly requires post-hoc refitting, excessive free parameters or produces no measurable design advantage should be paused. The programme is designed to buy evidence, not to protect a theory from falsification.
          </p>
        </Reveal>
      </Section>

      <Section variant="dark">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-8 sm:mb-12">What Can Go Wrong, and the Decision Rule</h2>
        </Reveal>
        
        <Reveal delay={1}>
          {/* Mobile Fallback Cards */}
          <div className="block md:hidden space-y-3 mb-10">
            {[
              { r: 'Scientific', w: 'Spectral layer adds no predictive value', m: 'Use withheld data and predeclared success criteria; stop or narrow failed lines' },
              { r: 'Overfitting', w: 'Every new system requires new free parameters', m: 'Freeze parameters and require transfer tests' },
              { r: 'IP', w: 'Published theory weakens novelty', m: 'Protect implementation and applications before disclosure; use trade secrets where stronger' },
              { r: 'Execution', w: 'Too many programmes dilute seed capital', m: 'Primary focus on materials; maximum two secondary computational tracks' },
              { r: 'Partner dependence', w: 'Research facility access is delayed', m: 'Maintain multiple laboratory routes; simulate first; contract access only when needed' },
              { r: 'Commercial', w: 'Industrial buyers perceive the method as academic', m: 'Sell measurable outcomes, not theory' },
            ].map((item) => (
              <div key={item.r} className="bg-[#0f1523] border border-white/10 rounded-xl p-4 space-y-2">
                <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{item.r}</div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Risk</div>
                  <div className="text-xs text-white/80">{item.w}</div>
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Decision Rule</div>
                  <div className="text-xs text-blue-300">{item.m}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto mb-16 rounded-xl border border-white/10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0f1523] text-blue-400 text-[10px] uppercase tracking-widest border-b border-white/10">
                  <th className="px-6 py-4">Phase / Risk</th>
                  <th className="px-6 py-4">What Can Go Wrong</th>
                  <th className="px-6 py-4">Fallback / Decision Rule</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                {[
                  { r: 'Scientific', w: 'Spectral layer adds no predictive value', m: 'Use withheld data and predeclared success criteria; stop or narrow failed lines' },
                  { r: 'Overfitting', w: 'Every new system requires new free parameters', m: 'Freeze parameters and require transfer tests' },
                  { r: 'IP', w: 'Published theory weakens novelty', m: 'Protect implementation and applications before disclosure; use trade secrets where stronger' },
                  { r: 'Execution', w: 'Too many programmes dilute seed capital', m: 'Primary focus on materials; maximum two secondary computational tracks' },
                  { r: 'Partner dependence', w: 'Research facility access is delayed', m: 'Maintain multiple laboratory routes; simulate first; contract access only when needed' },
                  { r: 'Commercial', w: 'Industrial buyers perceive the method as academic', m: 'Sell measurable outcomes, not theory' },
                ].map((row, idx) => (
                  <tr key={row.r} className={cn("border-b border-white/5", idx % 2 === 0 ? "bg-white/[0.02]" : "bg-[#0c101c]")}>
                    <td className="px-6 py-5 text-blue-400 font-medium text-sm">{row.r}</td>
                    <td className="px-6 py-5 text-sm">{row.w}</td>
                    <td className="px-6 py-5 text-blue-300 text-sm">{row.m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6 sm:mb-10 max-w-3xl uppercase leading-tight">
            Own the intelligence.<br/>Access the infrastructure.<br/>Validate independently.<br/><span className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">Scale with industry.</span>
          </h2>
          <Button variant="primary" as={Link} to="/ecosystem" withArrow className="w-full sm:w-auto">
            See the Research Ecosystem
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
