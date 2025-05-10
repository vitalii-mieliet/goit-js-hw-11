import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common.key = '50190409-57f653f3b13017a76580224dc';
const params = {
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export function getImagesByQuery(query) {
  return axios('', {
    params: {
      q: query,
      key: '50190409-57f653f3b13017a76580224dc',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  }).then(res => res.data);
}

/*Список параметрів рядка запиту, які тобі обов'язково необхідно вказати:

key — твій унікальний ключ доступу до API.
q — слово для пошуку. Те, що буде вводити користувач.
image_type — тип зображення. Потрібні тільки фотографії, тому постав значення photo.
orientation — орієнтація фотографії. Постав значення horizontal.
safesearch — фільтр за віком. Постав значення true. 

https://pixabay.com/api/docs/#api_search_images
*/

//! Sorry, there are no images matching your search query. Please try again!
