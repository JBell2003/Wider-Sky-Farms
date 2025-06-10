// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Close mobile menu after clicking a link
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the form data to a server
    // For now, we'll just log it and show a success message
    console.log('Form submitted:', formData);

    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Clear form
    contactForm.reset();
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(74, 103, 65, 0.95)'; // Slightly transparent primary color
    } else {
        navbar.style.backgroundColor = 'var(--color-primary)';
    }
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Toggle active class on the question
        question.classList.toggle('active');
        
        // Get the answer element
        const answer = question.nextElementSibling;
        
        // Toggle active class on the answer
        answer.classList.toggle('active');
        
        // Update the icon
        const icon = question.querySelector('.faq-icon');
        icon.textContent = question.classList.contains('active') ? '−' : '+';
    });
}); 