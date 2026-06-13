import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data';
import InteractiveCanvas from './InteractiveCanvas';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const realPhotoUrl = '/src/assets/images/sereyHero.png';

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-36 flex items-center justify-center overflow-visible bg-white text-slate-900"
    >
      {/* Editorial Tech Grid Background Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-60 z-0" />

      {/* Dynamic top sky blue visual radial backdrop */}
      <div className="absolute inset-0 bg-radial-gradient from-sky-100/40 via-white to-white pointer-events-none z-0" />

      {/* Floating Interactive Particle Network backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <InteractiveCanvas />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 w-full mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Column 1: Serey PHEM Branding & Subtitle (Left column) */}
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-center text-left space-y-4 md:pl-4">
            
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-400/20 text-sky-600 px-3.5 py-1.5 rounded-full w-fit select-none shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest font-extrabold uppercase">Full-Stack Explorer</span>
            </motion.div>

            <div className="space-y-1">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs font-mono tracking-widest font-extrabold text-slate-400 uppercase"
              >
                Hi there, My Name is
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl sm:text-7xl md:text-[84px] font-extrabold tracking-tighter leading-[0.9] flex flex-col"
              >
                <span className="text-slate-900 select-none">Serey</span>
                <span className="bg-gradient-to-r from-sky-400 via-sky-500 to-indigo-600 bg-clip-text text-transparent select-none drop-shadow-sm">PHEM</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col space-y-1 border-l-2 border-indigo-500 pl-4 py-0.5"
            >
              <h2 className="text-sm font-extrabold uppercase tracking-widest text-[#0e7490] font-mono">
                Web Developer Intern
              </h2>
              <p className="text-xs font-semibold text-slate-500 font-mono uppercase">
                Associate Degree PNC Class of 2026
              </p>
            </motion.div>
          </div>

          {/* Column 2: Advanced Rotating Orbits & Profile Avatar (Center column) */}
          <div className="col-span-12 lg:col-span-5 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-80 h-80 sm:w-[360px] sm:h-[360px] lg:w-[390px] lg:h-[390px] flex items-center justify-center group"
            >
              {/* Outer Cosmic Dotted SVG Rotating Orbit Line */}
              <svg 
                className="absolute w-full h-full animate-spin [animation-duration:35s] pointer-events-none select-none text-slate-300 opacity-60"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3, 4" />
                <circle cx="50" cy="2" r="2" fill="#38bdf8" />
                <circle cx="2" cy="50" r="1.5" fill="#6366f1" />
              </svg>

              {/* Inverse Secondary Rotating Orbit for dynamic physical depth */}
              <svg 
                className="absolute w-[90%] h-[90%] animate-spin [animation-duration:22s] [animation-direction:reverse] pointer-events-none select-none text-slate-200/80 opacity-70"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1, 8" />
                <circle cx="50" cy="2" r="2.5" fill="#0ea5e9" />
              </svg>

              {/* Layered White background Halo base */}
              <div className="absolute w-[82%] h-[82%] bg-slate-100/90 rounded-full flex items-center justify-center -z-10 shadow-lg border border-slate-200/40 group-hover:scale-101 group-hover:bg-slate-50 transition-all duration-700" />
              
              {/* Core Portrait Frame carrying Serey's Photo */}
                <img
                  id="hero-avatar"
                  src={realPhotoUrl}
                  alt="Serey Phem Real Portrait"
                  referrerPolicy="no-referrer"
                  className="-mt-25 w-full h-[120%] object-cover object-top scale-102 group-hover:scale-108 transition-all duration-[800ms] origin-bottom select-none pointer-events-none"
                />
              {/* <div className="absolute w-[72%] h-[72%] bg-[#020617] rounded-full overflow-hidden flex items-end justify-center z-10 shadow-2xl border-4 border-white">
                <img
                  id="hero-avatar"
                  src={realPhotoUrl}
                  alt="Serey Phem Real Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-[120%] object-cover object-top scale-102 group-hover:scale-108 transition-all duration-[800ms] origin-bottom select-none pointer-events-none"
                />
                
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-white/10 opacity-60" />
              </div> */}

              {/* Floating Badge 1 (Laravel Parallax Indicator) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.1 }}
                className="absolute bottom-[14%] -left-[4%] bg-white/95 backdrop-blur-md border border-slate-200/70 shadow-xl px-3.5 py-2 rounded-2xl flex items-center space-x-2 z-30 select-none cursor-default hover:scale-103 transition-transform"
              >
                <div className="w-7 h-7 rounded-lg bg-sky-500/15 flex items-center justify-center text-[#0e7490] font-black text-xs">
                  LV
                </div>
                <div className="text-left">
                  <p className="text-[8px] font-mono text-slate-400 uppercase leading-none font-bold">Reliable</p>
                  <p className="text-[11px] font-black text-slate-800 leading-tight">Laravel PHP</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 (Vue Parallax Indicator) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut", delay: 0.6 }}
                className="absolute top-[16%] -right-[4%] bg-white/95 backdrop-blur-md border border-slate-200/70 shadow-xl px-3.5 py-2 rounded-2xl flex items-center space-x-2 z-30 select-none cursor-default hover:scale-103 transition-transform"
              >
                <div className="w-7 h-7 rounded-lg bg-indigo-500/15 flex items-center justify-center text-indigo-600 font-black text-xs">
                  V3
                </div>
                <div className="text-left">
                  <p className="text-[8px] font-mono text-slate-400 uppercase leading-none font-bold">Modern UI</p>
                  <p className="text-[11px] font-black text-slate-800 leading-tight">Vue & TS</p>
                </div>
              </motion.div>

              {/* Glassmorphic Rounded Pill Button Group overlapping bottom edge of circles */}
              <div 
  id="hero-pills-cta" 
  className="absolute bottom-1/40 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-950/75 backdrop-blur-xl border border-slate-800/80 p-1.5 rounded-full z-40 shadow-2xl min-w-[280px]"
