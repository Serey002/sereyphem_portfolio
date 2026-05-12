const FooterSection = {
    data() {
        return {
            socials: [
                { href: 'https://github.com/Serey002', icon: 'fab fa-github' },
                { href: 'https://www.linkedin.com/in/serey-phem-516842393/', icon: 'fab fa-linkedin-in' },
                { href: 'https://t.me/serey002', icon: 'fab fa-telegram' },
            ]
        };
    },
    template: `
        <footer>
            <div class="container">
                <div class="footer-content">
                    <div class="footer-logo fade-in-left">Serey<span>Phem</span></div>
                    <div class="social-links fade-in-right">
                        <a v-for="s in socials" :key="s.href" :href="s.href" target="_blank" class="social-link">
                            <i :class="s.icon"></i>
                        </a>
                    </div>
                </div>
                <div class="copyright fade-in-up">
                    &copy; 2026 Serey Phem. All Rights Reserved. | Web Developer Intern Portfolio
                </div>
            </div>
        </footer>
    `
};
