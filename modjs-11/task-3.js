// "use strict";

// const refs = {
//   days: document.querySelector('[data-value="days"]'),
//   hours: document.querySelector('[data-value="hours"]'),
//   mins: document.querySelector('[data-value="mins"]'),
//   secs: document.querySelector('[data-value="secs"]')
// };

// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this._selector = selector;
//     this._targetDate = targetDate;
//   }

//   changeTimer() {
//     setInterval(() => {
//         let time = this._targetDate - Date.now();
//         this.updateClockFace(time)
//       }, 1000);
//     }

//   updateClockFace(time) {
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     const secs = Math.floor((time % (1000 * 60)) / 1000);

//     refs.days.textContent = days;
//     refs.hours.textContent = hours;
//     refs.mins.textContent = mins;
//     refs.secs.textContent = secs;
//   }
// };

// const counter = new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jan 01, 2020"),
// });

// counter.changeTimer();