>
                <motion.button
                  whileHover={{ scale: 1.04, backgroundColor: '#38bdf8' }}
                  whileTap={{ scale: 0.97 }}
                  id="hero-btn-view-project"
                  onClick={() => handleScrollTo('projects')}
                  className="flex-grow px-5 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-950 bg-cyan-400 rounded-full shadow-md transition-all whitespace-nowrap cursor-pointer text-center"
                >
                  View Projects
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04, backgroundColor: 'rgba(30, 41, 59, 0.45)' }}
                  whileTap={{ scale: 0.97 }}
                  id="hero-btn-contact-me"
                  onClick={() => handleScrollTo('contact')}
                  className="flex-grow px-5 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-300 hover:text-white border border-slate-800 rounded-full transition-all whitespace-nowrap cursor-pointer text-center"
                >
                  Contact Me
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Column 3: Professional brief descriptive bio / quotes (Right column) */}
          <div className="col-span-12 lg:col-span-3 flex flex-col justify-center text-left space-y-5 md:pr-4">
            
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-extrabold select-none flex items-center gap-2">
              <span className="w-2 h-[2px] bg-sky-500" /> Summary Definition
            </div>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.95, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm text-slate-600 leading-relaxed text-left border-l-2 border-slate-200 pl-4 py-1.5 font-normal block"
            >
              "{personalInfo.bio}"
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="pt-2 flex flex-col gap-2.5 pl-4 select-none"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                <span className="text-xs text-slate-600 font-semibold font-mono tracking-tight">Active seeking opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span className="text-xs text-slate-600 font-semibold font-mono tracking-tight">Phnom Penh, Cambodia</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Interactive scroll mouse animation overlay at the bottom */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 select-none pointer-events-none opacity-50">
        <span className="text-[9px] font-mono tracking-widest font-extrabold uppercase text-slate-400">Scroll Down</span>
        <div className="w-5 h-9 rounded-full border-2 border-slate-300 p-1 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-1.5 h-2 rounded-full bg-sky-500"
          />
        </div>
      </div>

      {/* SVG curve transitions into the next dark section (About) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[120px] fill-slate-900">
          <path d="M0,120 L0,20 Q720,120 1440,20 L1440,120 Z"></path>
        </svg>
      </div>

    </section>
  );
}
