let myDate = new Date();

console.log(myDate.toString());
console.log(typeof myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date(2024, 0, 23);
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getTime());
