// ============================================
//  AutoElite — Inscription (registration)
// ============================================

(function () {
  'use strict';

  // ── Build enhanced page ─────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    buildPage();
    initForm();
  });

  function buildPage() {
    const main = document.querySelector('main');
    if (!main) return;

    main.innerHTML = `
      <div class="auth-panel">
        <div class="auth-panel-logo">AutoElite</div>
        <div class="auth-panel-tagline">
          Rejoignez<br>notre cercle<br><em>d'excellence</em>
        </div>
        <p class="auth-panel-desc">
          Créez votre compte et profitez d'un accès privilégié à notre catalogue de véhicules d'exception.
        </p>
        <div class="auth-features-list">
          <div class="auth-feature"><div class="auth-feature-dot"></div>Inscription gratuite et rapide</div>
          <div class="auth-feature"><div class="auth-feature-dot"></div>Accès au catalogue complet</div>
          <div class="auth-feature"><div class="auth-feature-dot"></div>Suivi de commandes en temps réel</div>
          <div class="auth-feature"><div class="auth-feature-dot"></div>Offres exclusives membres</div>
        </div>
        <div class="auth-car-deco">🏎</div>
      </div>
      <div class="form-wrapper">
        <div class="form-container">
          <p class="form-eyebrow">Nouveau client</p>
          <h2>Créer un compte</h2>
          <p class="form-subtitle">Remplissez le formulaire pour rejoindre AutoElite.</p>

          <div id="form-alert" class="form-alert"></div>

          <form id="register-form" novalidate>
            <div class="form-row">
              <div class="form-group">
                <label for="first-name">Prénom</label>
                <div class="input-wrapper">
                  <span class="input-icon">👤</span>
                  <input type="text" id="first-name" autocomplete="given-name" placeholder="Prénom">
                </div>
                <div class="form-error"></div>
              </div>
              <div class="form-group">
                <label for="last-name">Nom</label>
                <div class="input-wrapper">
                  <span class="input-icon">👤</span>
                  <input type="text" id="last-name" autocomplete="family-name" placeholder="Nom">
                </div>
                <div class="form-error"></div>
              </div>
            </div>

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
                <input type="password" id="password" autocomplete="new-password" placeholder="Minimum 6 caractères">
                <button type="button" class="password-toggle" id="toggle-password">👁</button>
              </div>
              <div class="password-strength">
                <div class="strength-bar" id="s1"></div>
                <div class="strength-bar" id="s2"></div>
                <div class="strength-bar" id="s3"></div>
                <div class="strength-bar" id="s4"></div>
              </div>
              <div class="strength-label" id="strength-label"></div>
              <div class="form-error"></div>
            </div>

            <div class="form-group">
              <label for="confirm-password">Confirmer le mot de passe</label>
              <div class="input-wrapper">
                <span class="input-icon">🔒</span>
                <input type="password" id="confirm-password" autocomplete="new-password" placeholder="Répétez votre mot de passe">
                <button type="button" class="password-toggle" id="toggle-confirm">👁</button>
              </div>
              <div class="form-error"></div>
            </div>

            <div class="form-check">
              <input type="checkbox" id="terms">
              <label for="terms">J'accepte les <a href="#">conditions d'utilisation</a> et la <a href="#">politique de confidentialité</a> d'AutoElite.</label>
            </div>

            <div id="status-message" class="hidden"></div>
            <button type="submit" class="btn-submit">
              <div class="spinner"></div>
              <span class="btn-text">Créer mon compte</span>
            </button>
          </form>
          <p class="form-footer">Déjà un compte ? <a href="connexion.html">Se connecter</a></p>
        </div>
      </div>
    `;
  }

  function initForm() {
    const form        = document.getElementById('register-form');
    const firstName   = document.getElementById('first-name');
    const lastName    = document.getElementById('last-name');
    const emailInput  = document.getElementById('email');
    const passInput   = document.getElementById('password');
    const confirmPass = document.getElementById('confirm-password');
    const termsCheck  = document.getElementById('terms');
    const alertEl     = document.getElementById('form-alert');
    const submitBtn   = document.querySelector('.btn-submit');

    if (!form) return;

    // Toggle passwords
    document.getElementById('toggle-password')?.addEventListener('click', () => {
      passInput.type = passInput.type === 'text' ? 'password' : 'text';
    });
    document.getElementById('toggle-confirm')?.addEventListener('click', () => {
      confirmPass.type = confirmPass.type === 'text' ? 'password' : 'text';
    });

    // Strength meter
    passInput?.addEventListener('input', () => {
      updateStrength(passInput.value);
      if (confirmPass.value) validateConfirm(passInput, confirmPass);
    });
    confirmPass?.addEventListener('input', () => validateConfirm(passInput, confirmPass));

    // Blur validations
    firstName?.addEventListener('blur', () => validateName(firstName, 'Prénom'));
    lastName?.addEventListener('blur',  () => validateName(lastName, 'Nom'));
    emailInput?.addEventListener('blur', () => validateEmail(emailInput));
    passInput?.addEventListener('blur',  () => validatePassword(passInput));

    // Submit
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      hideAlert();

      const v1 = validateName(firstName, 'Prénom');
      const v2 = validateName(lastName, 'Nom');
      const v3 = validateEmail(emailInput);
      const v4 = validatePassword(passInput);
      const v5 = validateConfirm(passInput, confirmPass);

      if (!termsCheck.checked) {
        showAlert('error', 'Veuillez accepter les conditions d\'utilisation.');
        return;
      }

      if (!(v1 && v2 && v3 && v4 && v5)) return;

      setLoading(true);
      await sleep(900);

      const users = JSON.parse(localStorage.getItem('autoelite_users') || '[]');
      const exists = users.some(u => u.email === emailInput.value.trim().toLowerCase());

      if (exists) {
        setLoading(false);
        showAlert('error', '✕ Un compte avec cet email existe déjà.');
        setError(emailInput, 'Email déjà utilisé');
        return;
      }

      const newUser = {
        id:       Date.now().toString(36),
        name:     `${firstName.value.trim()} ${lastName.value.trim()}`,
        email:    emailInput.value.trim().toLowerCase(),
        password: hashSimple(passInput.value),
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      localStorage.setItem('autoelite_users', JSON.stringify(users));

      setLoading(false);
      showAlert('success', `✓ Compte créé avec succès ! Bienvenue, ${newUser.name} !`);

      setTimeout(() => {
        window.location.href = 'connexion.html';
      }, 1500);
    });
  }

  // ── Validation helpers ──────────────────────

  function validateName(input, label) {
    if (!input.value.trim() || input.value.trim().length < 2) {
      setError(input, `${label} invalide (2 caractères minimum)`);
      return false;
    }
    clearError(input);
    return true;
  }

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

  function validatePassword(input) {
    if (input.value.length < 6) {
      setError(input, 'Minimum 6 caractères');
      return false;
    }
    clearError(input);
    return true;
  }

  function validateConfirm(pass, confirm) {
    if (confirm.value !== pass.value) {
      setError(confirm, 'Les mots de passe ne correspondent pas');
      return false;
    }
    clearError(confirm);
    return true;
  }

  function updateStrength(pass) {
    let score = 0;
    if (pass.length >= 6)  score++;
    if (pass.length >= 10) score++;
    if (/[A-Z]/.test(pass) && /[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;

    const bars   = ['s1','s2','s3','s4'].map(id => document.getElementById(id));
    const labels = ['', 'Faible', 'Moyen', 'Fort', 'Très fort'];
    const classes = ['', 'active-weak', 'active-medium', 'active-strong', 'active-strong'];

    bars.forEach((bar, i) => {
      bar.className = 'strength-bar';
      if (i < score) bar.classList.add(classes[score]);
    });

    const labelEl = document.getElementById('strength-label');
    if (labelEl) {
      labelEl.textContent = pass.length ? labels[score] : '';
      labelEl.style.color = score <= 1 ? '#ef4444' : score === 2 ? '#f59e0b' : '#22c55e';
    }
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
    const el = document.getElementById('form-alert');
    if (!el) return;
    el.className = `form-alert ${type} visible`;
    el.textContent = msg;
  }
  function hideAlert() {
    const el = document.getElementById('form-alert');
    if (el) el.className = 'form-alert';
  }

  function setLoading(on) {
    const btn = document.querySelector('.btn-submit');
    if (btn) btn.classList.toggle('loading', on);
  }

  function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  function hashSimple(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = Math.imul(31, h) + str.charCodeAt(i) | 0;
    }
    return h.toString(36);
  }

})();