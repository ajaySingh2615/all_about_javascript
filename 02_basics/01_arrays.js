// Arrays of javascript is resizable and contains a mix of different data types.
// Arrays are not associative arrays and so arrays elements cannot be accessed using arbitray strings,
// Javascript arrays are zero based indexed.
// Javascript array-copy operations creates shallow copies.

const arr = [0, 20, 30, 50, 60, 90];

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

const myHeros = ["iron man", "spiderman", "superman", "batman"];

const myHeros2 = new Array("eleven", "wanda");

console.log(myHeros.length);

// Arrays Methods

// myHeros2.push("mike");
// myHeros2.pop();
myHeros2.unshift(9); // adding elements in starting
myHeros2.shift(9); // removing elements form starting

console.log(myHeros2.includes("my"));
console.log(myHeros2.indexOf("my"));

// console.log(myHeros2);

const newArr = myHeros2.join();

// console.log(myHeros2);
// console.log(typeof newArr);

// Slice and Splice

console.log("A ", myHeros);
const myNewArray = myHeros.slice(0, 2);
console.log(myNewArray);
console.log("B ", myHeros);
console.log("=========================");
console.log("A ", myHeros);
const myNewArray2 = myHeros.splice(0, 2);
console.log(myNewArray2);
console.log("B ", myHeros);
