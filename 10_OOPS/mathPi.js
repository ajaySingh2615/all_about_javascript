const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvaliable: true,
};

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
