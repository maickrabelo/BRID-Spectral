import React from 'react';
import { Link } from 'react-router-dom';
import { Triangle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0f] text-white/60 pt-12 sm:pt-20 pb-8 sm:pb-10 border-t border-white/5">
      <div className="container-base max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4 sm:mb-6 group">
              <img 
                src="/logo-brid.png" 
                alt="BRID Spectral Technologies" 
                className="h-8 sm:h-9 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity" 
              />
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed pr-0 sm:pr-8 text-white/50 uppercase tracking-wider text-[10px]">
              Engineering the State Space. A Hamburg-based deep-tech platform converting proprietary mathematical architecture into experimentally validated industrial technology.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3 sm:mb-6 uppercase tracking-widest text-[11px] sm:text-xs">Platform</h4>
            <ul className="flex flex-col gap-2.5 sm:gap-4 text-xs sm:text-sm">
              <li><Link to="/technology" className="hover:text-white py-1 block transition-colors">Technology</Link></li>
              <li><Link to="/applications" className="hover:text-white py-1 block transition-colors">Applications</Link></li>
              <li><Link to="/validation" className="hover:text-white py-1 block transition-colors">Validation Model</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3 sm:mb-6 uppercase tracking-widest text-[11px] sm:text-xs">Ecosystem</h4>
            <ul className="flex flex-col gap-2.5 sm:gap-4 text-xs sm:text-sm">
              <li><Link to="/industries" className="hover:text-white py-1 block transition-colors">Industries</Link></li>
              <li><Link to="/ecosystem" className="hover:text-white py-1 block transition-colors">Research Ecosystem</Link></li>
              <li><Link to="/investors" className="hover:text-white py-1 block transition-colors">Investors</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3 sm:mb-6 uppercase tracking-widest text-[11px] sm:text-xs">Company</h4>
            <ul className="flex flex-col gap-2.5 sm:gap-4 text-xs sm:text-sm">
              <li><Link to="/about" className="hover:text-white py-1 block transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-white py-1 block transition-colors">Contact</Link></li>
              <li><Link to="/investors" className="hover:text-white py-1 block transition-colors">Investor Information</Link></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-6 sm:pt-8 border-t border-white/10 gap-4 sm:gap-6 text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-white/40">
          <div>
            BRID Spectral Technologies is a commercial technology brand of BRID Logistics GmbH · Hamburg, Germany
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link to="/legal/imprint" className="hover:text-white py-1 transition-colors">Imprint</Link>
            <Link to="/legal/privacy" className="hover:text-white py-1 transition-colors">Privacy Policy</Link>
            <Link to="/legal/legal-notice" className="hover:text-white py-1 transition-colors">Legal Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
