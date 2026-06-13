import { motion } from 'motion/react';
import { personalInfo, profilePictureUrl } from '../data';
import { User, MapPin, Languages, Lightbulb } from 'lucide-react';
import CardTilt from './CardTilt';
import ScrollReveal from './ScrollReveal';

interface AboutProps {
  onOpenResume: () => void;
}

export default function About({ onOpenResume }: AboutProps) {
  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'degree':
        return <User size={18} className="text-cyan-400" />;
      case 'location':
        return <MapPin size={18} className="text-cyan-400" />;
      case 'languages':
        return <Languages size={18} className="text-cyan-400" />;
      default:
        return <Lightbulb size={18} className="text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-slate-900 text-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient from-slate-900 to-slate-950 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <ScrollReveal className="text-center md:text-left mb-16 md:mb-20">
          <div className="inline-block text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/30 px-3.5 py-1 rounded-full border border-cyan-800/20 mb-3">
            Serey's Identity
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white animate-pulse-slow">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="h-1 w-20 bg-cyan-500 rounded mt-3 mx-auto md:mx-0" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Accent Side Image Panel */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <ScrollReveal direction="left" delay={0.1}>
              <CardTilt className="w-64 h-80 sm:w-72 sm:h-96 rounded-3xl" glowColor="rgba(34, 211, 238, 0.18)">
                <div className="relative w-full h-full">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-400 to-indigo-600 rounded-3xl blur-md opacity-30 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Outer absolute white lines */}
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-cyan-400/50" />
                  <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-indigo-400/50" />

                  <div className="w-full h-full bg-slate-950 rounded-3xl overflow-hidden p-1 bg-gradient-to-br from-cyan-400 to-indigo-500 shadow-xl relative group">
                    <div className="w-full h-full rounded-[20px] overflow-hidden bg-slate-900 relative">
                      <img
                        id="about-avatar"
                        src={profilePictureUrl}
                        alt="Serey Phem Portrait"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-104 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                      
                      {/* Floating caption overlay */}
                      <div className="absolute bottom-4 left-4 right-4 text-center">
                        <p className="text-xs font-mono text-cyan-400">Class of 2026</p>
                        <p className="text-sm font-bold text-white">Passerelles Numériques Cambodia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardTilt>
            </ScrollReveal>
          </div>

          {/* Text Description Box */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <ScrollReveal direction="right" delay={0.15} className="space-y-4 text-slate-300 leading-relaxed text-base">
              {personalInfo.detailedBio.map((para, idx) => (
                <p key={idx} className="font-normal text-slate-300">
                  {para}
                </p>
              ))}
            </ScrollReveal>

            {/* View & Download Resume CTA Button Block */}
            <ScrollReveal direction="up" delay={0.2} className="pt-2 flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                id="about-btn-download-cv"
                onClick={onOpenResume}
                className="group flex items-center justify-center space-x-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 rounded-xl shadow-lg hover:shadow-cyan-400/10 transition-all cursor-pointer pointer-events-auto"
              >
                <span>View & Save Professional CV (PDF)</span>
                <span className="text-sm group-hover:translate-x-0.5 transition-transform">📄</span>
              </motion.button>
            </ScrollReveal>

            {/* Quick stats grid with staggered 3D tilt tracking card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {personalInfo.stats.map((stat, sIndex) => (
                <div key={stat.label}>
                  <ScrollReveal
                    direction="up"
                    delay={0.15 + sIndex * 0.08}
                  >
                    <CardTilt className="rounded-2xl w-full" glowColor="rgba(34, 211, 238, 0.16)">
                      <div
                        id={`about-stat-${stat.label.toLowerCase()}`}
                        className="p-4 bg-slate-955/60 border border-slate-80 border-slate-800/60 hover:border-slate-705/80 hover:border-slate-700/80 rounded-2xl flex items-start space-x-3.5 hover:shadow-md transition-all duration-200"
                      >
                        <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl flex-shrink-0">
                          {getIcon(stat.label)}
                        </div>
                        <div className="text-left">
                          <h4 className="text-xs font-mono tracking-wider text-slate-400 uppercase">
                            {stat.label}
                          </h4>
                          <p className="text-sm font-semibold text-white mt-0.5 leading-tight">
                            {stat.value}
                          </p>
                        </div>
                      </div>
                    </CardTilt>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
