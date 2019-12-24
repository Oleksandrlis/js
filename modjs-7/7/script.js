`use strict`;

const refs = {
  control: document.querySelector("#font-size-control[type=range]"),
  text: document.querySelector(`#text`)
};

refs.control.addEventListener(`input`, input => {
  let val = input.currentTarget;
  const value = input.currentTarget.value;
  refs.text.style.fontSize = value + "px";
  if (value < 50) {
    refs.text.classList.remove(`red`);
    refs.text.classList.add(`green`);
  } else {
    refs.text.classList.remove(`green`);
    refs.text.classList.add(`red`);
  }
});
