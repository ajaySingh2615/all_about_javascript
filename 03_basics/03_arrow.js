const user = {
  username: "mike",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to your website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// normal function
// function chai() {
//   let username = "mike";
//   console.log(this.username);
// }

// chai();

// expression function
// const chai = function () {
//   let username = "mike";
//   console.log(this.username);
// };

// chai();

// arrow function

const chai = () => {
  let username = "mike";
  console.log(this.username);
};

// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

const addTwo = (num1, num2) => num1 + num2; // implicit return
console.log(addTwo(7, 8));
