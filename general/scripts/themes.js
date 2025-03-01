// объект с соответствием темы и пути к иконке
const themeIcons = {
  'theme-neon': 'general/images/theme-neon-icon.png',
  'theme-dark': 'general/images/theme-dark-icon.png',
  'theme-light': 'general/images/theme-light-icon.png'
};

// функция для переключения показа выпадающего меню выбора темы
function toggleThemeMenu() {
  const menu = document.getElementById('theme-menu');
  menu.classList.toggle('show');
}

// функция для установки темы по выбору из меню
function setTheme(option) {
  const selectedTheme = option.getAttribute('data-theme');
  const body = document.body;
  
  body.classList.add('theme-transition');
  body.classList.remove('theme-neon', 'theme-dark', 'theme-light');
  body.classList.add(selectedTheme);
  updateThemeIcon(selectedTheme);
  localStorage.setItem('theme', selectedTheme);
  document.getElementById('theme-menu').classList.remove('show');
  
  setTimeout(() => {
    body.classList.remove('theme-transition');
  }, 500);
}

// функция для обновления иконки в кнопке выбора темы
function updateThemeIcon(theme) {
  const toggleButtonImg = document.getElementById('theme-toggle').querySelector('img');
  if (themeIcons[theme]) {
    toggleButtonImg.src = themeIcons[theme];
  }
}

// применяем сохраненную тему при загрузке страницы и обновляем иконку
window.addEventListener('load', function() {
  const savedTheme = localStorage.getItem('theme') || 'theme-neon';
  document.body.classList.remove('theme-neon', 'theme-dark', 'theme-light');
  document.body.classList.add(savedTheme);
  updateThemeIcon(savedTheme);
});
