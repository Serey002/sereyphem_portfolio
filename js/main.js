// Create animated background logos
const animatedBg = document.getElementById('animatedBg');

// Tech logo data
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

// Create multiple instances of each logo for a denser background
bgTechLogos.forEach((tech, index) => {
    // Create 3-5 copies of each logo for better coverage
    for (let i = 0; i < 3; i++) {
        const logo = document.createElement('div');
        logo.className = `bg-logo ${tech.class}`;
        
        // Create icon
        const icon = document.createElement('i');
        icon.className = tech.icon;
        
        // Append icon to logo
        logo.appendChild(icon);
        
        // Set random position
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomSize = 5 + Math.random() * 3; // Between 5rem and 8rem
        
        logo.style.left = `${randomX}%`;
        logo.style.top = `${randomY}%`;
        logo.style.fontSize = `${randomSize}rem`;
        
        // Set random animation delay
        const randomDelay = Math.random() * 30;
        logo.style.animationDelay = `${randomDelay}s`;
        
        animatedBg.appendChild(logo);
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Change icon
    const icon = mobileMenuBtn.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
    });
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    // For this example, we'll just show an alert
    alert(`Thank you, ${name}! Your message about "${subject}" has been received. I'll get back to you at ${email} as soon as possible.`);
    
    // Reset form
    this.reset();
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

// Scroll Animation using Intersection Observer
const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    observer.observe(element);
});

// Animate skill progress bars when scrolled into view
const skillProgressBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBar = entry.target;
            const width = skillBar.style.width;
            skillBar.style.width = '0';
            
            // Trigger reflow
            skillBar.offsetHeight;
            
            // Animate to the original width
            setTimeout(() => {
                skillBar.style.width = width;
            }, 300);
            
            skillObserver.unobserve(skillBar);
        }
    });
}, {
    threshold: 0.3
});

skillProgressBars.forEach(bar => {
    skillObserver.observe(bar);
});

// Dynamic color changing for CSS variables
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

// Change colors every 15 seconds
setInterval(updateColors, 15000);

// Initial call to set colors
updateColors();

// Update background logo positions on window resize
window.addEventListener('resize', () => {
    // We could recalculate positions here if needed
    // For now, the logos will maintain their relative positions
});
