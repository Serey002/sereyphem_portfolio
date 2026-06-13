import { motion } from 'motion/react';
import { educationData, learningFocusList } from '../data';
import { Calendar, Award, GraduationCap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-900 text-slate-100 relative">
      <div className="absolute inset-0 bg-radial-gradient from-slate-900 via-slate-950 to-slate-950 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Section label */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-block text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/30 px-3.5 py-1 rounded-full border border-cyan-800/20 mb-3">
              My Journey
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              My <span className="text-cyan-400">Education</span>
            </h2>
            <div className="h-1 w-20 bg-cyan-500 rounded mt-3 mx-auto" />
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Timeline and Details (Left Column) */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal direction="up" delay={0.15}>
              <div className="p-6 bg-slate-950 border border-cyan-500/20 rounded-3xl">
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 bg-cyan-950/60 rounded-2xl text-cyan-400 border border-cyan-800/20">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{educationData.instName}</h3>
                    <p className="text-cyan-400 font-semibold text-sm">{educationData.degree}</p>
                    <p className="text-xs text-slate-400 font-medium flex items-center mt-1">
                      <Calendar size={12} className="mr-1.5" />
                      <span>{educationData.period}</span>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Vertical Milestones pipeline */}
            <div id="education-pipeline" className="space-y-6 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-800">
              {educationData.detailMilestones.map((milestone, idx) => (
                <div key={milestone.title}>
                  <ScrollReveal direction="left" delay={0.2 + idx * 0.1}>
                    <div id={`milestone-card-${idx}`} className="relative pl-14 group">
                      {/* Timeline dot */}
                      <div className="absolute left-3.5 top-2.5 w-5 h-5 rounded-full border-4 border-slate-900 bg-slate-850 group-hover:bg-cyan-400 group-hover:scale-110 group-hover:border-slate-800 transition-all duration-300 flex items-center justify-center pointer-events-none">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-900" />
                      </div>

                      <div className="p-5 bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-800 rounded-3xl transition-all duration-200 shadow-md">
                        <span className="inline-block text-[10px] font-mono font-semibold text-cyan-400 bg-cyan-950/50 px-2.5 py-0.5 rounded-full border border-cyan-800/10 mb-3">
                          {milestone.period}
                        </span>
                        <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {milestone.title}
                        </h4>
                        
                        {milestone.description && (
                          <p className="text-xs text-slate-400 leading-relaxed mt-2">
                            {milestone.description}
                          </p>
                        )}

                        {milestone.courses && (
                          <div className="mt-4 space-y-3">
                            <p className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Core Curriculum Highlights:</p>
                            <div className="flex flex-wrap gap-1.5">
                              {milestone.courses.map((course) => (
                                <span
                                  key={course}
                                  className={`text-xs px-2.5 py-1 rounded-lg border ${
                                    milestone.highlightCourse === course
                                      ? 'bg-cyan-950/40 text-cyan-300 border-cyan-800/40 font-semibold'
                                      : 'bg-slate-950/60 text-slate-300 border-slate-800'
                                  }`}
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>

          {/* PNC Learning Focus Breakdown (Right Column) */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="right" delay={0.15}>
              <div className="p-6 bg-slate-950 border border-slate-850 rounded-3xl space-y-4 shadow-xl">
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <Award size={18} className="text-cyan-400" />
                  <span>Learning Methods Focus</span>
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The course model builds essential software architecture parameters alongside professional lifecycle experiences to construct highly reliable and adaptable developers.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {learningFocusList.map((focus, idx) => (
                <div key={focus.title}>
                  <ScrollReveal direction="up" delay={0.25 + idx * 0.08}>
                    <div id={`focus-item-${idx}`} className="p-4 bg-slate-900/40 border border-slate-800/60 rounded-2xl flex items-start space-x-3.5 hover:bg-slate-900 transition-colors">
                      <div className="text-sm font-mono font-extrabold text-cyan-500/40 pt-0.5">
                        {focus.num}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-200 flex items-center">
                          <span>{focus.title}</span>
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed mt-1">
                          {focus.desc}
                        </p>
                      </div>
                    </div>
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
