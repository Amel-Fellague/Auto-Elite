// ============================================
//  AutoElite — Paiement JS
//  Harmonisé avec le système AutoElite
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── DOM refs ────────────────────────────────
  const paymentOptions  = document.querySelectorAll('.payment-option');
  const cardForm        = document.getElementById('card-form');
  const paypalForm      = document.getElementById('paypal-form');
  const payButton       = document.getElementById('pay-button');
  const paymentForm     = document.getElementById('payment-form');
  const orderItems      = document.getElementById('order-items');
  const orderTotal      = document.getElementById('order-total');
  const alertEl         = document.getElementById('form-alert');

  // Card preview elements
  const cardNumberDisplay = document.getElementById('card-number-display');
  const cardNameDisplay   = document.getElementById('card-name-display');
  const expiryDisplay     = document.getElementById('expiry-display');

  // Inputs
  const cardNameInput   = document.getElementById('card-name');
  const cardNumberInput = document.getElementById('card-number');
  const expiryInput     = document.getElementById('expiry');
  const cvvInput        = document.getElementById('cvv');

  // ── Load order summary ──────────────────────
  loadOrderSummary();

  // ── Payment method tabs ─────────────────────
  paymentOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      paymentOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      opt.querySelector('input[type="radio"]').checked = true;
      switchMethod(opt.dataset.type);
    });
  });

  function switchMethod(type) {
    if (type === 'card') {
      cardForm.classList.remove('hidden');
      paypalForm.classList.add('hidden');
      document.querySelector('.btn-text').textContent = 'Payer maintenant';
      setCardRequired(true);
    } else {
      cardForm.classList.add('hidden');
      paypalForm.classList.remove('hidden');
      document.querySelector('.btn-text').textContent = 'Continuer vers PayPal';
      setCardRequired(false);
    }
  }

  function setCardRequired(on) {
    [cardNameInput, cardNumberInput, expiryInput, cvvInput].forEach(el => {
      if (on) el.setAttribute('required', '');
      else    el.removeAttribute('required');
    });
  }

  // ── Live card preview ───────────────────────
  cardNumberInput?.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '').slice(0, 16);
    v = v.replace(/(\d{4})(?=\d)/g, '$1 ');
    e.target.value = v;

    const padded = v.padEnd(19, '•').replace(/\d/g, (c, i) => i < v.length ? c : '•');
    cardNumberDisplay.textContent = padded || '•••• •••• •••• ••••';
    cardNumberDisplay.classList.toggle('has-value', v.length > 0);
    clearFieldError(cardNumberInput);
  });

  cardNameInput?.addEventListener('input', (e) => {
    const v = e.target.value.toUpperCase();
    cardNameDisplay.textContent = v || 'VOTRE NOM';
    cardNameDisplay.classList.toggle('has-value', v.length > 0);
    clearFieldError(cardNameInput);
  });

  expiryInput?.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length >= 2) v = v.slice(0, 2) + '/' + v.slice(2, 6);
    e.target.value = v;

    expiryDisplay.textContent = v || 'MM/AAAA';
    expiryDisplay.classList.toggle('has-value', v.length > 0);
    clearFieldError(expiryInput);
  });

  cvvInput?.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
    clearFieldError(cvvInput);
  });

  // ── Form submit ─────────────────────────────
  paymentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideAlert();

    const method = document.querySelector('input[name="payment-type"]:checked')?.value;

    if (method === 'card') {
      const ok = validateCard();
      if (!ok) return;
    }

    // Loading
    setLoading(true);
    await sleep(1400);

    // Clear cart (using AutoElite key)
    localStorage.removeItem('ae_cart');

    setLoading(false);
    window.location.href = 'confirmation.html';
  });

  // ── Validation ──────────────────────────────
  function validateCard() {
    let valid = true;

    // Name
    if (!cardNameInput.value.trim() || cardNameInput.value.trim().length < 2) {
      setFieldError(cardNameInput, 'Nom requis');
      valid = false;
    }

    // Number
    const raw = cardNumberInput.value.replace(/\s/g, '');
    if (!/^\d{13,16}$/.test(raw)) {
      setFieldError(cardNumberInput, 'Numéro de carte invalide');
      valid = false;
    }

    // Expiry
    if (!/^\d{2}\/\d{4}$/.test(expiryInput.value)) {
      setFieldError(expiryInput, 'Format MM/AAAA requis');
      valid = false;
    } else {
      const [mm, yyyy] = expiryInput.value.split('/').map(Number);
      const now = new Date();
      const exp = new Date(yyyy, mm - 1);
      if (mm < 1 || mm > 12 || exp < new Date(now.getFullYear(), now.getMonth())) {
        setFieldError(expiryInput, 'Carte expirée');
        valid = false;
      }
    }

    // CVV
    if (!/^\d{3,4}$/.test(cvvInput.value)) {
      setFieldError(cvvInput, 'CVV invalide');
      valid = false;
    }

    if (!valid) {
      showAlert('error', 'Veuillez corriger les champs en rouge.');
    }

    return valid;
  }

  function setFieldError(input, msg) {
    input.classList.add('input-error');
    input.classList.remove('input-success');
    const err = input.closest('.form-group')?.querySelector('.form-error');
    if (err) { err.textContent = msg; err.classList.add('visible'); }
  }

  function clearFieldError(input) {
    input.classList.remove('input-error');
    if (input.value.trim()) input.classList.add('input-success');
    const err = input.closest('.form-group')?.querySelector('.form-error');
    if (err) err.classList.remove('visible');
  }

  function showAlert(type, msg) {
    alertEl.className = `form-alert ${type} visible`;
    alertEl.textContent = msg;
  }
  function hideAlert() { alertEl.className = 'form-alert'; }

  function setLoading(on) {
    payButton.classList.toggle('loading', on);
    const txt = payButton.querySelector('.btn-text');
    if (txt) txt.textContent = on ? 'Traitement...' : (
      document.querySelector('input[name="payment-type"]:checked')?.value === 'paypal'
        ? 'Continuer vers PayPal'
        : 'Payer maintenant'
    );
  }

  function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  // ── Order summary ───────────────────────────
  function loadOrderSummary() {
    // Compatible with ae_cart (AutoElite cart key)
    const cart = JSON.parse(localStorage.getItem('ae_cart') || '[]');

    if (!cart.length) {
      orderItems.innerHTML = `<div class="cart-empty-msg">
        Votre commande est vide.<br>
        <a href="panier.html" style="color:var(--gold);font-size:.85rem;">← Retour au panier</a>
      </div>`;
      orderTotal.innerHTML = '';
      payButton.disabled = true;
      payButton.style.opacity = '0.5';
      return;
    }

    let total = 0;
    let html  = '';

    cart.forEach((item, i) => {
      const qty      = item.qty || 1;
      const itemTot  = item.price * qty;
      total += itemTot;

      html += `
        <div class="order-item" style="animation-delay:${i * 0.06}s">
          <img src="${item.img || 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&q=70'}"
               class="order-item-image"
               alt="${item.brand} ${item.name}"
               onerror="this.src='https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&q=70'">
          <div class="order-item-info">
            <div class="order-item-name">${item.brand} ${item.name}</div>
            <div class="order-item-details">
              <span class="order-item-color">
                <span class="color-dot" style="background:${getColorHex(item.color)}"></span>
                ${item.color || 'Non spécifiée'}
              </span>
              <span class="order-item-quantity">Qté : ${qty}</span>
            </div>
            <button class="remove-item-btn" data-key="${item.key}">Retirer</button>
          </div>
          <div class="order-item-price">${fmt(itemTot)} €</div>
        </div>`;
    });

    orderItems.innerHTML = html;

    orderTotal.innerHTML = `
      <div class="total-row"><span>Sous-total</span><span>${fmt(total)} €</span></div>
      <div class="total-row"><span>Livraison</span><span style="color:var(--gold)">Gratuite</span></div>
      <div class="total-row total"><span>Total TTC</span><span>${fmt(total)} €</span></div>`;

    // Remove item buttons
    orderItems.querySelectorAll('.remove-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cart = JSON.parse(localStorage.getItem('ae_cart') || '[]')
          .filter(i => i.key !== btn.dataset.key);
        localStorage.setItem('ae_cart', JSON.stringify(cart));
        loadOrderSummary();
      });
    });
  }

  function fmt(n) {
    return new Intl.NumberFormat('fr-FR').format(n);
  }

  function getColorHex(colorName) {
    const map = {
      'Noir Métallique':'#1a1a2e','Blanc Carrara':'#f5f5f0','Rouge Carmine':'#9b1c1c',
      'Bleu Shark':'#1e3a5f','Argent Glace':'#c0c0c8','Jaune Belenus':'#f5c518',
      'Vert Mantis':'#2d6a4f','Orange Borealis':'#d4530a','Or Champagne':'#c9a84c',
      'Gris Jubilee':'#6b7280','Rosso Corsa':'#b91c1c','Giallo Modena':'#d97706',
      'Noir Solide':'#111827','Bleu Minuit':'#1e40af','Blanc Perlé':'#f8f8f8',
      'Vert British':'#14532d','British Racing Green':'#14532d','Skyfall Silver':'#c0c0c0',
      'Jet Black':'#0a0a0a','Papaya Spark':'#ea580c','Onyx Black':'#0a0a0a',
    };
    return map[colorName] || '#6b7280';
  }

  // Init
  switchMethod('card');
});