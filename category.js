/**
 * DOT JEANS CO. — Shared Category Page JavaScript
 * Used across all category listing pages.
 *
 * Supabase-ready: replace SUPABASE_URL & SUPABASE_KEY and
 * un-comment the loadFromSupabase() call to use live data.
 */

/* ─── Supabase config (un-comment when ready) ─────────────── *
const SUPABASE_URL = 'https://YOUR_PROJECT.supabase.co';
const SUPABASE_KEY = 'YOUR_ANON_KEY';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
* ────────────────────────────────────────────────────────────── */

/* ─── Page-level state ────────────────────────────────────── */
let allProducts   = [];   // full product list for this category
let filteredList  = [];   // after filters applied
let currentPage   = 1;
const PER_PAGE    = 9;    // products per page
let currentSort   = 'newest';
let activeFilters = { sizes: [], colours: [], maxPrice: Infinity, fit: '' };
let wishlist      = new Set(JSON.parse(localStorage.getItem('dot_wishlist') || '[]'));

/* ─── Init ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    if (typeof CATEGORY_PRODUCTS !== 'undefined') {
        allProducts = CATEGORY_PRODUCTS;
        applyAndRender();
    }
    initFilters();
    initSortSelect();
    initMobileControls();
    initNavHamburger();
    initEnquiryModal();
});

/* ─── Render pipeline ─────────────────────────────────────── */
function applyAndRender() {
    filteredList = filterProducts(allProducts);
    filteredList = sortProducts(filteredList);
    renderCountLabel(filteredList.length);
    renderPage(currentPage = 1);
}

function filterProducts(list) {
    return list.filter(p => {
        const sizeOk   = activeFilters.sizes.length === 0 || p.sizes.some(s => activeFilters.sizes.includes(s));
        const colourOk = activeFilters.colours.length === 0 || p.colours.some(c => activeFilters.colours.includes(c));
        const priceOk  = p.price <= activeFilters.maxPrice;
        const fitOk    = !activeFilters.fit || p.fit === activeFilters.fit;
        return sizeOk && colourOk && priceOk && fitOk;
    });
}

function sortProducts(list) {
    const clone = [...list];
    switch (currentSort) {
        case 'price-asc':  return clone.sort((a, b) => a.price - b.price);
        case 'price-desc': return clone.sort((a, b) => b.price - a.price);
        case 'name-asc':   return clone.sort((a, b) => a.name.localeCompare(b.name));
        case 'newest':
        default:           return clone.sort((a, b) => b.id - a.id);
    }
}

function renderPage(page) {
    currentPage = page;
    const grid  = document.getElementById('productGrid');
    if (!grid) return;

    const start = (page - 1) * PER_PAGE;
    const slice = filteredList.slice(start, start + PER_PAGE);

    if (slice.length === 0) {
        grid.innerHTML = `
          <div class="no-results">
            <i class="fa-regular fa-face-sad-tear"></i>
            <p>No products match the selected filters.</p>
          </div>`;
        renderPagination(0, 0);
        return;
    }

    grid.innerHTML = slice.map(p => productCardHTML(p)).join('');
    renderPagination(Math.ceil(filteredList.length / PER_PAGE), page);

    /* attach card click → product details */
    grid.querySelectorAll('.pcard').forEach(card => {
        card.addEventListener('click', e => {
            if (e.target.closest('.pcard-wishlist')) return; // ignore wishlist click
            const base = card.dataset.href || 'productDetails.html';
            const id = card.dataset.productId;
            window.location.href = id ? `productDetails.html?id=${id}` : base;
        });
    });

    /* wishlist buttons */
    grid.querySelectorAll('.pcard-wishlist').forEach(btn => {
        const pid = btn.dataset.id;
        if (wishlist.has(pid)) btn.classList.add('active');
        btn.addEventListener('click', e => {
            e.stopPropagation();
            toggleWishlist(pid, btn);
        });
    });
}

