(function() {
  const toggle = document.getElementById('navToggle');
  const navbar = document.getElementById('navbarNav');

  if (toggle && navbar) {
    toggle.addEventListener('click', () => {
      navbar.classList.toggle('hidden');
    });
  }
})();
