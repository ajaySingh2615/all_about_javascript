const nums = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110];

// const newNums = nums.map((num) => num + 10);

const newNums = nums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 1041);

// console.log(newNums);
// console.log(nums);

// Reduce method
const numbers = [1, 2, 3, 4, 5];

const myTotal = numbers.reduce((acc, currNum) => {
  return acc + currNum;
}, 0);

console.log(myTotal);
