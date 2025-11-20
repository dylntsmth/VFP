document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scrolled');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scrolled')) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll <= 0 ? 0 : currentScroll;
        
        // Add background when scrolled
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for animations
    const fadeSections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-section');
            }
        });
    }, {
        threshold: 0.1
    });

    fadeSections.forEach(section => {
        observer.observe(section);
    });

    // Mobile menu toggle (would be implemented with actual mobile menu)
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', !expanded);
            mobileMenu.classList.toggle('hidden');
        });
    }
});