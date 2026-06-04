// ============================================
//  AutoElite — Connexion (login)
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Build enhanced HTML ─────────────────────
  buildAuthPage();

  const form      = document.getElementById('login-form');
  const emailInput = document.getElementById('email');
  const passInput  = document.getElementById('password');
  const alert      = document.getElementById('form-alert');
  const submitBtn  = document.querySelector('.btn-submit');

  // Real-time validation
  emailInput?.addEventListener('blur', () => validateEmail(emailInput));
  passInput?.addEventListener('input', () => {
    if (passInput.value) clearError(passInput);
  });

  // Form submit
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideAlert();

    const valid = validateEmail(emailInput) & validatePass(passInput);
    if (!valid) return;

    // Loading state
    setLoading(true);
    await sleep(800); // simulate network

    const users = JSON.parse(localStorage.getItem('autoelite_users') || '[]');
    const user  = users.find(u => u.email === emailInput.value.trim().toLowerCase()
                                && u.password === hashSimple(passInput.value));

    setLoading(false);

    if (user) {
      // Save session
      const userSession = JSON.stringify({
        id:    user.id,
        name:  user.name,
        email: user.email
      });
      sessionStorage.setItem('currentUser', userSession);
      localStorage.setItem('currentUser', userSession);
      // Signal other pages/tabs that the user session was updated
      try { localStorage.setItem('ae_user_updated', Date.now().toString()); } catch (e) { /* ignore */ }

      showAlert('success', `✓ Bienvenue, ${user.name} !`);

      setTimeout(() => {
        const redirect = sessionStorage.getItem('redirectAfterLogin');
        sessionStorage.removeItem('redirectAfterLogin');
        const target = redirect || '../index.html';
        try {
          const url = new URL(target, location.href);
          url.searchParams.set('_ae_user', userSession);
          window.location.href = url.toString();
        } catch (e) {
          // Fallback if URL fails (very old browsers)
          window.location.href = target;
        }
      }, 900);
    } else {
      showAlert('error', '✕ Email ou mot de passe incorrect.');
      passInput.value = '';
      passInput.classList.add('input-error');
      passInput.focus();
    }
  });

  // ── Helpers ────────────────────────────────

  function validateEmail(input) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!input.value.trim()) {
      setError(input, 'L\'email est requis');
      return false;
    }
    if (!re.test(input.value)) {
      setError(input, 'Format d\'email invalide');
      return false;
    }
    clearError(input);
    return true;
  }

  function validatePass(input) {
    if (!input.value) {
      setError(input, 'Le mot de passe est requis');
      return false;
    }
    clearError(input);
    return true;
  }

  function setError(input, msg) {
    input.classList.add('input-error');
    input.classList.remove('input-success');
    const errEl = input.closest('.form-group')?.querySelector('.form-error');
    if (errEl) { errEl.textContent = msg; errEl.classList.add('visible'); }
  }

  function clearError(input) {
    input.classList.remove('input-error');
    input.classList.add('input-success');
    const errEl = input.closest('.form-group')?.querySelector('.form-error');
    if (errEl) errEl.classList.remove('visible');
  }

  function showAlert(type, msg) {
    if (!alert) return;
    alert.className = `form-alert ${type} visible`;
    alert.textContent = msg;
  }
  function hideAlert() {
    if (alert) alert.className = 'form-alert';
  }

  function setLoading(on) {
    if (!submitBtn) return;
    submitBtn.classList.toggle('loading', on);
  }

  function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  function hashSimple(str) {
    // Simple deterministic hash for localStorage (not for production!)
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = Math.imul(31, h) + str.charCodeAt(i) | 0;
    }
    return h.toString(36);
  }

  // ── Build enhanced page structure ──────────
  function buildAuthPage() {
    const main = document.querySelector('main');
    if (!main) return;

    // Replace plain form container with split layout
    main.innerHTML = `
      <div class="auth-panel">
        <div class="auth-panel-logo">AutoElite</div>
        <div class="auth-panel-tagline">
          L'excellence<br>automobile<br><em>à votre portée</em>
        </div>
        <p class="auth-panel-desc">
          Accédez à votre espace personnel et explorez notre sélection exclusive de véhicules de prestige.
        </p>
        <div class="auth-features-list">
          <div class="auth-feature"><div class="auth-feature-dot"></div>Catalogue de véhicules premium</div>
          <div class="auth-feature"><div class="auth-feature-dot"></div>Commandes sécurisées</div>
          <div class="auth-feature"><div class="auth-feature-dot"></div>Service client dédié 24/7</div>
          <div class="auth-feature"><div class="auth-feature-dot"></div>Garantie 24 mois incluse</div>
        </div>
        <div class="auth-car-deco">🚗</div>
      </div>
      <div class="form-wrapper">
        <div class="form-container">
          <p class="form-eyebrow">Espace client</p>
          <h2>Connexion</h2>
          <p class="form-subtitle">Entrez vos identifiants pour accéder à votre compte.</p>

          <div id="form-alert" class="form-alert"></div>

          <form id="login-form" novalidate>
            <div class="form-group">
              <label for="email">Adresse email</label>
              <div class="input-wrapper">
                <span class="input-icon">✉</span>
                <input type="email" id="email" autocomplete="email" placeholder="nom@exemple.com">
              </div>
              <div class="form-error"></div>
            </div>
            <div class="form-group">
              <label for="password">Mot de passe</label>
              <div class="input-wrapper">
                <span class="input-icon">🔒</span>
                <input type="password" id="password" autocomplete="current-password" placeholder="••••••••">
              </div>
              <div class="form-error"></div>
            </div>

            <div class="show-password">
              <input type="checkbox" id="showPasswordCheck">
              <label for="showPasswordCheck">Afficher le mot de passe</label>
            </div>

            <button type="submit" class="btn-submit">
              <div class="spinner"></div>
              <span class="btn-text">Se connecter</span>
            </button>
          </form>
          <p class="form-footer">Pas encore de compte ? <a href="inscription.html">S'inscrire gratuitement</a></p>
        </div>
      </div>
    `;

    // Wire up show-password checkbox
    document.getElementById('showPasswordCheck')?.addEventListener('change', (e) => {
      document.getElementById('password').type = e.target.checked ? 'text' : 'password';
    });
  }
});