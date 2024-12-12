document.addEventListener('DOMContentLoaded', function () {
  // MOBILE NAVIGATION TOGGLE
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
      navToggle.addEventListener('click', () => {
          navLinks.classList.toggle('nav-open');
      });
  }

  // HERO ANIMATION
  // Select hero content to animate it in after load
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
      // Add a slight delay to hero animations
      setTimeout(() => {
          heroContent.classList.add('active');
      }, 300);
  }

  // SCROLL-BASED ANIMATIONS USING INTERSECTION OBSERVER
  // This will target elements with .fade-in or .slide-in classes
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in');

  if ('IntersectionObserver' in window) {
      const observerOptions = {
          root: null,   // viewport
          rootMargin: '0px',
          threshold: 0.1 // 10% of the element is visible
      };

      const onIntersect = (entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
                  observer.unobserve(entry.target);
              }
          });
      };

      const observer = new IntersectionObserver(onIntersect, observerOptions);

      animatedElements.forEach(el => {
          observer.observe(el);
      });
  } else {
      // Fallback for browsers without IntersectionObserver support
      // Immediately activate all animations
      animatedElements.forEach(el => el.classList.add('active'));
  }

  // CONSOLE MESSAGE
  console.log("Veonila Fragrances site scripts loaded successfully with animations.");
});
