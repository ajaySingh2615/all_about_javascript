let d = 400;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  //   console.log(d);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "ajay";

  function two() {
    const website = "youtube";
    console.log(`username: ${username}`);
  }

  //   console.log(`website: ${website}`);

  two();
}

// one();

if (true) {
  const username = "ajay";
  if (username === "ajay") {
    const website = " youtube";
    // console.log(username + website);
  }
}

console.log(addOne(5));
function addOne(num) {
  // Normal function
  return num + 1;
}

const addTwo = function (num) {
  // Expression function
  return num + 2;
};
console.log(addTwo(5));
