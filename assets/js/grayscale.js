(function() {
  const toggle = document.getElementById('navToggle');
  const navbar = document.getElementById('navbarNav');

  if (toggle && navbar) {
    toggle.addEventListener('click', () => {
      navbar.classList.toggle('hidden');
    });
  }

  const arrow = document.getElementById('dropdown-button');
  if (arrow) {
    arrow.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
  }

  window.scrollTo(0, 0);
})();
