import { Github, Linkedin, Send, ChevronUp } from 'lucide-react';
import { copyrightText, socialLinks } from '../data';
import ScrollReveal from './ScrollReveal';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="portfolio-footer" className="bg-slate-950 text-slate-400 py-12 relative border-t border-slate-900">
      {/* Decorative colored glow on corners */}
      <div className="absolute bottom-0 left-0 w-80 h-40 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-40 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center items-center space-y-6">
        
        {/* Core elements */}
        <ScrollReveal direction="up" delay={0.1} className="w-full">
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6 pb-6 border-b border-slate-900">
            
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold tracking-wider text-white">
                Serey<span className="text-cyan-400">Phem</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-mono">Web Developer Intern Portfolio</p>
            </div>

            {/* Social connections */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.platform === 'GitHub' ? Github : link.platform === 'LinkedIn' ? Linkedin : Send;
                return (
                  <a
                    key={link.platform}
                    id={`footer-social-${link.platform.toLowerCase()}`}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    referrerPolicy="no-referrer"
                    className="p-2.5 bg-slate-900 border border-slate-850 hover:border-slate-800 text-slate-400 hover:text-cyan-400 rounded-xl hover:shadow-md transition-colors"
                    title={link.platform}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>

            {/* Back top control button */}
            <button
              id="footer-btn-totop"
              onClick={handleScrollToTop}
              className="p-3 rounded-xl bg-slate-900 border border-slate-850 hover:border-slate-800 hover:text-cyan-400 transition-colors pointer-events-auto cursor-pointer"
              aria-label="Back to Top"
            >
              <ChevronUp size={16} />
            </button>
          </div>
        </ScrollReveal>

        {/* Lower copyright */}
        <ScrollReveal direction="up" delay={0.2} className="w-full">
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
            <p id="footer-copyright" className="text-center sm:text-left">
              {copyrightText}
            </p>
            <div className="flex space-x-4 font-mono text-[10px]">
              <a href="#about" className="hover:text-cyan-400 transition-colors">Bio</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Stack</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Lab Work</a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </footer>
  );
}
