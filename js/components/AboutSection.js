const AboutSection = {
    data() {
        return {
            highlights: [
                { label: 'Role', value: 'Web Developer Intern' },
                { label: 'Languages', value: 'Khmer, English' },
                { label: 'Interests', value: 'Research, workshops, sharing knowledge' },
            ]
        };
    },
    template: `
        <section id="about">
            <div class="container">
                <div class="section-title">
                    <h2>About <span class="color-animated">Me</span></h2>
                </div>
                <div class="about-content">
                    <div class="about-text fade-in-left">
                        <p>I am a web development student at Passerelles Numériques Cambodia, currently pursuing an Associate Degree as a Web Developer. I am passionate about building responsive websites and improving my skills through practical school projects, team collaboration, and continuous learning.</p>
                        <p>My current focus is full-stack web development. I have worked with frontend technologies, backend frameworks, databases, deployment tools, QA testing concepts, and UI/UX design workflows.</p>
                        <p>I am seeking a web developer internship where I can contribute to real projects, learn from experienced teams, and grow into a reliable full-stack developer.</p>
                        <div class="about-highlights">
                            <div class="highlight-item" v-for="item in highlights" :key="item.label">
                                <span>{{ item.label }}</span>
                                <strong>{{ item.value }}</strong>
                            </div>
                        </div>
                    </div>
                    <img src="./images/profile2.png" alt="" id="profile" class="hero-image fade-in-right">
                </div>
            </div>
        </section>
    `
};
