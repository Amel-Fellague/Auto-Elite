// ============================================
//  AutoElite — Main JS (index.html)
//  Auth state, nav, animations
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Auth Nav State ──────────────────────────
  const authNav  = document.getElementById('auth-nav');
  const userNav  = document.getElementById('user-nav');
  const userNameEl = document.getElementById('user-name');
  const logoutBtn  = document.getElementById('logout-btn');

  function updateNav() {
    const session = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
    if (session) {
      authNav?.classList.add('hidden');
      userNav?.classList.remove('hidden');
      if (userNameEl) {
        userNameEl.textContent = session.name || session.email;
      }
    } else {
      authNav?.classList.remove('hidden');
      userNav?.classList.add('hidden');
    }
  }

  updateNav();

  logoutBtn?.addEventListener('click', () => {
    sessionStorage.removeItem('currentUser');
    updateNav();
    window.location.href = 'index.html';
  });

  // ── Hero text animation ─────────────────────
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    const h1 = heroContent.querySelector('h1');
    const text = h1.textContent;
    // Wrap first word in em for styling
    const words = text.split(' ');
    if (words.length > 2) {
      h1.innerHTML = words.slice(0, -2).join(' ') + ' <em>' + words.slice(-2).join(' ') + '</em>';
    }
  }

  // ── Scroll-triggered animations ────────────
  const observerOpts = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${i * 0.1}s`;
        entry.target.classList.add('animate-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOpts);

  document.querySelectorAll('.feature-card, .stat-card, .service-item, .benefit-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });

  // ── Add feature numbers ─────────────────────
  document.querySelectorAll('.feature-card').forEach((card, i) => {
    const num = document.createElement('div');
    num.className = 'feature-number';
    num.textContent = `0${i + 1}`;
    card.insertBefore(num, card.firstChild);
  });

  // ── Header shrink on scroll ─────────────────
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 60) {
      header.style.height = '60px';
    } else {
      header.style.removeProperty('height');
    }
  }, { passive: true });

  // ── Scroll hint ─────────────────────────────
  const hero = document.querySelector('.hero');
  if (hero) {
    const hint = document.createElement('div');
    hint.className = 'scroll-hint';
    hint.innerHTML = '<span>Découvrir</span><div class="scroll-dot"></div>';
    hero.appendChild(hint);
  }

  // ── Animated counters ───────────────────────
  function animateCounter(el, target, suffix = '') {
    const duration = 2000;
    const step = 16;
    const increment = target / (duration / step);
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      el.textContent = Math.floor(current) + suffix;
    }, step);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent;
        const match = text.match(/(\d+)(\+|%|K\+)?/);
        if (match) {
          const num = parseInt(match[1]);
          const suffix = match[2] || '';
          animateCounter(el, num, suffix);
          statsObserver.unobserve(el);
        }
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number').forEach(el => statsObserver.observe(el));
});