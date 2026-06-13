import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data';
import { Project } from '../types';
import CardTilt from './CardTilt';
import ScrollReveal from './ScrollReveal';
import {
  CalendarCheck,
  Music,
  MailOpen,
  Footprints,
  Dumbbell,
  Github,
  ExternalLink,
  Code2,
  Database,
  ChevronDown,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  CalendarCheck: CalendarCheck,
  Music: Music,
  EnvelopeOpen: MailOpen,
  Footprints: Footprints,
  Dumbbell: Dumbbell,
  Database: Database,
};

const projectUIMeta: Record<string, {
  imageUrl: string;
  subtitle: string;
  metaAuthors: string;
  stats: { value: string; label: string }[];
  svgTrack: React.ReactNode;
}> = {
  'Inventory Management System': {
    imageUrl: 'https://images.unsplash.com/photo-1553413719-87a82bc1a722?auto=format&fit=crop&q=85&w=600',
    subtitle: 'High-Performance Node.js REST API',
    metaAuthors: '2026 by Serey PHEM & Node Project Team',
    stats: [
      { value: '24+', label: 'API Routes' },
      { value: 'MySQL', label: 'Database' },
      { value: 'JWT/RBAC', label: 'Security' }
    ],
    svgTrack: (
      <svg viewBox="0 0 100 100" className="w-10 h-10 stroke-cyan-500 stroke-[2.5] fill-none">
        <circle cx="20" cy="50" r="5" className="fill-cyan-500" />
        <path d="M25,50 L45,50 M45,50 L55,30 L75,30 M45,50 L55,70 L75,70" />
        <circle cx="75" cy="30" r="4" />
        <circle cx="75" cy="70" r="4" />
      </svg>
    )
  },
  'Attendance Management System': {
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=85&w=600',
    subtitle: 'Institutional Role-Based Tracker',
    metaAuthors: '2026 by Serey PHEM & Virtual Company 1',
    stats: [
      { value: '3 Roles', label: 'Access Control' },
      { value: 'Laravel', label: 'Framework' },
      { value: 'Vue.js 3', label: 'Frontend' }
    ],
    svgTrack: (
      <svg viewBox="0 0 100 100" className="w-10 h-10 stroke-emerald-500 stroke-[2.5] fill-none">
        <rect x="25" y="25" width="50" height="50" rx="8" />
        <line x1="25" y1="45" x2="75" y2="45" />
        <circle cx="40" cy="65" r="3" className="fill-emerald-500" />
        <circle cx="60" cy="65" r="3" className="fill-emerald-500" />
      </svg>
    )
  },
  'Music Player': {
    imageUrl: 'https://images.unsplash.com/photo-1614680376593-902f74fa0d41?auto=format&fit=crop&q=85&w=600',
    subtitle: 'Fluid Client-Side Audio Engine',
    metaAuthors: '2026 by Serey PHEM & JS Project Team',
    stats: [
      { value: 'HTML5', label: 'Audio API' },
      { value: '6 Keybinds', label: 'Shortcuts' },
      { value: 'Local', label: 'File Uploads' }
    ],
    svgTrack: (
      <svg viewBox="0 0 100 100" className="w-10 h-10 stroke-fuchsia-500 stroke-[2.5] stroke-linecap-round animate-pulse">
        <line x1="20" y1="50" x2="20" y2="50" />
        <path d="M20,50 L20,30 L20,70" />
        <path d="M35,50 L35,15 L35,85" />
        <path d="M50,50 L50,40 L50,60" />
        <path d="M65,50 L65,20 L65,80" />
        <path d="M80,50 L80,35 L80,65" />
      </svg>
    )
  },
  'Freedom Online Shoes': {
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=85&w=600',
    subtitle: 'Footwear Storefront Showcase',
    metaAuthors: '2025 by Serey PHEM (Individual Project)',
    stats: [
      { value: 'Fully', label: 'Responsive' },
      { value: 'SCSS', label: 'Style Sheet' },
      { value: '5 Pages', label: 'Interactions' }
    ],
    svgTrack: (
      <svg viewBox="0 0 100 100" className="w-10 h-10 stroke-orange-500 stroke-[2.5] fill-none">
        <path d="M20,60 C30,70 40,75 50,65 C60,55 70,50 80,60 C75,40 65,30 50,40 C35,50 25,35 20,60 Z" />
        <circle cx="50" cy="52" r="3" className="fill-orange-500" />
      </svg>
    )
  },
  'Gym Online': {
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=85&w=600',
    subtitle: 'Mobile UI UX Prototype',
    metaAuthors: '2025 by Serey PHEM & Gym Design Team',
    stats: [
      { value: 'Figma', label: 'Design Tool' },
      { value: '18 Glassy', label: 'Screens' },
      { value: '100%', label: 'Interactive' }
    ],
    svgTrack: (
      <svg viewBox="0 0 100 100" className="w-10 h-10 stroke-rose-500 stroke-[2.5] fill-none">
        <path d="M15,50 L35,50 L42,20 L50,80 L58,45 L65,55 L70,50 L85,50" />
        <circle cx="42" cy="20" r="3" className="fill-rose-500" />
      </svg>
    )
  }
};

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Full Stack' | 'Frontend' | 'UI/UX'>('All');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    'Inventory Management System': true, // Keep the first one open by default to immediately showcase details
  });

  const toggleExpand = (title: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const filteredProjects = projectsData.filter(
    (project) => filter === 'All' || project.category === filter
  );

  const categories: ('All' | 'Full Stack' | 'Frontend' | 'UI/UX')[] = [
    'All',
    'Full Stack',
    'Frontend',
    'UI/UX',
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950 text-slate-100 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#081320,transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center mb-12">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-block text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/30 px-3.5 py-1 rounded-full border border-cyan-800/20 mb-3">
              My Lab Work
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              My <span className="text-cyan-400">Projects</span>
            </h2>
            <div className="h-1 w-20 bg-cyan-500 rounded mt-3 mx-auto" />
          </ScrollReveal>
        </div>

        {/* Filter Tabs */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex justify-center flex-wrap gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`project-tab-${cat.toLowerCase().replace(' ', '-')}`}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-250 cursor-pointer ${
                  filter === cat
                    ? 'bg-cyan-400 text-slate-900 shadow-md shadow-cyan-450/20 shadow-lg font-bold'
                    : 'bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const meta = projectUIMeta[project.title] || {
                imageUrl: 'https://images.unsplash.com/photo-1553413719-87a82bc1a722?auto=format&fit=crop&q=85&w=600',
                subtitle: 'Practical Lab Experimentation',
                metaAuthors: '25 April 2026 by Serey PHEM',
                stats: [
                  { value: 'Web', label: 'Platform' },
                  { value: 'Git', label: 'Version' },
                  { value: 'Responsive', label: 'Layout' }
                ],
                svgTrack: (
                  <svg viewBox="0 0 100 100" className="w-10 h-10 stroke-cyan-500 stroke-[2.5] fill-none">
                    <circle cx="50" cy="50" r="10" />
                    <line x1="10" y1="50" x2="90" y2="50" />
                  </svg>
                )
              };

              const isExpanded = !!expandedCards[project.title];

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={project.title}
                  id={`project-card-${project.title.toLowerCase().split(' ')[0]}`}
                  className="flex flex-col relative"
                >
                  {/* Top Portion Wrapped in CardTilt for elegant fluid spotlight & tilt */}
                  <CardTilt className="rounded-[32px] overflow-hidden relative z-20 border-4 border-slate-900 h-[280px]" glowColor="rgba(56, 189, 248, 0.22)">
                    <div
                      onClick={() => toggleExpand(project.title)}
                      className="relative h-full w-full overflow-hidden group cursor-pointer transition-all duration-300"
                      style={{
                        backgroundImage: `url(${meta.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      {/* Shadow / Tint Overlay */}
                      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/35 transition-colors duration-300" />
                      <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

                      {/* Content inside Header */}
                      <div className="flex flex-col justify-between h-full p-6 relative">
                        {/* Top Row: Category Badge */}
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#0e7490] bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/20 shadow-sm shadow-black/5">
                            {project.category}
                          </span>
                        </div>

                        {/* Bottom Row: Info & Action button matching design */}
                        <div className="flex items-end justify-between w-full mt-auto gap-2">
                          <div className="text-left">
                            <h3 className="text-white text-base font-extrabold tracking-tight drop-shadow-md line-clamp-1 group-hover:text-cyan-300 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-slate-300 text-[10px] font-mono tracking-wider font-semibold uppercase drop-shadow-sm mt-0.5">
                              {project.category} Module
                            </p>
                          </div>

                          {/* Interactive dynamic button mimicking Start Route */}
                          {(project.githubUrl || project.liveUrl) ? (
                            <a
                              href={project.liveUrl || project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              referrerPolicy="no-referrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center space-x-1 px-4 py-2.5 bg-white/10 hover:bg-white/25 active:bg-white/35 backdrop-blur-md border border-white/15 text-white rounded-full font-bold text-[10px] tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer flex-shrink-0"
                            >
                              <span>Start Route</span>
                            </a>
                          ) : (
                            <span className="text-[9px] font-mono text-slate-400 bg-slate-950/60 border border-slate-800/40 py-1.5 px-3 rounded-full flex-shrink-0">
                              Mockup
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardTilt>

                  {/* Expandable Panel - Beautiful container mirroring mockup */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden rounded-b-[32px] bg-white text-slate-800 border-x border-b border-slate-200/50 shadow-2xl relative z-10 -mt-6"
                  >
                    <div className="pt-10 p-6 space-y-4">
                      {/* Subtitle Details and Authors */}
                      <div>
                        <h4 className="text-sm font-extrabold text-slate-900 leading-snug">
                          {meta.subtitle}
                        </h4>
                        <p className="text-[10px] font-mono font-bold text-slate-400 mt-1 uppercase tracking-wider">
                          {meta.metaAuthors}
                        </p>
                      </div>

                      <hr className="border-slate-100" />

                      {/* Stat grid and SVG blueprint track outline */}
                      <div className="grid grid-cols-12 gap-2 items-center">
                        <div className="col-span-8 grid grid-cols-3 gap-1 border-r border-slate-105 pr-2">
                          {meta.stats.map((stat, sIdx) => (
                            <div key={sIdx} className="space-y-0.5">
                              <span className="block text-[11.5px] sm:text-xs font-extrabold text-slate-900 tracking-tight leading-none">
                                {stat.value}
                              </span>
                              <span className="block text-[8px] font-mono font-bold tracking-widest text-slate-400 uppercase leading-none mt-1">
                                {stat.label}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Beautiful squircle map vector route */}
                        <div className="col-span-4 flex justify-center">
                          <div className="w-14 h-14 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-2xl shadow-inner hover:bg-slate-100/50 transition-colors">
                            {meta.svgTrack}
                          </div>
                        </div>
                      </div>

                      {/* Descriptive Paragraphs style */}
                      <p className="text-[11px] leading-relaxed text-slate-550 font-normal">
                        {project.description}
                      </p>

                      {/* Action links */}
                      <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            referrerPolicy="no-referrer"
                            className="flex-1 py-2 px-3 text-[10px] font-mono font-bold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200/50 flex items-center justify-center space-x-1 transition-all"
                          >
                            <Github size={12} />
                            <span>Code Repository</span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            referrerPolicy="no-referrer"
                            className="flex-1 py-2 px-3 text-[10px] font-mono font-bold rounded-lg bg-cyan-100 hover:bg-cyan-200 text-cyan-800 flex items-center justify-center space-x-1 transition-all"
                          >
                            <ExternalLink size={12} />
                            <span>Live Action</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Centered down/up chevron toggle button */}
                  <div className="flex justify-center -mt-2 relative z-20 pb-4">
                    <button
                      onClick={() => toggleExpand(project.title)}
                      className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center shadow-lg hover:shadow-cyan-500/10 transition-all active:scale-90 cursor-pointer"
                      aria-label={isExpanded ? 'Collapse Details' : 'Expand Details'}
                    >
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-center justify-center"
                      >
                        <ChevronDown size={15} className="stroke-[3]" />
                      </motion.span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
