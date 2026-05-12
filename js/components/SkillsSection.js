const SkillsSection = {
    data() {
        return {
            hardSkills: [
                { icon: 'fab fa-html5', label: 'HTML5 & CSS3', width: '90%' },
                { icon: 'fab fa-js', label: 'JavaScript', width: '80%' },
                { icon: 'fas fa-code', label: 'TypeScript & OOP', width: '70%' },
                { icon: 'fab fa-php', label: 'PHP & Laravel', width: '75%' },
                { icon: 'fab fa-node-js', label: 'Node.js', width: '70%' },
                { icon: 'fab fa-vuejs', label: 'Vue.js', width: '68%' },
                { icon: 'fab fa-python', label: 'Python & Flask', width: '82%' },
                { icon: 'fas fa-database', label: 'MySQL & SQLite', width: '78%' },
                { icon: 'fas fa-wind', label: 'Tailwind CSS & Bootstrap', width: '80%' },
                { icon: 'fab fa-figma', label: 'Figma', width: '75%' },
                { icon: 'fab fa-git-alt', label: 'GitHub & Version Control', width: '85%' },
                { icon: 'fas fa-tools', label: 'Postman, Vercel, Docker', width: '70%' },
            ],
            softSkills: [
                { icon: 'fas fa-clock', label: 'Time & Task Management', width: '85%' },
                { icon: 'fas fa-puzzle-piece', label: 'Problem Solving', width: '90%' },
                { icon: 'fas fa-comments', label: 'Communication', width: '85%' },
                { icon: 'fas fa-users', label: 'Teamwork', width: '88%' },
                { icon: 'fas fa-project-diagram', label: 'Adaptability', width: '85%' },
                { icon: 'fas fa-book', label: 'Continuous Learning', width: '95%' },
                { icon: 'fas fa-share-alt', label: 'Sharing Knowledge', width: '82%' },
                { icon: 'fas fa-search', label: 'Researching', width: '85%' },
            ]
        };
    },
    template: `
        <section class="skills" id="skills">
            <div class="container">
                <div class="section-title">
                    <h2>My <span class="color-animated">Skills</span></h2>
                </div>
                <div class="skills-container">
                    <div class="skills-category hard-skill fade-in-up">
                        <h3><i class="fas fa-laptop-code"></i> Hard Skills</h3>
                        <div class="skills-list">
                            <div class="skill-item fade-in-up" v-for="skill in hardSkills" :key="skill.label">
                                <div class="skill-tag">
                                    <i :class="skill.icon"></i> {{ skill.label }}
                                </div>
                                <div class="skill-level">
                                    <div class="skill-progress" :style="{ width: skill.width }"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="skills-category soft-skill fade-in-up">
                        <h3><i class="fas fa-users"></i> Soft Skills</h3>
                        <div class="skills-list">
                            <div class="skill-item fade-in-up" v-for="skill in softSkills" :key="skill.label">
                                <div class="skill-tag">
                                    <i :class="skill.icon"></i> {{ skill.label }}
                                </div>
                                <div class="skill-level">
                                    <div class="skill-progress" :style="{ width: skill.width }"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};
