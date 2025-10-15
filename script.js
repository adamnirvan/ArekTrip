
// Theme handling
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme') || 'light'; // default light
  if(saved === 'dark'){ root.classList.add('dark'); }
  const btn = document.getElementById('theme-toggle');
  if(btn){
    const setState = () => {
      const isDark = root.classList.contains('dark');
      btn.setAttribute('aria-pressed', String(isDark));
      btn.title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    };
    setState();
    btn.addEventListener('click', () => {
      root.classList.toggle('dark');
      localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
      setState();
    });
  }
})();

// Contact form validation
(function(){
  const form = document.getElementById('contact-form');
  if(!form) return;
  const out = document.getElementById('form-output');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const msg = form.message.value.trim();
    if(!name || !email || !msg){
      out.className = 'notice err';
      out.textContent = 'Semua kolom wajib diisi.';
      return;
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      out.className = 'notice err';
      out.textContent = 'Format email tidak valid.';
      return;
    }
    out.className = 'notice ok';
    out.textContent = 'Pesan berhasil dikirim. Terima kasih!';
    form.reset();
  });
})();
