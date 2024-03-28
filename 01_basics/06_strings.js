const name = "mike";
const repoCount = 50;

// console.log(name + repoCount);

// console.log(`Hello, my name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String("mike");
console.log(gameName);
console.log(gameName.length);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("k"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(0, 4);
console.log(anotherString);

const newString1 = "   mike   ";
console.log(newString1.trim());

const url = "https://ajay.com/hitesh%20choudhary";
console.log(url.replace("%20", "-"));
console.log(gameName.split("-"));