function productCardHTML(p) {
    const inWish = wishlist.has(String(p.id));
    const swatches = (p.colourHex || []).map(hex =>
        `<span class="pcard-swatch" style="background:${hex}" title="${hex}"></span>`
    ).join('');
    return `
      <div class="pcard" data-href="${p.detailsUrl || 'productDetails.html'}" data-product-id="${p.id}">
        <div class="pcard-img-wrap">
          <span class="pcard-badge">Wholesale Only</span>
          <button class="pcard-wishlist ${inWish ? 'active' : ''}" data-id="${p.id}" aria-label="Wishlist">
            <i class="fa-${inWish ? 'solid' : 'regular'} fa-heart"></i>
          </button>
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="pcard-info">
          <div class="pcard-name">${p.name}</div>
          <div class="pcard-price">₹${p.price.toLocaleString('en-IN')}<span class="per"> / piece</span></div>
          <div class="pcard-sizes">Sizes: ${p.sizes.join(', ')}</div>
          <div class="pcard-colors">${swatches}</div>
        </div>
      </div>`;
}

function renderCountLabel(count) {
    const el = document.getElementById('productCount');
    if (el) el.innerHTML = `<strong>${count}</strong> Products`;
}

/* ─── Pagination ──────────────────────────────────────────── */
function renderPagination(totalPages, active) {
    const wrap = document.getElementById('pagination');
    if (!wrap) return;
    if (totalPages <= 1) { wrap.innerHTML = ''; return; }

    let html = `<button class="page-btn" id="prevPage" ${active <= 1 ? 'disabled' : ''}>
                  <i class="fa-solid fa-chevron-left" style="font-size:11px"></i>
                </button>`;

    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="page-btn ${i === active ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }

    html += `<button class="page-btn" id="nextPage" ${active >= totalPages ? 'disabled' : ''}>
               <i class="fa-solid fa-chevron-right" style="font-size:11px"></i>
             </button>`;

    wrap.innerHTML = html;

    wrap.querySelectorAll('[data-page]').forEach(btn => {
        btn.addEventListener('click', () => { renderPage(+btn.dataset.page); scrollToGrid(); });
    });

    const prev = document.getElementById('prevPage');
    const next = document.getElementById('nextPage');
    if (prev) prev.addEventListener('click', () => { renderPage(active - 1); scrollToGrid(); });
    if (next) next.addEventListener('click', () => { renderPage(active + 1); scrollToGrid(); });
}

