import React from 'react';
import { motion } from 'motion/react';
import { skillsData } from '../data';
import ScrollReveal from './ScrollReveal';
import {
  Code,
  Shield,
  Server,
  Layers,
  Cpu,
  FileCode,
  Database,
  Wind,
  Palette,
  GitBranch,
  Terminal,
  GraduationCap,
  CheckCircle,
  Users,
  MessageSquare,
  Clock,
  Search,
  RefreshCw,
  Share2,
  Activity,
  CheckSquare,
  Cloud,
  Box,
  HardDrive,
  ExternalLink,
  Lightbulb,
  HelpCircle,
  Award,
  Shuffle,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Html5: Code,
  Code: Code,
  Shield: Shield,
  Server: Server,
  Layers: Layers,
  Cpu: Cpu,
  FileCode: FileCode,
  Database: Database,
  Wind: Wind,
  Palette: Palette,
  GitBranch: GitBranch,
  Terminal: Terminal,
  GraduationCap: GraduationCap,
  CheckCircle: CheckCircle,
  Users: Users,
  MessageSquare: MessageSquare,
  Clock: Clock,
  Search: Search,
  RefreshCw: RefreshCw,
  Share2: Share2,
  Activity: Activity,
  CheckSquare: CheckSquare,
  Cloud: Cloud,
  Box: Box,
  HardDrive: HardDrive,
  ExternalLink: ExternalLink,
  Lightbulb: Lightbulb,
  HelpCircle: HelpCircle,
  Award: Award,
  Shuffle: Shuffle,
};

// Map real developer/brand icons from the high-quality Simple Icons CDN (official colors)
const realLogosMap: Record<string, string[]> = {
  'HTML5 & CSS3': [
    'https://cdn.simpleicons.org/html5',
    'https://cdn.simpleicons.org/css3'
  ],
  'JavaScript': [
    'https://cdn.simpleicons.org/javascript'
  ],
  'Typescript - OOP': [
    'https://cdn.simpleicons.org/typescript'
  ],
  'Vue.js': [
    'https://cdn.simpleicons.org/vuejs'
  ],
  'Python (Algorithm)': [
    'https://cdn.simpleicons.org/python'
  ],
  'Database (MySQL and Mongodb)': [
    'https://cdn.simpleicons.org/mysql',
    'https://cdn.simpleicons.org/mongodb'
  ],
  'PHP': [
    'https://cdn.simpleicons.org/php'
  ],
  'Laravel': [
    'https://cdn.simpleicons.org/laravel'
  ],
  'Node.js': [
    'https://cdn.simpleicons.org/nodedotjs'
  ],
  'GitHub (Version Control)': [
    'https://cdn.simpleicons.org/github/ffffff'
  ],
  'Jira (Agile Management)': [
    'https://cdn.simpleicons.org/jira'
  ],
  'Figma (UI/UX Design)': [
    'https://cdn.simpleicons.org/figma'
  ],
  'Postman': [
    'https://cdn.simpleicons.org/postman'
  ],
  'AWS Free Trial': [
    'https://cdn.simpleicons.org/amazonwebservices'
  ],
  'Docker (Basic)': [
    'https://cdn.simpleicons.org/docker'
  ],
  'Ubuntu (Basic)': [
    'https://cdn.simpleicons.org/ubuntu'
  ],
  'Vercel': [
    'https://cdn.simpleicons.org/vercel/ffffff'
  ],
  'AI Tools (Cloud AI, ChatGPT, Gemini)': [
    'https://cdn.simpleicons.org/openai',
    'https://cdn.simpleicons.org/googlegemini'
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950 text-slate-100 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0c1020,transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-block text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/30 px-3.5 py-1 rounded-full border border-cyan-800/20 mb-3">
              My Stack
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              My <span className="text-cyan-400">Skills</span>
            </h2>
            <div className="h-1 w-20 bg-cyan-500 rounded mt-3 mx-auto" />
          </ScrollReveal>
        </div>

        {/* Categories Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {skillsData.map((category, catIndex) => (
            <div key={category.title}>
              <ScrollReveal direction="up" delay={0.15 + catIndex * 0.1}>
                <div className="p-6 sm:p-8 bg-slate-900/60 border border-slate-800/80 rounded-3xl hover:border-slate-800 shadow-xl">
                  <h3 className="text-lg font-bold text-white mb-6 pb-3 border-b border-slate-800/60 flex items-center space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <span>{category.title}</span>
                  </h3>

                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => {
                      const logos = realLogosMap[skill.name];
                      const Icon = iconMap[skill.iconClass] || Code;

                      return (
                        <div
                          key={skill.name}
                          id={`skill-item-${category.title.split(' ')[0].toLowerCase()}-${skill.name.split(' ')[0].toLowerCase()}`}
                          className="space-y-2 group"
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-3 text-slate-300 group-hover:text-cyan-400 transition-colors">
                              <div className="p-1.5 bg-slate-950 rounded-lg border border-slate-800 group-hover:bg-cyan-950/20 group-hover:border-cyan-500/20 transition-all flex items-center gap-1.5 min-h-[34px] justify-center">
                                {logos && logos.length > 0 ? (
                                  logos.map((logoUrl, lIdx) => (
                                    <img
                                      key={lIdx}
                                      src={logoUrl}
                                      alt={`${skill.name} Icon`}
                                      referrerPolicy="no-referrer"
                                      className="w-[16px] h-[16px] object-contain"
                                    />
                                  ))
                                ) : (
                                  <Icon size={14} />
                                )}
                              </div>
                              <span className="text-xs font-semibold text-slate-200">{skill.name}</span>
                            </div>
                            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded-md border border-cyan-800/15">
                              {skill.level}%
                            </span>
                          </div>

                          <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-900">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, delay: skillIndex * 0.05, ease: 'easeOut' }}
                              className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 rounded-full"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
