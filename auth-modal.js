const authCSS = `
/* ================================================================
   AUTH MODAL STYLES
   ================================================================ */
.dot-auth-overlay {
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(15, 29, 47, 0.7);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}
.dot-auth-overlay.active {
    opacity: 1;
    visibility: visible;
}
.dot-auth-modal {
    background: #fff;
    width: 900px;
    max-width: 95%;
    height: 550px;
    border-radius: 12px;
    display: flex;
    overflow: hidden;
    box-shadow: 0 24px 60px rgba(0,0,0,0.2);
    position: relative;
    transform: translateY(20px) scale(0.98);
    transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}
.dot-auth-overlay.active .dot-auth-modal {
    transform: translateY(0) scale(1);
}
.dot-auth-left {
    flex: 1.1;
    background: url('asses/hero%20iamge.png') center/cover;
    position: relative;
    padding: 40px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.dot-auth-left::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(to right, rgba(15, 29, 47, 0.8), rgba(15, 29, 47, 0.3));
}
.dot-auth-left > * { position: relative; z-index: 2; }
.dot-auth-brand {
    font-size: 28px;
    font-weight: 800;
    letter-spacing: 2px;
    line-height: 1;
}
.dot-auth-brand sub {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 4px;
    display: block;
    margin-top: 4px;
    color: #cbd5e1;
}
.dot-auth-title {
    font-size: 36px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 16px;
}
.dot-auth-tags {
    font-size: 13px;
    color: #cbd5e1;
    display: flex;
    gap: 10px;
}
.dot-auth-tags span { display: flex; align-items: center; gap: 8px; }
.dot-auth-tags span:not(:last-child)::after { content: '|'; color: rgba(255,255,255,0.3); }

.dot-auth-right {
    flex: 1;
    background: #fff;
    padding: 50px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}
.dot-auth-close {
    position: absolute;
    top: 20px; right: 24px;
    background: none; border: none;
    font-size: 24px; color: #64748b;
    cursor: pointer;
    transition: color 0.2s;
}
.dot-auth-close:hover { color: #0f1d2f; }
.dot-auth-back {
    position: absolute;
    top: 24px; left: 24px;
    background: none; border: none;
    font-size: 16px; color: #64748b;
    cursor: pointer;
    display: none;
    transition: color 0.2s;
}
.dot-auth-back:hover { color: #0f1d2f; }

.dot-auth-step {
    display: none;
    flex-direction: column;
    height: 100%;
}
.dot-auth-step.active {
    display: flex;
    animation: fadeInStep 0.4s ease forwards;
}
@keyframes fadeInStep {
    from { opacity: 0; transform: translateX(10px); }
    to { opacity: 1; transform: translateX(0); }
}

.auth-heading { font-size: 24px; font-weight: 700; color: #0f1d2f; margin-bottom: 8px; }
.auth-sub { font-size: 14px; color: #64748b; margin-bottom: 30px; }

.auth-input-group {
    position: relative;
    margin-bottom: 16px;
}
.auth-input-group i {
    position: absolute;
    left: 16px; top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
    font-size: 14px;
}
.auth-input {
    width: 100%;
    height: 48px;
    background: #fff;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    padding: 0 16px 0 42px;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    color: #0f1d2f;
    transition: all 0.2s;
}
.auth-input:focus {
    border-color: #0f1d2f;
    outline: none;
    box-shadow: 0 0 0 3px rgba(15, 29, 47, 0.1);
}

.auth-btn {
    width: 100%;
    height: 48px;
    background: #0f1d2f;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 10px;
    transition: background 0.2s;
}
.auth-btn:hover { background: #1e293b; }
.auth-btn:disabled { background: #94a3b8; cursor: not-allowed; }

.auth-or {
    display: flex; align-items: center;
    margin: 24px 0;
    color: #94a3b8; font-size: 12px;
}
.auth-or::before, .auth-or::after {
    content: ''; flex: 1; height: 1px; background: #e2e8f0;
}
.auth-or::before { margin-right: 12px; }
.auth-or::after { margin-left: 12px; }

.auth-outline-btn {
    width: 100%;
    height: 48px;
    background: transparent;
    color: #0f1d2f;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
}
.auth-outline-btn:hover { border-color: #0f1d2f; background: #f8fafc; }

.auth-guest {
    text-align: center;
    margin-top: 24px;
}
.auth-guest a {
    color: #64748b;
    font-size: 13px;
    text-decoration: none;
    transition: color 0.2s;
}
.auth-guest a:hover { color: #0f1d2f; text-decoration: underline; }

.auth-switch {
    text-align: center;
    margin-top: auto;
    font-size: 13px;
    color: #64748b;
}
.auth-switch a {
    color: #0f1d2f; font-weight: 600; text-decoration: none;
}
.auth-switch a:hover { text-decoration: underline; }

/* OTP Step */
.otp-inputs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
}
.otp-input {
    width: 45px; height: 50px;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    color: #0f1d2f;
    transition: all 0.2s;
}
.otp-input:focus { border-color: #0f1d2f; outline: none; box-shadow: 0 0 0 3px rgba(15, 29, 47, 0.1); }
.resend-timer {
    text-align: center;
    font-size: 13px;
    color: #64748b;
    margin-bottom: 24px;
}

.mobile-logo-auth { display: none; margin-bottom: 24px; }
@media(max-width: 768px) {
    .dot-auth-modal { flex-direction: column; height: 90vh; }
    .dot-auth-left { display: none; }
    .dot-auth-right { padding: 40px 24px; }
    .mobile-logo-auth { display: block; }
}
`;

