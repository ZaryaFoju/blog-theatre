// script.js
document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.querySelector('.sidebar');
  const btn = document.getElementById('btn');   // desktop/sidebar toggle inside sidebar
  const btn1 = document.getElementById('btn1'); // top / mobile hamburger

  function toggleSidebar() {
    sidebar.classList.toggle('active');
  }

  if (btn) btn.addEventListener('click', toggleSidebar);
  if (btn1) btn1.addEventListener('click', toggleSidebar);
});