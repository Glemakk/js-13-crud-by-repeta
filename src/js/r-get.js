const BASE_URL = 'http://localhost:3000';

function fetchBooks() {
  return fetch(`${BASE_URL}/books`).then(res => res.json());
}

function fetchbookById(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`).then(res => res.json());
}

fetchBooks();

fetchbookById(2);
// fetch('http://localhost:3000/books')
//   .then(r => r.json())
//   .then(console.log);
