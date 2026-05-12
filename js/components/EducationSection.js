const EducationSection = {
    data() {
        return {
            educationItems: [
                {
                    title: 'Foundation & Professional Skills',
                    period: 'January 2025 - April 2025',
                    courses: ['General English', 'English for IT Environments', 'Basic Computer', 'Professional Life Skills', 'Logic with Python', 'Microsoft Office', 'Design using Figma'],
                    highlight: 'General English'
                },
                {
                    title: 'Web Development & Tools',
                    period: 'May 2025 - October 2025',
                    courses: ['GitHub', 'HTML & CSS', 'SASS', 'Python', 'Tailwind CSS', 'SQLite', 'Flask', 'Professional Communication'],
                    highlight: 'GitHub'
                },
                {
                    title: 'Full-Stack Development',
                    period: '2025 - Present',
                    courses: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Node.js', 'TypeScript', 'Docker', 'QA Testing'],
                    highlight: 'Laravel'
                },
                {
                    title: 'Rovieng High School',
                    period: '2021 - 2024',
                    note: 'Received Baccalauréat Certificate.',
                    courses: []
                }
            ],
            focusItems: [
                { label: 'Frontend', desc: 'Responsive interfaces with HTML, CSS, SASS, Tailwind CSS, Bootstrap, JavaScript, and Vue.js.' },
                { label: 'Backend', desc: 'Application logic with Python, Flask, PHP, Laravel, Node.js, APIs, and database integration.' },
                { label: 'Data', desc: 'Database practice with MySQL and SQLite for storing, managing, and presenting information.' },
                { label: 'Tools', desc: 'GitHub, Postman, Vercel, Docker basics, Ubuntu basics, Jira, MS Office, and AI-assisted learning tools.' },
                { label: 'Professional', desc: 'Professional communication, teamwork, task management, and real-world career preparation.' },
            ]
        };
    },
    template: `
        <section class="education" id="education">
            <div class="container">
                <div class="section-title">
                    <h2>My <span class="color-animated">Education</span></h2>
                </div>
                <div class="education-content">
                    <div class="education-info fade-in-left">
                        <h3><i class="fas fa-university"></i> Passerelles Numériques Cambodia</h3>
                        <p>Associate Degree as Web Developer</p>
                        <p class="education-period">06 January 2025 - Present</p>
                        <div class="education-details">
                            <div class="education-item fade-in-up" v-for="(item, i) in educationItems" :key="item.title" :class="'stagger-delay-' + (i + 1)">
                                <h4>{{ item.title }}</h4>
                                <p class="education-period">{{ item.period }}</p>
                                <p v-if="item.note">{{ item.note }}</p>
                                <div class="education-courses" v-if="item.courses.length">
                                    <span v-for="course in item.courses" :key="course"
                                        :class="['course-tag', course === item.highlight ? 'highlight' : '']">
                                        {{ course }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="program-structure fade-in-right">
                        <h3>Learning Focus</h3>
                        <p>The Associate Degree program builds both technical and professional skills through practical projects, workshops, team activities, and internship preparation.</p>
                        <div class="terms-list">
                            <div class="term-item fade-in-up" v-for="(item, i) in focusItems" :key="item.label" :class="'stagger-delay-' + (i + 1)">
                                <div class="term-number">{{ item.label }}</div>
                                <p>{{ item.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};
