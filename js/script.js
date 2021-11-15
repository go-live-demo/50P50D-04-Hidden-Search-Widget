const search = document.querySelector('.search');
const searchBtn = document.querySelector('.search__btn');
const searchInput = document.querySelector('.search__input');

searchBtn.addEventListener('click', () => {
  search.classList.toggle('active');
  search.focus();
})