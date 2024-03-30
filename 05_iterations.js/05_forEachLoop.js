const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (val) {
//   console.log(val);
// });

coding.forEach((val) => {
  //   console.log(val);
});

function printMe(item) {
  //   console.log(item);
}

// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  console.log(`Item is : ${item}, on index: ${index} and array is: ${arr}`);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
