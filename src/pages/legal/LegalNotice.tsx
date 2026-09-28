import React from 'react';
import { PageHero } from '@/src/components/ui/PageHero';
import { Section } from '@/src/components/layout/Section';
import { Reveal } from '@/src/components/ui/Reveal';

export function LegalNotice() {
  return (
    <>
      <PageHero 
        breadcrumb="Legal / Legal Notice"
        eyebrow="Legal"
        title="Legal Notice"
        lead="General disclaimers applicable to all content on bridspectraltech.com."
      />

      <Section variant="light">
        <div className="container-legal px-4 sm:px-6">
          <Reveal>
            <div className="space-y-8 sm:space-y-10 text-white/70">
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-4">Not an Offer</h3>
                <p className="text-sm sm:text-base leading-relaxed">The content of this website, including all references to financing, capital objectives, use of funds and financial projections, is provided for general informational purposes only. It does not constitute a securities offering, investment advice, legal advice, tax advice, or a guarantee of scientific or commercial results. Financial figures represent management planning assumptions and must be independently validated during due diligence.</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-4">Corporate Identity</h3>
                <p className="text-sm sm:text-base leading-relaxed">BRID Spectral Technologies is a commercial technology brand operated by BRID Logistics GmbH, headquartered in Hamburg, Germany. References to "BRID Spectral Technologies" throughout this website refer to this trading activity of BRID Logistics GmbH.</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-4">Research Ecosystem and Industry References</h3>
                <p className="text-sm sm:text-base leading-relaxed">Institutional and company names referenced on this website (including but not limited to Fraunhofer, DESY, Helmholtz, universities, BASF and Siemens) identify target research ecosystems, public programmes, or illustrative examples of adjacent industrial demand. Their inclusion does not imply an existing partnership, customer relationship, funding approval, or endorsement of BRID Spectral Technologies by these organizations.</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-4">Forward-Looking Statements</h3>
                <p className="text-sm sm:text-base leading-relaxed">This website may contain forward-looking statements regarding technology development, validation programmes, and commercial plans. These statements are based on current expectations and are subject to significant scientific, technical, market and execution risk. Actual outcomes may differ materially.</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-4">Intellectual Property</h3>
                <p className="text-sm sm:text-base leading-relaxed">Except where explicitly cited, the mathematical architecture, algorithms, computational implementations and trade secrets underlying the Spectral Engine are proprietary and are not disclosed on this website. No license to any intellectual property is granted by the publication of this website.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
