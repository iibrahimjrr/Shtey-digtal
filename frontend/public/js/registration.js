// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add parallax effect to background
var container = document.querySelector('.container');
if (container) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        container.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });
} else {
    console.warn('No container element found');
}

// Add intersection observer for fade-in animations
var fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Observe content elements
var content = document.querySelector('.content');
if (content) {
    fadeInObserver.observe(content);
} else {
    console.warn('No content element found');
}
