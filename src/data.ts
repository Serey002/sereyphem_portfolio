import { SkillCategory, EducationItem, Project, Workshop, ContactInfo } from './types';

// Import images so Vite processes and bundles them for production
import sereyAboutImg from './assets/images/sereyAbout.png';

export const profilePictureUrl = sereyAboutImg;

export const personalInfo = {
  name: 'Serey PHEM',
  title: 'Web Developer Intern',
  bio: 'Second-year Web Programming student with experience building responsive and dynamic web applications using PHP, Laravel, Node.js, MySQL, HTML, CSS, JavaScript, TypeScript, and Vue.js. Passionate about developing efficient, user-friendly, and scalable web systems while continuously improving technical and problem-solving skills. Seeking a Web Developer Internship to gain industry experience and contribute to professional development projects.',
  detailedBio: [
    'I am an ambitious second-year Web Programming student at Passerelles Numériques Cambodia, currently pursuing an Associate Degree.',
    'Backed by solid knowledge across the complete software development lifecycle, response frontend grids, backend microframework architectures, and structured SQL or NoSQL databases.',
    'Highly proactive, dedicated to continuous professional learning, and ready to contribute reliably to actual company engineering layouts and project teams.'
  ],
  stats: [
    { label: 'Degree', value: 'Associate Degree' },
    { label: 'Location', value: 'Phnom Penh, Cambodia' },
    { label: 'Date of Birth', value: '12 February 2006' },
    { label: 'Nationality', value: 'Khmer' },
    { label: 'Status', value: 'Single' },
    { label: 'Organization', value: 'Passerelles Numériques Cambodia' }
  ]
};

export const skillsData: SkillCategory[] = [
  {
    title: 'Hard Skills',
    skills: [
      { name: 'HTML5 & CSS3', level: 90, iconClass: 'Html5' },
      { name: 'JavaScript', level: 70, iconClass: 'Code' },
      { name: 'Typescript - OOP', level: 70, iconClass: 'Shield' },
      { name: 'Vue.js', level: 60, iconClass: 'Cpu' },
      { name: 'Python (Algorithm)', level: 50, iconClass: 'FileCode' },
      { name: 'Database (MySQL and Mongodb)', level: 82, iconClass: 'Database' },
      { name: 'PHP', level: 80, iconClass: 'Server' },
      { name: 'Laravel', level: 85, iconClass: 'Layers' },
      { name: 'Node.js', level: 80, iconClass: 'Activity' }
    ]
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'GitHub (Version Control)', level: 90, iconClass: 'GitBranch' },
      { name: 'Jira (Agile Management)', level: 60, iconClass: 'CheckSquare' },
      { name: 'Figma (UI/UX Design)', level: 80, iconClass: 'Palette' },
      { name: 'Postman', level: 85, iconClass: 'Terminal' },
      { name: 'AWS Free Trial', level: 30, iconClass: 'Cloud' },
      { name: 'Docker (Basic)', level: 30, iconClass: 'Box' },
      { name: 'Ubuntu (Basic)', level: 30, iconClass: 'HardDrive' },
      { name: 'Vercel', level: 80, iconClass: 'ExternalLink' },
      { name: 'AI Tools (Cloud AI, ChatGPT, Gemini)', level: 85, iconClass: 'Lightbulb' }
    ]
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Teamwork', level: 95, iconClass: 'Users' },
      { name: 'Communication', level: 90, iconClass: 'MessageSquare' },
      { name: 'Problem Solving', level: 92, iconClass: 'HelpCircle' },
      { name: 'Time & Task Management', level: 88, iconClass: 'Clock' },
      { name: 'Leadership', level: 85, iconClass: 'Award' },
      { name: 'Adaptability & Flexible', level: 90, iconClass: 'Shuffle' }
    ]
  }
];

