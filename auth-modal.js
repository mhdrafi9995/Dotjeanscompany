/* ================================================================
   DOT JEANS CO. — WHOLESALE ACCOUNT CREATION (SUPABASE AUTH)
   ================================================================ */

const authCSS = `
/* ================================================================
   CREATE ACCOUNT MODAL STYLES (MATCHES REFERENCE EXACTLY)
   ================================================================ */
.dot-auth-overlay {
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(11, 20, 32, 0.72);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.25s ease, visibility 0.25s ease;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
.dot-auth-overlay.active {
    opacity: 1;
    visibility: visible;
}
.dot-auth-modal {
    background: #ffffff;
    width: 880px;
    max-width: 95%;
    min-height: 520px;
    border-radius: 20px;
    display: flex;
    overflow: hidden;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
    position: relative;
    transform: translateY(16px) scale(0.98);
    transition: transform 0.25s cubic-bezier(0.2, 0.9, 0.3, 1);
}
.dot-auth-overlay.active .dot-auth-modal {
    transform: translateY(0) scale(1);
}

/* ── LEFT SIDE: BRANDING & CINEMATIC DENIM HERO ── */
.dot-auth-left {
    flex: 1.05;
    background: linear-gradient(180deg, rgba(11, 23, 39, 0.48) 0%, rgba(11, 23, 39, 0.12) 42%, rgba(11, 23, 39, 0.88) 100%),
                url('asses/hero%20iamge.png') center/cover no-repeat;
    background-color: #0b1a2d;
    position: relative;
    padding: 38px 34px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.dot-auth-brand {
    font-size: 26px;
    font-weight: 800;
    letter-spacing: 1px;
    line-height: 1;
    color: #ffffff;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
.dot-auth-brand sup {
    font-size: 11px;
    font-weight: 700;
    vertical-align: super;
    margin-left: 2px;
}
.dot-auth-brand span {
    display: block;
    font-size: 9.5px;
    font-weight: 700;
    letter-spacing: 3.5px;
    color: rgba(255, 255, 255, 0.88);
    margin-top: 5px;
}

.dot-auth-left-bottom {
    margin-top: auto;
}
.dot-auth-left-heading {
    font-size: 32px;
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.5px;
    color: #ffffff;
    margin: 0 0 12px 0;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
}
.dot-auth-left-sub {
    font-size: 13px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.92);
    letter-spacing: 0.2px;
    margin: 0;
    line-height: 1.4;
    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
}

/* ── RIGHT SIDE: CREATE ACCOUNT FORM ── */
.dot-auth-right {
    flex: 1.15;
    background: #ffffff;
    padding: 38px 34px 34px 34px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}

/* Close Button (×) */
.dot-auth-close {
    position: absolute;
    top: 20px;
    right: 22px;
    background: none;
    border: none;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #94a3b8;
    cursor: pointer;
    border-radius: 8px;
    transition: color 0.15s ease, background-color 0.15s ease;
    padding: 0;
}
.dot-auth-close:hover {
    color: #0b1a2d;
    background-color: #f1f5f9;
}

/* Heading & Subtitle */
.dot-auth-right-header {
    margin-bottom: 20px;
}
.auth-heading {
    font-size: 26px;
    font-weight: 800;
    color: #0b1727;
    margin: 0 0 6px 0;
    letter-spacing: -0.4px;
    line-height: 1.2;
}
.auth-sub {
    font-size: 13.5px;
    color: #64748b;
    margin: 0;
    line-height: 1.4;
    font-weight: 400;
}

/* Inline Alert */
.dot-auth-alert {
    background: #fef2f2;
    border: 1px solid #fecaca;
    color: #b91c1c;
    padding: 9px 12px;
    border-radius: 10px;
    font-size: 12.5px;
    line-height: 1.4;
    margin-bottom: 12px;
    display: none;
    align-items: center;
    gap: 8px;
}

/* Form Fields */
.dot-auth-form {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.dot-auth-field {
    border: 1.5px solid #e2e8f0;
    border-radius: 12px;
    padding: 9px 14px;
    margin-bottom: 12px;
    background: #ffffff;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: border-color 0.18s ease, box-shadow 0.18s ease;
}
.dot-auth-field:focus-within {
    border-color: #0b1a2d;
    box-shadow: 0 0 0 1px #0b1a2d;
}
.dot-auth-field-icon {
    width: 20px;
    height: 20px;
    color: #64748b;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}
.dot-auth-field-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
}
.dot-auth-field-label {
    font-size: 11px;
    font-weight: 500;
    color: #475569;
    line-height: 1.15;
    margin-bottom: 2px;
}
.dot-auth-field-input {
    border: none;
    outline: none;
    background: transparent;
    font-size: 13.5px;
    color: #0f172a;
    padding: 0;
    width: 100%;
    font-family: inherit;
    font-weight: 400;
}
.dot-auth-field-input::placeholder {
    color: #94a3b8;
    font-weight: 400;
}

/* Google Button */
.dot-google-btn {
    width: 100%;
    background: #ffffff;
    border: 1.5px solid #e2e8f0;
    border-radius: 12px;
    padding: 11px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #1e293b;
    cursor: pointer;
    margin-top: 4px;
    transition: background 0.15s ease, border-color 0.15s ease;
    font-family: inherit;
}
.dot-google-btn:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
}
.dot-google-btn:active {
    transform: scale(0.99);
}

/* Divider: ── OR ── */
.dot-auth-divider {
    display: flex;
    align-items: center;
    margin: 14px 0;
    text-align: center;
}
.dot-auth-divider::before,
.dot-auth-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e2e8f0;
}
.dot-auth-divider span {
    padding: 0 14px;
    font-size: 11px;
    font-weight: 600;
    color: #94a3b8;
    letter-spacing: 0.5px;
}

/* Primary Button (Create Account →) */
.dot-primary-btn {
    width: 100%;
    background: #0b1a2d;
    color: #ffffff;
    border: none;
    border-radius: 12px;
    padding: 13px 20px;
    font-size: 14.5px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: background 0.15s ease, transform 0.1s ease;
    font-family: inherit;
}
.dot-primary-btn:hover {
    background: #142842;
}
.dot-primary-btn:active {
    transform: scale(0.99);
}
.dot-primary-btn:disabled,
.dot-google-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

/* Phone Prefix & OTP Input Styles */
.dot-auth-phone-wrap {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
}
.dot-auth-phone-prefix {
    font-size: 13.5px;
    font-weight: 700;
    color: #0b1a2d;
    background: #f1f5f9;
    padding: 3px 8px;
    border-radius: 6px;
    border: 1px solid #e2e8f0;
    user-select: none;
    flex-shrink: 0;
}
.dot-auth-otp-input {
    width: 100%;
    padding: 12px 16px;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 8px;
    text-align: center;
    color: #0b1a2d;
    background: #f8fafc;
    border: 1.5px solid #cbd5e1;
    border-radius: 12px;
    outline: none;
    transition: all 0.2s ease;
    font-family: 'Courier New', Courier, monospace, 'Inter', sans-serif;
    box-sizing: border-box;
}
.dot-auth-otp-input:focus {
    border-color: #0b1a2d;
    background: #ffffff;
    box-shadow: 0 0 0 2px rgba(11, 26, 45, 0.15);
}
.dot-auth-resend-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0 16px;
    font-size: 13px;
    color: #64748b;
}
.dot-auth-resend-btn {
    background: none;
    border: none;
    color: #f97316;
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
    padding: 0;
    text-decoration: underline;
    font-family: inherit;
    transition: color 0.15s;
}
.dot-auth-resend-btn:hover {
    color: #ea580c;
}
.dot-auth-resend-btn:disabled {
    color: #94a3b8;
    text-decoration: none;
    cursor: not-allowed;
}
.dot-auth-back-btn {
    background: none;
    border: none;
    color: #64748b;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-top: 14px;
    width: 100%;
    text-align: center;
    font-family: inherit;
    transition: color 0.15s;
}
.dot-auth-back-btn:hover {
    color: #0b1a2d;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .dot-auth-modal {
        flex-direction: column;
        width: 92%;
        max-width: 440px;
        min-height: auto;
        max-height: 90vh;
        overflow-y: auto;
        border-radius: 16px;
    }
    .dot-auth-left {
        min-height: 190px;
        padding: 24px 20px;
        justify-content: space-between;
    }
    .dot-auth-brand {
        font-size: 20px;
    }
    .dot-auth-left-heading {
        font-size: 22px;
        margin-bottom: 6px;
    }
    .dot-auth-left-sub {
        font-size: 11px;
    }
    .dot-auth-right {
        padding: 24px 20px;
    }
    .auth-heading {
        font-size: 22px;
    }
    .auth-sub {
        font-size: 12.5px;
        margin-bottom: 16px;
    }
    .dot-auth-field {
        padding: 8px 12px;
        margin-bottom: 10px;
    }
    .dot-primary-btn, .dot-google-btn {
        padding: 11px 16px;
        font-size: 13.5px;
    }
}
`;

