const articles = document.querySelector('#articles');
const listButton = document.querySelector('#button-list');
const gridButton = document.querySelector('#button-grid');
const articlePreviews = document.querySelectorAll('.article-preview');

function setViewTypeList() {
  listButton.classList.add('interesting-articles__bnt--active');
  gridButton.classList.remove('interesting-articles__bnt--active');
  articles.classList.add('interesting-articles__container--list');
  for (const item of articlePreviews) {
    item.classList.add('article-preview--horizontal');
  }
}

function setViewTypeGrid() {
  gridButton.classList.add('interesting-articles__bnt--active');
  listButton.classList.remove('interesting-articles__bnt--active');
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
