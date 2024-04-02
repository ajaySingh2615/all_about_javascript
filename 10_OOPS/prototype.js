// let myName = "mike                   ";
// let myChannel = "chai       ";

// console.log(myName.truelength());

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.mike = function () {
  console.log(`mike is present in all objects`);
};

Array.prototype.heyMike = function () {
  console.log(`Mike says hello`);
};

// heroPower.mike();
// myHeros.mike();

myHeros.heyMike();
// heroPower.heyMike();

// inheritance

const user = {
  name: "Chai",
  email: "Chai@gmail.com",
};

const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: teachingSupport,
};

// teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher);

let anotherUserName = "chai         ";

String.prototype.truelength = function () {
  console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUserName.truelength();