export const educationData: { instName: string; period: string; degree: string; detailMilestones: EducationItem[] } = {
  instName: 'Passerelles Numériques Cambodia',
  period: '06 January 2025 - Present',
  degree: 'Associate Degree as Web Developer',
  detailMilestones: [
    {
      title: 'Foundation & Professional Skills',
      subtitle: 'Passerelles Numériques Cambodia',
      period: 'January 2025 - April 2025',
      courses: [
        'General English',
        'English for IT Environments',
        'Basic Computer',
        'Professional Life Skills',
        'Logic with Python',
        'Microsoft Office',
        'Design using Figma'
      ],
      highlightCourse: 'Logic with Python'
    },
    {
      title: 'Web Development & Tools',
      subtitle: 'Passerelles Numériques Cambodia',
      period: 'May 2025 - October 2025',
      courses: [
        'GitHub & Version Control',
        'HTML & CSS responsive layout',
        'SASS / SCSS prep-processing',
        'Python algorithms',
        'Tailwind CSS layouts',
        'SQLite database',
        'Flask microframework',
        'Professional Communication'
      ],
      highlightCourse: 'GitHub & Version Control'
    },
    {
      title: 'Full-Stack Development Focus',
      subtitle: 'Passerelles Numériques Cambodia',
      period: 'November 2025 - Present',
      courses: [
        'Laravel Web Framework',
        'Object-Oriented PHP',
        'MySQL & Structured Databases',
        'Vue.js Frontend Architecture',
        'Node.js & JavaScript Server runtime',
        'TypeScript language typing',
        'Docker container virtualization',
        'Quality Assurance (QA) Testing'
      ],
      highlightCourse: 'Laravel Web Framework'
    },
    {
      title: 'Rovieng High School',
      subtitle: 'Secondary Education',
      period: '2021 - 2024',
      description: 'Completed upper secondary school and received the official national Baccalauréat Certificate.'
    }
  ]
};

export const learningFocusList = [
  {
    num: '01',
    title: 'Frontend Mastery',
    desc: 'Creating modern, responsive, and performance-tuned layouts using HTML5, CSS3, SASS, Tailwind CSS, Bootstrap, JavaScript, and Vue.js.'
  },
  {
    num: '02',
    title: 'Backend Systems',
    desc: 'Crafting robust logic and server APIs with Python (Flask), PHP (Laravel), Node.js, and object-oriented architectures.'
  },
  {
    num: '03',
    title: 'Data & Databases',
    desc: 'Modeling structures and managing transactional queries seamlessly using MySQL and lightweight SQLite engines.'
  },
  {
    num: '04',
    title: 'Operations & DevOps',
    desc: 'Leveraging active version-control on GitHub, API endpoints validation on Postman, Docker container sandboxes, Ubuntu commands, and host deployments.'
  },
  {
    num: '05',
    title: 'Professional Growth',
    desc: 'Strengthening team synergy, clear client communication, task priorities mapping, and continuous professional ethics.'
  }
];

export const projectsData: Project[] = [
  {
    title: 'Inventory Management System',
    meta: 'Node Project Team | Backend Developer | 18 May 2026 - 03 Jun 2026',
    description: 'Developed a TypeScript REST API for an Inventory Management System featuring JWT authentication, role-based access control, and comprehensive inventory tracking with sales management and MySQL database integration using TypeORM.',
    tech: ['TypeScript', 'Express', 'TypeORM', 'MySQL', 'JWT'],
    category: 'Full Stack',
    githubUrl: 'hthttps://github.com/Serey002/Inventory_Management_System.git',
    iconClass: 'Database'
  },
  {
    title: 'Attendance Management System',
    meta: 'Virtual Company 1 | Web Developer | 16 Feb 2026 - 31 Mar 2026',
    description: 'Developed an Attendance Management System to improve tracking, monitoring, and decision-making in educational institutions. The system supports role-based access: handles class attendance, schedules, and notifications.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Vite', 'Tailwind CSS', 'Docker', 'Nginx'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/ChetDevelopment/Attendance-System.git',
    iconClass: 'CalendarCheck'
  },
  {
    title: 'Music Player',
    meta: 'JavaScript Project Team | Frontend Developer | 22 Dec 2025 - 6 Jan 2026',
    description: 'Developed a Music player app with full playback controls (play, pause, shuffle, loop), volume and smooth transitions. Supports playlist management, local file uploads, and a built-in music library. Includes search with filters, lyrics upload, customizable settings, keyboard and shortcuts.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    category: 'Frontend',
    githubUrl: 'https://github.com/chantrea8888/Project-Music-player.git',
    iconClass: 'Music'
  },
  {
    title: 'Freedom Online Shoes',
    meta: 'Web Design Project Individual | Frontend Developer | 02 Sep 2025 - 09 Oct 2025',
    description: 'Build Freedom Online Shoes is a responsive static website for an online footwear store. Includes a homepage, product shop, about page, contact page, and sign-in page, styled with SCSS/CSS and supported by modern product imagery.',
    tech: ['HTML5', 'CSS3', 'SCSS/Sass', 'JavaScript'],
    category: 'Frontend',
    githubUrl: 'https://github.com/Serey002/Freedom-Online-Shoes.git',
    liveUrl: 'https://freedom-online-shoes.vercel.app/index.html',
    iconClass: 'Footprints'
  },
  {
    title: 'Gym Online',
    meta: 'UX UI Design Project Team | UX UI Designer | 20 May 2025 - 04 June 2025',
    description: 'Designed a mobile app in Figma to improve gym services for members, trainers, and staff. Features include workout tracking, class booking, membership management, and communication tools to enhance user experience and gym operations.',
    tech: ['Figma', 'UI/UX Design', 'User Personas', 'Prototyping'],
    category: 'UI/UX',
    githubUrl: 'https://www.figma.com/design/gfknE7rPrfsShkhuzbT6b7/Project--App-Gym-Online?t=paJYCM7ELPPesJju-0',
    iconClass: 'Dumbbell'
  }
];

