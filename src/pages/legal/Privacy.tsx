import React from 'react';
import { PageHero } from '@/src/components/ui/PageHero';
import { Section } from '@/src/components/layout/Section';
import { Reveal } from '@/src/components/ui/Reveal';

export function Privacy() {
  return (
    <>
      <PageHero 
        breadcrumb="Legal / Privacy Policy"
        eyebrow="Legal"
        title="Privacy Policy"
        lead="How BRID Spectral Technologies handles data collected through bridspectraltech.com."
      />

      <Section variant="light">
        <div className="container-legal px-4 sm:px-6">
          <Reveal>
            <div className="bg-[#0f1523] border-l-2 border-blue-400 p-5 sm:p-6 rounded-xl mb-8 sm:mb-12 border border-white/10">
              <p className="text-xs sm:text-[14px] font-medium text-white/90 leading-relaxed">
                Placeholder page. The bracketed fields below (managing director, commercial register number, VAT ID, data-protection officer) must be completed and reviewed by German legal counsel (Impressum requirements under §5 TMG and GDPR/DSGVO) before this site goes live.
              </p>
            </div>
            
            <div className="space-y-8 sm:space-y-10 text-white/70">
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-4">1. Data Controller</h3>
                <p className="text-sm sm:text-base leading-relaxed">BRID Logistics GmbH, Versmannstraße 4, Betahaus Hafencity, 20457 Hamburg, Germany, contact@bridspectraltech.com, is the data controller responsible for processing personal data collected through this website, within the meaning of the GDPR (DSGVO) and other applicable data-protection laws.</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-4">2. Data We Collect</h3>
                <p className="text-sm sm:text-base leading-relaxed">When you use the contact or investor-inquiry forms on this website, we collect the information you voluntarily submit — such as your name, email address, organization, and message content. This data is used solely to respond to your inquiry and is not sold or shared with third parties for marketing purposes.</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-4">3. Hosting and Server Log Data</h3>
                <p className="text-sm sm:text-base leading-relaxed">Like most websites, our hosting provider automatically records technical information (such as IP address, browser type, and access time) in server logs for security and operational purposes. [To be completed with the specific hosting provider once selected.]</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-4">4. Cookies</h3>
                <p className="text-sm sm:text-base leading-relaxed">This website, in its current form, does not use tracking or advertising cookies. If analytics or marketing tools are added in future, this policy will be updated and, where required, a consent mechanism will be implemented.</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-4">5. Your Rights</h3>
                <p className="text-sm sm:text-base leading-relaxed">Under the GDPR, you have the right to access, rectify, erase, restrict, or object to the processing of your personal data, and the right to data portability. To exercise these rights, contact us at contact@bridspectraltech.com. You also have the right to lodge a complaint with a supervisory authority, such as the Hamburg Commissioner for Data Protection and Freedom of Information.</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-4">6. Data Retention</h3>
                <p className="text-sm sm:text-base leading-relaxed">We retain inquiry data only for as long as necessary to address your request and to comply with applicable legal obligations.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
