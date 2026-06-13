import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
  onOpenResume: () => void;
}

export default function Navbar({ activeSection, onOpenResume }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // custom spacing clearance for floating navbar
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

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      id="main-nav-header"
      className="fixed top-5 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300"
    >
      <div 
        className={`max-w-5xl mx-auto rounded-full bg-slate-950/85 border border-slate-800/40 shadow-2xl px-5 md:px-7 py-2.5 transition-all flex items-center justify-between backdrop-blur-md ${
          scrolled ? 'bg-slate-950/95 border-slate-700/50 scale-[0.99] shadow-cyan-950/10' : 'scale-100'
        }`}
      >
        {/* Sleek Initials logo & pulsing seeking internship status badge */}
        <div className="flex items-center space-x-3 select-none">
          <div 
            className="flex items-center space-x-2.5 cursor-pointer group" 
            onClick={() => handleNavClick('home')}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-450 to-indigo-600 flex items-center justify-center font-black text-white text-xs shadow-md group-hover:scale-105 transition-transform">
              S
            </div>
            <span className="text-white text-sm font-bold tracking-tight uppercase group-hover:text-cyan-400 transition-colors">
              SEREY<span className="text-sky-400">.</span>
            </span>
          </div>
          
          {/* <div className="hidden lg:flex items-center space-x-1.5 px-3 py-1 bg-emerald-500/15 border border-emerald-500/25 rounded-full relative">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping absolute" />
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            <span className="text-[9px] font-mono tracking-wider font-extrabold uppercase text-emerald-400">Internship 2026</span>
          </div> */}
        </div>

        {/* Desktop Links - Stunning tab underlay sliding system */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-1.5 bg-slate-900/60 border border-slate-800/40 p-1 rounded-full">
          {navItems.map((item) => (
            <a
              key={item.id}
              id={`nav-link-${item.id}`}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 relative flex items-center justify-center ${
                activeSection === item.id
                  ? 'text-cyan-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="z-10">{item.label}</span>
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeNavTab"
                  className="absolute inset-0 bg-slate-800/70 border border-slate-700/40 rounded-full z-0 shadow-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Floating Capsule Action Button matching CV in photo */}
        <div className="hidden md:flex items-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 16px rgba(56, 189, 248, 0.45)" }}
            whileTap={{ scale: 0.96 }}
            id="nav-btn-cv"
            onClick={onOpenResume}
            className="px-5 py-2 text-[10px] font-extrabold uppercase tracking-widest text-[#030712] bg-cyan-400 rounded-full shadow-lg transition-all text-center cursor-pointer flex items-center gap-1.5"
          >
            <span>Resume</span>
            <ArrowUpRight size={13} className="stroke-[2.5]" />
          </motion.button>
        </div>

        {/* Mobile Navbar Elements */}
        <div className="md:hidden flex items-center justify-between w-full">
          <div className="flex items-center space-x-2 select-none" onClick={() => handleNavClick('home')}>
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 flex items-center justify-center font-bold text-white text-xs">
              S
            </div>
            <span className="text-white font-extrabold tracking-tight text-sm">Serey PHEM</span>
          </div>

          <button
            id="mobile-nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-900 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            id="mobile-nav-menu"
            className="md:hidden overflow-hidden mt-1.5 rounded-3xl border border-slate-800 bg-[#030712]/95 backdrop-blur-lg shadow-2xl"
          >
            <div className="px-5 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`block px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    activeSection === item.id
                      ? 'text-cyan-400 bg-cyan-950/40 border-l-2 border-cyan-400'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-800/60">
                <button
                  id="mobile-nav-btn-download-cv"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2.5 px-4 text-center rounded-xl text-xs font-bold tracking-wider text-[#030712] bg-cyan-400 hover:bg-cyan-300 transition-colors uppercase cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Open Resume</span>
                  <ArrowUpRight size={13} className="stroke-[2.5]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
