const accoundId = 14453;
let accountEmail = "ajaysingh261526@gmail.com";
var password = "12345";
accountCIty = "Jaipur";
let accoundState;

// accoundId = 2; //not allowed

accountEmail = "hcl@gmail.com";
password = "2121";
accountCIty = "jhansi";

console.log(accoundId);
console.table([accoundId, accountEmail, password, accountCIty, accoundState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
