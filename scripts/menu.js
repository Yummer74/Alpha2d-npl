// открытие и закрытие мобильного меню
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

// закрытие меню при клике вне его области
function closeMenu() {
  const menu = document.getElementById('menu');
  const overlay = document.getElementById('menuOverlay');
  menu.classList.remove('active');
  overlay.style.display = 'none';
}

// аереключение выпадающего меню NPL в мобильной версии
function toggleDropdownMobile() {
  const dropdownMobile = document.getElementById('dropdownMobile');
  dropdownMobile.style.display = (dropdownMobile.style.display === 'block') ? 'none' : 'block';
}
