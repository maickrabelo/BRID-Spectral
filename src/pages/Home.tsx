import React from 'react';
import { cn } from '@/src/lib/utils';
import { ArrowRight, Check, Zap, Play, Box, Layers, Settings, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CursorRingField from '@/src/components/ui/CursorRingField';

export function Home() {
  return (
    <div className="min-h-screen bg-[#060608] text-white overflow-hidden font-sans selection:bg-blue-500/30">
      
      {/* Background Grid & Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 z-0">
          <CursorRingField 
            background="transparent" 
            colors={["#60a5fa", "#2dd4bf", "#1e3a8a"]} 
            density={200}
            dotSize={150}
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] bg-teal-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      </div>

      <div className="relative z-10 pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* HERO SECTION */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center min-h-[50vh] lg:min-h-[60vh]">
            <div className="flex flex-col items-start text-left max-w-2xl">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 mb-6 backdrop-blur-sm">
                <img src="/logo-brid-icon.png" alt="BRID" className="w-4 h-4 object-contain" />
                <span className="text-[11px] font-medium tracking-widest uppercase text-blue-300">BRID Spectral Technologies</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight lg:leading-[1.1]">
                Engineering <span className="text-blue-400">the State Space.</span>
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg text-white/70 mb-8 sm:mb-10 max-w-lg font-light leading-relaxed">
                A Hamburg-based deep-tech platform converting proprietary mathematical architecture into experimentally validated industrial technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-10 sm:mb-16">
                <Link to="/investors" className="w-full sm:w-auto text-center bg-blue-400 text-[#0a0a0f] px-8 py-3.5 rounded-full font-semibold hover:bg-blue-300 transition-colors shadow-[0_0_20px_rgba(96,165,250,0.3)] whitespace-nowrap uppercase tracking-widest text-xs min-h-[44px] flex items-center justify-center active:scale-[0.98]">
                  Investor Info
                </Link>
                <Link to="/contact" className="w-full sm:w-auto text-center border border-white/20 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/5 transition-colors whitespace-nowrap uppercase tracking-widest text-xs min-h-[44px] flex items-center justify-center active:scale-[0.98]">
                  Contact Us
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-6 w-full max-w-lg border-t border-white/10 pt-6 sm:pt-8">
                <div>
                  <div className="text-2xl sm:text-3xl font-light text-blue-400 mb-1">10k+</div>
                  <div className="text-[10px] sm:text-xs text-white/60 leading-tight uppercase tracking-wider sm:tracking-widest">Possible States</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-light text-blue-400 mb-1">430</div>
                  <div className="text-[10px] sm:text-xs text-white/60 leading-tight uppercase tracking-wider sm:tracking-widest">Accessible States</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-light text-blue-400 mb-1">01</div>
                  <div className="text-[10px] sm:text-xs text-white/60 leading-tight uppercase tracking-wider sm:tracking-widest">Validated Config</div>
                </div>
              </div>
            </div>

            {/* Right Graphic area (Desktop) */}
            <div className="relative hidden lg:flex justify-center items-center h-[500px]">
              {/* Abstract Graphic representation */}
              <div className="absolute inset-0 bg-blue-500/5 rounded-3xl border border-blue-500/20 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-[0_0_50px_rgba(96,165,250,0.1)]">
                {/* Concentric rings/circuit lines */}
                <div className="absolute w-[400px] h-[400px] border border-blue-500/20 rounded-full"></div>
                <div className="absolute w-[300px] h-[300px] border border-blue-500/20 rounded-full border-dashed animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute w-[200px] h-[200px] border border-blue-500/30 rounded-full"></div>
                
                {/* Large "V4" Text */}
                <span className="text-[140px] font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-900/50 drop-shadow-[0_0_20px_rgba(96,165,250,0.4)] tracking-tighter">
                  v4.2
                </span>
                
                {/* Decorative circuit nodes */}
                <div className="absolute top-[20%] left-[20%] w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"></div>
                <div className="absolute bottom-[30%] right-[25%] w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_10px_#2dd4bf]"></div>
                <div className="absolute top-[50%] right-[10%] w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HEXAGON FEATURE SECTION */}
      <div className="relative z-10 py-14 sm:py-24 bg-gradient-to-b from-[#060608] via-[#0a0f18] to-[#060608]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Hexagons Graphic */}
            <div className="relative h-[280px] sm:h-[360px] lg:h-[500px] w-full flex items-center justify-center">
               <div className="relative w-[260px] sm:w-[300px] h-[300px] sm:h-[350px] scale-90 sm:scale-100">
                  {/* Hex grid with CSS */}
                  {[
                    {top: 0, left: '25%'},
                    {top: 0, right: '25%'},
                    {top: '33%', left: 0},
                    {top: '33%', left: '50%'},
                    {top: '33%', right: 0},
                    {top: '66%', left: '25%'},
                    {top: '66%', right: '25%'}
                  ].map((pos, i) => (
                    <div 
                      key={i} 
                      className="absolute w-[85px] sm:w-[100px] h-[98px] sm:h-[115px] transition-transform hover:scale-105 duration-300"
                      style={{
                        ...pos,
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        background: 'linear-gradient(to bottom right, rgba(96,165,250,0.25), rgba(15,23,42,0.85))',
                        border: '1px solid rgba(96,165,250,0.3)',
                        boxShadow: 'inset 0 0 20px rgba(96,165,250,0.1)'
                      }}
                    >
                      <div className="absolute inset-[1px] bg-[#0c1220]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Text Content */}
            <div className="max-w-xl">
              <div className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">The Spectral Engine</div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 leading-tight">
                From Proprietary Mathematics<br/>
                to Industrial Technology
              </h2>
              <p className="text-white/70 mb-5 sm:mb-6 text-sm leading-relaxed">
                The research programme originates from the Spectral Theory of Matter, a multi-volume theoretical framework investigating the organization, stability and transitions of physical states. BRID Spectral Technologies builds the engineering layer above it.
              </p>
              <div className="border-l-2 border-blue-400 pl-4 sm:pl-6 py-2 text-xs sm:text-sm text-blue-100/90 uppercase tracking-wide leading-relaxed mb-5 sm:mb-6">
                The equations are the foundation.<br/>The engineering system is the product.
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                We are developing the computational representations, algorithms, parameterization methods, inverse-design procedures and experimental decision systems that bridge theory and physical synthesis.
              </p>
            </div>
            
          </div>
        </div>
      </div>

      {/* HORIZONTAL CARDS SECTION */}
      <div className="relative z-10 py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* COLUMN 1 */}
            <div>
              <div className="mb-8 sm:mb-12">
                <div className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">The First Commercial Beachhead</div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 leading-tight">
                  We Start With<br/>
                  Advanced Materials.
                </h2>
                
                <p className="text-white/70 mt-4 sm:mt-6 text-sm leading-relaxed">
                  Advanced materials provide an unusually powerful environment for testing Spectral Engineering because computational predictions can be compared directly with established simulations, physical samples and experimental measurements.
                </p>
              </div>

              {/* Responsive Cards: Clean grid on all devices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
                {/* Card 1 */}
                <div className="bg-[#0f1523] border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col hover:border-blue-500/50 transition-colors">
                  <h3 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2 text-white">Spectral Search</h3>
                  <p className="text-xs text-white/50 mb-5 min-h-[32px]">Navigating the accessible states.</p>
                  
                  <ul className="space-y-3 mb-6 flex-1">
                    {[
                      'Target Property Definition',
                      'State-space Mapping',
                      'Candidate Narrowing',
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80">
                        <Check className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/technology" className="w-full py-3 rounded-xl border border-white/20 text-center text-white text-xs font-medium hover:bg-white/5 transition-colors uppercase tracking-widest min-h-[44px] flex items-center justify-center active:scale-[0.98]">
                    Learn More
                  </Link>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-b from-[#1a2333] to-[#0f1523] border border-blue-500/30 rounded-2xl p-5 sm:p-6 flex flex-col shadow-[0_0_30px_rgba(96,165,250,0.1)]">
                  <h3 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2 text-blue-400">Synthesis & Validation</h3>
                  <p className="text-xs text-white/50 mb-5 min-h-[32px]">From predictions to physical evidence.</p>
                  
                  <ul className="space-y-3 mb-6 flex-1">
                    {[
                      'Conventional Simulation',
                      'Physical Synthesis',
                      'Experimental Validation',
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80">
                        <Check className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/validation" className="w-full py-3 rounded-xl bg-blue-500 text-[#0a0a0f] text-xs font-bold tracking-widest uppercase hover:bg-blue-400 transition-colors shadow-[0_0_15px_rgba(96,165,250,0.4)] min-h-[44px] flex items-center justify-center active:scale-[0.98]">
                    View Model
                  </Link>
                </div>
              </div>
            </div>

            {/* TOOLS LIST COLUMN */}
            <div className="pt-4 lg:pt-0">
              <div className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">Frontier Programmes</div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-10 leading-tight">
                Long-term Scientific<br/>
                Optionality
              </h2>

              <p className="text-white/70 mb-6 sm:mb-8 text-sm leading-relaxed border-b border-white/10 pb-6 sm:pb-8">
                Frontier programmes represent long-term scientific optionality and are not part of the company's initial commercial claims. They explore areas where Spectral Theory suggests fundamentally new physics.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {[
                  "Propulsion concepts: Investigating novel mechanisms for momentum transfer based on state transitions.",
                  "Field interactions: Modeling complex electromagnetic and structural interdependencies at scale.",
                  "Gravity-related foundational research: Exploring edge-cases in the Spectral Theory of Matter."
                ].map((desc, i) => (
                  <div key={i} className="group">
                    <div className="flex gap-4 sm:gap-6 items-start pb-5 sm:pb-6 border-b border-white/10 group-hover:border-blue-500/30 transition-colors">
                      <p className="flex-1 text-xs sm:text-sm text-white/70 group-hover:text-white transition-colors leading-relaxed">
                        {desc}
                      </p>
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:border-blue-400 group-hover:bg-blue-400/10 transition-all">
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:text-blue-400 -rotate-45 group-hover:rotate-0 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* WHY ADOPT AI SECTION */}
      <div className="relative z-10 py-14 sm:py-24 bg-[#0a0e17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 sm:mb-16">
            <div className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">The Reduction Funnel</div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 leading-tight">
              Search Less. Learn Faster.<br/>
              Engineer Better.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="bg-[#0f1523] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-colors">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white/5 rounded-xl flex items-center justify-center mb-5 sm:mb-6">
                <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-white">Mathematical Filtering</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                An illustrative funnel showing how a state-space layer is intended to narrow a search from 10,000 possible states to a few hundred accessible candidates.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0f1523] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-colors">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white/5 rounded-xl flex items-center justify-center mb-5 sm:mb-6">
                <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-white">Candidate Targeting</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Before conventional simulation and experiment take over, our proprietary layer reduces the field to only the most high-value candidates.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#151c2c] border border-blue-500/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_30px_rgba(96,165,250,0.05)]">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-5 sm:mb-6 border border-blue-500/20">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-blue-400">Experimental Validation</h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                The objective is to physically synthesize the top candidates, characterizing them in lab environments to validate the initial computational claims.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
