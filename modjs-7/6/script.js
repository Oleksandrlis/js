`use strict`;
let input = document.querySelector(`#validation-input[data-length = "6"]`);
let correctLength = input.dataset.length;
input.addEventListener(`blur`, input => {
  const element = input.currentTarget;
  const inputlength = element.value.length;
  if (correctLength == inputlength) {
    element.classList.add(`valid`);
  } else element.classList.add(`invalid`);
});
