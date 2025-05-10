import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const formEl = document.querySelector('.js-form');
const gallery = document.querySelector('.js-gallery');
const loader = document.querySelector('.js-loader');

formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const query = event.target.elements['search-text'].value;
  showLoader(loader);

  getImagesByQuery(query)
    .then(data => {
      gallery.innerHTML = createGallery(data.hits);
      clearGallery();
    })
    .catch(error => {
      alert(error);
    })
    .finally(() => hideLoader(loader));
}