const authHTML = `
<div class="dot-auth-overlay" id="dotAuthOverlay" role="dialog" aria-modal="true" aria-labelledby="authHeading">
    <div class="dot-auth-modal">
        
        <!-- LEFT SIDE: DENIM IMAGE & BRANDING -->
        <div class="dot-auth-left">
            <div class="dot-auth-brand">
                DOT<sup>®</sup>
                <span>JEANS CO.</span>
            </div>

            <div class="dot-auth-left-bottom">
                <h2 class="dot-auth-left-heading">Wholesale Denim<br>for Your Business</h2>
                <p class="dot-auth-left-sub">Direct Factory &bull; Bulk Packs &bull; All India Shipping</p>
            </div>
        </div>

        <!-- RIGHT SIDE: PHONE & OTP AUTH FORM -->
        <div class="dot-auth-right">
            <!-- Close Button (×) -->
            <button type="button" class="dot-auth-close" id="dotAuthClose" aria-label="Close modal">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            <div class="dot-auth-right-header">
                <h3 class="auth-heading" id="authHeading">Wholesale Login / Register</h3>
                <p class="auth-sub" id="authSub">Enter your mobile number to receive a one-time OTP.</p>
            </div>

            <div class="dot-auth-alert" id="authErrorAlert"></div>

            <!-- STEP 1: PHONE NUMBER INPUT -->
            <form class="dot-auth-form" id="authPhoneStepForm" onsubmit="event.preventDefault(); window.handleSendOtp();">
                <!-- Field 1: Phone Number -->
                <div class="dot-auth-field">
                    <div class="dot-auth-field-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                    </div>
                    <div class="dot-auth-field-body">
                        <label class="dot-auth-field-label" for="authPhoneNumber">Mobile Number</label>
                        <div class="dot-auth-phone-wrap">
                            <span class="dot-auth-phone-prefix">+91</span>
                            <input type="tel" class="dot-auth-field-input" id="authPhoneNumber" placeholder="Enter 10-digit mobile" maxlength="15" autocomplete="tel" required>
                        </div>
                    </div>
                </div>

                <!-- Field 2: Full Name (Optional) -->
                <div class="dot-auth-field">
                    <div class="dot-auth-field-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div class="dot-auth-field-body">
                        <label class="dot-auth-field-label" for="authFullName">Customer Name (Optional)</label>
                        <input type="text" class="dot-auth-field-input" id="authFullName" placeholder="Enter full name" autocomplete="name">
                    </div>
                </div>

                <!-- Field 3: Shop Name (Optional) -->
                <div class="dot-auth-field">
                    <div class="dot-auth-field-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 9l1-5h16l1 5"></path>
                            <path d="M4 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0"></path>
                            <path d="M5 11v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9"></path>
                            <rect x="9" y="14" width="6" height="7"></rect>
                        </svg>
                    </div>
                    <div class="dot-auth-field-body">
                        <label class="dot-auth-field-label" for="authShopName">Shop Name (Optional)</label>
                        <input type="text" class="dot-auth-field-input" id="authShopName" placeholder="Enter business or shop name" autocomplete="organization">
                    </div>
                </div>

                <!-- Primary Button: Send OTP -->
                <button type="submit" class="dot-primary-btn" id="authSendOtpBtn">
                    <span>Send OTP</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </button>

                <!-- Divider: ──────── OR ──────── -->
                <div class="dot-auth-divider">
                    <span>OR</span>
                </div>

                <!-- Google OAuth Button -->
                <button type="button" class="dot-google-btn" id="authGoogleBtn" onclick="window.handleGoogleSignIn();">
                    <svg width="18" height="18" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.15z"/>
                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.94H1.26v3.13C3.25 21.31 7.31 24 12 24z"/>
                        <path fill="#FBBC05" d="M5.28 14.26c-.25-.72-.38-1.49-.38-2.26s.13-1.54.38-2.26V6.61H1.26C.46 8.21 0 10.05 0 12c0 1.95.46 3.79 1.26 5.39l4.02-3.13z"/>
                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.69 1.26 6.61l4.02 3.13c.95-2.84 3.6-4.99 6.72-4.99z"/>
                    </svg>
                    <span>Continue with Google</span>
                </button>
            </form>

            <!-- STEP 2: OTP VERIFICATION -->
            <form class="dot-auth-form" id="authOtpStepForm" style="display:none;" onsubmit="event.preventDefault(); window.handleVerifyOtp();">
                <div style="font-size:13.5px; color:#475569; margin-bottom:16px; text-align:center;">
                    Enter the 6-digit OTP code sent to<br><strong id="authOtpPhoneDisp" style="color:#0f172a; font-size:14.5px;">+91 </strong>
                </div>

                <!-- OTP Input -->
                <div style="margin-bottom:12px;">
                    <input type="text" class="dot-auth-otp-input" id="authOtpCode" placeholder="••••••" maxlength="6" inputmode="numeric" pattern="[0-9]*" autocomplete="one-time-code" required>
                </div>

                <!-- Resend Row -->
                <div class="dot-auth-resend-row">
                    <span id="authResendTimerText">Resend OTP in <b id="authResendSeconds">30</b>s</span>
                    <button type="button" class="dot-auth-resend-btn" id="authResendBtn" style="display:none;" onclick="window.handleSendOtp(true);">Resend OTP</button>
                </div>

                <!-- Primary Button: Verify & Login -->
                <button type="submit" class="dot-primary-btn" id="authVerifyOtpBtn">
                    <span>Verify & Login</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </button>

                <!-- Change Phone Button -->
                <button type="button" class="dot-auth-back-btn" onclick="window.showAuthPhoneStep();">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    <span>Change Mobile Number</span>
                </button>
            </form>
        </div>

    </div>
</div>
`;

