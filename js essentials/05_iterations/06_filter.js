const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num % 2 == 0);
console.log(newNums);

myNums.forEach((num) => {
  if (num % 2 == 0) {
    console.log(num);
  }
});

const newNums2 = myNums.filter((num) => {
  return num % 3 == 0;
});

console.log(newNums2);

const nums = [];

myNums.forEach((num) => {
  if (num % 2 != 0) {
    nums.push(num);
  }
});
console.log(nums);

const books = [
  {
    bookName: "The Shadow Code",
    genre: "Science Fiction",
    publishYear: 2012,
    editionYear: 2018,
  },
  {
    bookName: "Whispers in the Wind",
    genre: "Romance",
    publishYear: 2015,
    editionYear: 2020,
  },
  {
    bookName: "Echoes of Eternity",
    genre: "Fantasy",
    publishYear: 2010,
    editionYear: 2017,
  },
  {
    bookName: "The Quantum Paradox",
    genre: "Thriller",
    publishYear: 2018,
    editionYear: 2022,
  },
  {
    bookName: "Beneath the Crimson Sky",
    genre: "Historical Fiction",
    publishYear: 2009,
    editionYear: 2015,
  },
  {
    bookName: "Fragments of Us",
    genre: "Drama",
    publishYear: 2013,
    editionYear: 2019,
  },
  {
    bookName: "Digital Dust",
    genre: "Tech",
    publishYear: 2017,
    editionYear: 2021,
  },
  {
    bookName: "Gardens of Glass",
    genre: "Poetry",
    publishYear: 2011,
    editionYear: 2016,
  },
  {
    bookName: "The Forgotten Alchemist",
    genre: "Mystery",
    publishYear: 2008,
    editionYear: 2014,
  },
  {
    bookName: "Neon Saints",
    genre: "Cyberpunk",
    publishYear: 2020,
    editionYear: 2023,
  },
  {
    bookName: "Code of Silence",
    genre: "Crime",
    publishYear: 2016,
    editionYear: 2021,
  },
  {
    bookName: "The Ember Oracle",
    genre: "Fantasy",
    publishYear: 2014,
    editionYear: 2020,
  },
  {
    bookName: "Last Train to Avalon",
    genre: "Adventure",
    publishYear: 2007,
    editionYear: 2012,
  },
  {
    bookName: "Parallel Minds",
    genre: "Psychological Thriller",
    publishYear: 2019,
    editionYear: 2022,
  },
  {
    bookName: "Canvas of Dreams",
    genre: "Art & Culture",
    publishYear: 2010,
    editionYear: 2015,
  },
];

const userBooks = books.filter((item) => item.genre === "Tech");

console.log(userBooks);

const userBook = books.filter(
  (item) => item.publishYear >= 2010 && item.genre === "Art & Culture"
);
console.log(userBook);
