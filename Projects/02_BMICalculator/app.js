const form = document.querySelector("form");

const result = document.querySelector("#results");
console.log(result);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === " " || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height";
  }
});
