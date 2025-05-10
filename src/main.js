import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  simpleLightbox,
} from './js/render-functions';

const formEl = document.querySelector('.js-form');
const gallery = document.querySelector('.js-gallery');
const loader = document.querySelector('.js-loader');

formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();
  if (query === '') {
    iziToast.warning({
      position: 'topRight',
      message: 'Please enter the correct query!',
    });
    return;
  }
  clearGallery();
  showLoader(loader);

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.warning({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        clearGallery();
        return;
      }

      gallery.innerHTML = createGallery(data.hits);
      simpleLightbox.refresh();
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        position: 'topRight',
        message: `ERROR: ${error}`,
      });
    })
    .finally(() => {
      hideLoader(loader);
      formEl.reset();
    });
}
