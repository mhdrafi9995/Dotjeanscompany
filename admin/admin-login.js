async function checkAuth() {
    // Check if URL has access_token from password reset link
    if (window.location.hash.includes('type=recovery')) {
        document.getElementById('authView').style.display = 'none';
        document.getElementById('updatePasswordView').style.display = 'block';
        return;
    }

    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
        window.location.href = 'index.html';
    }
}

function showLogin() {
    document.getElementById('forgotPasswordView').style.display = 'none';
    document.getElementById('authView').style.display = 'block';
}

function showForgotPassword() {
    document.getElementById('authView').style.display = 'none';
    document.getElementById('forgotPasswordView').style.display = 'block';
}

async function sendPasswordReset() {
    const email = document.getElementById('resetEmail').value;
    const msg = document.getElementById('resetMessage');
    msg.style.color = 'black';
    msg.innerText = 'Sending...';
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.href
    });
    if (error) {
        msg.style.color = 'red';
        msg.innerText = error.message;
    } else {
        msg.style.color = 'green';
        msg.innerText = 'Password reset link sent to your email.';
    }
}

async function updatePassword() {
    const newPassword = document.getElementById('newPassword').value;
    const msg = document.getElementById('updateMessage');
    msg.innerText = 'Updating...';
    
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
        msg.style.color = 'red';
        msg.innerText = error.message;
    } else {
        msg.style.color = 'green';
        msg.innerText = 'Password updated securely! Redirecting to login...';
        setTimeout(() => {
            window.location.hash = ''; // Clear hash
            window.location.href = 'login.html';
        }, 2000);
    }
}

async function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorMsg = document.getElementById('loginError');
    errorMsg.innerText = '';
    
    if (!email || !password) {
        errorMsg.innerText = 'Please enter both email and password.';
        return;
    }
    
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        // Detailed error messages based on code
        if (error.message.includes('Invalid login credentials')) {
            errorMsg.innerText = 'Incorrect email or password. Or User not found.';
        } else {
            errorMsg.innerText = error.message;
        }
    } else {
        window.location.href = 'index.html';
    }
}

// Initialize Auth State
supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'PASSWORD_RECOVERY') {
        document.getElementById('authView').style.display = 'none';
        document.getElementById('updatePasswordView').style.display = 'block';
    } else if (event === 'SIGNED_IN') {
        window.location.href = 'index.html';
    }
});

document.addEventListener('DOMContentLoaded', checkAuth);
