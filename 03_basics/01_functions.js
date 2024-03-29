function sayMyName() {
  console.log("mike");
}

sayMyName();

function addTwoNumbers(a, b) {
  return a + b;
}

const result = addTwoNumbers(10, 20);
console.log(result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("Please enter username");
    return;
  }
  return `${username} just logged in`;
}

const user1 = loginUserMessage();
// console.log(user1);

function calculateCartPrice(val1, val2, ...num) {
  return num;
}

// console.log(calculateCartPrice(100, 200, 300, 50000));

const user = {
  username: "mike",
  prices: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user);
handleObject({
  username: "ajay",
  price: 300,
});

const myNewArray = [200, 600, 700, 500];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
