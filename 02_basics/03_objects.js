// singleton
// Object.create(); // this is singleton and it is created by constructor and we will study late.

// object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "mike",
  "full Name": "mike ele",
  [mySym]: "myKey1",
  age: 21,
  location: "naveda",
  email: "mike@gmail.com",
  isLoggedIn: true,
  lastLoginDays: ["Monday", "Tuesday"],
};

// console.log(jsUser.name);
// console.log(jsUser["full Name"]);
// console.log(jsUser[mySym]);

jsUser.email = "chatgpt@gmail.com";
// Object.freeze(jsUser);
jsUser.email = "microsoft@gmail.com";
// console.log(jsUser["email"]);
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello JS users");
};
jsUser.greeting2 = function () {
  console.log(`Hello JS users, ${this["full Name"]}`); // values are refer by this method
};

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
