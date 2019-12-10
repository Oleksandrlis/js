`use strict`;
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let arr2 = [`a`, `b`, `c`, `d`, `e`];
// arr2.splice (2, Infinity, `sdsds`)
// console.log(arr2);

// let checkForSpam = function(str) {
//   let string = str.toLowerCase().split(` `);
//   for (const word of string) {
//     if (word.includes (`spam`) || word.includes (`sale`)) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// let input;
// const numbers = [];
// let total = 0;

// do {
//   input = prompt(`введите число`);
//   numbers.push(input);
// } while (input !== null);
// if (input === null) {
//   for (const value of numbers) {
//     total  += Number(value);
//   }
// }

// console.log(total);

// const allLogins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const addLogin = function(allLogins, login) {
//   if (login.length < 4 || login.length > 16) {
//     alert(`Ошибка! Логин должен быть от 4 до 16 символов`);
//   } else if (allLogins.includes(login)) {
//     alert(`Такой логин уже используется!`);
//   } else allLogins.push(login);
//   console.log(allLogins);
// };

// addLogin(allLogins, `122weffrww`);

let menu = {
  width: 200,
  height: 300,
  title: `My menu`
};

let multiplyNumeric = function(obj) {
  for (const key in obj) {
    if (typeof obj[key] === `number`) {
      obj[key] *= 2;
    }
  } console.log(obj);

};
multiplyNumeric (menu)


// var log = function(a, b, c) {
//     console.log(a, b, c);
//   };
  
//   log(  ...['Spread', 'Rest', 1122]);