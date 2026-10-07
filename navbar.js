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
    position: relative;
    padding-bottom: 4px;
}
.ct-nav a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: width 0.3s ease;
}
.ct-nav a:hover::after,
.ct-nav a.ct-nav-active::after {
    width: 100%;
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
    background: #f97316;
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

/* Profile Dropdown */
.ct-profile-dropdown {
    position: relative;
    display: flex;
    align-items: center;
}
.ct-profile-menu {
    position: absolute;
    top: 100%;
    right: -10px;
    width: 260px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.12);
    margin-top: 20px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1002;
    overflow: visible;
    color: #111;
    border: 1px solid rgba(0,0,0,0.05);
}
.ct-profile-menu.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}
.ct-profile-menu::before {
    content: '';
    position: absolute;
    top: -6px;
    right: 24px;
    width: 12px;
    height: 12px;
    background: #fff;
    transform: rotate(45deg);
    border-top: 1px solid rgba(0,0,0,0.05);
    border-left: 1px solid rgba(0,0,0,0.05);
    z-index: -1;
}
.ct-profile-header {
    padding: 20px 20px 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    background: #fff;
    border-radius: 12px 12px 0 0;
}
.ct-profile-img-wrap-small {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 16px;
    background: #e2e8f0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #475569;
    font-size: 20px;
}
.ct-profile-img-wrap-small img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.ct-profile-info {
    display: flex;
    flex-direction: column;
}
.ct-profile-shop {
    font-size: 15px;
    font-weight: 600;
    color: #111;
    font-family: 'Inter', sans-serif;
}
.ct-profile-name {
    font-size: 13px;
    color: #666;
    font-family: 'Inter', sans-serif;
    margin-top: 2px;
}
.ct-profile-links {
    display: flex;
    flex-direction: column;
    padding: 8px 0;
}
.ct-plink {
    display: flex;
    align-items: center;
    padding: 14px 20px;
    color: #333;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    transition: background 0.2s;
}
.ct-plink:hover, .ct-plink:focus {
    background: #f4f5f7;
}
.ct-plink i:first-child {
    font-size: 16px;
    margin-right: 16px;
    color: #111;
    width: 20px;
    text-align: center;
}
.ct-plink-arrow {
    margin-left: auto;
    font-size: 12px !important;
    color: #999 !important;
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
.ct-mobile-nav a:hover,
.ct-mobile-nav a.ct-nav-active { color: #fff; }
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
@media (max-width: 1200px) {
    .ct-nav ul { gap: 24px; }
}
@media (max-width: 1100px) {
    .ct-header-inner { padding: 0 20px; }
}
@media (max-width: 768px) {
    .ct-nav { display: none; }
    .ct-hamburger { display: flex; }
    .ct-search-wrap { display: none; }
    .ct-header-inner { height: 56px; padding: 0 16px; }
}

/* Customer Support Floating Chat Widget */
.ct-whatsapp-widget {
    position: fixed;
    bottom: 32px;
    right: 32px;
    z-index: 9999;
    display: flex;
    align-items: center;
    gap: 14px;
    pointer-events: none;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
.ct-whatsapp-widget > * {
    pointer-events: auto;
}

/* Support Chat Popup Card */
.ct-support-popup {
    position: relative;
    display: inline-flex;
    align-items: stretch;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 16px 36px -4px rgba(15, 29, 47, 0.16), 0 6px 16px -2px rgba(15, 29, 47, 0.08);
    border: 1px solid rgba(15, 29, 47, 0.08);
    text-decoration: none;
    color: #0f1d2f;
    opacity: 0;
    transform: translateX(18px) scale(0.92);
    animation: supportPopupSlideIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, opacity 0.3s ease;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
}
.ct-support-popup:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 42px -4px rgba(15, 29, 47, 0.2), 0 8px 20px -2px rgba(15, 29, 47, 0.1);
    color: #0f1d2f;
}
.ct-support-popup-body {
    padding: 12px 18px 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-width: 250px;
}
.ct-support-popup-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
}
.ct-support-live-indicator {
    display: inline-flex;
    align-items: center;
    gap: 7px;
}
.ct-support-pulse-dot {
    width: 8px;
    height: 8px;
    background-color: #10b981;
    border-radius: 50%;
    display: inline-block;
    box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.25);
    animation: supportPulse 2s infinite;
    flex-shrink: 0;
}
@keyframes supportPulse {
    0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6); }
    70% { box-shadow: 0 0 0 7px rgba(16, 185, 129, 0); }
    100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}
