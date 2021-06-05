import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjliYmQyY2JiZTQzNTMzOWI5YjBhY2ExYzZjYWE5NCIsInN1YiI6IjU5ZjlmNmEzOTI1MTQxN2RjYTAwMGI5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VJBSXU4O82Yx3hwHZ7IyXWHh5vTdKERdKcNSINzrddQ';

export const fetchMovies = async () => {
  const newCard = await axios.get('/movie/now_playing?language=en-US&page=1');
  const response = await newCard.data.results;

  return response;
};

// export const fetchMovies = async () => {
//   return axios
//     .get('/movie/now_playing?language=en-US&page=1')
//         .then(response => response.data.results);

// };
