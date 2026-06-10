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

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 5px 20px rgba(0, 150, 199, 0.15)';
    } else {
        header.style.padding = '20px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 150, 199, 0.08)';
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
