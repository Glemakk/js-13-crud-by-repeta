const refs = {
  cardMarkup: document.querySelector('.gallery'),
};

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjliYmQyY2JiZTQzNTMzOWI5YjBhY2ExYzZjYWE5NCIsInN1YiI6IjU5ZjlmNmEzOTI1MTQxN2RjYTAwMGI5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VJBSXU4O82Yx3hwHZ7IyXWHh5vTdKERdKcNSINzrddQ';
// //-----------------------------------------------------------
// fetch('https://api.themoviedb.org/3/movie/76341', {
//   headers: {
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjliYmQyY2JiZTQzNTMzOWI5YjBhY2ExYzZjYWE5NCIsInN1YiI6IjU5ZjlmNmEzOTI1MTQxN2RjYTAwMGI5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VJBSXU4O82Yx3hwHZ7IyXWHh5vTdKERdKcNSINzrddQ',
//   },
// })
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error(response.statusText);
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log(error));
// //-----------------------------------------------------------

axios
  .get('/movie/76341')
  .then(response => console.log(response))
  .catch(error => console.log(error));

// //------------тоже самое с fetch

// fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
//   headers: {
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjliYmQyY2JiZTQzNTMzOWI5YjBhY2ExYzZjYWE5NCIsInN1YiI6IjU5ZjlmNmEzOTI1MTQxN2RjYTAwMGI5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VJBSXU4O82Yx3hwHZ7IyXWHh5vTdKERdKcNSINzrddQ',
//   },
// })
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error(response.statusText);
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log(error));
// //-----------------------------------------------------------

axios
  .get('/movie/now_playing?language=en-US&page=1')
  .then(response => {
    console.log(response.data.results);
    makeMarkup(response.data.results);
  })
  .catch(error => console.log(error));

//------------------------------------------------------
//------запрос с помощью axios за json данными
// //axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// axios
//   .get('/todos/1')
//   .then(response => console.log(response))
//   .catch(error => console.log(error));

// axios
//   .get('/todos/2')
//   .then(response => console.log(response))
//   .catch(error => console.log(error));

// axios
//   .get('/users/3')
//   .then(response => console.log(response))
//   .catch(error => console.log(error));
//-------------------------------------------------------------------

// //------------стандартный fetch про который можно забыть
// const BASE_URL = 'https://jsonplaceholder.typicode.com';

// fetch(`${BASE_URL}/todos/1`)
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error(response.statusText);
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// fetch(`${BASE_URL}/todos/2`)
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error(response.statusText);
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// fetch(`${BASE_URL}/users/3`)
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error(response.statusText);
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

function makeMarkup(response) {
  refs.cardMarkup.insertAdjacentHTML('beforeend', movieListTpl(response));
}

// makeMarkup();