export const workshopsData: Workshop[] = [
  {
    title: 'Full Stack Developer Workshop',
    date: '29 March 2026',
    description: 'Understand the complete process of modern software and website development from frontend to backend and database integration.'
  },
  {
    title: 'Database Administration Workshop',
    date: '15 March 2026',
    description: 'Understand the important role of the Database Administrator and how data is managed, protected and maintained in a real work environment.'
  },
  {
    title: 'Software Quality Assurance Workshop',
    date: '25 January 2026',
    description: 'This course provides students with the opportunity to learn about the role of Quality Assurance in real work and explore career options in this field.'
  },
  {
    title: 'DevSecOps Engineer Workshop',
    date: '20 January 2026',
    description: 'DevSecOps Engineer course to learn how to integrate security into the software development process and learn how to create secure and reliable systems.'
  },
  {
    title: 'UX/UI Designer Workshop',
    date: '15 January 2026',
    description: 'UX / UI Designer course to learn about digital design in the process of designing a website or application and using tool design.'
  },
  {
    title: 'Digital Security Training (Asia Centre)',
    date: '06 August 2025',
    description: 'This course focused on understanding digital risks and protecting their Internet access, as well as sharing knowledge about privacy, online security mechanisms and other security tools in the digital world.'
  }
];

export const companyVisits = [
  'Codingate Cambodia Company',
  'Sourceamax Asia Company',
  'Daiichi Life Insurance',
  'First Cambodia Company',
  'Chip Mong Industries',
  'Bred Bank'
];

export const contactInfoItems: ContactInfo[] = [
  {
    label: 'Location',
    value: 'Phum Tropeang Chhuk (Borey Sorla) Sangkat, Street 371, Phnom Penh, Cambodia',
    iconClass: 'MapPin'
  },
  {
    label: 'Email',
    value: 'serey.phem@student.passerellesnumeriques.org',
    iconClass: 'Mail',
    link: 'mailto:serey.phem@student.passerellesnumeriques.org'
  },
  {
    label: 'Phone',
    value: '+855 97 3272 951',
    iconClass: 'Phone',
    link: 'tel:+855973272951'
  },
  {
    label: 'Website',
    value: 'www.sereyhub.online',
    iconClass: 'Globe',
    link: 'https://www.sereyhub.online'
  },
  {
    label: 'GitHub',
    value: 'github.com/Serey002',
    iconClass: 'Github',
    link: 'https://github.com/Serey002'
  }
];

export const socialLinks = [
  { platform: 'GitHub', url: 'https://github.com/Serey002', iconClass: 'Github' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/serey-phem-516842393/', iconClass: 'Linkedin' },
  { platform: 'Telegram', url: 'https://t.me/sereyphem', iconClass: 'Send' }
];

export const cvDownloadPlaceholder = '#';
export const copyrightText = '© 2026 Serey Phem. All Rights Reserved. | Web Developer Portfolio';
