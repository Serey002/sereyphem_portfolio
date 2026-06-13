import React, { useState } from 'react';
import { motion } from 'motion/react';
import { contactInfoItems } from '../data';
import { MapPin, Mail, Phone, Globe, Github, Send, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  MapPin: MapPin,
  Mail: Mail,
  Phone: Phone,
  Globe: Globe,
  Github: Github,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Quick client validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMessage('Please fill out all fields before submitting.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate real API dispatch
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setErrorMessage('Oops! Something went wrong. Please try emailing directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#0f162d,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Section title */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-block text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/30 px-3.5 py-1 rounded-full border border-cyan-800/20 mb-3">
              Inquire Now
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Get In <span className="text-cyan-400">Touch</span>
            </h2>
            <div className="h-1 w-20 bg-cyan-500 rounded mt-3 mx-auto" />
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Side (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {contactInfoItems.map((item, idx) => {
                const Icon = iconMap[item.iconClass] || MapPin;
                return (
                  <div key={item.label}>
                    <ScrollReveal direction="left" delay={0.15 + idx * 0.08}>
                      <div id={`contact-card-${item.label.toLowerCase()}`} className="p-5 bg-slate-900/60 border border-slate-800/80 hover:border-slate-800 rounded-2xl flex items-start space-x-4 hover:shadow-md transition-all duration-200">
                        <div className="p-3 bg-slate-950 text-cyan-400 border border-cyan-800/10 rounded-xl">
                          <Icon size={20} />
                        </div>
                        <div className="overflow-hidden">
                          <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider">{item.label}</h4>
                          {item.link ? (
                            <a
                              href={item.link}
                              target={item.label === 'Location' ? '_self' : '_blank'}
                              rel="noreferrer"
                              referrerPolicy="no-referrer"
                              className="text-sm font-bold text-slate-200 hover:text-cyan-400 transition-colors mt-1 block break-words"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm font-bold text-slate-200 mt-1 block break-all leading-snug">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                );
              })}
            </div>

            {/* Aesthetic quote / motivation callout */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="p-6 bg-cyan-950/20 border border-cyan-800/10 rounded-3xl mt-6 lg:mt-0">
                <p className="text-xs font-mono text-cyan-400">Internship Availability:</p>
                <p className="text-xs text-slate-300 leading-relaxed mt-2 italic">
                  Currently looking for 3+ months web development trainee positions in Cambodia or remote setups. Open to full stack, backend, or frontend developer internships. Let's build together!
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Form Side (Right Column) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={0.25}>
              <div className="p-6 sm:p-8 bg-slate-900/60 border border-slate-800/80 rounded-3xl shadow-xl space-y-6">
                <div className="pb-3 border-b border-slate-800">
                  <h3 className="text-lg font-bold text-white">Send Serey a Message</h3>
                  <p className="text-xs text-slate-400 mt-1">Fill out the fields below, and I will get back to you shortly.</p>
                </div>

                {submitSuccess ? (
                  <div id="contact-success" className="p-8 text-center space-y-4">
                    <div className="inline-flex p-4 bg-cyan-950/40 border border-cyan-550/20 text-cyan-400 rounded-full animate-[bounce_1s_infinite]">
                      <CheckCircle2 size={40} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Message Dispatched!</h4>
                      <p className="text-xs text-slate-400 leading-relaxed mt-1">
                        Thank you for contacting me. I have received your message and will review it to respond as soon as possible.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-5 py-2.5 text-xs font-bold uppercase rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-900 transition-colors pointer-events-auto cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form id="contactForm" onSubmit={handleFormSubmit} className="space-y-4">
                    {errorMessage && (
                      <div className="p-3 bg-red-950/40 border border-red-500/20 text-red-400 text-xs rounded-xl">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="form-group space-y-2">
                        <label htmlFor="name" className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20 transition-all placeholder:text-slate-650"
                          placeholder="Your Name"
                          required
                        />
                      </div>

                      <div className="form-group space-y-2">
                        <label htmlFor="email" className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20 transition-all placeholder:text-slate-650"
                          placeholder="your.email@domain.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group space-y-2">
                      <label htmlFor="subject" className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20 transition-all placeholder:text-slate-650"
                        placeholder="Project Inquiry or General Question"
                        required
                      />
                    </div>

                    <div className="form-group space-y-2">
                      <label htmlFor="message" className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20 transition-all placeholder:text-slate-650 resize-y"
                        placeholder="Your message details..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none rounded-xl shadow-md hover:shadow-cyan-400/10 flex items-center justify-center space-x-2.5 transition-all pointer-events-auto cursor-pointer"
                    >
                      <Send size={14} />
                      <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
