const form = document.querySelector('#form');
const addButton = document.querySelector('#add-article-button');
const cancelButton = document.querySelector('#form-cancel-button');
const createButton = document.querySelector('#form-create-button');
const nameInput = document.querySelector('#article-name');
const imageInput = document.querySelector('#article-image');
const descriptionInput = document.querySelector('#article-description');

const options = {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
};
const dateFormatter = new Intl.DateTimeFormat('en-US', options);

function clearForm() {
  nameInput.value = '';
  imageInput.value = '';
  descriptionInput.value = '';
}

function closeForm() {
  form.classList.add('interesting-articles__form--hidden');
  addButton.classList.remove('interesting-articles__add-article--hidden');
}

function createArticle(aName, image, description) {
  const articleElement = document.createElement('article');
  articleElement.classList.add('interesting-articles__article-preview', 'article-preview');

  const imgElement = document.createElement('img');
  imgElement.classList.add('article-preview__image');
  imgElement.src = image;
  imgElement.alt = 'Баннер статьи';

  const bodyElement = document.createElement('div');
  bodyElement.classList.add('article-preview__body');

  const titleElement = document.createElement('h3');
  titleElement.classList.add('article-preview__title');
  titleElement.textContent = aName;

  const descriptionElement = document.createElement('p');
  descriptionElement.classList.add('article-preview__description');
  descriptionElement.textContent = description;

  const footerElement = document.createElement('div');
  footerElement.classList.add('article-preview__footer');

  const timeElement = document.createElement('time');
  const date = new Date();
  timeElement.dateTime = date.toISOString();
  timeElement.textContent = dateFormatter.format(date);

  const readTimeElement = document.createElement('span');
  const randNumber = Math.floor(Math.random() * (100 - 1) + 1);
  readTimeElement.textContent = ' · ' + randNumber.toString() + ' min read';

  footerElement.appendChild(timeElement);
  footerElement.appendChild(readTimeElement);

  bodyElement.appendChild(titleElement);
  bodyElement.appendChild(descriptionElement);
  bodyElement.appendChild(footerElement);

  articleElement.appendChild(imgElement);
  articleElement.appendChild(bodyElement);

  const articlesContainer = document.querySelector('#articles');
  articlesContainer.appendChild(articleElement);
}

addButton.addEventListener('click', () => {
  form.classList.remove('interesting-articles__form--hidden');
  addButton.classList.add('interesting-articles__add-article--hidden');
});

cancelButton.addEventListener('click', () => {
  closeForm();
  clearForm();
});

createButton.addEventListener('click', () => {
  createArticle(nameInput.value, imageInput.value, descriptionInput.value);
  closeForm();
  clearForm();
});
