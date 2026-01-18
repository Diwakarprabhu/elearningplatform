<script src="app.js"></script>
const SUPABASE_URL = "https://tehrflzjvyhlagxbrljc.supabase.co";
const SUPABASE_KEY = "sb_publishable_lpe0686IVZLp6vtn3oGcZQ_YnLHQyPU";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// password hash
async function hashPassword(password) {
  const data = new TextEncoder().encode(password);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}
