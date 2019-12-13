import users from "./module.js";
`use strict`;

// task 1
// __________________________________________________________

// const getUserNames = users => {
//   const names = users.map(user => user.name);
//   return names;
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// task 2
// _____________________________________________________________

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// const getUsersWithEyeColor = (users, color) => {
//   const eyeColor = users.filter(user => user.eyeColor === color);
//   return eyeColor;
// };

// console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// task 3
// _______________________________________________________________

// // Получить массив имен пользователей по полу (поле gender).

// const getUsersWithGender = (users, gender) => {
//   const gend = users.filter(user => user.gender === gender).map(user => user.name)
//   return gend;
// };

// console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// task 4
// __________________________________________________________________

// Получить массив только неактивных пользователей (поле isActive).

// const getInactiveUsers = users => {
//   const deActive = users
//     .filter(user => user.isActive === false)
//     .map(user => user.name);
//   return deActive;
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// task 5
// ____________________________________________________________________

// Получить пользоваля (не массив) по email (поле email, он уникальный).

// const getUserWithEmail = (users, email) => {
//   const uniqueUser = users.find(user => user.email === email);
//   return uniqueUser;
// };

// console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// task 6
// _______________________________________________________________________

// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

// const getUsersWithAge = (users, min, max) => {
//   const people = users.filter(user => user.age > min && user.age < max);
//   return people;
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// task 7
// _________________________________________________________________________

// Получить общую сумму баланса (поле balance) всех пользователей.

// const calculateTotalBalance = users => {
//   const bal = users.reduce((totbalabce, user) => totbalabce + user.balance, 0);
//   return bal;
// };

// console.log(calculateTotalBalance(users)); // 20916

// task 8
// _____________________________________________________________________________

// Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) => {
//   const userFriend = users.reduce((acc, user) => {
//     if (user.friends.includes(friendName)) {
//       acc.push(user.name);
//     }
//     return acc;
//   }, []);

//   return userFriend;
// };
// console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// task 9
// ________________________________________________________________________________

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = users => {
//   const sortedElemen = users
//     .sort((userA, userB) => userA.friends.length - userB.friends.length)
//     .map(user => user.name);
//   return sortedElemen;
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// task 10
// ____________________________________________________________________________________

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений
//  и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = users => {
//   return users
//     .reduce((acc, user) => {
//       acc.push(...user.skills);
//       return acc;
//     }, [])
//     .filter((value, index, self) => {
//       return self.indexOf(value) === index;
//     })
//     .sort();
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud`]
