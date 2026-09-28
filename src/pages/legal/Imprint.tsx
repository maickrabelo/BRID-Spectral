import React from 'react';
import { PageHero } from '@/src/components/ui/PageHero';
import { Section } from '@/src/components/layout/Section';
import { Reveal } from '@/src/components/ui/Reveal';

export function Imprint() {
  return (
    <>
      <PageHero 
        breadcrumb="Legal / Imprint"
        eyebrow="Legal"
        title="Imprint"
        lead="Information pursuant to §5 TMG (German Telemedia Act)."
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
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-4">Company</h3>
                <p className="text-sm sm:text-base leading-relaxed">BRID Logistics GmbH<br/>
                trading as BRID Spectral Technologies<br/>
                Versmannstraße 4, Betahaus Hafencity<br/>
                20457 Hamburg, Germany</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-4">Represented by</h3>
                <p className="text-sm sm:text-base leading-relaxed">Managing Director: [Full legal name of Geschäftsführer]</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-4">Contact</h3>
                <p className="text-sm sm:text-base leading-relaxed">Email: contact@bridspectraltech.com<br/>
                Website: bridspectraltech.com</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-4">Registration</h3>
                <p className="text-sm sm:text-base leading-relaxed">Commercial Register: [Registergericht, e.g. Amtsgericht Hamburg]<br/>
                Registration number: [HRB number]<br/>
                VAT identification number (§27a UStG): [DE...]</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-4">Responsible for content (§18(2) MStV)</h3>
                <p className="text-sm sm:text-base leading-relaxed">[Full legal name and address]</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-4">Dispute Resolution</h3>
                <p className="text-sm sm:text-base leading-relaxed">The European Commission provides a platform for online dispute resolution (OS): ec.europa.eu/consumers/odr. We are not obliged and generally not willing to participate in dispute resolution proceedings before a consumer arbitration board.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