// Inject CSS & HTML
const styleSheet = document.createElement('style');
styleSheet.textContent = authCSS;
document.head.appendChild(styleSheet);

const wrapper = document.createElement('div');
wrapper.innerHTML = authHTML;
document.body.appendChild(wrapper.firstElementChild);

// Clean up any residual storage keys
try {
    for (let i = localStorage.length - 1; i >= 0; i--) {
        const k = localStorage.key(i);
        if (k && (k.startsWith('firebase:') || k.startsWith('__firebase') || k.includes('firebase'))) {
            localStorage.removeItem(k);
        }
    }
} catch (e) { }

// ── Authentication State Check ──
window.isUserAuthenticated = function () {
    // 1. Check Supabase token in localStorage
    try {
        for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (k && (k.startsWith('sb-') && k.endsWith('-auth-token'))) {
                const val = localStorage.getItem(k);
                if (val && val.includes('access_token')) return true;
            }
        }
    } catch (e) { }

    // 2. Check stored wholesale user profile
    try {
        const u = JSON.parse(localStorage.getItem('dot_user') || 'null');
        if (u && (u.id || u.uid || u.phone || u.mobile || u.name || u.full_name)) {
            return true;
        }
    } catch (e) { }

    return false;
};
window.isUserLoggedIn = window.isUserAuthenticated;