.ct-support-title {
    font-size: 13.5px;
    font-weight: 700;
    color: #0f1d2f;
    letter-spacing: -0.1px;
    line-height: 1.2;
}
.ct-support-popup-msg {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    color: #64748b;
    line-height: 1.35;
    white-space: normal;
}
.ct-support-close-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: transparent;
    border: none;
    border-radius: 50%;
    color: #94a3b8;
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
    padding: 0;
    transition: background 0.2s, color 0.2s;
    margin-right: -4px;
}
.ct-support-close-btn:hover {
    background: rgba(15, 29, 47, 0.08);
    color: #0f1d2f;
}
.ct-support-popup-tail {
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    width: 12px;
    height: 12px;
    background: #ffffff;
    border-right: 1px solid rgba(15, 29, 47, 0.08);
    border-top: 1px solid rgba(15, 29, 47, 0.08);
    pointer-events: none;
}
.ct-support-popup.ct-popup-dismissed {
    opacity: 0 !important;
    transform: translateX(12px) scale(0.9) !important;
    pointer-events: none !important;
}
@keyframes supportPopupSlideIn {
    0% {
        opacity: 0;
        transform: translateX(20px) scale(0.92);
    }
    100% {
        opacity: 1;
        transform: translateX(0) scale(1);
    }
}

/* Professional Customer Support Representative Avatar Button */
.ct-support-avatar-btn {
    position: relative;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%);
    box-shadow: 0 10px 28px rgba(15, 29, 47, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);
    border: 2.5px solid #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    flex-shrink: 0;
    cursor: pointer;
    overflow: visible;
    animation: supportAvatarEntry 0.75s cubic-bezier(0.34, 1.35, 0.64, 1) 0.2s both;
    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
}
.ct-support-avatar-btn:hover {
    transform: scale(1.06) translateY(-2px);
    box-shadow: 0 16px 36px rgba(15, 29, 47, 0.24), 0 0 0 3px rgba(37, 99, 235, 0.25);
}
.ct-support-avatar-btn:active {
    transform: scale(0.96);
}

/* Support Male Avatar Vector & Idle Animation */
.ct-support-vector {
    width: 52px;
    height: 52px;
    display: block;
    pointer-events: none;
    animation: supportAvatarIdle 4s ease-in-out infinite 0.95s;
    transform-origin: center bottom;
}

/* Online Indicator Dot */
.ct-support-online-dot {
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 14px;
    height: 14px;
    background-color: #10b981;
    border: 2.5px solid #ffffff;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(16, 185, 129, 0.4);
}

