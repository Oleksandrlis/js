let input;
const numbers = [];
let total = 0;

do {
  input = prompt(`введите число`);
  numbers.push(input);
} while (input !== null);
if (input === null) {
  for (const value of numbers) {
    total += Number(value);
  }
}

console.log(total);
