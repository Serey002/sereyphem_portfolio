import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, Github, Award, BookOpen, Layers } from 'lucide-react';
import { personalInfo, profilePictureUrl, educationData, projectsData, skillsData, contactInfoItems, workshopsData } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const resumeRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    // Add print class to body to isolate print elements
    document.body.classList.add('printing-resume');
    window.print();
    document.body.classList.remove('printing-resume');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex justify-center items-start py-8 px-4">
      
      {/* Background click to close */}
      <div 
        className="fixed inset-0 cursor-pointer" 
        onClick={onClose} 
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
      >
        {/* Navigation Action Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="p-1.5 bg-cyan-950 text-cyan-400 border border-cyan-800/20 rounded-lg">
              📄
            </span>
            <div>
              <h2 className="text-sm font-bold text-white">Serey Phem CV Preview</h2>
              <p className="text-[10px] font-mono text-slate-400">Ready to save as vector PDF / Print</p>
            </div>
          </div>

          <div className="flex items-center space-x-2.5">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-900 text-xs font-bold uppercase rounded-lg shadow-md transition-all pointer-events-auto cursor-pointer"
            >
              <Printer size={14} />
              <span>Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg transition-colors pointer-events-auto cursor-pointer text-slate-400"
              aria-label="Close Preview"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Info panel for help */}
        <div className="bg-cyan-950/20 border-b border-cyan-800/10 px-6 py-3 flex items-center justify-between">
          <p className="text-[11px] text-cyan-300 leading-normal flex items-center gap-1.5">
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>💡 <strong>Tip:</strong> In the browser print dialog, set layout to <strong>Portrait</strong>, check <strong>"Background graphics"</strong>, and selection to <strong>"Save as PDF"</strong> for the best output!</span>
          </p>
        </div>

        {/* Scrollable Container */}
        <div className="p-4 sm:p-8 bg-slate-950 overflow-x-auto flex justify-center">
          
          {/* Printable multi-page CV container */}
          <div 
            ref={resumeRef}
            id="printable-cv-document"
            className="w-full flex flex-col gap-8 print:gap-0"
          >
            {/* ==================== PAGE 1 ==================== */}
            <div 
              className="w-[800px] min-h-[1130px] bg-white text-slate-800 p-10 shadow-xl rounded-2xl border border-slate-200 grid grid-cols-12 gap-8 font-sans font-normal print:shadow-none print:border-none print:p-0 print:rounded-none select-text print-page-break"
            >
              {/* PAGE 1 LEFT SIDEBAR (col-span-4) */}
              <div className="col-span-4 border-r border-slate-200 pr-6 space-y-5">
                {/* Profile Image & Meta */}
                <div className="text-center space-y-3">
                  <div className="w-28 h-28 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-cyan-500 to-indigo-500 mx-auto">
                    <img
                      src={profilePictureUrl}
                      alt="Serey PHEM Headshot"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-full bg-slate-100"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">Serey PHEM</h1>
                    <p className="text-xs font-semibold text-cyan-600 mt-1 uppercase tracking-wider">Web Developer Intern</p>
                  </div>
                </div>

                {/* About Me block */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-extrabold tracking-wider text-cyan-600 uppercase">About Me</h3>
                  <div className="space-y-1.5 text-[11px] text-slate-700">
                    <div>
                      <span className="font-bold text-slate-800">Full Name:</span> Serey PHEM
                    </div>
                    <div>
                      <span className="font-bold text-slate-800">Organization:</span> Passerelles Numériques Cambodia
                    </div>
                    <div>
                      <span className="font-bold text-slate-800">Date of Birth:</span> 12 February 2006
                    </div>
                    <div>
                      <span className="font-bold text-slate-800">Nationality:</span> Khmer
                    </div>
                    <div>
                      <span className="font-bold text-slate-800">Status:</span> Single
                    </div>
                  </div>
                </div>

                {/* Contact block */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-extrabold tracking-wider text-cyan-600 uppercase">Contact</h3>
                  <div className="space-y-2 text-[11px] text-slate-700">
                    <div className="flex items-start space-x-2">
                      <Phone size={12} className="text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span>+855 97 3272 951</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Mail size={12} className="text-cyan-600 flex-shrink-0 mt-0.5 break-all" />
                      <span className="break-all text-[10px]">serey.phem@student.passerellesnumeriques.org</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <MapPin size={12} className="text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span>1BP 511, Phum Tropeang Chhuk (Borey Sorla) Sangkat, Street 371, Phnom Penh</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Globe size={12} className="text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span>www.sereyhub.online</span>
                    </div>
                  </div>
                </div>

                {/* Hard Skills Section */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-extrabold tracking-wider text-cyan-600 uppercase">Hard Skills</h3>
                  
                  {/* Programming Languages */}
                  <div className="space-y-1">
                    <span className="text-[9.5px] font-bold text-slate-500 uppercase">Programming Languages & Frameworks:</span>
                    <div className="space-y-1 pl-1">
                      {['HTML5 & CSS3', 'JavaScript', 'Typescript - OOP', 'Vue.js', 'Python (Algorithm)', 'Database (MySQL and Mongodb)', 'PHP', 'Laravel', 'Node.js'].map((skill) => (
                        <div key={skill} className="flex items-center space-x-1.5 text-[10.5px] text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="space-y-1 pt-1.5">
                    <span className="text-[9.5px] font-bold text-slate-500 uppercase">Tools:</span>
                    <div className="space-y-1 pl-1">
                      {['GitHub (Version Control)', 'Jira (Agile Management)', 'Figma (UI/UX Design)', 'Postman', 'AWS Free Trial (Cloud Hosting)', 'MS Office', 'WordPress (Basic)', 'Vercel', 'Ubuntu (Basic)', 'Docker (Basic)', 'AI Tools (Cloud AI, Chat GPT, Gemini)'].map((tool) => (
                        <div key={tool} className="flex items-center space-x-1.5 text-[10px] text-slate-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                          <span>{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* PAGE 1 RIGHT CONTENT (col-span-8) */}
              <div className="col-span-8 pl-2 space-y-5">
                
                {/* Personal Profile */}
                <div className="space-y-1.5">
                  <h2 className="text-xs font-extrabold tracking-widest text-cyan-600 uppercase flex items-center space-x-1.5 border-b border-cyan-150 pb-1">
                    <span>Personal Profile</span>
                  </h2>
                  <p className="text-[11px] leading-relaxed text-slate-700 font-normal">
                    Second-year Web Development student with experience building responsive and dynamic web applications using PHP, Laravel, Node.js, MySQL, HTML, CSS, JavaScript, TypeScript, and Vue.js. Passionate about developing efficient, user-friendly, and scalable web systems while continuously improving technical and problem-solving skills. Seeking a Web Developer Internship to gain industry experience and contribute to professional development projects.
                  </p>
                </div>

                {/* Education section */}
                <div className="space-y-2">
                  <h2 className="text-xs font-extrabold tracking-widest text-cyan-600 uppercase flex items-center space-x-1.5 border-b border-cyan-150 pb-1">
                    <span>Education</span>
                  </h2>
                  
                  <div className="relative border-l border-cyan-600/30 pl-4 ml-1.5 space-y-3 py-0.5">
                    <div className="relative">
                      {/* Timeline Dot */}
                      <span className="absolute -left-[20.5px] top-1 w-3 h-3 rounded-full bg-white border-2 border-cyan-600 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full" />
                      </span>
                      <div className="flex justify-between items-start text-xs font-extrabold text-slate-900">
                        <span>PASSERELLES NUMÉRIQUES CAMBODIA (PNC)</span>
                        <span className="text-[9.5px] font-mono font-semibold text-slate-500">06 January 2025 – Present</span>
                      </div>
                      <p className="text-[10.5px] text-slate-650 font-medium mt-0.5">Pursuing Associate degree of Web Development</p>
                    </div>

                    <div className="relative">
                      {/* Timeline Dot */}
                      <span className="absolute -left-[20.5px] top-1 w-3 h-3 rounded-full bg-white border-2 border-cyan-600 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full" />
                      </span>
                      <div className="flex justify-between items-start text-xs font-extrabold text-slate-900">
                        <span>ROVIENG HIGH SCHOOL</span>
                        <span className="text-[9.5px] font-mono font-semibold text-slate-500">2021 - 2024</span>
                      </div>
                      <p className="text-[10.5px] text-slate-650 font-medium mt-0.5">Received Baccalauréat Certificate</p>
                    </div>
                  </div>
                </div>

                {/* School Projects section */}
                <div className="space-y-2.5">
                  <h2 className="text-xs font-extrabold tracking-widest text-cyan-600 uppercase flex items-center space-x-1.5 border-b border-cyan-150 pb-1">
                    <span>School Projects</span>
                  </h2>

                  <div className="relative border-l border-cyan-600/30 pl-4 ml-1.5 space-y-4 py-0.5">
                    
                    {/* Project 1 */}
                    <div className="relative space-y-0.5">
                      <span className="absolute -left-[20.5px] top-1 w-3 h-3 rounded-full bg-white border-2 border-cyan-600 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full" />
                      </span>
                      <div className="flex justify-between items-start text-xs font-extrabold text-slate-900 uppercase">
                        <span>Inventory Management System <span className="text-[9px] text-slate-500 font-normal font-sans tracking-tight leading-none lowercase">( node project team )</span></span>
                        <span className="text-[9px] font-mono font-semibold text-slate-500">18 May 2026 - 03 Jun 2026</span>
                      </div>
                      <div className="text-[9.5px] font-bold text-cyan-600 uppercase">Role: Backend Developer</div>
                      <p className="text-[10px] leading-normal text-slate-600">
                        Developed a TypeScript REST API for an Inventory Management System featuring JWT authentication, role-based access control, and comprehensive inventory tracking with sales management and MySQL database integration using TypeORM.
                      </p>
                      <ul className="list-disc pl-4 text-[9.5px] text-slate-600 space-y-0.5">
                        <li><strong className="text-slate-800">Responsibility:</strong> Work on product feature, inventory management feature and deploy project.</li>
                        <li><strong className="text-slate-800">Technologies:</strong> TypeScript, Express, TypeORM and MySQL.</li>
                        <li><strong className="text-slate-800">Github:</strong> <span className="text-cyan-600 hover:underline">github.com/Serey002</span></li>
                      </ul>
                    </div>

                    {/* Project 2 */}
                    <div className="relative space-y-0.5">
                      <span className="absolute -left-[20.5px] top-1 w-3 h-3 rounded-full bg-white border-2 border-cyan-600 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full" />
                      </span>
                      <div className="flex justify-between items-start text-xs font-extrabold text-slate-900 uppercase">
                        <span>Attendance Management System <span className="text-[9px] text-slate-500 font-normal font-sans tracking-tight leading-none lowercase">( virtual company 1 )</span></span>
                        <span className="text-[9px] font-mono font-semibold text-slate-500">16 Feb 2026 - 31 Mar 2026</span>
                      </div>
                      <div className="text-[9.5px] font-bold text-cyan-600 uppercase">Role: Web Developer</div>
                      <p className="text-[10px] leading-normal text-slate-600">
                        Developed an Attendance Management System to improve tracking, monitoring, and decision-making in educational institutions. The system supports role-based access: handles class attendance, schedules, and notifications.
                      </p>
                      <ul className="list-disc pl-4 text-[9.5px] text-slate-600 space-y-0.5">
                        <li><strong className="text-slate-800">Responsibility:</strong> Work on teacher feature Handles class attendance, schedules, and notifications</li>
                        <li><strong className="text-slate-800">Technologies:</strong> Laravel, PHP, MySQL, Vue.js, Vite, Tailwind CSS, Docker and Nginx.</li>
                        <li><strong className="text-slate-800">Github:</strong> <span className="text-cyan-600 hover:underline">github.com/Serey002</span></li>
                      </ul>
                    </div>

                    {/* Project 3 */}
                    <div className="relative space-y-0.5">
                      <span className="absolute -left-[20.5px] top-1 w-3 h-3 rounded-full bg-white border-2 border-cyan-600 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full" />
                      </span>
                      <div className="flex justify-between items-start text-xs font-extrabold text-slate-900 uppercase">
                        <span>Music Player <span className="text-[9px] text-slate-500 font-normal font-sans tracking-tight leading-none lowercase">( javascript project team )</span></span>
                        <span className="text-[9px] font-mono font-semibold text-slate-500">22 Dec 2025 - 6 Jan 2026</span>
                      </div>
                      <div className="text-[9.5px] font-bold text-cyan-600 uppercase">Role: Frontend Developer</div>
                      <p className="text-[10px] leading-normal text-slate-600">
                        Developed a Music player app with full playback controls (play, pause, shuffle, loop), volume and smooth transitions. Supports playlist management, local file uploads, and a built-in music library. Includes search with filters, lyrics upload, customizable settings, keyboard and shortcuts.
                      </p>
                      <ul className="list-disc pl-4 text-[9.5px] text-slate-600 space-y-0.5">
                        <li><strong className="text-slate-800">Technologies:</strong> JavaScript, HTML, CSS and Bootstrap.</li>
                        <li><strong className="text-slate-800">Github:</strong> <span className="text-cyan-600 hover:underline">github.com/Serey002</span></li>
                      </ul>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* ==================== PAGE 2 ==================== */}
            <div 
              className="w-[800px] min-h-[1130px] bg-white text-slate-800 p-10 shadow-xl rounded-2xl border border-slate-200 grid grid-cols-12 gap-8 font-sans font-normal print:shadow-none print:border-none print:p-0 print:rounded-none select-text mt-8 print:mt-0"
            >
              {/* PAGE 2 LEFT SIDEBAR (col-span-4) */}
              <div className="col-span-4 border-r border-slate-200 pr-6 space-y-5">
                
                {/* Soft Skills */}
                <div className="space-y-2">
                  <h3 className="text-xs font-extrabold tracking-wider text-cyan-600 uppercase">Soft Skills</h3>
                  <div className="space-y-1 pl-1">
                    {['Teamwork', 'Communication', 'Problem Solving', 'Time & Task Management', 'Leadership', 'Adaptability & Flexible'].map((skill) => (
                      <div key={skill} className="flex items-center space-x-1.5 text-[10.5px] text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-extrabold tracking-wider text-cyan-600 uppercase">Languages</h3>
                  <div className="space-y-1 text-[11px] text-slate-700">
                    <div className="flex justify-between items-center bg-slate-50 px-2 py-1.5 rounded border border-slate-100">
                      <span className="font-semibold text-slate-800">Khmer</span>
                      <span className="text-[9.5px] font-mono text-cyan-600 font-bold bg-cyan-50 px-1.5 py-0.5 rounded">Native</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-50 px-2 py-1.5 rounded border border-slate-100 mt-1">
                      <span className="font-semibold text-slate-800">English</span>
                      <span className="text-[9.5px] font-mono text-cyan-600 font-bold bg-cyan-50 px-1.5 py-0.5 rounded">Intermediate</span>
                    </div>
                  </div>
                </div>

                {/* Company Visits */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-extrabold tracking-wider text-cyan-600 uppercase">Company Visits</h3>
                  <div className="space-y-1.5 pl-1">
                    {['Codingate Cambodia Company', 'Sourceamax Asia Company', 'Daiichi Life Insurance', 'First Cambodia Company', 'Chip Mong Industries', 'Bred Bank'].map((company) => (
                      <div key={company} className="flex items-start space-x-1.5 text-[10.5px] text-slate-700">
                        <span className="text-cyan-600 mt-0.5">🏢</span>
                        <span>{company}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interests */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-extrabold tracking-wider text-cyan-600 uppercase">Interest</h3>
                  <div className="space-y-1.5 pl-1">
                    {['Volunteering', 'Researching', 'Joining workshops', 'Sharing knowledge', 'Learning new technologies', 'Reading books'].map((int) => (
                      <div key={int} className="flex items-center space-x-1.5 text-[10.5px] text-slate-700">
                        <span className="text-slate-400 text-[10px]">●</span>
                        <span>{int}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* References */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-extrabold tracking-wider text-cyan-600 uppercase">References</h3>
                  <div className="space-y-3 text-[10px] text-slate-700">
                    <div className="space-y-0.5">
                      <p className="font-extrabold text-slate-900">Mr. Rady Y</p>
                      <p className="text-[9px] text-slate-500 italic">WEP Coordinator</p>
                      <p className="text-[9px] text-slate-600 break-all">Email: rady.y@passerellesnumberiques.org</p>
                      <p className="text-[9px] text-slate-650">Phone: 012 251 803</p>
                    </div>
                    <div className="space-y-0.5 pt-1.5 border-t border-slate-50">
                      <p className="font-extrabold text-slate-900">Mr. Sokhom Hean</p>
                      <p className="text-[9px] text-slate-500 italic">English Professional Life Trainer & Coordinator</p>
                      <p className="text-[9px] text-slate-655 break-all">Email: sokhom.hean@passerellesnumeriques.org</p>
                      <p className="text-[9px] text-slate-650">Phone: 012 298 253</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* PAGE 2 RIGHT CONTENT (col-span-8) */}
              <div className="col-span-8 pl-2 space-y-5">
                
                {/* Additional Projects Section (Continued) */}
                <div className="space-y-2.5">
                  <h2 className="text-xs font-extrabold tracking-widest text-cyan-600 uppercase flex items-center space-x-1.5 border-b border-cyan-150 pb-1">
                    <span>Key Projects (Continued)</span>
                  </h2>

                  <div className="relative border-l border-cyan-600/30 pl-4 ml-1.5 space-y-4 py-0.5">
                    
                    {/* Project 4 */}
                    <div className="relative space-y-0.5">
                      <span className="absolute -left-[20.5px] top-1 w-3 h-3 rounded-full bg-white border-2 border-cyan-600 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full" />
                      </span>
                      <div className="flex justify-between items-start text-xs font-extrabold text-slate-900 uppercase">
                        <span>Freedom Online Shoes <span className="text-[9px] text-slate-500 font-normal font-sans tracking-tight leading-none lowercase">( web design project individual )</span></span>
                        <span className="text-[9px] font-mono font-semibold text-slate-500">02 Sep 2025 - 09 Oct 2025</span>
                      </div>
                      <div className="text-[9.5px] font-bold text-cyan-600 uppercase">Role: Frontend Developer</div>
                      <p className="text-[10px] leading-normal text-slate-600">
                        Build Freedom Online Shoes is a responsive static website for an online footwear store. It includes a homepage, product shop, about page, contact page, and sign-in page, styled with SCSS/CSS and supported by modern product imagery.
                      </p>
                      <ul className="list-disc pl-4 text-[9.5px] text-slate-600 space-y-0.5">
                        <li><strong className="text-slate-800">Technologies:</strong> HTML, CSS, SCSS/Sass and JavaScript.</li>
                        <li><strong className="text-slate-800">Website:</strong> <span className="text-cyan-600 hover:underline">freedom-online-shoes.vercel.app</span></li>
                        <li><strong className="text-slate-800">Github:</strong> <span className="text-cyan-600 hover:underline">github.com/Serey002/Freedom-Online-Shoes</span></li>
                      </ul>
                    </div>

                    {/* Project 5 */}
                    <div className="relative space-y-0.5">
                      <span className="absolute -left-[20.5px] top-1 w-3 h-3 rounded-full bg-white border-2 border-cyan-600 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full" />
                      </span>
                      <div className="flex justify-between items-start text-xs font-extrabold text-slate-900 uppercase">
                        <span>Gym Online <span className="text-[9px] text-slate-500 font-normal font-sans tracking-tight leading-none lowercase">( ux ui design project team )</span></span>
                        <span className="text-[9px] font-mono font-semibold text-slate-500">20 May 2025 - 04 June 2025</span>
                      </div>
                      <div className="text-[9.5px] font-bold text-cyan-600 uppercase">Role: UX UI Designer (Figma)</div>
                      <p className="text-[10px] leading-normal text-slate-605">
                        Designed a mobile app to improve gym services for members, trainers, and staff. Features include workout tracking, class booking, membership management, and communication tools to enhance user experience and gym operations.
                      </p>
                      <ul className="list-disc pl-4 text-[9.5px] text-slate-600 space-y-0.5">
                        <li><strong className="text-slate-800">Prototypes:</strong> <span className="text-cyan-600 hover:underline">Figma link</span></li>
                      </ul>
                    </div>

                  </div>
                </div>

                {/* Additional Experiences */}
                <div className="space-y-2.5">
                  <h2 className="text-xs font-extrabold tracking-widest text-cyan-600 uppercase flex items-center space-x-1.5 border-b border-cyan-150 pb-1">
                    <span>Additional Experiences</span>
                  </h2>

                  <div className="relative border-l border-cyan-600/30 pl-4 ml-1.5 space-y-3 py-0.5">
                    
                    {workshopsData.map((workshop) => (
                      <div key={workshop.title} className="relative space-y-0.5">
                        <span className="absolute -left-[20.5px] top-1.5 w-2 h-2 rounded-full bg-cyan-600" />
                        <div className="flex justify-between items-start text-[10.5px] font-extrabold text-slate-900">
                          <span className="uppercase">{workshop.title}</span>
                          <span className="text-[9px] font-mono font-semibold text-slate-500">{workshop.date}</span>
                        </div>
                        <p className="text-[10px] text-slate-600 leading-normal">
                          {workshop.description}
                        </p>
                      </div>
                    ))}

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
