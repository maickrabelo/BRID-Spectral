import React, { useState } from 'react';
import { PageHero } from '@/src/components/ui/PageHero';
import { Section } from '@/src/components/layout/Section';
import { Eyebrow } from '@/src/components/ui/Eyebrow';
import { Button } from '@/src/components/ui/Button';
import { Card } from '@/src/components/ui/Card';
import { Reveal } from '@/src/components/ui/Reveal';
import { cn } from '@/src/lib/utils';

export function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Investor',
    organization: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contact Form Inquiry — bridspectraltech.com");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nRole: ${formData.role}\nOrganization: ${formData.organization}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:contact@bridspectraltech.com?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', role: 'Investor', organization: '', message: '' });
  };

  return (
    <>
      <PageHero 
        breadcrumb="Company / Contact"
        eyebrow="Contact"
        title="Let's Build What Can Be Tested."
        lead="Four routes into BRID Spectral Technologies — choose the one that fits, or write to us directly below."
      />

      <Section variant="light">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {[
            { id: '01', title: 'Investors', desc: 'Seed financing, strategic capital and long-term deep-tech partnerships.' },
            { id: '02', title: 'Industrial Partners', desc: 'Feasibility studies, joint development and licensing conversations.' },
            { id: '03', title: 'Research Institutions', desc: 'Fraunhofer, DESY, Helmholtz and university collaboration proposals.' },
            { id: '04', title: 'Talent', desc: 'Applied mathematics, computational physics and software engineering.' },
          ].map((item, idx) => (
            <Reveal key={item.id} delay={Math.min(idx % 4, 3) as any}>
              <Card variant="light" className="h-full">
                <div className="text-blue-400 font-mono text-sm mb-3 sm:mb-4">{item.id}</div>
                <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 text-white">{item.title}</h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section variant="dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
          <Reveal>
            <Eyebrow>Get in Touch</Eyebrow>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-4 sm:mb-8">Send us a message.</h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 sm:mb-16">
              Tell us which route best describes you, and briefly what you're looking to explore.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h4 className="text-[11px] sm:text-[12px] uppercase tracking-wider text-white/50 mb-1.5 sm:mb-2 font-semibold">Location</h4>
                <div className="text-white/90 text-sm sm:text-base font-medium">Hamburg · Germany</div>
                <div className="text-white/70 text-xs sm:text-[14px] mt-1">Versmannstraße 4, Betahaus Hafencity, 20457 Hamburg</div>
              </div>
              
              <div>
                <h4 className="text-[11px] sm:text-[12px] uppercase tracking-wider text-white/50 mb-1.5 sm:mb-2 font-semibold">Website</h4>
                <div className="text-blue-400 text-sm sm:text-base font-medium">bridspectraltech.com</div>
              </div>
              
              <div>
                <h4 className="text-[11px] sm:text-[12px] uppercase tracking-wider text-white/50 mb-1.5 sm:mb-2 font-semibold">Entity</h4>
                <div className="text-white/70 text-xs sm:text-[14px]">BRID Logistics GmbH, trading as BRID Spectral Technologies</div>
              </div>
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
                  <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-2">Email *</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-[#0a0d17] border border-white/20 rounded-xl p-3 text-white focus:outline-none focus:border-blue-400 min-h-[46px]" />
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-2.5">I am reaching out as:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {['Investor', 'Industrial partner', 'Research institution', 'Talent / candidate', 'Other'].map(opt => (
                    <label key={opt} className="flex items-center gap-3 cursor-pointer group min-h-[40px] px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors">
                      <div className={cn(
                        "w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors",
                        formData.role === opt ? "border-blue-400" : "border-white/30 group-hover:border-white/60"
                      )}>
                        {formData.role === opt && <div className="w-2 h-2 rounded-full bg-blue-400" />}
                      </div>
                      <span className="text-xs sm:text-[14px] text-white/80">{opt}</span>
                      <input 
                        type="radio" 
                        name="role" 
                        value={opt} 
                        checked={formData.role === opt} 
                        onChange={() => setFormData({...formData, role: opt})}
                        className="hidden" 
                      />
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-2">Organization</label>
                <input type="text" value={formData.organization} onChange={e => setFormData({...formData, organization: e.target.value})} className="w-full bg-[#0a0d17] border border-white/20 rounded-xl p-3 text-white focus:outline-none focus:border-blue-400 min-h-[46px]" />
              </div>

              <div className="mb-6 sm:mb-8">
                <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-2">Message *</label>
                <textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-[#0a0d17] border border-white/20 rounded-xl p-3 text-white focus:outline-none focus:border-blue-400 resize-none" />
              </div>

              <Button type="submit" withArrow className="w-full sm:w-auto">
                Send Message
              </Button>

              <p className="text-[11px] text-white/40 mt-4 sm:mt-6 text-center sm:text-left leading-relaxed">
                Submitting this form opens a pre-filled email to the BRID Spectral Technologies team.
              </p>
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
