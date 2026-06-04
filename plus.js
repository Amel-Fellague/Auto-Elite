// ============================================
//  AutoElite — Products Catalog
// ============================================

(function () {
  'use strict';

  // ── Car Data ────────────────────────────────
  const CARS = [
    {
      id: 'p001',
      brand: 'Porsche',
      name: 'Taycan Turbo S',
      category: 'Electrique',
      price: 185000,
      specs: { power: '761 ch', speed: '0-100 en 2.8s', range: '450 km' },
      colors: [
        { name: 'Noir Métallique', hex: '#1a1a2e' },
        { name: 'Blanc Carrara', hex: '#f5f5f0' },
        { name: 'Rouge Carmine', hex: '#9b1c1c' },
        { name: 'Bleu Shark', hex: '#1e3a5f' },
        { name: 'Argent Glace', hex: '#c0c0c8' },
      ],
      img: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&q=80',
      badge: 'Électrique',
    },
    {
      id: 'p002',
      brand: 'Lamborghini',
      name: 'Huracán EVO',
      category: 'Sportive',
      price: 215000,
      specs: { power: '640 ch', speed: '0-100 en 2.9s', range: '— km' },
      colors: [
        { name: 'Jaune Belenus', hex: '#f5c518' },
        { name: 'Vert Mantis', hex: '#2d6a4f' },
        { name: 'Orange Borealis', hex: '#d4530a' },
        { name: 'Blanc Icarus', hex: '#f0f0f0' },
        { name: 'Noir Noctis', hex: '#0d0d0d' },
      ],
      img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
      badge: 'Sportive',
    },
    {
      id: 'p003',
      brand: 'Rolls-Royce',
      name: 'Ghost Series II',
      category: 'Berline',
      price: 340000,
      specs: { power: '563 ch', speed: '0-100 en 4.6s', range: '— km' },
      colors: [
        { name: 'Or Champagne', hex: '#c9a84c' },
        { name: 'Gris Jubilee', hex: '#6b7280' },
        { name: 'Bleu Mugello', hex: '#1e3a5f' },
        { name: 'Noir Diamond', hex: '#111111' },
        { name: 'Blanc Artic', hex: '#fafafa' },
      ],
      img: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80',
      badge: 'Prestige',
    },
    {
      id: 'p004',
      brand: 'Tesla',
      name: 'Model S Plaid',
      category: 'Electrique',
      price: 112000,
      specs: { power: '1020 ch', speed: '0-100 en 2.1s', range: '637 km' },
      colors: [
        { name: 'Rouge Multi-coat', hex: '#b91c1c' },
        { name: 'Blanc Perlé', hex: '#f8f8f8' },
        { name: 'Gris Minuit', hex: '#374151' },
        { name: 'Bleu Minuit', hex: '#1e40af' },
        { name: 'Noir Solide', hex: '#111827' },
      ],
      img: 'https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?w=800&q=80',
      badge: 'Électrique',
    },
    {
      id: 'p005',
      brand: 'Bentley',
      name: 'Continental GT',
      category: 'Berline',
      price: 225000,
      specs: { power: '542 ch', speed: '0-100 en 3.9s', range: '— km' },
      colors: [
        { name: 'Vert British', hex: '#14532d' },
        { name: 'Bordeaux', hex: '#7f1d1d' },
        { name: 'Blanc Glacier', hex: '#f1f5f9' },
        { name: 'Gris Tungsten', hex: '#4b5563' },
        { name: 'Bleu Azur', hex: '#0369a1' },
      ],
      img: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80',
      badge: 'Grand Tourisme',
    },
    {
      id: 'p006',
      brand: 'Ferrari',
      name: 'F8 Tributo',
      category: 'Sportive',
      price: 265000,
      specs: { power: '720 ch', speed: '0-100 en 2.9s', range: '— km' },
      colors: [
        { name: 'Rosso Corsa', hex: '#b91c1c' },
        { name: 'Giallo Modena', hex: '#d97706' },
        { name: 'Bianco Avus', hex: '#f9fafb' },
        { name: 'Blu Pozzi', hex: '#1d4ed8' },
        { name: 'Grigio Ferro', hex: '#6b7280' },
      ],
      img: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80',
      badge: 'Sportive',
    },
    {
      id: 'p007',
      brand: 'BMW',
      name: 'X7 xDrive50i',
      category: 'SUV',
      price: 138000,
      specs: { power: '530 ch', speed: '0-100 en 4.7s', range: '— km' },
      colors: [
        { name: 'Noir Saphir', hex: '#0f172a' },
        { name: 'Blanc Alpin', hex: '#f8fafc' },
        { name: 'Gris Arctic', hex: '#9ca3af' },
        { name: 'Bleu Tanzanite', hex: '#1e3a5f' },
        { name: 'Rouge Melbourne', hex: '#991b1b' },
      ],
      img: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800&q=80',
      badge: 'SUV',
    },
    {
      id: 'p008',
      brand: 'Aston Martin',
      name: 'DB11 Volante',
      category: 'Sportive',
      price: 195000,
      specs: { power: '503 ch', speed: '0-100 en 4.1s', range: '— km' },
      colors: [
        { name: 'British Racing Green', hex: '#14532d' },
        { name: 'Skyfall Silver', hex: '#c0c0c0' },
        { name: 'Hyper Red', hex: '#dc2626' },
        { name: 'Jet Black', hex: '#0a0a0a' },
        { name: 'Lunar White', hex: '#f0f0f0' },
      ],
      img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
      badge: 'Cabriolet',
    },
    {
      id: 'p009',
      brand: 'Mercedes-AMG',
      name: 'G 63 Edition 55',
      category: 'SUV',
      price: 178000,
      specs: { power: '585 ch', speed: '0-100 en 4.5s', range: '— km' },
      colors: [
        { name: 'Noir Obsidiane', hex: '#111111' },
        { name: 'Blanc Diamant', hex: '#f5f5f5' },
        { name: 'Gris Selenite', hex: '#6b7280' },
        { name: 'Vert Designo', hex: '#166534' },
        { name: 'Brun Cirrus', hex: '#78350f' },
      ],
      img: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
      badge: 'SUV Premium',
    },
    {
      id: 'p010',
      brand: 'Maserati',
      name: 'GranTurismo Folgore',
      category: 'Electrique',
      price: 195000,
      specs: { power: '761 ch', speed: '0-100 en 2.7s', range: '450 km' },
      colors: [
        { name: 'Bianco Assoluto', hex: '#f8f8f8' },
        { name: 'Rosso Vittoria', hex: '#b91c1c' },
        { name: 'Blu Inchiostro', hex: '#1e3a5f' },
        { name: 'Grigio Lava', hex: '#374151' },
        { name: 'Oro Colosseo', hex: '#b45309' },
      ],
      img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
      badge: 'Électrique',
    },
    {
      id: 'p011',
      brand: 'Porsche',
      name: 'Cayenne Turbo GT',
      category: 'SUV',
      price: 168000,
      specs: { power: '640 ch', speed: '0-100 en 3.3s', range: '— km' },
      colors: [
        { name: 'Biscay Blue', hex: '#1e3a5f' },
        { name: 'Chalk', hex: '#e5e7eb' },
        { name: 'Frozen Black', hex: '#0d0d0d' },
        { name: 'Carmine Red', hex: '#991b1b' },
        { name: 'Miami Blue', hex: '#0284c7' },
      ],
      img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      badge: 'SUV Sport',
    },
    {
      id: 'p012',
      brand: 'McLaren',
      name: '765LT Spider',
      category: 'Sportive',
      price: 358000,
      specs: { power: '765 ch', speed: '0-100 en 2.8s', range: '— km' },
      colors: [
        { name: 'Papaya Spark', hex: '#ea580c' },
        { name: 'Volcano Orange', hex: '#c2410c' },
        { name: 'Silica White', hex: '#f0f0f0' },
        { name: 'Onyx Black', hex: '#0a0a0a' },
        { name: 'Lantana Purple', hex: '#581c87' },
      ],
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      badge: 'Hypercar',
    },
  ];

  // ── State ───────────────────────────────────
  let currentCategory = 'Tous';
  let searchQuery     = '';
  let currency        = 'EUR'; // EUR | DZD
  const DZD_RATE      = 145;   // 1 EUR ≈ 145 DZD
  let pendingCarId    = null;
  let pendingColor    = null;

  // ── DOM refs ────────────────────────────────
  const grid         = document.getElementById('products-grid');
  const searchInput  = document.getElementById('search-input');
  const filterBtns   = document.querySelectorAll('.filter-btn');
  const currencyBtn  = document.getElementById('currency-toggle');
  const authNav      = document.getElementById('auth-nav');
  const userNav      = document.getElementById('user-nav');
  const userNameEl   = document.getElementById('user-name');
  const logoutBtn    = document.getElementById('logout-btn');
  const modal        = document.getElementById('color-modal');
  const modalCarName = document.getElementById('modal-car-name');
  const colorOptions = document.getElementById('color-options');
  const selectedColorName = document.getElementById('selected-color-name');
  const modalCancel  = document.getElementById('modal-cancel');
  const modalAdd     = document.getElementById('modal-add');

  // ── Init ────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    updateNav();
    renderGrid();
    bindEvents();
    updateCartBadge();
  });

  // ── Auth nav ────────────────────────────────
  function updateNav() {
    const session = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
    if (session) {
      authNav?.classList.add('hidden');
      userNav?.classList.remove('hidden');
      if (userNameEl) userNameEl.textContent = session.name || session.email;
    } else {
      authNav?.classList.remove('hidden');
      userNav?.classList.add('hidden');
    }
  }

  logoutBtn?.addEventListener('click', () => {
    sessionStorage.removeItem('currentUser');
    location.reload();
  });

  // ── Render ──────────────────────────────────
  function renderGrid() {
    const filtered = CARS.filter(car => {
      const matchCat  = currentCategory === 'Tous' || car.category === currentCategory;
      const matchSearch = `${car.brand} ${car.name}`.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    if (!filtered.length) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <h3>Aucun véhicule trouvé</h3>
          <p>Essayez d'autres critères de recherche.</p>
        </div>`;
      return;
    }

    grid.innerHTML = filtered.map((car, i) =>
      `<div class="car-card" style="animation-delay:${i * 0.08}s" data-id="${car.id}">
        <div class="car-image">
          <img src="${car.img}" alt="${car.brand} ${car.name}" loading="lazy">
          <div class="car-badge">${car.badge}</div>
          <button class="car-fav ${isFavorite(car.id) ? 'active' : ''}" data-id="${car.id}" title="Favoris">
            ${isFavorite(car.id) ? '❤' : '♡'}
          </button>
        </div>
        <div class="car-info">
          <div class="car-brand">${car.brand}</div>
          <div class="car-name">${car.name}</div>
          <div class="car-specs">
            <div class="car-spec"><span class="car-spec-icon">⚡</span>${car.specs.power}</div>
            <div class="car-spec"><span class="car-spec-icon">🏎</span>${car.specs.speed}</div>
            ${car.category === 'Electrique' ? `<div class="car-spec"><span class="car-spec-icon">🔋</span>${car.specs.range}</div>` : ''}
          </div>
          <div class="car-footer">
            <div class="car-price">
              <div class="car-price-value">${formatPrice(car.price)}</div>
              <div class="car-price-currency">${currency === 'EUR' ? 'EUR TTC' : 'DZD TTC'}</div>
            </div>
            <button class="car-add-btn" data-id="${car.id}">Commander →</button>
          </div>
        </div>
      </div>`
    ).join('');

    // Bind card events
    grid.querySelectorAll('.car-add-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openColorModal(btn.dataset.id);
      });
    });
    grid.querySelectorAll('.car-fav').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(btn.dataset.id, btn);
      });
    });
  }

  // ── Format price ────────────────────────────
  function formatPrice(eur) {
    if (currency === 'DZD') {
      const dzd = eur * DZD_RATE;
      return new Intl.NumberFormat('fr-DZ').format(dzd);
    }
    return new Intl.NumberFormat('fr-FR').format(eur);
  }

  // ── Favorites ───────────────────────────────
  function getFavorites() {
    return JSON.parse(localStorage.getItem('ae_favorites') || '[]');
  }
  function isFavorite(id) { return getFavorites().includes(id); }
  function toggleFavorite(id, btn) {
    const favs = getFavorites();
    const idx  = favs.indexOf(id);
    if (idx === -1) {
      favs.push(id);
      btn.textContent = '❤';
      btn.classList.add('active');
    } else {
      favs.splice(idx, 1);
      btn.textContent = '♡';
      btn.classList.remove('active');
    }
    localStorage.setItem('ae_favorites', JSON.stringify(favs));
  }

  // ── Color Modal ─────────────────────────────
  function openColorModal(carId) {
    const session = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
    if (!session) {
      sessionStorage.setItem('redirectAfterLogin', location.href);
      window.location.href = 'connexion.html';
      return;
    }

    const car = CARS.find(c => c.id === carId);
    if (!car) return;

    pendingCarId = carId;
    pendingColor = null;

    modalCarName.textContent = `${car.brand} ${car.name}`;
    selectedColorName.textContent = '';

    // Add subtitle
    let sub = modal.querySelector('.modal-subtitle');
    if (!sub) {
      sub = document.createElement('p');
      sub.className = 'modal-subtitle';
      modalCarName.insertAdjacentElement('afterend', sub);
    }
    sub.textContent = 'Choisissez votre couleur';

    // Render swatches
    colorOptions.innerHTML = car.colors.map(c =>
      `<div class="color-swatch" style="background:${c.hex}" data-color="${c.name}" title="${c.name}"></div>`
    ).join('');

    colorOptions.querySelectorAll('.color-swatch').forEach(swatch => {
      swatch.addEventListener('click', () => {
        colorOptions.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
        swatch.classList.add('selected');
        pendingColor = swatch.dataset.color;
        selectedColorName.textContent = `Couleur sélectionnée : ${pendingColor}`;
      });
    });

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    pendingCarId = null;
    pendingColor = null;
  }

  modalCancel?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

  modalAdd?.addEventListener('click', () => {
    if (!pendingColor) {
      selectedColorName.textContent = '⚠ Veuillez choisir une couleur.';
      selectedColorName.style.color = '#ef4444';
      return;
    }
    selectedColorName.style.color = '';

    const car = CARS.find(c => c.id === pendingCarId);
    addToCart(car, pendingColor);
    closeModal();
  });

  // ── Cart ─────────────────────────────────────
  function getCart() {
    return JSON.parse(localStorage.getItem('ae_cart') || '[]');
  }
  function saveCart(cart) {
    localStorage.setItem('ae_cart', JSON.stringify(cart));
    updateCartBadge();
  }

  function addToCart(car, color) {
    const cart = getCart();
    const key  = `${car.id}_${color}`;
    const existing = cart.find(i => i.key === key);

    if (existing) {
      existing.qty++;
    } else {
      cart.push({
        key,
        id:    car.id,
        brand: car.brand,
        name:  car.name,
        price: car.price,
        color,
        img:   car.img,
        badge: car.badge,
        qty:   1
      });
    }
    saveCart(cart);
    showToast(`${car.brand} ${car.name} (${color}) ajouté à la commande.`);
  }

  function updateCartBadge() {
    const cart  = getCart();
    const total = cart.reduce((s, i) => s + i.qty, 0);
    const link  = document.querySelector('a[href*="panier"]');
    if (!link) return;

    let badge = link.querySelector('.cart-badge');
    if (total > 0) {
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'cart-badge';
        link.appendChild(badge);
      }
      badge.textContent = total;
    } else {
      badge?.remove();
    }
  }

  // ── Toast ────────────────────────────────────
  function showToast(msg) {
    let t = document.querySelector('.toast-global');
    if (!t) {
      t = document.createElement('div');
      t.className = 'toast toast-global';
      document.body.appendChild(t);
      t.style.cssText = `
        position:fixed; bottom:2rem; right:2rem; z-index:999;
        padding:.9rem 1.4rem; background:var(--bg-card); border:1px solid var(--border-hover);
        border-radius:12px; font-size:.85rem; color:var(--text-primary);
        box-shadow:var(--shadow-card); transform:translateY(100px); opacity:0;
        transition:.3s cubic-bezier(.4,0,.2,1); max-width:340px;
      `;
    }
    t.textContent = '✓  ' + msg;
    t.style.transform = 'translateY(0)';
    t.style.opacity = '1';
    clearTimeout(t._timeout);
    t._timeout = setTimeout(() => {
      t.style.transform = 'translateY(100px)';
      t.style.opacity = '0';
    }, 3000);
  }

  // ── Events ───────────────────────────────────
  function bindEvents() {
    // Filters
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        renderGrid();
      });
    });

    // Search
    searchInput?.addEventListener('input', () => {
      searchQuery = searchInput.value;
      renderGrid();
    });

    // Currency toggle
    currencyBtn?.addEventListener('click', () => {
      currency = currency === 'EUR' ? 'DZD' : 'EUR';
      currencyBtn.textContent = currency === 'EUR' ? 'DZD' : 'EUR';
      renderGrid();
    });
  }

})();