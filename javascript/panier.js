// ============================================
//  AutoElite — Cart / Order Page
// ============================================

(function () {
  'use strict';

  // ── DOM ─────────────────────────────────────
  const itemsSection  = document.getElementById('cart-items-section');
  const itemCountEl   = document.getElementById('item-count');
  const subtotalEl    = document.getElementById('subtotal');
  const totalEl       = document.getElementById('total');
  const cartCountLabel = document.getElementById('cart-count-label');
  const checkoutBtn   = document.getElementById('checkout-btn');
  const clearCartBtn  = document.getElementById('clear-cart-btn');
  const toastEl       = document.getElementById('toast');

  // ── Init ────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    renderCart();
  });

  // ── Cart helpers ────────────────────────────
  function getCart() {
    return JSON.parse(localStorage.getItem('ae_cart') || '[]');
  }
  function saveCart(cart) {
    localStorage.setItem('ae_cart', JSON.stringify(cart));
  }

  // ── Render ──────────────────────────────────
  function renderCart() {
    const cart = getCart();

    if (!cart.length) {
      renderEmpty();
      updateSummary(cart);
      return;
    }

    cartCountLabel.textContent = `${cart.reduce((s, i) => s + i.qty, 0)} véhicule(s) dans votre commande`;

    itemsSection.innerHTML = cart.map((item, idx) =>
      `<div class="cart-item" data-key="${item.key}" style="animation-delay:${idx * 0.08}s">
        <div class="cart-item-image">
          <img src="${item.img}" alt="${item.brand} ${item.name}">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-brand">${item.brand}</div>
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">
            <div class="cart-item-tag">${item.badge}</div>
            <div class="cart-item-tag color-indicator">
              <span class="color-dot" style="background:${getColorHex(item.color)}"></span>
              ${item.color || 'Couleur non spécifiée'}
            </div>
          </div>
          <div class="cart-qty">
            <button class="qty-btn" data-action="minus" data-key="${item.key}">−</button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn" data-action="plus" data-key="${item.key}">+</button>
          </div>
        </div>
        <div class="cart-item-actions">
          <div class="cart-item-price">${formatPrice(item.price * item.qty)} €</div>
          <button class="cart-item-remove" data-key="${item.key}">Retirer</button>
        </div>
      </div>`
    ).join('');

    // Events
    itemsSection.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => adjustQty(btn.dataset.key, btn.dataset.action));
    });
    itemsSection.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => removeItem(btn.dataset.key));
    });

    updateSummary(cart);
  }

  function renderEmpty() {
    itemsSection.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <h3>Votre commande est vide</h3>
        <p>Parcourez notre catalogue pour découvrir nos véhicules d'exception.</p>
        <a href="produit.html" class="btn btn-primary">Explorer le catalogue →</a>
      </div>`;
    cartCountLabel.textContent = 'Votre commande est vide';
  }

  function updateSummary(cart) {
    const totalQty = cart.reduce((s, i) => s + i.qty, 0);
    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

    if (itemCountEl)  itemCountEl.textContent  = totalQty;
    if (subtotalEl)   subtotalEl.textContent   = `${formatPrice(subtotal)} €`;
    if (totalEl)      totalEl.textContent      = `${formatPrice(subtotal)} €`;

    if (checkoutBtn) {
      checkoutBtn.disabled = !cart.length;
      checkoutBtn.style.opacity = cart.length ? '1' : '0.5';
    }
    if (clearCartBtn) {
      clearCartBtn.style.display = cart.length ? 'block' : 'none';
    }
  }

  // ── Actions ─────────────────────────────────
  function adjustQty(key, action) {
    const cart = getCart();
    const item = cart.find(i => i.key === key);
    if (!item) return;

    if (action === 'plus') {
      item.qty++;
    } else {
      item.qty--;
      if (item.qty <= 0) {
        return removeItem(key);
      }
    }
    saveCart(cart);
    renderCart();
  }

  function removeItem(key) {
    const cart = getCart().filter(i => i.key !== key);
    saveCart(cart);
    renderCart();
    showToast('Véhicule retiré de la commande.', 'error');
  }

  clearCartBtn?.addEventListener('click', () => {
    if (confirm('Vider toute la commande ?')) {
      saveCart([]);
      renderCart();
      showToast('Commande vidée.', 'error');
    }
  });

  checkoutBtn?.addEventListener('click', () => {
    const raw = sessionStorage.getItem('currentUser') || localStorage.getItem('currentUser');
    const session = JSON.parse(raw || 'null');
    if (!session) {
      sessionStorage.setItem('redirectAfterLogin', location.href);
      window.location.href = 'connexion.html';
      return;
    }

    // Simulate order placement without clearing the cart prematurely
    checkoutBtn.textContent = 'Traitement en cours...';
    checkoutBtn.disabled = true;

    setTimeout(() => {
      window.location.href = 'paiement.html';
    }, 1500);
  });

  // ── Helpers ─────────────────────────────────
  function formatPrice(n) {
    return new Intl.NumberFormat('fr-FR').format(n);
  }

  function getColorHex(colorName) {
    if (!colorName) return '#6b7280';
    const normalized = colorName.trim().toLowerCase();
    const map = {
      'noir métallique': '#1a1a2e', 'blanc carrara': '#f5f5f0', 'rouge carmine': '#9b1c1c',
      'bleu shark': '#1e3a5f', 'argent glace': '#c0c0c8', 'jaune belenus': '#f5c518',
      'vert mantis': '#2d6a4f', 'orange borealis': '#d4530a', 'blanc icarus': '#f0f0f0',
      'noir noctis': '#0d0d0d', 'or champagne': '#c9a84c', 'gris jubilee': '#6b7280',
      'bleu mugello': '#1e3a5f', 'noir diamond': '#111111', 'blanc artic': '#fafafa',
      'rouge multi-coat': '#b91c1c', 'blanc perlé': '#f8f8f8', 'gris minuit': '#374151',
      'bleu minuit': '#1e40af', 'noir solide': '#111827', 'vert british': '#14532d',
      'bordeaux': '#7f1d1d', 'blanc glacier': '#f1f5f9', 'gris tungsten': '#4b5563',
      'bleu azur': '#0369a1', 'rosso corsa': '#b91c1c', 'giallo modena': '#d97706',
      'blanche': '#f8f8f8', 'blanc': '#ffffff', 'bleu nuit': '#1e3a5f',
      'rouge': '#dc2626', 'gris': '#9ca3af', 'marron': '#6b4226', 'maron': '#6b4226',
      'vert': '#2d6a4f'
    };
    return map[normalized] || '#6b7280';
  }

  function showToast(msg, type = 'success') {
    if (!toastEl) return;
    toastEl.textContent = (type === 'success' ? '✓  ' : '✕  ') + msg;
    toastEl.className = `toast show ${type}`;
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(() => toastEl.classList.remove('show'), 3000);
  }

})();