// Async check that also consults active Supabase session
window.checkUserAuthStatus = async function () {
    if (window.isUserAuthenticated && window.isUserAuthenticated()) return true;
    const client = window.supabase || window.supabaseClient;
    if (client && client.auth) {
        try {
            const { data: { session } } = await client.auth.getSession();
            if (session && session.user) return true;
        } catch (e) { }
    }
    return false;
};

// ── Error Message Handlers ──
function showAuthError(msg, isSuccess = false, isInfo = false) {
    const err = document.getElementById('authErrorAlert');
    if (err) {
        let icon = '<i class="fa-solid fa-circle-exclamation"></i>';
        let bg = '#fef2f2';
        let border = '#fecaca';
        let color = '#b91c1c';

        if (isSuccess) {
            icon = '<i class="fa-solid fa-circle-check"></i>';
            bg = '#f0fdf4';
            border = '#bbf7d0';
            color = '#15803d';
        } else if (isInfo) {
            icon = '<i class="fa-solid fa-circle-info"></i>';
            bg = '#eff6ff';
            border = '#bfdbfe';
            color = '#1d4ed8';
        }

        err.style.background = bg;
        err.style.borderColor = border;
        err.style.color = color;
        err.innerHTML = `${icon} <span>${msg}</span>`;
        err.style.display = 'flex';
    }
}
function clearAuthError() {
    const err = document.getElementById('authErrorAlert');
    if (err) {
        err.innerHTML = '';
        err.style.display = 'none';
    }
}

// ── Step Navigation ──
let resendTimerInterval = null;

window.showAuthPhoneStep = function () {
    clearAuthError();
    if (resendTimerInterval) clearInterval(resendTimerInterval);

    const phoneForm = document.getElementById('authPhoneStepForm');
    const otpForm = document.getElementById('authOtpStepForm');
    const heading = document.getElementById('authHeading');
    const sub = document.getElementById('authSub');

    if (phoneForm) phoneForm.style.display = 'flex';
    if (otpForm) otpForm.style.display = 'none';
    if (heading) heading.textContent = 'Wholesale Login / Register';
    if (sub) sub.textContent = 'Enter your mobile number to receive a one-time OTP.';

    const phoneInput = document.getElementById('authPhoneNumber');
    if (phoneInput) setTimeout(() => phoneInput.focus(), 50);
};

