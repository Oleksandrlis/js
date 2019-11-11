let input;
const numbers = [];
let total = 0;
do { input = prompt ("Введите число");
    input != null && numbers.push(input);  
    total = total + Number(input);
} while (input !== null); 
console.log(numbers);

alert(`Общая сумма чисел равна ${total}`);

 
