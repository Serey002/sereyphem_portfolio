import { workshopsData, companyVisits } from '../data';
import { Award, Building2, Languages, Milestone } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900 text-slate-100 relative">
      <div className="absolute inset-0 bg-radial-gradient from-slate-900 via-slate-950 to-slate-950 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-block text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/30 px-3.5 py-1 rounded-full border border-cyan-800/20 mb-3">
              Engagement
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Additional <span className="text-cyan-400">Experience</span>
            </h2>
            <div className="h-1 w-20 bg-cyan-500 rounded mt-3 mx-auto" />
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Workshops & Trainings List (Left Column) */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="left" delay={0.15}>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-cyan-950 text-cyan-400 border border-cyan-800/20 rounded-xl">
                  <Award size={18} />
                </div>
                <h3 className="text-xl font-extrabold text-white">Workshops & Certifications</h3>
              </div>
            </ScrollReveal>
            
            <div className="space-y-4">
              {workshopsData.map((workshop, idx) => (
                <div key={workshop.title}>
                  <ScrollReveal direction="up" delay={0.2 + idx * 0.08}>
                    <div id={`workshop-item-${idx}`} className="p-5 bg-slate-950 border border-slate-850 hover:border-slate-800 rounded-2xl flex flex-col sm:flex-row justify-between items-start gap-4 transition-all hover:bg-slate-950/80 shadow-md">
                      <div className="space-y-1.5 flex-1">
                        <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{workshop.title}</span>
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed font-normal">
                          {workshop.description}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/10 whitespace-nowrap self-start sm:self-center">
                        {workshop.date}
                      </span>
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>

          {/* Company visits & Languages (Right Column) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Company visits card */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="p-6 bg-slate-950 border border-slate-850/80 rounded-3xl space-y-6 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-cyan-950 text-cyan-400 border border-cyan-800/20 rounded-xl">
                    <Building2 size={18} />
                  </div>
                  <h3 className="text-base font-extrabold text-white">Industrial Company Visits</h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Expanded exposure through direct corporate visits, exploring live web workflows, IT architectures, and database administration layouts.
                </p>

                <div id="company-visit-tags" className="flex flex-wrap gap-2 pt-2">
                  {companyVisits.map((visit) => (
                    <span
                      key={visit}
                      className="text-[10px] uppercase font-mono tracking-wider font-semibold px-3 py-1.5 rounded-xl bg-slate-900 text-slate-300 border border-slate-800/60"
                    >
                      {visit}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Languages card */}
            <ScrollReveal direction="up" delay={0.25}>
              <div className="p-6 bg-slate-950 border border-slate-850/80 rounded-3xl space-y-6 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-cyan-950 text-cyan-400 border border-cyan-800/20 rounded-xl">
                    <Languages size={18} />
                  </div>
                  <h3 className="text-base font-extrabold text-white">Languages Proficiency</h3>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-200">Khmer (Native)</span>
                      <span className="text-cyan-400 font-mono">100%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-850">
                      <div className="h-full w-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-200">English (Intermediate)</span>
                      <span className="text-cyan-400 font-mono">65%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-850">
                      <div className="h-full w-[65%] bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