const authHTML = `
<div class="dot-auth-overlay" id="dotAuthOverlay">
    <div class="dot-auth-modal" id="dotAuthModal">
        <div class="dot-auth-left">
            <div class="dot-auth-brand">
                DOT<sup>®</sup>
                <sub>JEANS CO.</sub>
            </div>
            <div>
                <div class="dot-auth-title">Premium Denim<br>for Every Style</div>
                <div class="dot-auth-tags">
                    <span>Quality</span>
                    <span>Wholesale</span>
                    <span>All India Shipping</span>
                </div>
            </div>
        </div>
        
        <div class="dot-auth-right">
            <button class="dot-auth-close" id="dotAuthClose">&times;</button>
            <button class="dot-auth-back" id="dotAuthBack"><i class="fa-solid fa-arrow-left"></i></button>
            
            <div class="mobile-logo-auth">
                <span style="font-weight: 800; letter-spacing: 1px; font-size: 20px; color: #0f1d2f;">DOT<sup style="font-size: 8px;">®</sup></span>
            </div>

            <!-- STEP 1: LOGIN -->
            <div class="dot-auth-step active" id="authStepLogin">
                <div class="auth-heading">Welcome Back</div>
                <div class="auth-sub">Login to your account to continue.</div>
                
                <form id="authLoginForm" onsubmit="event.preventDefault(); window.sendOtp('login');">
                    <div class="auth-input-group">
                        <i class="fa-solid fa-phone"></i>
                        <input type="tel" class="auth-input" id="loginPhone" placeholder="Mobile Number" required pattern="[0-9]{10}">
                    </div>
                    <button type="submit" class="auth-btn">Send OTP</button>
                </form>
                
                <div class="auth-or">or</div>
                <button type="button" class="auth-outline-btn" onclick="window.switchAuthStep('signup')">Create New Account</button>
                
                <div class="auth-guest">
                    <a href="javascript:void(0)" onclick="window.closeAuthModal()">Continue as Guest</a>
                </div>
            </div>

            <!-- STEP 2: SIGNUP -->
            <div class="dot-auth-step" id="authStepSignup">
                <div class="auth-heading">Create Account</div>
                <div class="auth-sub">Enter your details to get started.</div>
                
                <form id="authSignupForm" onsubmit="event.preventDefault(); window.sendOtp('signup');">
                    <div class="auth-input-group">
                        <i class="fa-regular fa-user"></i>
                        <input type="text" class="auth-input" id="signupName" placeholder="Full Name" required minlength="2">
                    </div>
                    <div class="auth-input-group">
                        <i class="fa-solid fa-phone"></i>
                        <input type="tel" class="auth-input" id="signupPhone" placeholder="Mobile Number" required pattern="[0-9]{10}">
                    </div>
                    <button type="submit" class="auth-btn">Send OTP</button>
                </form>
                
                <div class="auth-switch" style="margin-top: 24px;">
                    Already have an account? <a href="javascript:void(0)" onclick="window.switchAuthStep('login')">Login</a>
                </div>
            </div>

            <!-- STEP 3: OTP -->
            <div class="dot-auth-step" id="authStepOtp">
                <div class="auth-heading">OTP Verification</div>
                <div class="auth-sub">Enter the 6-digit code sent to<br><strong id="otpPhoneDisplay" style="color:#0f1d2f;font-weight:600;margin-top:4px;display:block;"></strong></div>
                
                <form id="authOtpForm" onsubmit="event.preventDefault(); window.verifyOtp();">
                    <div class="otp-inputs" id="otpInputsWrapper">
                        <input type="text" class="otp-input" maxlength="1" required>
                        <input type="text" class="otp-input" maxlength="1" required>
                        <input type="text" class="otp-input" maxlength="1" required>
                        <input type="text" class="otp-input" maxlength="1" required>
                        <input type="text" class="otp-input" maxlength="1" required>
                        <input type="text" class="otp-input" maxlength="1" required>
                    </div>
                    
                    <div class="resend-timer" id="resendTimerText">
                        Resend OTP (00:45)
                    </div>
                    <div class="resend-timer" id="resendAction" style="display:none;">
                        Didn't receive the code? <a href="javascript:void(0)" onclick="window.resendOtp()" style="color:#0f1d2f;font-weight:600;text-decoration:none;">Resend OTP</a>
                    </div>
                    
                    <button type="submit" class="auth-btn" id="verifyOtpBtn">Verify</button>
                </form>
            </div>

        </div>
    </div>
</div>
`;;

