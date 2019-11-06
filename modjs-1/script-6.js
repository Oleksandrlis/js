let result = 0;
let inputNumber;
do { inputNumber = prompt(
   "введите числа для суммирования, отмена для завершения"
  );
  result = result + Number(inputNumber);
 } while (inputNumber !== null);
console.log(`Общая сумма ${result}`);