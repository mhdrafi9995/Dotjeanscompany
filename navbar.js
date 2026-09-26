const navbarCSS = `
/* ================================================================
   DOT JEANS CO. — SHARED NAVBAR CSS (From cartstyle.css)
   ================================================================ */
.ct-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background: transparent;
    transition: all 0.3s ease;
    width: 100%;
    border-bottom: 1px solid transparent;
}
.ct-header.scrolled {
    background: rgba(15, 29, 47, 0.7);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
}
.ct-header-inner {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    height: 64px;
}

/* --- Search UI --- */
.ct-search-wrap {
    position: relative;
    display: flex;
    align-items: center;
}
.ct-search-input {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 8px;
    padding: 8px 34px 8px 14px;
    color: #fff;
    font-size: 13px;
    width: 180px;
    outline: none;
    transition: all 0.2s;
    font-family: 'Inter', sans-serif;
}
.ct-search-input:focus, .ct-search-input.active {
    background: rgba(255,255,255,0.12);
    border-color: rgba(255,255,255,0.25);
    width: 240px;
}
.ct-search-icon {
    position: absolute;
    right: 12px;
    color: #fff;
    font-size: 13px;
    opacity: 0.7;
    cursor: pointer;
}
.ct-search-icon:hover { opacity: 1; }
.ct-search-results {
    position: absolute;
    top: 100%;
    right: 0;
    width: 340px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.15);
    margin-top: 12px;
    display: none;
    flex-direction: column;
    max-height: 400px;
    overflow-y: auto;
    z-index: 1001;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.2s ease;
}
.ct-search-results.show {
    display: flex;
    opacity: 1;
    transform: translateY(0);
}
.ct-search-item {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid #eee;
    text-decoration: none;
    color: #333;
    transition: background 0.2s;
}
.ct-search-item:last-child {
    border-bottom: none;
}
.ct-search-item:hover {
    background: #f9f9f9;
}
.ct-search-img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 6px;
    margin-right: 14px;
}
.ct-search-info {
    display: flex;
    flex-direction: column;
}
.ct-search-title {
    font-size: 14px;
    font-weight: 600;
    color: #111;
}
.ct-search-price {
    font-size: 13px;
    color: #666;
    margin-top: 4px;
}
.ct-search-empty {
    padding: 24px;
    text-align: center;
    color: #666;
    font-size: 14px;
}
.ct-search-group-title {
    padding: 12px 16px 4px;
    font-size: 11px;
    font-weight: 700;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 1px;
}
.ct-search-text-item {
    display: flex;
    align-items: center;
    padding: 10px 16px;
    text-decoration: none;
    color: #333;
    font-size: 13px;
    transition: background 0.2s;
}
.ct-search-text-item:hover {
    background: #f9f9f9;
}
.ct-search-text-item i {
    margin-right: 10px;
    color: #aaa;
    font-size: 12px;
}
@media (max-width: 768px) {
    .ct-search-input { width: 140px; }
    .ct-search-input:focus, .ct-search-input.active { width: 180px; }
    .ct-search-results {
        position: fixed;
        top: 70px;
        left: 16px;
        right: 16px;
        width: auto;
    }
}


/* Logo */
.ct-logo {
    display: flex;
    flex-direction: column;
    line-height: 1;
    text-decoration: none;
}
.ct-logo-dot {
    font-size: 22px;
    font-weight: 800;
    color: #fff;
    letter-spacing: 2px;
    font-family: 'Inter', sans-serif;
}
.ct-logo-dot sup { font-size: 9px; font-weight: 400; }
.ct-logo-sub {
    font-size: 8.5px;
    font-weight: 500;
    color: #9aabb8;
    letter-spacing: 3px;
    margin-top: 1px;
    font-family: 'Inter', sans-serif;
}

/* Nav */
.ct-nav ul {
    display: flex;
    gap: 34px;
    align-items: center;
    list-style: none;
    margin: 0; padding: 0;
}
.ct-nav a {
    color: #c8d2dc;
    font-size: 13.5px;
    font-weight: 500;
    transition: color 0.2s;
    letter-spacing: 0.3px;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
}
.ct-nav a:hover,
.ct-nav a.ct-nav-active { color: #fff; }

/* Dropdown */
.ct-nav-dropdown { position: relative; }
.ct-dropdown-menu {
    position: absolute;
    top: 100%;
    left: -10px;
    margin-top: 12px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    padding: 8px 0;
    min-width: 180px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-6px);
    transition: all 0.2s;
    z-index: 110;
}
.ct-nav-dropdown:hover .ct-dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}
.ct-dropdown-menu a {
    display: block;
    padding: 10px 20px;
    font-size: 13px;
    color: #0a1628;
    transition: background 0.15s;
    text-decoration: none;
}
.ct-dropdown-menu a:hover { background: #f4f5f7; }

/* Header Icons */
.ct-header-icons {
    display: flex;
    align-items: center;
    gap: 18px;
}
.ct-header-icons > a {
    color: #c8d2dc;
    font-size: 16px;
    transition: color 0.2s;
    text-decoration: none;
}
.ct-header-icons > a:hover { color: #fff; }

.ct-search-wrap {
    position: relative;
    display: flex;
    align-items: center;
}
.ct-search-input {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 8px;
    padding: 8px 34px 8px 14px;
    color: #fff;
    font-size: 13px;
    width: 180px;
    outline: none;
    transition: all 0.2s;
    font-family: 'Inter', sans-serif;
}
.ct-search-input::placeholder { color: #7a8b9d; }
.ct-search-input:focus {
    background: rgba(255,255,255,0.12);
    border-color: rgba(255,255,255,0.25);
    width: 220px;
}
.ct-search-icon {
    position: absolute;
    right: 10px;
    color: #7a8b9d;
    font-size: 13px;
    pointer-events: none;
}

/* Cart Link */
.ct-cart-link {
    position: relative;
}
.ct-cart-badge {
    position: absolute;
    top: -8px;
    right: -10px;
    background: #3b82f6;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
}

/* Hamburger */
.ct-hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    padding: 6px;
    cursor: pointer;
}
.ct-hamburger span {
    display: block;
    width: 22px;
    height: 2px;
    background: #fff;
    border-radius: 2px;
    transition: 0.3s;
}

/* Mobile Nav */
.ct-mobile-nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: #0f1d2f;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    padding: 70px 30px 30px;
    gap: 0;
    transition: right 0.35s cubic-bezier(0.4,0,0.2,1);
    box-shadow: -4px 0 30px rgba(0,0,0,0.2);
}
.ct-mobile-nav.open { right: 0; }
.ct-mobile-nav a {
    color: #c8d2dc;
    font-size: 16px;
    font-weight: 500;
    padding: 16px 0;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    transition: color 0.2s;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
}
.ct-mobile-nav a:hover { color: #fff; }
.ct-mobile-nav-close {
    position: absolute;
    top: 18px;
    right: 20px;
    background: none;
    border: none;
    color: #fff;
    font-size: 30px;
    line-height: 1;
    cursor: pointer;
}

/* Responsive */
@media (max-width: 1100px) {
    .ct-header-inner { padding: 0 20px; }
}
@media (max-width: 768px) {
    .ct-nav { display: none; }
    .ct-hamburger { display: flex; }
    .ct-search-wrap { display: none; }
    .ct-header-inner { height: 56px; padding: 0 16px; }
}
`;