// Inject CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = authCSS;
document.head.appendChild(styleSheet);

// Inject HTML
const wrapper = document.createElement('div');
wrapper.innerHTML = authHTML;
document.body.appendChild(wrapper.firstElementChild);

// Logic
let currentFlow = 'login';
let currentPhone = '';
let currentName = '';
let timerInterval = null;

window.openAuthModal = function(options = {}) {
    document.getElementById('dotAuthOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    window.switchAuthStep('login');
    
    if (options.force) {
        document.getElementById('dotAuthClose').style.display = 'none';
    } else {
        document.getElementById('dotAuthClose').style.display = 'block';
    }
};

window.closeAuthModal = function() {
    document.getElementById('dotAuthOverlay').classList.remove('active');
    document.body.style.overflow = '';
    
    // Reveal Home page content if hidden (routing logic)
    document.body.classList.remove('auth-hidden-content');
};

window.switchAuthStep = function(step) {
    document.querySelectorAll('.dot-auth-step').forEach(el => el.classList.remove('active'));
    
    if (step === 'login') {
        document.getElementById('authStepLogin').classList.add('active');
        document.getElementById('dotAuthBack').style.display = 'none';
        document.getElementById('loginPhone').value = '';
    } else if (step === 'signup') {
        document.getElementById('authStepSignup').classList.add('active');
        document.getElementById('dotAuthBack').style.display = 'block';
        document.getElementById('dotAuthBack').onclick = () => window.switchAuthStep('login');
        document.getElementById('signupName').value = '';
        document.getElementById('signupPhone').value = '';
    } else if (step === 'otp') {
        document.getElementById('authStepOtp').classList.add('active');
        document.getElementById('dotAuthBack').style.display = 'block';
        document.getElementById('dotAuthBack').onclick = () => window.switchAuthStep(currentFlow);
        
        // Setup OTP
        const inputs = document.querySelectorAll('.otp-input');
        inputs.forEach(input => input.value = '');
        inputs[0].focus();
        
        startTimer();
    }
};

window.sendOtp = function(flow) {
    currentFlow = flow;
    const btn = flow === 'login' ? document.querySelector('#authLoginForm .auth-btn') : document.querySelector('#authSignupForm .auth-btn');
    
    if (flow === 'login') {
        currentPhone = document.getElementById('loginPhone').value;
        // In real app, we'd fetch the name or show generic
        currentName = 'User'; 
    } else {
        currentPhone = document.getElementById('signupPhone').value;
        currentName = document.getElementById('signupName').value;
    }
    
    document.getElementById('otpPhoneDisplay').textContent = '+91 ' + currentPhone.replace(/(\d{5})(\d{5})/, '$1 $2');
    
    // Simulate API call
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = 'Send OTP';
        btn.disabled = false;
        window.switchAuthStep('otp');
    }, 1000);
};

