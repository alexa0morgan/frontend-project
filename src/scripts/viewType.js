const articles = document.querySelector('#articles');
const listButton = document.querySelector('#button-list');
const listIcon = listButton.querySelector('svg');
const gridButton = document.querySelector('#button-grid');
const gridIcon = gridButton.querySelector('svg');
const articlePreviews = document.querySelectorAll('.article-preview');

function setViewTypeList() {
  listIcon.classList.add('interesting-articles__icon--active');
  gridIcon.classList.remove('interesting-articles__icon--active');
  articles.classList.add('interesting-articles__container--list');
  for (const item of articlePreviews) {
    item.classList.add('article-preview--horizontal');
  }
}

function setViewTypeGrid() {
  gridIcon.classList.add('interesting-articles__icon--active');
  listIcon.classList.remove('interesting-articles__icon--active');
  articles.classList.remove('interesting-articles__container--list');
  for (const item of articlePreviews) {
    item.classList.remove('article-preview--horizontal');
  }
}

listButton.addEventListener('click', () => {
  setViewTypeList();
  localStorage.setItem('viewType', 'list');
});

gridButton.addEventListener('click', () => {
  setViewTypeGrid();
  localStorage.setItem('viewType', 'grid');
});

const viewType = localStorage.getItem('viewType');

if (viewType === 'list') {
  setViewTypeList();
} else {
  setViewTypeGrid();
}
