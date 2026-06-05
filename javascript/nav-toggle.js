const initNavToggle = () => {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!navToggle || !navLinks) return;

  const closeMobileNav = () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  const openMobileNav = () => {
    navLinks.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
  };

  const toggleNav = (event) => {
    event.preventDefault();
    if (navLinks.classList.contains('open')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  };

  ['click', 'touchstart', 'pointerdown'].forEach(eventName => {
    navToggle.addEventListener(eventName, toggleNav);
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    ['click', 'touchstart', 'pointerdown'].forEach(eventName => {
      link.addEventListener(eventName, closeMobileNav);
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMobileNav();
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!navLinks.classList.contains('open')) return;
    if (target instanceof Node && !navLinks.contains(target) && target !== navToggle) {
      closeMobileNav();
    }
  });

  if (window.innerWidth <= 768) closeMobileNav();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavToggle);
} else {
  initNavToggle();
}
