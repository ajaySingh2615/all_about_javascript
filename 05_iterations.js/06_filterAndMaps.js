// const coding = ["js", "ruby", "java", "python", "cpp"];

// const val = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });

// console.log(val);

// filter method

const myNums = [101, 102, 103, 104, 105, 106, 107, 108, 109];

// const numNums = myNums.filter((num) => {
//   return num > 4;
// });
// console.log(numNums);

// const newNums = [];

// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);

let books = [
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publish: "1960",
    edition: "First",
  },
  {
    title: "1984",
    genre: "Dystopian Fiction",
    publish: "1949",
    edition: "First",
  },
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publish: "1925",
    edition: "First",
  },
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    publish: "1951",
    edition: "First",
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publish: "1813",
    edition: "First",
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publish: "1960",
    edition: "Second",
  },
  {
    title: "1984",
    genre: "Dystopian Fiction",
    publish: "1949",
    edition: "Second",
  },
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publish: "1925",
    edition: "Second",
  },
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    publish: "1951",
    edition: "Second",
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publish: "1813",
    edition: "Second",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    genre: "Fantasy",
    publish: "1997",
    edition: "First",
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publish: "1937",
    edition: "First",
  },
  {
    title: "The Da Vinci Code",
    genre: "Thriller",
    publish: "2003",
    edition: "First",
  },
  {
    title: "The Hunger Games",
    genre: "Dystopian Fiction",
    publish: "2008",
    edition: "First",
  },
  {
    title: "Lord of the Flies",
    genre: "Fiction",
    publish: "1954",
    edition: "First",
  },
];

let userbooks = books.filter((bk) => bk.genre === "Fiction");
userbooks = books.filter((bk) => bk.publish >= String(2000));

console.log(userbooks);
