const ProjectsSection = {
    data() {
        return {
            projects: [
                {
                    imgClass: 'project-attendance',
                    icon: 'fas fa-calendar-check',
                    title: 'Attendance Management System',
                    meta: 'Virtual Company 1 | Web Developer | 16 Feb 2026 - 31 Mar 2026',
                    description: 'Developed an attendance management system for educational institutions with role-based access for admins, teachers, and the education team to manage users, classes, attendance, schedules, reports, and absence follow-up.',
                    tech: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Vite', 'Tailwind CSS', 'Docker', 'Nginx'],
                    github: null,
                    live: null
                },
                {
                    imgClass: 'project-music',
                    icon: 'fas fa-music',
                    title: 'Music Player App',
                    meta: 'JavaScript Team Project | Frontend Developer | 22 Dec 2025 - 6 Jan 2026',
                    description: 'Built a music player with playback controls, shuffle, loop, volume, smooth transitions, playlist management, local file uploads, music library, search filters, lyrics upload, settings, and keyboard shortcuts.',
                    tech: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
                    github: null,
                    live: null
                },
                {
                    imgClass: 'project-results',
                    icon: 'fas fa-envelope-open-text',
                    title: 'Send Student Results',
                    meta: 'Algorithm Individual Project | Web Developer | 20 Oct 2025 - 9 Nov 2025',
                    description: 'Created a Flask-based web application for managing student results and sending personalized result notifications by email. The system supports bulk upload, data preview, and email distribution.',
                    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Python', 'Flask'],
                    github: null,
                    live: null
                },
                {
                    imgClass: 'project-shoes',
                    icon: 'fas fa-shoe-prints',
                    title: 'Freedom Online Shoes',
                    meta: 'Web Design Individual Project | Frontend Developer | 02 Sep 2025 - 09 Oct 2025',
                    description: 'Built a responsive static website for an online footwear store, including home, product shop, about, contact, and sign-in pages with SCSS/CSS styling and modern product imagery.',
                    tech: ['HTML', 'CSS', 'SCSS/SASS', 'JavaScript'],
                    github: 'https://github.com/Serey002/Freedom-Online-Shoes',
                    live: 'https://freedom-online-shoes.vercel.app/index.html'
                },
                {
                    imgClass: 'project-gym',
                    icon: 'fas fa-dumbbell',
                    title: 'Gym Online Mobile App Design',
                    meta: 'UX/UI Team Project | UX/UI Designer | 20 May 2025 - 04 June 2025',
                    description: 'Designed a mobile app concept in Figma to improve gym services for members, trainers, and staff with workout tracking, class booking, membership management, communication, and personalized fitness plans.',
                    tech: ['Figma', 'UI/UX Design', 'Mobile App', 'Team Project'],
                    github: null,
                    live: null
                }
            ]
        };
    },
    template: `
        <section class="projects" id="projects">
            <div class="container">
                <div class="section-title">
                    <h2>My <span class="color-animated">Projects</span></h2>
                </div>
                <div class="projects-grid">
                    <div class="project-card fade-in-up" v-for="(project, i) in projects" :key="project.title" :class="'stagger-delay-' + (i + 1)">
                        <div class="project-img" :class="project.imgClass">
                            <div class="project-icon"><i :class="project.icon"></i></div>
                        </div>
                        <div class="project-content">
                            <h3>{{ project.title }}</h3>
                            <p class="project-meta">{{ project.meta }}</p>
                            <p class="project-description">{{ project.description }}</p>
                            <div class="project-tech">
                                <span class="tech-tag" v-for="tag in project.tech" :key="tag">{{ tag }}</span>
                            </div>
                            <div class="project-actions" v-if="project.github || project.live">
                                <a v-if="project.github" :href="project.github" target="_blank" class="btn btn-small btn-github">
                                    <i class="fab fa-github"></i> GitHub
                                </a>
                                <a v-if="project.live" :href="project.live" target="_blank" class="btn btn-small btn-website">
                                    <i class="fas fa-external-link-alt"></i> Live Preview
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="text-align: center; margin-top: 50px;" class="fade-in-up">
                    <a class="btn">
                        <i class="fas fa-code-branch"></i> More project links will be added as repositories and demos become available.
                    </a>
                </div>
            </div>
        </section>
    `
};