function scrollToGrid() {
    const grid = document.getElementById('productGrid');
    if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ─── Wishlist ────────────────────────────────────────────── */
function toggleWishlist(id, btn) {
    id = String(id);
    if (wishlist.has(id)) {
        wishlist.delete(id);
        btn.classList.remove('active');
        btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
    } else {
        wishlist.add(id);
        btn.classList.add('active');
        btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
    }
    localStorage.setItem('dot_wishlist', JSON.stringify([...wishlist]));
}

/* ─── Filters (sidebar) ───────────────────────────────────── */
function initFilters() {
    /* Checkboxes — sizes */
    document.querySelectorAll('.filter-size').forEach(cb => {
        cb.addEventListener('change', () => {
            activeFilters.sizes = [...document.querySelectorAll('.filter-size:checked')].map(c => c.value);
            applyAndRender();
        });
    });

    /* Radio — fit/category */
    document.querySelectorAll('.filter-fit').forEach(rb => {
        rb.addEventListener('change', () => {
            activeFilters.fit = rb.value;
            applyAndRender();
        });
    });

    /* Colour checkboxes */
    document.querySelectorAll('.filter-colour').forEach(cb => {
        cb.addEventListener('change', () => {
            activeFilters.colours = [...document.querySelectorAll('.filter-colour:checked')].map(c => c.value);
            applyAndRender();
        });
    });

    /* Price range */
    const priceInput = document.getElementById('priceRange');
    const priceMax   = document.getElementById('priceMax');
    if (priceInput) {
        priceInput.addEventListener('input', () => {
            activeFilters.maxPrice = +priceInput.value;
            if (priceMax) priceMax.textContent = '₹' + (+priceInput.value).toLocaleString('en-IN');
            applyAndRender();
        });
    }

    /* Collapsible filter sections */
    document.querySelectorAll('.filter-title').forEach(title => {
        title.addEventListener('click', () => {
            const opts = title.nextElementSibling;
            if (!opts) return;
            opts.classList.toggle('collapsed');
            title.classList.toggle('collapsed');
            const icon = title.querySelector('.ti');
            if (icon) icon.textContent = opts.classList.contains('collapsed') ? '▶' : '▾';
        });
    });
}

/* ─── Sort (desktop select) ───────────────────────────────── */
function initSortSelect() {
    const sel = document.getElementById('sortSelect');
    if (sel) {
        sel.addEventListener('change', () => {
            currentSort = sel.value;
            applyAndRender();
        });
    }
}

/* ─── Mobile controls ─────────────────────────────────────── */
function initMobileControls() {
    /* Filter drawer */
    const filterBtn     = document.getElementById('filterBtn');
    const filterDrawer  = document.getElementById('filterDrawer');
    const filterOverlay = document.getElementById('filterDrawerOverlay');
    const filterClose   = document.getElementById('filterDrawerClose');

    function openFilterDrawer()  {
        filterDrawer?.classList.add('open');
        filterOverlay?.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function closeFilterDrawer() {
        filterDrawer?.classList.remove('open');
        filterOverlay?.classList.remove('open');
        document.body.style.overflow = '';
    }

    filterBtn?.addEventListener('click', openFilterDrawer);
    filterClose?.addEventListener('click', closeFilterDrawer);
    filterOverlay?.addEventListener('click', closeFilterDrawer);

    /* Sort drawer */
    const sortBtn     = document.getElementById('sortBtnMobile');
    const sortDrawer  = document.getElementById('sortDrawer');
    const sortOverlay = document.getElementById('sortDrawerOverlay');
    const sortClose   = document.getElementById('sortDrawerClose');

    function openSortDrawer()  {
        sortDrawer?.classList.add('open');
        sortOverlay?.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function closeSortDrawer() {
        sortDrawer?.classList.remove('open');
        sortOverlay?.classList.remove('open');
        document.body.style.overflow = '';
    }

    sortBtn?.addEventListener('click', openSortDrawer);
    sortClose?.addEventListener('click', closeSortDrawer);
    sortOverlay?.addEventListener('click', closeSortDrawer);

    document.querySelectorAll('.sort-option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.sort-option').forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            currentSort = opt.dataset.sort;
            const label = document.getElementById('sortLabelMobile');
            if (label) label.textContent = opt.textContent.trim();
            closeSortDrawer();
            applyAndRender();
        });
    });
}

/* ─── Hamburger (mobile nav) ──────────────────────────────── */
function initNavHamburger() {
    const ham    = document.getElementById('catHamburger');
    const mNav   = document.getElementById('catMobileNav');
    const mClose = document.getElementById('catMobileClose');

    ham?.addEventListener('click', () => {
        mNav?.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    mClose?.addEventListener('click', () => {
        mNav?.classList.remove('open');
        document.body.style.overflow = '';
    });
}

/* ─── Enquiry Modal ───────────────────────────────────────── */
function initEnquiryModal() {
    /* This is triggered by clicking the product card in wideleg-style pages.
       For category pages, clicking goes to productDetails.html instead. */
}

/* ─── Supabase loader (un-comment + configure to activate) ───
async function loadFromSupabase(category) {
    const { data, error } = await supabase
        .from('products')
        .select('*, product_colours(*), product_sizes(*)')
        .eq('category', category);

    if (error) { console.error(error); return; }

    allProducts = data.map(p => ({
        id:         p.id,
        name:       p.name,
        price:      p.price,
        image:      p.image_url,
        sizes:      p.product_sizes.map(s => s.size),
        colours:    p.product_colours.map(c => c.colour_name),
        colourHex:  p.product_colours.map(c => c.hex_code),
        fit:        p.fit || '',
        detailsUrl: 'productDetails.html?id=' + p.id,
    }));

    applyAndRender();
}
* ─────────────────────────────────────────────────────────────── */
