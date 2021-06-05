import './sass/main.scss';
// import './js/async-await';
import movieListTpl from './templates/movie-list.hbs';
// import './js/axios';
import { fetchMovies } from './js/movie-service';

const refs = {
  cardMarkup: document.querySelector('.gallery'),
};

fetchMovies().then(data => makeMarkup(data));

function makeMarkup(movie) {
  refs.cardMarkup.insertAdjacentHTML('beforeend', movieListTpl(movie));
}

//---Репета HTTP-запросы (AJAX). REST-пагинация и бесконечный скрол - теория (13.04.2021) 1:40

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1.15, 2.3));

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
