/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 160; // offset for nav

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once at start to capture reload state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-slate-955 min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 antialiased font-sans">

      {/* Dynamic particles background canvas decoration */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[8%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-tr from-cyan-500/5 to-indigo-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-indigo-500/5 to-purple-500/5 blur-[150px]" />
      </div>

      {/* Main Sections flow */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar activeSection={activeSection} onOpenResume={() => setIsResumeOpen(true)} />
        
        <main className="flex-grow">
          <Hero />
          <About onOpenResume={() => setIsResumeOpen(true)} />
          <Skills />
          <Education />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
        
        {/* CV Exporter Overlay Popup */}
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </div>
    </div>
  );
}

