// Supabase Configuration
// Replace YOUR_SUPABASE_URL and YOUR_SUPABASE_ANON_KEY with your actual project details.

const SUPABASE_URL = 'https://ldnofuvixirscwqwjyrt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzkwNzY4MDIzLCJleHAiOjIxMDYzNDQwMjN9._hTkDP37k-jPVIe8-f39Kx3wZ32taFzmE6xWABc86-8';

// Initialize Supabase Client
window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
