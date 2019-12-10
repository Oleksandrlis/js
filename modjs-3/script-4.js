`use strict`;

function script4() {
let countTotalSalary = function(employees) {
  let total = 0;
  let values = Object.values(employees);
  for (const value of values) {
    total += value;
  }
  return total;
};
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330
}