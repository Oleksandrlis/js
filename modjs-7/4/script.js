`use strict`;

let counterValue = 0;
const value = document.querySelector(`#value`);
let leftButton = document.querySelector(`button[data-action="decrement"]`);
let rightButton = document.querySelector(`button[data-action="increment"]`);
leftButton.addEventListener(`click`, () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
rightButton.addEventListener(`click`, () => {
    counterValue += 1;
    value.textContent = counterValue;
})

