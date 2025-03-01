function toggleMenu() {
  const menu = document.getElementById('menu');
  const overlay = document.getElementById('menuOverlay');

  if (menu.classList.contains('active')) {
    closeMenu();
  } else {
    menu.classList.add('active');
    overlay.style.display = 'block';
  }
}

function closeMenu() {
  const menu = document.getElementById('menu');
  const overlay = document.getElementById('menuOverlay');
  menu.classList.remove('active');
  overlay.style.display = 'none';
}

function toggleDropdownMobile() {
  const dropdownMobile = document.getElementById('dropdownMobile');
  dropdownMobile.style.display = (dropdownMobile.style.display === 'block') ? 'none' : 'block';
}
