// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Add scroll event listener for header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Mobile menu toggle (to be implemented)
// This is a placeholder for mobile menu functionality
function toggleMobileMenu() {
    // Implementation will be added when needed
    console.log('Mobile menu toggle clicked');
}

// Initialize any features when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website initialized');
    
    // Add any initialization code here
});

// Dropdown hover (for Blog/Pages if you want to add dropdowns in the future)
document.querySelectorAll('.has-dropdown').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('open');
  });
  item.addEventListener('mouseleave', () => {
    item.classList.remove('open');
  });
});

// Search icon focus effect
document.querySelectorAll('.search-icon').forEach(icon => {
  icon.addEventListener('focus', () => {
    icon.style.color = '#00b894';
  });
  icon.addEventListener('blur', () => {
    icon.style.color = '';
  });
}); 