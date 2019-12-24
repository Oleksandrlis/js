`use strict`;

let input = document.querySelector(`#name-input`);
let output = document.querySelector(`#name-output`);

input.addEventListener(`input`, event => {
  const elem = event.currentTarget.value;
  output.textContent = elem;
});
