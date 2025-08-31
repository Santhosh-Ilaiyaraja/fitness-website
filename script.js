// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Animate step cards on scroll
function animateStepCards() {
    const stepCards = document.querySelectorAll('.step-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    stepCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Animate screenshot cards on scroll
function animateScreenshotCards() {
    const screenshotCards = document.querySelectorAll('.screenshot-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    screenshotCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Animate feature cards on scroll
function animateFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Animate phone mockup on scroll
function animatePhoneMockup() {
    const phoneMockup = document.querySelector('.phone-mockup');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
    
    if (phoneMockup) {
        phoneMockup.style.opacity = '0';
        phoneMockup.style.transform = 'translateY(50px) scale(0.8)';
        phoneMockup.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(phoneMockup);
    }
}

// Animate floating phone on scroll
function animateFloatingPhone() {
    const floatingPhone = document.querySelector('.floating-phone');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) rotate(0deg)';
            }
        });
    });
    
    if (floatingPhone) {
        floatingPhone.style.opacity = '0';
        floatingPhone.style.transform = 'translateY(30px) rotate(-5deg)';
        floatingPhone.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(floatingPhone);
    }
}

const updateCounter = () => {
    if (current < target) {
        current += increment;
        let displayValue;

        // format with 1 decimal if target has decimals
        if (target % 1 !== 0) {
            displayValue = current.toFixed(1);
        } else {
            displayValue = Math.ceil(current);
        }

        if (counter.textContent.includes('+')) {
            counter.textContent = displayValue + '+';
        } else if (counter.textContent.includes('★')) {
            counter.textContent = displayValue + '★';
        } else if (counter.textContent.includes('%')) {
            counter.textContent = displayValue + '%';
        } else {
            counter.textContent = displayValue;
        }
        requestAnimationFrame(updateCounter);
    } else {
        if (counter.textContent.includes('+')) {
            counter.textContent = target + '+';
        } else if (counter.textContent.includes('★')) {
            counter.textContent = target + '★';
        } else if (counter.textContent.includes('%')) {
            counter.textContent = target + '%';
        } else {
            counter.textContent = target;
        }
    }
};


// Counter animation for statistics
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number, .about-stat h3');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.textContent.replace(/[^\d.]/g, ''));
                const increment = target / 100;
                let current = 0;
                
                const updateCounter = () => { if (current < target) {
                    current += increment;
                    let displayValue;
            
                    // format with 1 decimal if target has decimals
                    if (target % 1 !== 0) {
                        displayValue = current.toFixed(1);
                    } else {
                        displayValue = Math.ceil(current);
                    }
            
                    if (counter.textContent.includes('+')) {
                        counter.textContent = displayValue + '+';
                    } else if (counter.textContent.includes('★')) {
                        counter.textContent = displayValue + '★';
                    } else if (counter.textContent.includes('%')) {
                        counter.textContent = displayValue + '%';
                    } else {
                        counter.textContent = displayValue;
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    if (counter.textContent.includes('+')) {
                        counter.textContent = target + '+';
                    } else if (counter.textContent.includes('★')) {
                        counter.textContent = target + '★';
                    } else if (counter.textContent.includes('%')) {
                        counter.textContent = target + '%';
                    } else {
                        counter.textContent = target;
                    }
                }
             };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Add hover effects to download buttons
function addDownloadButtonEffects() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    downloadButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Add hover effects to app buttons in mockup
function addAppButtonEffects() {
    const appButtons = document.querySelectorAll('.app-btn');
    
    appButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Parallax effect for hero section
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Floating animation for phone mockup
function addFloatingAnimation() {
    const phoneMockup = document.querySelector('.phone-mockup');
    if (phoneMockup) {
        let time = 0;
        const animate = () => {
            time += 0.01;
            const y = Math.sin(time) * 10;
            phoneMockup.style.transform = `translateY(${y}px)`;
            requestAnimationFrame(animate);
        };
        animate();
    }
}

// Initialize all animations when page loads
window.addEventListener('load', function() {
    animateStepCards();
    animateScreenshotCards();
    animateFeatureCards();
    animatePhoneMockup();
    animateFloatingPhone();
    animateCounters();
    addDownloadButtonEffects();
    addAppButtonEffects();
    addParallaxEffect();
    addFloatingAnimation();
});

// Add active state to navigation based on scroll position
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Update navigation on scroll
window.addEventListener('scroll', updateActiveNav);

// Add loading animation
function addLoadingAnimation() {
    const body = document.body;
    body.style.opacity = '0';
    body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        body.style.opacity = '1';
    }, 100);
}

// Initialize loading animation
document.addEventListener('DOMContentLoaded', addLoadingAnimation);

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-green) !important;
        font-weight: 600;
    }
    
    .nav-menu.active {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 70px;
        left: 0;
        right: 0;
        background: var(--white);
        box-shadow: 0 4px 20px var(--shadow);
        padding: 2rem;
        gap: 1rem;
    }
    
    .nav-toggle.active .bar:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .nav-toggle.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active .bar:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    /* Smooth animations for new elements */
    .step-card, .screenshot-card, .feature-card {
        transition: all 0.6s ease;
    }
    
    .phone-mockup, .floating-phone {
        transition: all 0.8s ease;
    }
    
    /* Hover effects for interactive elements */
    .download-btn:hover {
        transform: translateY(-3px) scale(1.02);
    }
    
    .app-btn:hover {
        transform: translateY(-2px) scale(1.02);
    }
`;
document.head.appendChild(style);