window.showAuthOtpStep = function (formattedPhone) {
    clearAuthError();
    const phoneForm = document.getElementById('authPhoneStepForm');
    const otpForm = document.getElementById('authOtpStepForm');
    const heading = document.getElementById('authHeading');
    const sub = document.getElementById('authSub');
    const dispPhone = document.getElementById('authOtpPhoneDisp');

    if (phoneForm) phoneForm.style.display = 'none';
    if (otpForm) otpForm.style.display = 'flex';
    if (heading) heading.textContent = 'Verify Mobile Number';
    if (sub) sub.textContent = 'Please enter the 6-digit OTP code to continue.';
    if (dispPhone) dispPhone.textContent = formattedPhone;

    const otpInput = document.getElementById('authOtpCode');
    if (otpInput) {
        otpInput.value = '';
        setTimeout(() => otpInput.focus(), 100);
    }

    startResendTimer();
};

function startResendTimer() {
    if (resendTimerInterval) clearInterval(resendTimerInterval);

    const timerText = document.getElementById('authResendTimerText');
    const resendBtn = document.getElementById('authResendBtn');
    const secondsSpan = document.getElementById('authResendSeconds');

    let seconds = 30;
    if (timerText) timerText.style.display = 'inline';
    if (resendBtn) resendBtn.style.display = 'none';
    if (secondsSpan) secondsSpan.textContent = seconds;

    resendTimerInterval = setInterval(() => {
        seconds--;
        if (secondsSpan) secondsSpan.textContent = seconds;
        if (seconds <= 0) {
            clearInterval(resendTimerInterval);
            if (timerText) timerText.style.display = 'none';
            if (resendBtn) resendBtn.style.display = 'inline';
        }
    }, 1000);
}

// Phone Number Normalization Helper (E.164: +91XXXXXXXXXX)
function normalizePhoneNumber(raw) {
    if (!raw) return '';
    let digits = raw.replace(/\D/g, '');
    if (digits.length === 10) {
        return '+91' + digits;
    } else if (digits.length === 11 && digits.startsWith('0')) {
        return '+91' + digits.substring(1);
    } else if (digits.length === 12 && digits.startsWith('91')) {
        return '+' + digits;
    } else if (raw.startsWith('+')) {
        return '+' + digits;
    }
    return '+91' + digits;
}

// ── Modal Open / Close ──
window.openAuthModal = function () {
    window.showAuthPhoneStep();
    const overlay = document.getElementById('dotAuthOverlay');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Pre-fill fields if known
    const phoneInput = document.getElementById('authPhoneNumber');
    const nameInput = document.getElementById('authFullName');
    const shopInput = document.getElementById('authShopName');

    const stored = JSON.parse(localStorage.getItem('dot_user') || '{}');
    const savedPhone = localStorage.getItem('dot_user_mobile') || stored.phone || stored.mobile || '';
    const savedName = localStorage.getItem('dot_user_name') || stored.name || stored.full_name || '';
    const savedShop = localStorage.getItem('dot_shop_name') || stored.shop_name || stored.shopName || '';

    if (phoneInput && !phoneInput.value && savedPhone) {
        phoneInput.value = savedPhone.replace('+91', '').trim();
    }
    if (nameInput && !nameInput.value && savedName && !/^wholesale buyer$/i.test(savedName.trim())) {
        nameInput.value = savedName;
    }
    if (shopInput && !shopInput.value && savedShop && !/^wholesale buyer$/i.test(savedShop.trim())) {
        shopInput.value = savedShop;
    }
};

window.closeAuthModal = function () {
    const overlay = document.getElementById('dotAuthOverlay');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
    if (resendTimerInterval) clearInterval(resendTimerInterval);
};

