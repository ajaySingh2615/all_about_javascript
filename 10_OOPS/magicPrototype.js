function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(), typeof multipleBy5);
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Score is ${this.score}`);
};

const chai = new createUser("chai", 25);
const tea = createUser("Tea", 250);

chai.printMe();

/*
Here's what happens behind the scences when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new javascript objects.

A prototype is linked: The newly created object gets linked to the prototype property of the 
constructor functions. This means that it has access to properties and methods defined on the 
constructors prototype.

The constructor is called: The constructor function is called with the specified arguments and
this is bound to the newly created objects. If no explicit return values is specified from the
constructor. Javascript assume this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't 
return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
