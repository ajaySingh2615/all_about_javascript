// Immediately Invoked Function Expression (IIFE)

// Global scope ke pollution se problem hoti hai, tho uss global scope ke variable ko remove krne ke liye
// IIFE ka use kiya

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED ${name}`);
})("mike");