const navbarHTML = `
<header class="ct-header" id="ct-header">
    <div class="ct-header-inner">
        <a href="index.html" class="ct-logo">
            <span class="ct-logo-dot">DOT<sup>®</sup></span>
            <span class="ct-logo-sub">JEANS CO.</span>
        </a>
        <nav class="ct-nav" id="ct-nav">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#">Products</a></li>
                <li class="ct-nav-dropdown">
                    <a href="#">Categories <i class="fa-solid fa-chevron-down" style="font-size:10px;margin-left:4px"></i></a>
                    <div class="ct-dropdown-menu">
                        <a href="category-jeans.html">Jeans</a>
                        <a href="category-linen.html">Linen Pants</a>
                        <a href="category-cargo.html">Cargo Pants</a>
                        <a href="category-shorts.html">Shorts</a>
                        <a href="category-kids.html">Kids Wear</a>
                    </div>
                </li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <div class="ct-header-icons">
            <div class="ct-search-wrap" id="ctSearchWrap">
                <input type="text" placeholder="Search products..." class="ct-search-input" id="ctSearchInput" autocomplete="off">
                <i class="fa-solid fa-magnifying-glass ct-search-icon" id="ctSearchIcon"></i>
                <div class="ct-search-results" id="ctSearchResults"></div>
            </div>
            <a href="javascript:void(0)" aria-label="Account" id="navAccountBtn"><i class="fa-regular fa-user"></i></a>
            <a href="cart.html" class="ct-cart-link" aria-label="Cart" id="cartIconLink">
                <i class="fa-solid fa-cart-shopping"></i>
                <span class="ct-cart-badge" id="cartBadge">0</span>
            </a>
        </div>
        <button class="ct-hamburger" id="ct-hamburger" aria-label="Toggle menu">
            <span></span><span></span><span></span>
        </button>
    </div>
</header>

<div class="ct-mobile-nav" id="ctMobileNav">
    <button class="ct-mobile-nav-close" id="ctMobileNavClose">&times;</button>
    <a href="index.html">Home</a>
    <a href="#">Products</a>
    <a href="about.html">About</a>
    <a href="#">Gallery</a>
    <a href="#">Contact</a>
</div>
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = navbarCSS;
document.head.appendChild(style);

// Inject Auth Modal script
const authScript = document.createElement('script');
authScript.src = 'auth-modal.js';
document.head.appendChild(authScript);

class DotNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = navbarHTML;

        // Setup mobile menu
        setTimeout(() => {
            const hamburger = this.querySelector('#ct-hamburger');
            const mobileNav = this.querySelector('#ctMobileNav');
            const closeBtn = this.querySelector('#ctMobileNavClose');

            if (hamburger && mobileNav) {
                hamburger.addEventListener('click', () => {
                    mobileNav.classList.add('open');
                    document.body.style.overflow = 'hidden';
                });
            }
            if (closeBtn && mobileNav) {
                closeBtn.addEventListener('click', () => {
                    mobileNav.classList.remove('open');
                    document.body.style.overflow = '';
                });
            }

            // Update badge from localStorage
            const cartBadge = this.querySelector('#cartBadge');
            if (cartBadge) {
                const stored = localStorage.getItem('dot_cart');
                if (stored) {
                    try {
                        const cartData = JSON.parse(stored);
                        let count = 0;
                        if (Array.isArray(cartData)) {
                            count = cartData.reduce((sum, item) => sum + (item.packs || 1), 0);
                        }
                        cartBadge.textContent = count;
                        cartBadge.style.display = count > 0 ? 'flex' : 'none';
                    } catch (e) { }
                } else {
                    cartBadge.style.display = 'none';
                }
            }
            
            // Update profile icon if logged in
            const navAccountBtn = this.querySelector('#navAccountBtn');
            if (navAccountBtn) {
                const userStored = localStorage.getItem('dot_user');
                if (userStored) {
                    try {
                        const userObj = JSON.parse(userStored);
                        if (userObj && userObj.name) {
                            const avatarUrl = userObj.avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(userObj.name) + '&background=0f1d2f&color=fff';
                            navAccountBtn.innerHTML = `<img src="${avatarUrl}" alt="Profile" style="width:24px; height:24px; border-radius:50%; object-fit:cover; display:block;">`;
                        }
                    } catch (e) {}
                }
            }

            // Header scroll effect and hero detection
            const header = this.querySelector('#ct-header');
            const isHeroPage = document.querySelector('.full-hero') || document.querySelector('.cat-hero') || document.querySelector('.about-hero');
            
            if (!isHeroPage) {
                // Add spacer so content doesn't hide under fixed header
                const spacer = document.createElement('div');
                spacer.style.height = '64px';
                this.insertBefore(spacer, header);
                header.style.background = '#0f1d2f'; // Solid dark for readability
            }

            window.addEventListener('scroll', () => {
                if (header) {
                    if (window.scrollY > 20) {
                        header.classList.add('scrolled');
                        header.style.background = ''; // Let CSS class handle the glassmorphism
                    } else {
                        header.classList.remove('scrolled');
                        if (!isHeroPage) {
                            header.style.background = '#0f1d2f';
                        } else {
                            header.style.background = 'transparent';
                        }
                    }
                }
            });

            // --- SEARCH SYSTEM ---
            const searchInput = this.querySelector('#ctSearchInput');
            const searchIcon = this.querySelector('#ctSearchIcon');
            const searchResults = this.querySelector('#ctSearchResults');
            const searchWrap = this.querySelector('#ctSearchWrap');

            window.DOT_DATA = {
                products: [
                    { id: 501, name: 'Wide Leg Jeans – Blue', price: 1499, oldPrice: 1999, image: 'asses/wideleg.jpg', link: 'productDetails.html', keywords: 'jeans wide leg baggy blue', category: 'Jeans', brand: 'Cross Country', fit: 'Wide Leg', sizes: ['28','30','32','34','36'], colours: ['Blue'], isLycra: false },
                    { id: 502, name: 'Wide Leg Jeans – Black', price: 1549, oldPrice: 1999, image: 'asses/wideleg.jpg', link: 'productDetails.html', keywords: 'jeans wide leg baggy black', category: 'Jeans', brand: 'Cross Country', fit: 'Wide Leg', sizes: ['30','32','34','36'], colours: ['Black'], isLycra: false },
                    { id: 509, name: 'Straight Fit Jeans – Blue', price: 1299, oldPrice: 1699, image: 'asses/wideleg.jpg', link: 'productDetails.html', keywords: 'jeans straight fit blue', category: 'Jeans', brand: 'Armani', fit: 'Straight', sizes: ['28','30','32','34','36'], colours: ['Blue'], isLycra: true },
                    { id: 508, name: 'Baggy Jeans – Black', price: 1699, oldPrice: 2199, image: 'asses/wideleg.jpg', link: 'productDetails.html', keywords: 'jeans baggy black', category: 'Jeans', brand: 'Cross Country', fit: 'Baggy', sizes: ['30','32','34','36','38'], colours: ['Black'], isLycra: false },
                    { id: 201, name: 'Linen Pant – Beige', price: 1299, oldPrice: 1899, image: 'asses/linen.jpg', link: 'linen-product-details.html', keywords: 'linen pant pants beige casual', category: 'Linen Pants', brand: 'Cross Country', fit: 'Regular', sizes: ['28','30','32','34','36'], colours: ['Beige'], isLycra: false },
                    { id: 203, name: 'Linen Pant – Olive', price: 1349, oldPrice: 1899, image: 'asses/linen.jpg', link: 'linen-product-details.html', keywords: 'linen pant pants olive green', category: 'Linen Pants', brand: 'Armani', fit: 'Relaxed', sizes: ['30','32','34','36','38'], colours: ['Olive'], isLycra: false },
                    { id: 206, name: 'Linen Pant – Black', price: 1399, oldPrice: 1899, image: 'asses/linen.jpg', link: 'linen-product-details.html', keywords: 'linen pant pants black', category: 'Linen Pants', brand: 'Cross Country', fit: 'Regular', sizes: ['30','32','34','36','38'], colours: ['Black'], isLycra: false },
                    { id: 401, name: 'Classic Shorts – Black', price: 899, oldPrice: 1299, image: 'asses/shorts.jpg', link: 'productDetails.html', keywords: 'shorts classic black cotton', category: 'Shorts', brand: 'Armani', fit: 'Cotton', sizes: ['28','30','32','34','36'], colours: ['Black'], isLycra: false },
                    { id: 404, name: 'Cargo Shorts – Olive', price: 1099, oldPrice: 1499, image: 'asses/shorts.jpg', link: 'productDetails.html', keywords: 'shorts cargo olive green', category: 'Shorts', brand: 'Cross Country', fit: 'Cargo', sizes: ['30','32','34','36'], colours: ['Olive'], isLycra: false },
                    { id: 407, name: 'Denim Shorts – Blue', price: 1149, oldPrice: 1599, image: 'asses/shorts.jpg', link: 'productDetails.html', keywords: 'shorts denim blue', category: 'Shorts', brand: 'Cross Country', fit: 'Denim', sizes: ['30','32','34','36'], colours: ['Blue'], isLycra: false },
                    { id: 301, name: 'Cargo Pants – Olive', price: 1699, oldPrice: 2299, image: 'asses/cargo.jpg', link: 'productDetails.html', keywords: 'cargo pants olive green', category: 'Cargo Pants', brand: 'Cross Country', fit: 'Cargo', sizes: ['30','32','34','36','38'], colours: ['Olive'], isLycra: false },
                    { id: 302, name: 'Cargo Pants – Black', price: 1599, oldPrice: 2199, image: 'asses/cargo.jpg', link: 'productDetails.html', keywords: 'cargo pants black', category: 'Cargo Pants', brand: 'Armani', fit: 'Cargo', sizes: ['30','32','34','36'], colours: ['Black'], isLycra: false },
                ],
                categories: [
                    { name: 'Jeans', link: 'category-jeans.html' },
                    { name: 'Linen Pants', link: 'category-linen.html' },
                    { name: 'Cargo Pants', link: 'category-cargo.html' },
                    { name: 'Shorts', link: 'category-shorts.html' },
                    { name: 'Kids Wear', link: 'category-kids.html' }
                ],
                brands: [
                    { name: 'Cross Country', link: 'search.html?brand=Cross+Country' },
                    { name: 'Armani', link: 'search.html?brand=Armani' }
                ],
                popularSearches: [
                    'Wide Leg Jeans',
                    'Men\'s Wide Leg Jeans',
                    'Linen Pants',
                    'Cargo Pants'
                ]
            };

            function closeSearch() {
                searchResults.classList.remove('show');
                searchInput.classList.remove('active');
                setTimeout(() => { searchResults.style.display = 'none'; }, 200);
            }

            function openSearch() {
                searchResults.style.display = 'flex';
                setTimeout(() => { searchResults.classList.add('show'); searchInput.classList.add('active'); }, 10);
                renderSearch(searchInput.value);
            }

            function renderSearch(query) {
                query = query.toLowerCase().trim();
                let html = '';
                
                if (!query) {
                    html += '<div class="ct-search-group-title">Popular Searches</div>';
                    window.DOT_DATA.popularSearches.forEach(s => {
                        html += `<a href="search.html?q=${encodeURIComponent(s)}" class="ct-search-text-item"><i class="fa-solid fa-magnifying-glass"></i> ${s}</a>`;
                    });
                    searchResults.innerHTML = html;
                    return;
                }

                const catMatch = window.DOT_DATA.categories.filter(c => c.name.toLowerCase().includes(query));
                const brandMatch = window.DOT_DATA.brands.filter(b => b.name.toLowerCase().includes(query));
                
                // Advanced product matching
                const prodMatch = window.DOT_DATA.products.filter(p => {
                    const sizeStr = p.sizes ? p.sizes.map(s => 'size ' + s).join(' ') : '';
                    const lycraStr = p.isLycra ? 'lycra stretch' : 'non-lycra non lycra rigid';
                    const matchText = (p.name + ' ' + p.keywords + ' ' + p.brand + ' ' + p.category + ' ' + p.colours.join(' ') + ' ' + sizeStr + ' ' + lycraStr).toLowerCase();
                    const words = query.split(/\s+/);
                    return words.every(w => matchText.includes(w));
                }).slice(0, 5); // max 5 products in autocomplete

                if (catMatch.length === 0 && brandMatch.length === 0 && prodMatch.length === 0) {
                    searchResults.innerHTML = '<div class="ct-search-empty">No products found for "' + query + '"</div>';
                    return;
                }

                if (catMatch.length > 0) {
                    html += '<div class="ct-search-group-title">Categories</div>';
                    catMatch.forEach(c => html += `<a href="${c.link}" class="ct-search-text-item"><i class="fa-regular fa-folder"></i> ${c.name}</a>`);
                }
                
                if (brandMatch.length > 0) {
                    html += '<div class="ct-search-group-title">Brands</div>';
                    brandMatch.forEach(b => html += `<a href="${b.link}" class="ct-search-text-item"><i class="fa-solid fa-tag"></i> ${b.name}</a>`);
                }
                
                if (prodMatch.length > 0) {
                    html += '<div class="ct-search-group-title">Products</div>';
                    prodMatch.forEach(p => {
                        html += `
                        <a href="${p.link}" class="ct-search-item">
                            <img src="${p.image}" alt="${p.name}" class="ct-search-img" onerror="this.src='asses/wideleg.jpg'">
                            <div class="ct-search-info">
                                <span class="ct-search-title">${p.name}</span>
                                <span class="ct-search-price">₹${p.price.toLocaleString('en-IN')}</span>
                            </div>
                        </a>`;
                    });
                }
                
                searchResults.innerHTML = html;
            }

            if (searchIcon && searchInput) {
                searchIcon.addEventListener('click', () => {
                    const val = searchInput.value.trim();
                    if (val) {
                        window.location.href = 'search.html?q=' + encodeURIComponent(val);
                    } else {
                        if (searchResults.classList.contains('show')) closeSearch();
                        else { openSearch(); searchInput.focus(); }
                    }
                });
                
                searchInput.addEventListener('focus', openSearch);
                searchInput.addEventListener('input', (e) => renderSearch(e.target.value));
                
                searchInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        const val = searchInput.value.trim();
                        if (val) {
                            window.location.href = 'search.html?q=' + encodeURIComponent(val);
                        }
                    }
                });
                
                document.addEventListener('click', (e) => {
                    if (!searchWrap.contains(e.target)) closeSearch();
                });
                
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') closeSearch();
                });
            }

        }, 0);
    }
}
customElements.define('dot-navbar', DotNavbar);
