// Синтаксис async/await
// Последовательные операции
// Паралельные операции с Promise.all()
// try...catch

function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
  };

  return new Promise((resolve, reject) => setTimeout(() => resolve(fruits[name]), 500));
}

//Выполняем параллельно
async function aMakeSmoothie() {
  try {
    console.time('aMakeSmoothie');
    const apple = getFruit('apple');
    const kiwi = getFruit('kiwi');
    const berry = getFruit('strawberry');

    const fruits = await Promise.all([apple, kiwi, berry]);
    console.log(fruits);
    console.timeEnd('aMakeSmoothie');

    return fruits;
  } catch (error) {
    console.log('Ошибка');
  }
}

// //Выполняем последовательно
// async function aMakeSmoothie() {
//   try {
//     console.time('aMakeSmoothie');
//     const apple = await getFruit('apple');
//     const kiwi = await getFruit('kiwi');
//     const berry = await getFruit('strawberry');

//     // const fruits = await Promise([apple, kiwi, berry]);
//     // console.log(fruits);
//     console.timeEnd('aMakeSmoothie');

//     return fruits;
//   } catch (error) {
//     console.log('Ошибка');
//   }
// }

aMakeSmoothie();

// async function fn () {}

// const fn  = async function () {}

// const arr = async () => {}

// const x = {
//   async getname () {}
// }

// class X {
//   async getName () {}
// }

const BASE_URL = 'http://localhost:4040';

async function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  //   const response = await fetch(`${BASE_URL}/books`, options);
  //   const newBook = await response.json();

  //   return newBook;
  const newBook = await fetch(`${BASE_URL}/books`, options).newBook.response.json();
  return newBook;
}
