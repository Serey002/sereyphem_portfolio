const { createApp } = Vue;

const app = createApp({});

app.component('nav-bar', NavBar);
app.component('hero-section', HeroSection);
app.component('about-section', AboutSection);
app.component('skills-section', SkillsSection);
app.component('education-section', EducationSection);
app.component('projects-section', ProjectsSection);
app.component('experience-section', ExperienceSection);
app.component('contact-section', ContactSection);
app.component('footer-section', FooterSection);

app.mount('#app');

// Animated background logos
const animatedBg = document.getElementById('animatedBg');
const bgTechLogos = [
    { name: 'HTML', icon: 'fab fa-html5', class: 'bg-logo-html' },
    { name: 'CSS', icon: 'fab fa-css3-alt', class: 'bg-logo-css' },
    { name: 'TypeScript', icon: 'fas fa-code', class: 'bg-logo-typescript' },
    { name: 'JavaScript', icon: 'fab fa-js', class: 'bg-logo-js' },
    { name: 'Vue.js', icon: 'fab fa-vuejs', class: 'bg-logo-vue' },
    { name: 'Laravel', icon: 'fab fa-laravel', class: 'bg-logo-laravel' },
    { name: 'PHP', icon: 'fab fa-php', class: 'bg-logo-php' },
    { name: 'Python', icon: 'fab fa-python', class: 'bg-logo-python' },
    { name: 'Node.js', icon: 'fab fa-node-js', class: 'bg-logo-node' },
    { name: 'Database', icon: 'fas fa-database', class: 'bg-logo-database' },
    { name: 'Docker', icon: 'fab fa-docker', class: 'bg-logo-docker' }
];

bgTechLogos.forEach(tech => {
    for (let i = 0; i < 3; i++) {
        const logo = document.createElement('div');
        logo.className = `bg-logo ${tech.class}`;
        const icon = document.createElement('i');
        icon.className = tech.icon;
        logo.appendChild(icon);
        logo.style.left = `${Math.random() * 100}%`;
        logo.style.top = `${Math.random() * 100}%`;
        logo.style.fontSize = `${5 + Math.random() * 3}rem`;
        logo.style.animationDelay = `${Math.random() * 30}s`;
        animatedBg.appendChild(logo);
    }
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '20px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// Scroll fade-in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

// Skill progress bar animation
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0';
            bar.offsetHeight;
            setTimeout(() => { bar.style.width = width; }, 300);
            skillObserver.unobserve(bar);
        }
    });
}, { threshold: 0.3 });

// Re-observe after Vue renders
setTimeout(() => {
    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => observer.observe(el));
    document.querySelectorAll('.skill-progress').forEach(bar => skillObserver.observe(bar));
}, 100);

// Dynamic color cycling
const root = document.documentElement;
const colorSets = [
    { primary: '#2563eb', secondary: '#7c3aed' },
    { primary: '#7c3aed', secondary: '#10b981' },
    { primary: '#10b981', secondary: '#f59e0b' },
    { primary: '#f59e0b', secondary: '#ef4444' },
    { primary: '#ef4444', secondary: '#8b5cf6' }
];
let currentColorSet = 0;
function updateColors() {
    root.style.setProperty('--primary-color', colorSets[currentColorSet].primary);
    root.style.setProperty('--secondary-color', colorSets[currentColorSet].secondary);
    currentColorSet = (currentColorSet + 1) % colorSets.length;
}
setInterval(updateColors, 15000);
updateColors();
