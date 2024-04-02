/*
OOPS - OOPS are Procedure programming
Objects - collections of properties and methods

# why use OOPS? 
    Objects Literals
    
    - Constructor Functions
    - Prototypes
    - Classes
    - Instances (new, this)

## 4 pillars 
    - Abstraction
    - Encapsulations
    - Inheritance
    - Polymorphism
*/

const user = {
  username: "mike",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());

// Construction funtions

// const promise1 = new Promise();
// const data = new Date();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greetings = function () {
    console.log(`Welcome ${username}`);
  };
}

const userOne = new User("mike", 10, true);
const userTwo = new User("eleven", 10, true);
// const userThree = new User("eleven", 10, true);
console.log(userOne.constructor);
// console.log(userTwo);
// console.log(userThree);
