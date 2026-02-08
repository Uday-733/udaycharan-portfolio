// Main JavaScript file for Portfolio Interactivity
console.log("Hello from portfolie.js! The file is linked correctly.");

// Mobile Navigation Menu Toggle Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close the mobile menu when a link is clicked to improve UX
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Scroll Reveal Animation: Uses Intersection Observer to fade in elements on scroll
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Active Navigation Link Highlighting: Updates nav link style based on current scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-brand-500');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('text-brand-500');
        }
    });
});

// Custom Cursor Logic: Smooth following cursor with hover effects
const cursor = document.getElementById('custom-cursor');
const cursorDot = cursor?.querySelector('.cursor-dot');
const cursorRing = cursor?.querySelector('.cursor-ring');

if (cursor && cursorDot && cursorRing) {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        // Track mouse movement and update cursor dot position immediately
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    // Smooth animation loop for the outer cursor ring
    const animateCursor = () => {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;

        cursorX += dx * 0.15;
        cursorY += dy * 0.15;

        cursorRing.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;

        requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // Add hover effect listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .cursor-interactive');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });
}
