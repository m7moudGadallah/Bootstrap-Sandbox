import './bootstrap.bundle.js';
import { users } from './users.js';
import { userCardComponent } from './user-card.component.js';

// Selecting Elements
const themeBtns = document.querySelectorAll('.theme-btn');
const userCardsContainer = document.getElementById('usersContainer');

// Dark Mode Handling
themeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.dataset.theme;
    themeBtns.forEach(btn => btn.classList.remove('active'));
    btn.classList.add('active');
    document.documentElement.setAttribute('data-bs-theme', theme);
  });
});

// Load users
userCardsContainer.innerHTML = users
  .map(user => userCardComponent(user))
  .join('');