// ── Supabase Profile Sync Helper ──
async function syncSupabaseUser(user, enteredPhone = '') {
    if (!user) return;

    const pendingShop = localStorage.getItem('dot_pending_shop_name');
    const pendingName = localStorage.getItem('dot_pending_full_name');
    const currentStored = JSON.parse(localStorage.getItem('dot_user') || '{}');

    const phone = user.phone || enteredPhone || currentStored.phone || currentStored.mobile || '';

    // Auto-load profile details if saved in Supabase
    let existingProfile = null;
    if (window.supabase && typeof window.supabase.from === 'function') {
        try {
            if (user.id) {
                const { data } = await window.supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', user.id)
                    .maybeSingle();
                if (data) existingProfile = data;
            }
            if (!existingProfile && phone) {
                const { data: pByPhone } = await window.supabase
                    .from('profiles')
                    .select('*')
                    .or(`phone.eq.${phone},mobile.eq.${phone}`)
                    .limit(1)
                    .maybeSingle();
                if (pByPhone) existingProfile = pByPhone;
            }
        } catch (err) {
            console.warn('Profile fetch note:', err);
        }
    }

    let fullName = pendingName 
        || existingProfile?.full_name 
        || user.user_metadata?.full_name 
        || user.user_metadata?.name 
        || currentStored.name 
        || '';
    if (/^wholesale buyer$/i.test(fullName.trim())) fullName = '';

    let shopName = pendingShop 
        || existingProfile?.shop_name 
        || user.user_metadata?.shop_name 
        || currentStored.shop_name 
        || currentStored.shopName 
        || '';
    if (/^wholesale buyer$/i.test(shopName.trim())) shopName = '';

    const avatar = existingProfile?.avatar_url 
        || user.user_metadata?.avatar_url 
        || user.user_metadata?.picture 
        || currentStored.avatar 
        || '';

    // Default name fallback to phone number if still empty
    if (!fullName && phone) {
        fullName = phone;
    }

    // Clear pending keys
    localStorage.removeItem('dot_pending_shop_name');
    localStorage.removeItem('dot_pending_full_name');
    localStorage.removeItem('dot_pending_phone');

    // Save to localStorage
    const userObj = {
        id: user.id || ('usr_' + phone.replace(/\D/g, '')),
        uid: user.id || ('usr_' + phone.replace(/\D/g, '')),
        name: fullName,
        full_name: fullName,
        shopName: shopName,
        shop_name: shopName,
        phone: phone,
        mobile: phone,
        whatsapp: phone,
        avatar: avatar
    };
    localStorage.setItem('dot_user', JSON.stringify(userObj));
    if (fullName) localStorage.setItem('dot_user_name', fullName);
    if (shopName) localStorage.setItem('dot_shop_name', shopName);
    if (phone) localStorage.setItem('dot_user_mobile', phone);
    if (avatar) localStorage.setItem('dot_user_photo', avatar);

    // Save/Update in Supabase profiles table
    if (window.supabase && typeof window.supabase.from === 'function') {
        try {
            await window.supabase.from('profiles').upsert({
                id: user.id || userObj.id,
                full_name: fullName,
                shop_name: shopName,
                phone: phone,
                mobile: phone,
                avatar_url: avatar,
                updated_at: new Date().toISOString()
            }, { onConflict: 'id' });
        } catch (err) {
            console.warn('Supabase profile upsert note:', err);
        }
    }

    // Update navbar profile immediately
    if (window.dotUpdateNavbarProfile) {
        window.dotUpdateNavbarProfile();
    }
    window.dispatchEvent(new CustomEvent('dot_profile_updated', {
        detail: { photo: avatar, name: fullName, mobile: phone, shop: shopName }
    }));

    window.closeAuthModal();

    // Check if an enquiry was pending before login
    if (localStorage.getItem('dot_pending_enquiry') === 'true') {
        setTimeout(resumeEnquiryFlow, 150);
    }
}

// ── Phone + OTP Flow: Step 1 Send OTP ──
window._authTargetPhone = '';
window._authFallbackMode = false;

window.handleSendOtp = async function (isResend = false) {
    clearAuthError();

    const phoneInput = document.getElementById('authPhoneNumber');
    const nameInput = document.getElementById('authFullName');
    const shopInput = document.getElementById('authShopName');
    const sendBtn = document.getElementById('authSendOtpBtn');

    const rawVal = (phoneInput?.value || window._authTargetPhone || '').trim();
    const formatted = normalizePhoneNumber(rawVal);

    if (!formatted || formatted.replace(/\D/g, '').length < 10) {
        showAuthError('Please enter a valid 10-digit mobile number.');
        phoneInput?.focus();
        return;
    }

    const fullName = (nameInput?.value || '').trim();
    const shopName = (shopInput?.value || '').trim();

    window._authTargetPhone = formatted;
    localStorage.setItem('dot_pending_phone', formatted);
    if (fullName) localStorage.setItem('dot_pending_full_name', fullName);
    if (shopName) localStorage.setItem('dot_pending_shop_name', shopName);

    if (sendBtn) {
        sendBtn.disabled = true;
        sendBtn.innerHTML = '<span>Sending OTP...</span> <i class="fa-solid fa-circle-notch fa-spin"></i>';
    }

    try {
        let sentLiveOtp = false;

        // Call Supabase Phone OTP API
        if (window.supabase && window.supabase.auth) {
            const { data, error } = await window.supabase.auth.signInWithOtp({
                phone: formatted
            });

            if (!error) {
                sentLiveOtp = true;
                window._authFallbackMode = false;
            } else {
                console.warn('Supabase signInWithOtp notice:', error);
                // Graceful development mode handling if SMS provider is not active in Supabase dashboard
                if (error.code === 'phone_provider_disabled' || 
                    error.error_code === 'phone_provider_disabled' || 
                    error.message?.includes('Unsupported phone provider') ||
                    error.message?.includes('disabled')) {
                    window._authFallbackMode = true;
                } else {
                    throw error;
                }
            }
        } else {
            window._authFallbackMode = true;
        }

        window.showAuthOtpStep(formatted);

        if (window._authFallbackMode) {
            showAuthError('Dev Notice: Supabase SMS provider inactive. Enter demo OTP: 123456 to verify.', false, true);
        } else {
            showAuthError(`OTP sent successfully to ${formatted}`, true);
        }

    } catch (err) {
        console.error('Send OTP Error:', err);
        showAuthError(err.message || 'Failed to send OTP. Please check the mobile number and try again.');
    } finally {
        if (sendBtn) {
            sendBtn.disabled = false;
            sendBtn.innerHTML = '<span>Send OTP</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>';
        }
    }
};

