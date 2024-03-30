const myObj = {
  1: "One",
  2: "Two",
  3: "Three",
};

// for in loops

for (const key in myObj) {
  //   console.log(`${key} values are ${myObj[key]}`);
}

const arr1 = [20, 50, 60, 80];

for (const key in arr1) {
  //   console.log(`${key} : ${arr1[key]}`);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

// for (const key in map) {
//   console.log(key);
// }
