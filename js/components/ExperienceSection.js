const ExperienceSection = {
    data() {
        return {
            workshops: [
                { title: 'Full Stack Developer Workshop', date: '29 Mar 2026', desc: 'Learned the complete process of modern software and website development from frontend to backend and database integration.' },
                { title: 'Database Administration Workshop', date: '15 Mar 2026', desc: 'Explored the role of database administrators and how data is managed, protected, and maintained in real work environments.' },
                { title: 'Software Quality Assurance Workshop', date: '25 Jan 2026', desc: 'Learned about QA responsibilities, testing work, and career paths in software quality assurance.' },
                { title: 'DevSecOps Engineer Workshop', date: '20 Jan 2026', desc: 'Studied how to integrate security into the software development process and build more secure systems.' },
                { title: 'UX/UI Designer Workshop', date: '15 Jan 2026', desc: 'Practiced digital design concepts and tool-based workflows for websites and applications.' },
                { title: 'Digital Security Training', date: '06 Aug 2025', desc: 'Learned about digital risks, internet access protection, privacy, online security, and security tools.' },
            ],
            companies: ['Codingate Cambodia Company', 'Daiichi Life Insurance', 'Sourceamax Asia Company', 'First Cambodia Company', 'Chip Mong Industries', 'Bred Bank'],
            languages: [
                { name: 'Khmer', level: 'Native' },
                { name: 'English', level: 'Intermediate' },
            ]
        };
    },
    template: `
        <section class="experience" id="experience">
            <div class="container">
                <div class="section-title">
                    <h2>Additional <span class="color-animated">Experience</span></h2>
                </div>
                <div class="experience-grid">
                    <div class="experience-card fade-in-up stagger-delay-1">
                        <h3><i class="fas fa-certificate"></i> Workshops & Trainings</h3>
                        <div class="experience-list">
                            <div class="experience-item" v-for="w in workshops" :key="w.title">
                                <strong>{{ w.title }}</strong>
                                <span>{{ w.date }}</span>
                                <p>{{ w.desc }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="experience-card fade-in-up stagger-delay-2">
                        <h3><i class="fas fa-building"></i> Company Visits</h3>
                        <div class="company-tags">
                            <span v-for="company in companies" :key="company">{{ company }}</span>
                        </div>
                        <div class="language-box">
                            <h3><i class="fas fa-language"></i> Languages</h3>
                            <div class="language-item" v-for="lang in languages" :key="lang.name">
                                <span>{{ lang.name }}</span>
                                <strong>{{ lang.level }}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};
