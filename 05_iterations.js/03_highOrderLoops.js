// for of loops

const arr = [100, 101, 102, 103, 104];

for (const num of arr) {
  console.log(num);
}

const heros = "spiderman";
for (const hero of heros) {
  console.log(`Each characters of ${heros}: ${hero}`);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

console.log(map);

for (const [key, value] of map) {
  console.log(key, " ", value);
}

const myObj = {
  1: "One",
  2: "Two",
  3: "Three",
};

// for (const [key, value] of myObj) {  // For of loops not work on objects
//   console.log(key, value);
// }
