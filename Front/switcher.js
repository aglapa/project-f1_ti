const themeSelect = document.getElementById('theme-select');

const savedTheme = localStorage.getItem('f1-theme') || 'default';
document.documentElement.setAttribute('data-theme', savedTheme);
themeSelect.value = savedTheme;

themeSelect.addEventListener('change', (e) => {
  const selectedTheme = e.target.value;
  document.documentElement.setAttribute('data-theme', selectedTheme);
  localStorage.setItem('f1-theme', selectedTheme);
});