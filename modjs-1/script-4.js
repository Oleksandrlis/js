// const credits = 23580;
// let pricePerDroid = 3000;
// let quantity = prompt("Какое колличество хотите купить?");
// let totalPrice = null;

// if (quantity !== null) {
//     if(quantity * pricePerDroid > credits ){
//         console.log(`more then  ${quantity * pricePerDroid - credits}`);
//     } else {
//         console.log(`you bay ${quantity} ----> ${quantity * pricePerDroid}  `);
//         console.log('object'  +quantity + 'tff' );
//     }
//   console.log("some code");
// } else {
//   alert("Отменено пользователем");
// }


const credits = 23580;
let pricePerDroid = 3000;
let quantity =  prompt("Какое колличество хотите купить?");
let totalPrice = quantity * pricePerDroid;

if (quantity !== null) {
    if (totalPrice > credits) {alert ("Недостаточно средств на счету!")
    }
    else if (totalPrice < credits)  alert  (`Вы купили ${quantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
    }
else {
    alert("Отменено пользователем");
}