// ── Phone + OTP Flow: Step 2 Verify OTP ──
window.handleVerifyOtp = async function () {
    clearAuthError();

    const otpInput = document.getElementById('authOtpCode');
    const verifyBtn = document.getElementById('authVerifyOtpBtn');
    const otpCode = (otpInput?.value || '').trim().replace(/\D/g, '');
    const phone = window._authTargetPhone || localStorage.getItem('dot_pending_phone') || '';

    if (!otpCode || otpCode.length !== 6) {
        showAuthError('Please enter the 6-digit OTP code.');
        otpInput?.focus();
        return;
    }

    if (!phone) {
        showAuthError('Mobile number is missing. Please enter your mobile number again.');
        window.showAuthPhoneStep();
        return;
    }

    if (verifyBtn) {
        verifyBtn.disabled = true;
        verifyBtn.innerHTML = '<span>Verifying...</span> <i class="fa-solid fa-circle-notch fa-spin"></i>';
    }

    try {
        let authenticatedUser = null;

        if (!window._authFallbackMode && window.supabase && window.supabase.auth) {
            // Live Supabase SMS OTP Verification
            const { data, error } = await window.supabase.auth.verifyOtp({
                phone: phone,
                token: otpCode,
                type: 'sms'
            });

            if (error) {
                throw error;
            }

            authenticatedUser = data.user;
        } else {
            // Demo/Development OTP Verification (123456 or 6 digits)
            if (otpCode !== '123456' && otpCode.length !== 6) {
                throw new Error('Invalid OTP code. Please enter 123456.');
            }

            const cleanDigits = phone.replace(/\D/g, '');
            const deterministicId = '00000000-0000-0000-0000-' + cleanDigits.padStart(12, '0').slice(-12);
            authenticatedUser = {
                id: deterministicId,
                phone: phone,
                user_metadata: {
                    phone: phone,
                    full_name: localStorage.getItem('dot_pending_full_name') || '',
                    shop_name: localStorage.getItem('dot_pending_shop_name') || ''
                }
            };
        }

        // Successfully verified! Sync user profile and update navbar
        await syncSupabaseUser(authenticatedUser, phone);

    } catch (err) {
        console.error('Verify OTP Error:', err);
        showAuthError(err.message || 'Invalid or expired OTP code. Please try again.');
        otpInput?.focus();
    } finally {
        if (verifyBtn) {
            verifyBtn.disabled = false;
            verifyBtn.innerHTML = '<span>Verify & Login</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
        }
    }
};

// ── Google OAuth Sign-In via Supabase ──
window.handleGoogleSignIn = async function () {
    clearAuthError();
    const phoneInput = document.getElementById('authPhoneNumber');
    const nameInput = document.getElementById('authFullName');
    const shopInput = document.getElementById('authShopName');

    const phone = (phoneInput?.value || '').trim();
    const fullName = (nameInput?.value || '').trim();
    const shopName = (shopInput?.value || '').trim();

    if (phone) localStorage.setItem('dot_pending_phone', normalizePhoneNumber(phone));
    if (fullName) localStorage.setItem('dot_pending_full_name', fullName);
    if (shopName) localStorage.setItem('dot_pending_shop_name', shopName);

    const btn = document.getElementById('authGoogleBtn');
    const originalContent = btn ? btn.innerHTML : '';
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Connecting with Google...</span>';
    }

    try {
        if (!window.supabase || !window.supabase.auth) {
            throw new Error('Supabase client is still initializing. Please wait a moment.');
        }

        const currentUrl = window.location.href.split('#')[0];
        const { data, error } = await window.supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: currentUrl
            }
        });

        if (error) throw error;
    } catch (err) {
        console.error('Google OAuth Notice:', err);
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = originalContent;
        }
        showAuthError(err.message || 'Google Sign-In failed. Please check provider settings in Supabase.');
    }
};

