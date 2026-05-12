const HeroSection = {
    methods: {
        scrollTo(href) {
            const target = document.querySelector(href);
            if (!target) return;
            const headerHeight = document.querySelector('header').offsetHeight;
            const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    },
    template: `
        <section class="hero" id="home">
            <div class="container hero-content">
                <div class="hero-text fade-in-left">
                    <h1>Hello, I'm <span class="color-animated">Serey Phem</span></h1>
                    <p>Web Developer Intern and web development student at Passerelles Numériques Cambodia. I build responsive web applications with HTML, CSS, JavaScript, TypeScript, PHP, Laravel, Node.js, Vue.js, Python, Flask, and MySQL.</p>
                    <div class="hero-actions">
                        <a href="#projects" class="btn" @click.prevent="scrollTo('#projects')">View My Projects</a>
                        <a href="#contact" class="btn btn-outline" @click.prevent="scrollTo('#contact')">Contact Me</a>
                    </div>
                </div>
                <img src="./images/profile.png" alt="" id="profile2" class="hero-image fade-in-right">
            </div>
        </section>
    `
};
