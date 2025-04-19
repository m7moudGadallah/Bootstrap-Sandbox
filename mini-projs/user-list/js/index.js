import './bootstrap.bundle.js';
import { userCardComponent } from './user-card.component.js';
import { users } from './users.data.js';

// Handling Themes
var theme = localStorage.getItem('theme') ?? 'dark';
const themeBtnGroup = document.querySelector('#themeBtnGroup');
document.documentElement.setAttribute('data-bs-theme', theme);
Array.from(themeBtnGroup.children).forEach(btn => {
  btn.addEventListener('click', e => {
    const btnTheme = btn.dataset.theme;
    if (btnTheme == 'dark' || btnTheme == 'light') {
      theme = btnTheme;
      localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-bs-theme', theme);
    }
  });
});

// Enable Tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)
);

document.getElementById('userCardsContainer').innerHTML = users
  .map(user => userCardComponent(user))
  .join('');
