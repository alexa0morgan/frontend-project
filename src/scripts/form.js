import { createArticle } from './createArticle.js';
import { setCorrectViewType } from './viewType.js';

const form = document.querySelector('#form');
const addButton = document.querySelector('#add-article-button');
const cancelButton = document.querySelector('#form-cancel-button');
const createButton = document.querySelector('#form-create-button');
const nameInput = document.querySelector('#article-name');
const imageInput = document.querySelector('#article-image');
const descriptionInput = document.querySelector('#article-description');

function clearForm() {
  nameInput.value = '';
  imageInput.value = '';
  descriptionInput.value = '';
}

function closeForm() {
  form.classList.add('interesting-articles__form--hidden');
  addButton.classList.remove('interesting-articles__add-article--hidden');
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
  createArticle(nameInput.value, imageInput.value, descriptionInput.value, new Date().toISOString());
  setCorrectViewType();
  closeForm();
  clearForm();
});
