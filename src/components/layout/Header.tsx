import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { Menu, X, Triangle } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Technology', href: '/technology' },
  { label: 'Applications', href: '/applications' },
  { label: 'Validation', href: '/validation' },
  { label: 'Industries', href: '/industries' },
  { label: 'Ecosystem', href: '/ecosystem' },
  { label: 'About', href: '/about' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/10 py-3 sm:py-4 shadow-lg shadow-black/40' 
          : 'bg-transparent border-b border-transparent py-4 sm:py-6'
      )}
    >
      <div className="container-base flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center relative z-50 group">
          <img 
            src="/logo-brid.png" 
            alt="BRID Spectral Technologies" 
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02] filter drop-shadow-[0_0_12px_rgba(34,169,242,0.25)]" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 uppercase tracking-wider text-[11px] py-1",
                  isActive 
                    ? "text-blue-400 border-b border-blue-400" 
                    : "text-white/60 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-3 border-l border-white/10 pl-6">
            <Link 
              to="/contact"
              className="text-xs uppercase tracking-widest font-medium text-white px-5 py-2 rounded-full border border-white/20 hover:bg-white/5 transition-colors"
            >
              Contact
            </Link>
            <Link 
              to="/investors"
              className="text-xs uppercase tracking-widest font-medium text-[#0a0a0f] bg-blue-400 px-5 py-2 rounded-full hover:bg-blue-300 transition-colors shadow-[0_0_15px_rgba(96,165,250,0.4)]"
            >
              Investor Info
            </Link>
          </div>
        </div>

        {/* Mobile Toggle Button with accessible 44x44 hitbox */}
        <button 
          className="lg:hidden text-white relative z-50 w-11 h-11 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 active:scale-95 transition-all"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-blue-400" /> : <Menu className="w-5 h-5 text-white" />}
        </button>

        {/* Mobile Drawer */}
        <div className={cn(
          "fixed inset-y-0 right-0 w-[85vw] max-w-[340px] bg-[#0c0d14] border-l border-white/15 z-50 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:hidden shadow-2xl",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-white/10">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
              <img 
                src="/logo-brid.png" 
                alt="BRID Spectral Technologies" 
                className="h-7 w-auto object-contain" 
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 text-white/70 hover:text-white"
              aria-label="Fechar menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer Nav links - scrollable */}
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-1">
            <div className="text-[10px] uppercase tracking-widest text-white/40 mb-3 font-semibold">
              Navegação
            </div>
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "min-h-[46px] px-3.5 py-2.5 rounded-xl flex items-center justify-between text-xs uppercase tracking-wider font-medium transition-all",
                    isActive
                      ? "bg-blue-500/15 text-blue-400 border border-blue-500/30"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>}
                </Link>
              );
            })}
          </div>
          
          {/* Drawer Actions at Bottom */}
          <div className="p-6 border-t border-white/10 bg-[#08090e]/80 space-y-3">
            <Link 
              to="/investors"
              className="w-full min-h-[46px] flex items-center justify-center text-xs uppercase tracking-widest font-semibold text-[#0a0a0f] bg-blue-400 rounded-xl hover:bg-blue-300 transition-colors shadow-[0_0_15px_rgba(96,165,250,0.3)] active:scale-[0.98]"
            >
              Investor Info
            </Link>
            <Link 
              to="/contact"
              className="w-full min-h-[46px] flex items-center justify-center text-xs uppercase tracking-widest font-medium text-white rounded-xl border border-white/20 hover:bg-white/5 transition-colors active:scale-[0.98]"
            >
              Contact Us
            </Link>
            <div className="text-center pt-2 text-[10px] text-white/30 uppercase tracking-widest">
              BRID Logistics GmbH · Hamburg
            </div>
          </div>
        </div>
        
        {/* Backdrop */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
}
