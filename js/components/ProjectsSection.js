const ProjectsSection = {
    data() {
        return {
            expandedIndex: null,
            projects: [
                {
                    title: 'Attendance Management System',
                    location: 'Virtual Company 1',
                    author: 'Web Developer · 16 Feb 2026 – 31 Mar 2026',
                    description: 'Developed an attendance management system for educational institutions with role-based access for admins, teachers, and the education team to manage users, classes, attendance, schedules, reports, and absence follow-up.',
                    stats: [
                        { icon: 'fas fa-layer-group', label: 'Stack', value: 'Full-Stack' },
                        { icon: 'fas fa-users-cog', label: 'Roles', value: '3 Roles' },
                        { icon: 'fas fa-calendar-alt', label: 'Duration', value: '6 Weeks' },
                    ],
                    tech: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Vite', 'Tailwind CSS', 'Docker', 'Nginx'],
                    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d6a9f 50%, #e8a045 100%)',
                    icon: 'fas fa-calendar-check',
                    github: null,
                    live: null
                },
                {
                    title: 'Music Player App',
                    location: 'JavaScript Team Project',
                    author: 'Frontend Developer · 22 Dec 2025 – 6 Jan 2026',
                    description: 'Built a music player with playback controls, shuffle, loop, volume, smooth transitions, playlist management, local file uploads, music library, search filters, lyrics upload, settings, and keyboard shortcuts.',
                    stats: [
                        { icon: 'fas fa-music', label: 'Type', value: 'Web App' },
                        { icon: 'fas fa-users', label: 'Team', value: 'Group' },
                        { icon: 'fas fa-calendar-alt', label: 'Duration', value: '2 Weeks' },
                    ],
                    tech: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
                    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #e94560 100%)',
                    icon: 'fas fa-music',
                    github: null,
                    live: null
                },
                {
                    title: 'Send Student Results',
                    location: 'Algorithm Individual Project',
                    author: 'Web Developer · 20 Oct 2025 – 9 Nov 2025',
                    description: 'Created a Flask-based web application for managing student results and sending personalized result notifications by email. The system supports bulk upload, data preview, and email distribution.',
                    stats: [
                        { icon: 'fas fa-envelope', label: 'Type', value: 'Email App' },
                        { icon: 'fas fa-user', label: 'Team', value: 'Solo' },
                        { icon: 'fas fa-calendar-alt', label: 'Duration', value: '3 Weeks' },
                    ],
                    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Python', 'Flask'],
                    gradient: 'linear-gradient(135deg, #134e5e 0%, #1a7a5e 50%, #71b280 100%)',
                    icon: 'fas fa-envelope-open-text',
                    github: null,
                    live: null
                },
                {
                    title: 'Freedom Online Shoes',
                    location: 'Web Design Individual Project',
                    author: 'Frontend Developer · 02 Sep 2025 – 09 Oct 2025',
                    description: 'Built a responsive static website for an online footwear store, including home, product shop, about, contact, and sign-in pages with SCSS/CSS styling and modern product imagery.',
                    stats: [
                        { icon: 'fas fa-desktop', label: 'Type', value: 'Website' },
                        { icon: 'fas fa-user', label: 'Team', value: 'Solo' },
                        { icon: 'fas fa-calendar-alt', label: 'Duration', value: '5 Weeks' },
                    ],
                    tech: ['HTML', 'CSS', 'SCSS/SASS', 'JavaScript'],
                    gradient: 'linear-gradient(135deg, #c94b4b 0%, #4b134f 50%, #f7971e 100%)',
                    icon: 'fas fa-shoe-prints',
                    github: 'https://github.com/Serey002/Freedom-Online-Shoes',
                    live: 'https://freedom-online-shoes.vercel.app/index.html'
                },
                {
                    title: 'Gym Online Mobile App Design',
                    location: 'UX/UI Team Project',
                    author: 'UX/UI Designer · 20 May 2025 – 04 June 2025',
                    description: 'Designed a mobile app concept in Figma to improve gym services for members, trainers, and staff with workout tracking, class booking, membership management, communication, and personalized fitness plans.',
                    stats: [
                        { icon: 'fas fa-mobile-alt', label: 'Type', value: 'Mobile App' },
                        { icon: 'fas fa-users', label: 'Team', value: 'Group' },
                        { icon: 'fas fa-calendar-alt', label: 'Duration', value: '2 Weeks' },
                    ],
                    tech: ['Figma', 'UI/UX Design', 'Mobile App', 'Team Project'],
                    gradient: 'linear-gradient(135deg, #2c3e50 0%, #4a235a 50%, #8e44ad 100%)',
                    icon: 'fas fa-dumbbell',
                    github: null,
                    live: null
                }
            ]
        };
    },
    methods: {
        toggle(i) {
            this.expandedIndex = this.expandedIndex === i ? null : i;
        },
        isExpanded(i) {
            return this.expandedIndex === i;
        }
    },
    template: `
        <section class="projects" id="projects">
            <div class="container">
                <div class="section-title">
                    <h2>My <span class="color-animated">Projects</span></h2>
                </div>

                <div class="pc-grid">
                    <div
                        class="pc-card fade-in-up"
                        v-for="(p, i) in projects"
                        :key="p.title"
                        :class="['stagger-delay-' + (i + 1), { 'pc-card--expanded': isExpanded(i) }]"
                    >
                        <!-- Image / Hero area -->
                        <div class="pc-hero" :style="{ background: p.gradient }">
                            <div class="pc-hero-icon"><i :class="p.icon"></i></div>
                            <div class="pc-hero-overlay"></div>
                            <div class="pc-hero-bottom">
                                <div class="pc-hero-text">
                                    <h3 class="pc-title">{{ p.title }}</h3>
                                    <p class="pc-location">{{ p.location }}</p>
                                </div>
                                <div class="pc-hero-actions">
                                    <a v-if="p.live" :href="p.live" target="_blank" class="pc-glass-btn">
                                        <i class="fas fa-external-link-alt"></i> Live
                                    </a>
                                    <a v-if="p.github" :href="p.github" target="_blank" class="pc-glass-btn">
                                        <i class="fab fa-github"></i> Code
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Expanded body -->
                        <div class="pc-body" :class="{ 'pc-body--open': isExpanded(i) }">
                            <p class="pc-author"><i class="fas fa-user-circle"></i> {{ p.author }}</p>

                            <div class="pc-stats">
                                <div class="pc-stat" v-for="s in p.stats" :key="s.label">
                                    <i :class="s.icon"></i>
                                    <span class="pc-stat-value">{{ s.value }}</span>
                                    <span class="pc-stat-label">{{ s.label }}</span>
                                </div>
                            </div>

                            <p class="pc-desc">{{ p.description }}</p>

                            <div class="pc-tech">
                                <span class="pc-tag" v-for="tag in p.tech" :key="tag">{{ tag }}</span>
                            </div>
                        </div>

                        <!-- Toggle arrow -->
                        <button class="pc-toggle" @click="toggle(i)" :aria-label="isExpanded(i) ? 'Collapse' : 'Expand'">
                            <i :class="isExpanded(i) ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
                        </button>
                    </div>
                </div>

                <div class="pc-more fade-in-up">
                    <span class="btn"><i class="fas fa-code-branch"></i> More project links will be added as repositories and demos become available.</span>
                </div>
            </div>
        </section>
    `
};