window.resendOtp = function() {
    const action = document.getElementById('resendAction');
    action.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
    setTimeout(() => {
        startTimer();
    }, 1000);
};

window.verifyOtp = function() {
    const btn = document.getElementById('verifyOtpBtn');
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Verifying...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = 'Verify';
        btn.disabled = false;
        
        // Success
        const user = {
            name: currentName,
            phone: currentPhone,
            avatar: ''
        };
        localStorage.setItem('dot_user', JSON.stringify(user));
        
        // Close modal
        window.closeAuthModal();
        
        // Check if there's a pending enquiry
        if (localStorage.getItem('dot_pending_enquiry') === 'true') {
            localStorage.removeItem('dot_pending_enquiry');
            
            const navBtn = document.getElementById('navAccountBtn');
            if (navBtn) {
                const avatarUrl = user.avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.name) + '&background=0f1d2f&color=fff';
                navBtn.innerHTML = `<img src="${avatarUrl}" alt="Profile" style="width:24px; height:24px; border-radius:50%; object-fit:cover; display:block;">`;
            }

            if (typeof openEnquiryModal === 'function') {
                openEnquiryModal();
            }
        } else {
            // Redirect to home page, or just reveal it if already on home
            if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
                const navBtn = document.getElementById('navAccountBtn');
                if (navBtn) {
                    const avatarUrl = user.avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.name) + '&background=0f1d2f&color=fff';
                    navBtn.innerHTML = `<img src="${avatarUrl}" alt="Profile" style="width:24px; height:24px; border-radius:50%; object-fit:cover; display:block;">`;
                }
                window.closeAuthModal();
            } else {
                window.location.href = 'index.html';
            }
        }
    }, 1200);
};

function startTimer() {
    clearInterval(timerInterval);
    document.getElementById('resendTimerText').style.display = 'block';
    document.getElementById('resendAction').style.display = 'none';
    
    let timeLeft = 45;
    const updateText = () => {
        const secs = timeLeft < 10 ? '0' + timeLeft : timeLeft;
        document.getElementById('resendTimerText').textContent = `Resend OTP (00:${secs})`;
    };
    
    updateText();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateText();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('resendTimerText').style.display = 'none';
            document.getElementById('resendAction').style.display = 'block';
            document.getElementById('resendAction').innerHTML = `Didn't receive the code? <a href="javascript:void(0)" onclick="window.resendOtp()" style="color:#0f1d2f;font-weight:600;text-decoration:none;">Resend OTP</a>`;
        }
    }, 1000);
}

// OTP Inputs logic
const otpInputs = document.querySelectorAll('.otp-input');
otpInputs.forEach((input, index) => {
    input.addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9]/g, ''); // only numbers
        if (this.value !== '' && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
    });
    
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace' && this.value === '' && index > 0) {
            otpInputs[index - 1].focus();
        }
    });
    
    // Support Paste
    input.addEventListener('paste', function(e) {
        e.preventDefault();
        const paste = (e.clipboardData || window.clipboardData).getData('text').replace(/[^0-9]/g, '');
        if (paste) {
            for (let i = 0; i < otpInputs.length; i++) {
                if (paste[i]) {
                    otpInputs[i].value = paste[i];
                }
            }
            const focusIndex = Math.min(paste.length, otpInputs.length - 1);
            otpInputs[focusIndex].focus();
        }
    });
});

// Bind Event Listeners
document.getElementById('dotAuthClose').addEventListener('click', window.closeAuthModal);

// Intercept Enquiry Clicks
document.addEventListener('click', function(e) {
    const enqBtn = e.target.closest('#dpEnquiryBtn') || e.target.closest('#dpMobileEnquiryBtn') || e.target.closest('#dpEnquiryBtnTab');
    if (enqBtn) {
        const user = localStorage.getItem('dot_user');
        if (!user) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            localStorage.setItem('dot_pending_enquiry', 'true');
            window.openAuthModal();
        }
    }
}, true); // Capture phase

// Handle Nav Account Button Click using event delegation
document.addEventListener('click', function(e) {
    const navAccountBtn = e.target.closest('#navAccountBtn') || e.target.closest('[aria-label="Account"]');
    if (navAccountBtn) {
        e.preventDefault();
        const user = localStorage.getItem('dot_user');
        if (user) {
            window.location.href = 'profile.html';
        } else {
            window.openAuthModal();
        }
    }
});
