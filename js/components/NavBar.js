const NavBar = {
    data() {
        return {
            menuOpen: false,
            navLinks: [
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#education', label: 'Education' },
                { href: '#projects', label: 'Projects' },
                { href: '#experience', label: 'Experience' },
                { href: '#contact', label: 'Contact' },
            ]
        };
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        scrollTo(href) {
            this.menuOpen = false;
            const target = document.querySelector(href);
            if (!target) return;
            const headerHeight = document.querySelector('header').offsetHeight;
            const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    },
    template: `
        <header>
            <div class="container header-content">
                <a href="#" class="logo" @click.prevent="scrollTo('#home')">S<span class="dynamic-color">P</span></a>

                <button class="mobile-menu-btn" @click="toggleMenu">
                    <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
                </button>

                <nav>
                    <ul :class="{ active: menuOpen }">
                        <li v-for="link in navLinks" :key="link.href">
                            <a :href="link.href" @click.prevent="scrollTo(link.href)">{{ link.label }}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    `
};