/* Animations: Entry Fade-in + Slide-up + Bounce */
@keyframes supportAvatarEntry {
    0% {
        opacity: 0;
        transform: translateY(32px) scale(0.75);
    }
    60% {
        opacity: 1;
        transform: translateY(-5px) scale(1.05);
    }
    80% {
        transform: translateY(2px) scale(0.98);
    }
    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

/* Animations: Subtle Idle Floating / Breathing */
@keyframes supportAvatarIdle {
    0%, 100% {
        transform: translateY(0) scale(1);
    }
    50% {
        transform: translateY(-3.5px) scale(1.015);
    }
}

@media (max-width: 768px) {
    .ct-whatsapp-widget {
        bottom: 20px;
        right: 18px;
        gap: 10px;
    }
    .ct-support-avatar-btn {
        width: 54px;
        height: 54px;
    }
    .ct-support-vector {
        width: 44px;
        height: 44px;
    }
    .ct-support-online-dot {
        width: 12px;
        height: 12px;
        bottom: 1px;
        right: 1px;
        border-width: 2px;
    }
    .ct-support-popup-body {
        padding: 10px 14px 10px 12px;
        max-width: 210px;
    }
    .ct-support-title {
        font-size: 12.5px;
    }
    .ct-support-popup-msg {
        font-size: 11px;
    }
}

@media (max-width: 420px) {
    .ct-whatsapp-widget {
        bottom: 16px;
        right: 14px;
        gap: 8px;
    }
    .ct-support-popup-body {
        max-width: 180px;
        padding: 8px 12px 8px 10px;
    }
    .ct-support-title {
        font-size: 12px;
    }
    .ct-support-popup-msg {
        font-size: 10.5px;
    }
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
                <li><a href="profile.html">Profile</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <div class="ct-header-icons">
            <div class="ct-search-wrap" id="ctSearchWrap">
                <input type="text" placeholder="Search products..." class="ct-search-input" id="ctSearchInput" autocomplete="off">
                <i class="fa-solid fa-magnifying-glass ct-search-icon" id="ctSearchIcon"></i>
                <div class="ct-search-results" id="ctSearchResults"></div>
            </div>
            <div class="ct-profile-dropdown" id="navAccountWrap">
                <a href="javascript:void(0)" aria-label="Account" id="navAccountBtn"><i class="fa-regular fa-user"></i></a>
                <i class="fa-solid fa-chevron-down" style="font-size:10px; margin-left:6px; color:#c8d2dc; cursor:pointer;" id="navAccountChevron"></i>
                <div class="ct-profile-menu" id="navProfileMenu">
                    <div class="ct-profile-header">
                        <div class="ct-profile-img-wrap-small">
                            <img src="https://ui-avatars.com/api/?name=User&background=e2e8f0&color=475569" alt="Profile" id="ctProfileImage">
                        </div>
                        <div class="ct-profile-info">
                            <div class="ct-profile-shop" id="ctDisplayShopName">My Shop</div>
                            <div class="ct-profile-name" id="ctDisplayName">John Doe</div>
                        </div>
                    </div>
                    <div class="ct-profile-links">
                        <a href="profile.html" class="ct-plink">
                            <i class="fa-regular fa-user"></i>
                            <span>Profile</span>
                            <i class="fa-solid fa-chevron-right ct-plink-arrow"></i>
                        </a>
                        <a href="profile.html" class="ct-plink">
                            <i class="fa-solid fa-gear"></i>
                            <span>Account</span>
                            <i class="fa-solid fa-chevron-right ct-plink-arrow"></i>
                        </a>
                        <a href="javascript:void(0)" class="ct-plink" onclick="if(window.supabase) supabase.auth.signOut(); localStorage.removeItem('dot_user'); window.location.href='index.html';">
                            <i class="fa-solid fa-arrow-right-from-bracket"></i>
                            <span>Logout</span>
                            <i class="fa-solid fa-chevron-right ct-plink-arrow"></i>
                        </a>
                    </div>
                </div>
            </div>
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
    <a href="profile.html">Profile</a>
    <a href="#">Gallery</a>
    <a href="#">Contact</a>
</div>

<div class="ct-whatsapp-widget" id="ctWhatsAppWidget">
    <a href="https://wa.me/919747710360?text=Hello%20DOT%20Jeans%20Co.%2C%20I%20have%20an%20enquiry" class="ct-support-popup" id="ctWhatsAppPopup" target="_blank" rel="noopener noreferrer" aria-label="Chat With Us on WhatsApp">
        <div class="ct-support-popup-body">
            <div class="ct-support-popup-header">
                <span class="ct-support-live-indicator">
                    <span class="ct-support-pulse-dot"></span>
                    <strong class="ct-support-title">Chat With Us</strong>
                </span>
                <button type="button" class="ct-support-close-btn" id="ctWhatsAppClose" aria-label="Close chat prompt" onclick="event.preventDefault(); event.stopPropagation(); document.getElementById('ctWhatsAppPopup').classList.add('ct-popup-dismissed');">&times;</button>
            </div>
            <p class="ct-support-popup-msg">Need help? We're here to assist you.</p>
        </div>
        <div class="ct-support-popup-tail"></div>
    </a>
    <a href="https://wa.me/919747710360?text=Hello%20DOT%20Jeans%20Co.%2C%20I%20have%20an%20enquiry" class="ct-support-avatar-btn" id="ctWhatsAppBtn" target="_blank" rel="noopener noreferrer" aria-label="Chat With Customer Support">
        <svg class="ct-support-vector" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <!-- Broad Male Shoulders / Blazer -->
            <path d="M12 64C12 50 19 44 26 43L38 43C45 44 52 50 52 64Z" fill="#0F1D2F"/>
            <!-- Suit Lapels -->
            <path d="M22 43L28 56L25 64L17 52Z" fill="#1E293B"/>
            <path d="M42 43L36 56L39 64L47 52Z" fill="#1E293B"/>
            <!-- Crisp White Shirt -->
            <path d="M26 43L32 54L38 43Z" fill="#FFFFFF"/>
            <!-- Collar Points -->
            <path d="M25 43L30 48L32 43Z" fill="#E2E8F0"/>
            <path d="M39 43L34 48L32 43Z" fill="#E2E8F0"/>
            <!-- Necktie -->
            <path d="M30.5 47H33.5L34 58L32 61L30 58Z" fill="#2563EB"/>
            <path d="M30.2 45.5H33.8L33.2 48H30.8Z" fill="#1D4ED8"/>
            <!-- Sturdy Neck -->
            <path d="M28 36H36V44H28Z" fill="#F0C69E"/>
            <path d="M28 36H36V39C36 40.5 34 42 32 42C30 42 28 40.5 28 39Z" fill="#E2B488"/>
            <!-- Ears -->
            <circle cx="21" cy="27" r="3.2" fill="#FDDCB8"/>
            <circle cx="43" cy="27" r="3.2" fill="#FDDCB8"/>
            <circle cx="21" cy="27" r="1.5" fill="#E2B488"/>
            <circle cx="43" cy="27" r="1.5" fill="#E2B488"/>
            <!-- Head & Strong Male Jawline -->
            <path d="M22 25C22 18 26.5 15 32 15C37.5 15 42 18 42 25C42 32 37.5 38.5 32 38.5C26.5 38.5 22 32 22 25Z" fill="#FDDCB8"/>
            <!-- Short Male Haircut (Clean taper, side part, short back and sides) -->
            <path d="M19.5 23C19 17 24 11.5 32 11.5C39.5 11.5 44 15.5 44.5 21C42 18.5 38 17.5 33.5 18C29 18.5 25 20.5 20 23.5L19.5 23Z" fill="#1E293B"/>
            <path d="M20 22.5V26L22.5 25V22Z" fill="#1E293B"/>
            <path d="M44 22V26L41.5 25V21Z" fill="#1E293B"/>
            <path d="M22 18.5C24.5 14.5 28.5 12.5 34 13C38.5 13.5 42 15.5 43.5 19C40.5 16.5 36.5 16 32 16.5C27.5 17 24 18 22 18.5Z" fill="#0F172A"/>
            <!-- Strong Male Eyebrows -->
            <path d="M24.5 23C26.5 22 29 22 30.5 23" stroke="#0F172A" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M33.5 23C35 22 37.5 22 39.5 23" stroke="#0F172A" stroke-width="1.8" stroke-linecap="round"/>
            <!-- Eyes (Alert, Confident Male Eyes) -->
            <circle cx="27.5" cy="27" r="1.8" fill="#0F172A"/>
            <circle cx="36.5" cy="27" r="1.8" fill="#0F172A"/>
            <circle cx="28" cy="26.6" r="0.6" fill="#FFFFFF"/>
            <circle cx="37" cy="26.6" r="0.6" fill="#FFFFFF"/>
            <!-- Male Nose -->
            <path d="M32 26.5V30H33.5" stroke="#D99B6A" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Friendly Confident Smile (Natural mouth tone, clean masculine look) -->
            <path d="M29 33.5C30.5 35 33.5 35 35 33.5" stroke="#8A4B38" stroke-width="1.6" stroke-linecap="round"/>
            <!-- Customer Support Headset -->
            <path d="M19 26C19 16.5 24 10 32 10C40 10 45 16.5 45 26" stroke="#64748B" stroke-width="2.2" stroke-linecap="round"/>
            <rect x="17" y="23.5" width="4" height="7" rx="2" fill="#334155"/>
            <rect x="43" y="23.5" width="4" height="7" rx="2" fill="#334155"/>
            <!-- Mic Boom & Microphone with Active Indicator -->
            <path d="M19 28C19 33.5 22.5 36.5 27 36" stroke="#475569" stroke-width="1.6" stroke-linecap="round"/>
            <rect x="27" y="34.8" width="3.8" height="2.4" rx="1.2" fill="#0F172A"/>
            <circle cx="28.8" cy="36" r="0.8" fill="#10B981"/>
        </svg>
        <span class="ct-support-online-dot"></span>
    </a>
</div>
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = navbarCSS;
document.head.appendChild(style);

// Inject Supabase CDN & Config (if not already loaded by the page)
(function initSupabaseAuthFlow() {
    function injectAuthModal() {
        if (!document.querySelector('script[src*="auth-modal.js"]')) {
            const authScript = document.createElement('script');
            authScript.src = 'auth-modal.js';
            document.head.appendChild(authScript);
        }
    }

    function injectConfig() {
        if (window.supabase && window.supabase.auth) {
            injectAuthModal();
            return;
        }
        if (!document.querySelector('script[src*="supabase-config.js"]')) {
            const supabaseConfig = document.createElement('script');
            supabaseConfig.src = 'supabase-config.js';
            supabaseConfig.onload = injectAuthModal;
            document.head.appendChild(supabaseConfig);
        } else {
            const timer = setInterval(() => {
                if (window.supabase && window.supabase.auth) {
                    clearInterval(timer);
                    injectAuthModal();
                }
            }, 50);
        }
    }

    // 1. If Supabase client is already initialized
    if (window.supabase && window.supabase.auth) {
        injectAuthModal();
        return;
    }

    // 2. If Supabase CDN is not yet loaded
    if (!window.supabase) {
        if (!document.querySelector('script[src*="supabase-js"]')) {
            const supabaseCdn = document.createElement('script');
            supabaseCdn.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
            supabaseCdn.onload = injectConfig;
            document.head.appendChild(supabaseCdn);
        } else {
            const timer = setInterval(() => {
                if (window.supabase) {
                    clearInterval(timer);
                    injectConfig();
                }
            }, 50);
        }
    } else {
        // CDN is loaded, but client is not initialized yet
        injectConfig();
    }
})();


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
            
            // Update profile icon if logged in (real Supabase session)
            const navAccountBtn = this.querySelector('#navAccountBtn');
            if (navAccountBtn) {
                // Use async IIFE so we don't block the rest of navbar setup
                (async () => {
                    try {
                        let retries = 0;
                        while ((typeof supabase === 'undefined' || !supabase.auth) && retries < 50) {
                            await new Promise(r => setTimeout(r, 100));
                            retries++;
                        }
                        if (typeof supabase === 'undefined' || !supabase.auth) return;

                        const { data: { session } } = await supabase.auth.getSession();
                        if (session) {
                            const { data: profile } = await supabase
                                .from('profiles')
                                .select('full_name')
                                .eq('id', session.user.id)
                                .single();
                            const displayName = profile?.full_name || session.user.phone || 'User';
                            const avatarUrl = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(displayName) + '&background=0f1d2f&color=fff';
                            navAccountBtn.innerHTML = `<img src="${avatarUrl}" alt="Profile" style="width:24px; height:24px; border-radius:50%; object-fit:cover; display:block;">`;
                        }
                    } catch (e) {
                        // supabase may not be available on non-product pages; silently ignore
                    }
                })();
            }

            // Set active nav link based on current URL
            const currentPath = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = this.querySelectorAll('.ct-nav a, .ct-mobile-nav a');
            navLinks.forEach(link => {
                const linkPath = link.getAttribute('href');
                if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
                    link.classList.add('ct-nav-active');
                } else {
                    link.classList.remove('ct-nav-active');
                }
            });

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
                    { id: 501, name: 'Wide Leg Jeans – Blue', price: 1499, oldPrice: 1999, image: 'asses/wideleg.jpg', link: 'productDetails.html', keywords: 'jeans wide leg baggy blue', category: 'Jeans', brand: 'Cross Country', fit: 'Wide Leg', sizes: ['28','30','32','34','36'], colours: ['Blue'], isLycra: false, stock: 50 },
                    { id: 502, name: 'Wide Leg Jeans – Black', price: 1549, oldPrice: 1999, image: 'asses/wideleg.jpg', link: 'productDetails.html', keywords: 'jeans wide leg baggy black', category: 'Jeans', brand: 'Cross Country', fit: 'Wide Leg', sizes: ['30','32','34','36'], colours: ['Black'], isLycra: false, stock: 0 },
                    { id: 509, name: 'Straight Fit Jeans – Blue', price: 1299, oldPrice: 1699, image: 'asses/wideleg.jpg', link: 'productDetails.html', keywords: 'jeans straight fit blue', category: 'Jeans', brand: 'Armani', fit: 'Straight', sizes: ['28','30','32','34','36'], colours: ['Blue'], isLycra: true, stock: 2 },
                    { id: 508, name: 'Baggy Jeans – Black', price: 1699, oldPrice: 2199, image: 'asses/wideleg.jpg', link: 'productDetails.html', keywords: 'jeans baggy black', category: 'Jeans', brand: 'Cross Country', fit: 'Baggy', sizes: ['30','32','34','36','38'], colours: ['Black'], isLycra: false, stock: 45 },
                    { id: 201, name: 'Linen Pant – Beige', price: 1299, oldPrice: 1899, image: 'asses/linen pant/1.jpg', link: 'linen-product-details.html', keywords: 'linen pant pants beige casual', category: 'Linen Pants', brand: 'Cross Country', fit: 'Regular', sizes: ['28','30','32','34','36'], colours: ['Beige'], isLycra: false, stock: 15 },
                    { id: 203, name: 'Linen Pant – Olive', price: 1349, oldPrice: 1899, image: 'asses/linen pant/3.jpg', link: 'linen-product-details.html', keywords: 'linen pant pants olive green', category: 'Linen Pants', brand: 'Armani', fit: 'Relaxed', sizes: ['30','32','34','36','38'], colours: ['Olive'], isLycra: false, stock: 0 },
                    { id: 206, name: 'Linen Pant – Black', price: 1399, oldPrice: 1899, image: 'asses/linen pant/4.jpg', link: 'linen-product-details.html', keywords: 'linen pant pants black', category: 'Linen Pants', brand: 'Cross Country', fit: 'Regular', sizes: ['30','32','34','36','38'], colours: ['Black'], isLycra: false, stock: 8 },
                    { id: 401, name: 'Classic Shorts – Black', price: 899, oldPrice: 1299, image: 'asses/shorts.jpg', link: 'productDetails.html', keywords: 'shorts classic black cotton', category: 'Shorts', brand: 'Armani', fit: 'Cotton', sizes: ['28','30','32','34','36'], colours: ['Black'], isLycra: false, stock: -1 },
                    { id: 404, name: 'Cargo Shorts – Olive', price: 1099, oldPrice: 1499, image: 'asses/shorts.jpg', link: 'productDetails.html', keywords: 'shorts cargo olive green', category: 'Shorts', brand: 'Cross Country', fit: 'Cargo', sizes: ['30','32','34','36'], colours: ['Olive'], isLycra: false, stock: 20 },
                    { id: 407, name: 'Denim Shorts – Blue', price: 1149, oldPrice: 1599, image: 'asses/shorts.jpg', link: 'productDetails.html', keywords: 'shorts denim blue', category: 'Shorts', brand: 'Cross Country', fit: 'Denim', sizes: ['30','32','34','36'], colours: ['Blue'], isLycra: false, stock: 0 },
                    { id: 301, name: 'Cargo Pants – Olive', price: 1699, oldPrice: 2299, image: 'asses/cargo.jpg', link: 'productDetails.html', keywords: 'cargo pants olive green', category: 'Cargo Pants', brand: 'Cross Country', fit: 'Cargo', sizes: ['30','32','34','36','38'], colours: ['Olive'], isLycra: false, stock: 3 },
                    { id: 302, name: 'Cargo Pants – Black', price: 1599, oldPrice: 2199, image: 'asses/cargo.jpg', link: 'productDetails.html', keywords: 'cargo pants black', category: 'Cargo Pants', brand: 'Armani', fit: 'Cargo', sizes: ['30','32','34','36'], colours: ['Black'], isLycra: false, stock: 100 },
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
                        let outOfStockBadge = '';
                        let opacityStyle = '';
                        if (p.stock === 0) {
                            outOfStockBadge = '<span style="color:#dc2626;font-size:10px;font-weight:700;margin-left:8px;background:#fee2e2;padding:2px 6px;border-radius:4px;">OUT OF STOCK</span>';
                            opacityStyle = 'opacity: 0.6;';
                        }
                        
                        html += `
                        <a href="${p.link}" class="ct-search-item" style="${opacityStyle}">
                            <img src="${p.image}" alt="${p.name}" class="ct-search-img" onerror="this.src='asses/wideleg.jpg'">
                            <div class="ct-search-info">
                                <span class="ct-search-title">${p.name}${outOfStockBadge}</span>
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

            // --- PROFILE DROPDOWN SYSTEM ---
            const accountBtn = this.querySelector('#navAccountBtn');
            const accountChevron = this.querySelector('#navAccountChevron');
            const profileMenu = this.querySelector('#navProfileMenu');
            const accountWrap = this.querySelector('#navAccountWrap');
            const profileImage = this.querySelector('#ctProfileImage');
            const displayShopName = this.querySelector('#ctDisplayShopName');
            const displayName = this.querySelector('#ctDisplayName');

            if (accountBtn && profileMenu) {
                const toggleMenu = (e) => {
                    e.stopPropagation();
                    profileMenu.classList.toggle('show');
                };
                accountBtn.addEventListener('click', toggleMenu);
                if (accountChevron) accountChevron.addEventListener('click', toggleMenu);
                
                document.addEventListener('click', (e) => {
                    if (!accountWrap.contains(e.target)) {
                        profileMenu.classList.remove('show');
                    }
                });

                // Load saved data for display
                const savedShopName = localStorage.getItem('dot_shop_name');
                const savedUserName = localStorage.getItem('dot_user_name');
                const savedPhoto = localStorage.getItem('dot_user_photo');

                if (savedShopName && displayShopName) displayShopName.textContent = savedShopName;
                if (savedUserName && displayName) displayName.textContent = savedUserName;
                if (savedPhoto && profileImage) profileImage.src = savedPhoto;
            }

        }, 0);
    }
}
customElements.define('dot-navbar', DotNavbar);
