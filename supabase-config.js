// Supabase Configuration
var SUPABASE_URL = "https://ldnofuvixirscwqwjyrt.supabase.co";
var SUPABASE_ANON_KEY = "sb_publishable_LenL_Wy4iGWxbzmXciwIwg_37I0CajG";

// Initialize Supabase Client
if (!window.supabase || !window.supabase.auth) {
    if (window.supabase && typeof window.supabase.createClient === 'function') {
        window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
}

var supabase = window.supabase;
window.supabaseClient = window.supabase;

