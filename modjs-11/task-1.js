"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const refs = {
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body")
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

refs.start.addEventListener("click", (event) => {
    event.target.disabled = true;
    refs.stop.disabled = false;
    console.log(event.target);
    
  timerId = setInterval(() => {
    refs.body.style.cssText = `background-color: ${
      colors[randomIntegerFromInterval(0, colors.length)]
    }`;
  }, 1000);
});

refs.stop.addEventListener("click", () => {
    event.target.disabled = true;
    refs.start.disabled = false;
  clearInterval(timerId);
});