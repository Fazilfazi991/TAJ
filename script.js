document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile-menu');
  const mobileLinks = document.querySelectorAll('.nav-mobile-menu a');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('open');
      console.log('Mobile menu toggled');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Only close menu if it's a direct link, not a dropdown toggle
        if (!link.classList.contains('mobile-dropdown-toggle')) {
          setTimeout(() => {
            mobileMenu.classList.remove('open');
          }, 150);
        }
      });
    });
  }

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 72; // Nav height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Scroll Reveal Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal-on-scroll, .section-label, .section-title, .section-desc, .foods-hero-split, .channel-card, .other-div-card, .about-content > *, .about-img, .cta-banner > *');
  
  revealElements.forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });

  // Contact Form Submission (Mock)
  const submitBtn = document.querySelector('.form-submit');
  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const btn = e.target;
      const originalText = btn.innerText;
      btn.innerText = 'Sending...';
      btn.style.opacity = '0.7';
      
      setTimeout(() => {
        btn.innerText = 'Message Sent!';
        btn.style.backgroundColor = '#23194e'; // Green success
        btn.style.opacity = '1';
        
        // Reset form
        const inputs = document.querySelectorAll('.contact-form-wrap input, .contact-form-wrap textarea, .contact-form-wrap select');
        inputs.forEach(input => input.value = '');

        setTimeout(() => {
          btn.innerText = originalText;
          btn.style.backgroundColor = ''; // Revert to original CSS class background
        }, 3000);
      }, 1500);
    });
  }

  // Mobile Dropdown Toggles (Multiple support)
  const mobileDropdowns = document.querySelectorAll('.mobile-dropdown-container');
  mobileDropdowns.forEach(container => {
    const toggle = container.querySelector('.mobile-dropdown-toggle');
    const menu = container.querySelector('.mobile-dropdown-menu');
    if (toggle && menu) {
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('open');
        toggle.classList.toggle('open');
      });
    }
  });

  // Desktop Dropdown Click Support (Multiple support)
  const desktopDropdowns = document.querySelectorAll('.nav-item-dropdown');
  desktopDropdowns.forEach(dropdown => {
    const toggleLink = dropdown.querySelector('a');
    if (toggleLink) {
      toggleLink.addEventListener('click', (e) => {
        // If it's a mobile device or if we want click-to-open on desktop
        if (window.innerWidth <= 1024 || !dropdown.matches(':hover')) {
          e.preventDefault();
          e.stopPropagation();
          dropdown.classList.toggle('active-dropdown');
        }
      });
    }
  });

  // Close dropdowns if clicked outside
  document.addEventListener('click', (e) => {
    desktopDropdowns.forEach(d => d.classList.remove('active-dropdown'));
    mobileDropdowns.forEach(container => {
      if (!container.contains(e.target)) {
        const menu = container.querySelector('.mobile-dropdown-menu');
        const toggle = container.querySelector('.mobile-dropdown-toggle');
        if (menu) menu.classList.remove('open');
        if (toggle) toggle.classList.remove('open');
      }
    });
  });
});