// ── Continue to the exact product's Enquiry Flow ──
function resumeEnquiryFlow() {
    try {
        const u = JSON.parse(localStorage.getItem('dot_user') || '{}');
        const rawName = u.name || u.full_name || localStorage.getItem('dot_user_name') || '';
        const nameInput = document.getElementById('enquiryName');
        if (nameInput) nameInput.value = /^wholesale buyer$/i.test(rawName.trim()) ? '' : rawName;

        const rawShop = u.shopName || u.shop_name || localStorage.getItem('dot_shop_name') || '';
        const shopInput = document.getElementById('enquiryShopName');
        if (shopInput) shopInput.value = /^wholesale buyer$/i.test(rawShop.trim()) ? '' : rawShop;

        const waInput = document.getElementById('enquiryWhatsApp');
        if (waInput && u.whatsapp) waInput.value = u.whatsapp;

        const mobInput = document.getElementById('enquiryMobile');
        if (mobInput && (u.phone || u.mobile)) mobInput.value = u.phone || u.mobile;
    } catch (e) { }

    localStorage.removeItem('dot_pending_enquiry');

    // 1. If on productDetails.html with openEnquiryModal()
    if (typeof window.openEnquiryModal === 'function') {
        window.openEnquiryModal();
        return;
    }

    // 2. If a button was clicked, trigger it
    if (window._pendingEnquiryTarget) {
        const target = window._pendingEnquiryTarget;
        window._pendingEnquiryTarget = null;
        target.click();
        return;
    }

    // 3. Fallback: open enquiry modal container if present
    const modal = document.getElementById('modal') || document.getElementById('enquiryModal');
    if (modal) {
        modal.classList.add('active');
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}
window.resumeEnquiryFlow = resumeEnquiryFlow;

// ── Supabase Session Auto-Detection ──
(async function initSupabaseSessionListener() {
    let retries = 0;
    while ((!window.supabase || !window.supabase.auth) && retries < 50) {
        await new Promise(r => setTimeout(r, 100));
        retries++;
    }

    if (!window.supabase || !window.supabase.auth) return;

    try {
        // Check current session (e.g., returning from OAuth redirect)
        const { data: { session } } = await window.supabase.auth.getSession();
        if (session && session.user) {
            await syncSupabaseUser(session.user);
        }

        // Listen for auth state changes
        window.supabase.auth.onAuthStateChange(async (event, session) => {
            if ((event === 'SIGNED_IN' || event === 'USER_UPDATED') && session && session.user) {
                await syncSupabaseUser(session.user);
            }
        });
    } catch (e) {
        console.warn('Supabase session listener init:', e);
    }
})();

// ── Modal Close Listeners ──
document.getElementById('dotAuthClose').addEventListener('click', window.closeAuthModal);
document.getElementById('dotAuthOverlay').addEventListener('click', function (e) {
    if (e.target === this) window.closeAuthModal();
});
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') window.closeAuthModal();
});

// ── Nav Account Button Intercept ──
document.addEventListener('click', function (e) {
    const navAccountBtn = e.target.closest('#navAccountBtn')
        || e.target.closest('[aria-label="Account"]');
    if (!navAccountBtn) return;

    if (!window.isUserAuthenticated()) {
        e.preventDefault();
        e.stopPropagation();
        window.openAuthModal();
    }
});

// ── ENQUIRY BUTTON INTERCEPT (Temporarily bypassed: Visitors can enquiry directly without login/signup) ──
window.BYPASS_AUTH_FOR_ENQUIRY = true; // Set to true to temporarily bypass authentication for enquiry flow

document.addEventListener('click', async function (e) {
    if (window.BYPASS_AUTH_FOR_ENQUIRY) return; // Bypassed: allow direct access to enquiry form

    const enqBtn = e.target.closest('#dpEnquiryBtnTab, #dpEnquiryBtn, #dpMobileEnquiryBtn, .dp-btn-enquiry, .btn-trigger-enquiry, #openEnquiry');

    if (!enqBtn) return;

    const isAuthed = await window.checkUserAuthStatus();
    if (!isAuthed) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        window._pendingEnquiryTarget = enqBtn;
        localStorage.setItem('dot_pending_enquiry', 'true');

        window.openAuthModal();
    }
}, true);
