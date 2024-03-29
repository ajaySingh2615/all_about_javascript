const marvel_heros = ["thor", "ironman", "captain america"];
const dc_heros = ["superman", "wonder women", "flash"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros];
console.log(allNewHeros);

const anotherArray = [1, 2, 3, 4, [9, 10, 11, 12], 99, [101, 102, [103, 55]]];
const useableAnotherArray = anotherArray.flat(Infinity);
console.log(useableAnotherArray);

console.log(Array.isArray("mike"));
console.log(Array.from("mike"));
console.log(Array.from({ name: "mike" })); //interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
