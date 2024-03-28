let score = "33";
// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

// 1 => true
// " " => false
// "mike" => true

let someNumner = 33;
let stringNumber = String(someNumner);
// console.log(stringNumber, typeof stringNumber);

// ****************************************** Operations ***********************************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 * 2);
// console.log(2 - 2);
// console.log(2 ** 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = "hello";
let str2 = " mike";
let str3 = str1 + str2;
// console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1);
console.log(num2);
console.log(num3);

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

let a = 2;
let b = a++;

console.log(a);
