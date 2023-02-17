"use strict";
// Coding Challenge 1

// const calcAverage = (score1, score2, score3) => {
//     const average = (score1 + score2 + score3) / 3;
//     return average;
// };

// const checkWinner = function (teamOneName, teamOneAverage, teamTwoName, teamTwoAverage) {

//     if (teamOneAverage >= teamTwoAverage * 2) {
//         return `${teamOneName} beat ${teamTwoName} ${teamOneAverage} to ${teamTwoAverage}`
//     } else if (teamTwoAverage >= teamOneAverage * 2) {
//         return `${teamTwoName} beat ${teamOneName} ${teamTwoAverage} to ${teamOneAverage}`
//     } else {
//         return `No One Won!`;
//     }

// }

// const koalasAverage = calcAverage(65, 54, 49);
// const doplhinsAverage = calcAverage(23, 34, 27);

// console.log(checkWinner("Koalas", koalasAverage, "Dolphins", doplhinsAverage));

//Coding Challenge 2
// const bills = [125, 555, 44];
// const tips = [];
// const totals = [];
// const calcTip = function (bill) {
//     if (bill >= 50 && bill <= 300) {
//         return bill * .15;
//     } else {
//         return bill * .20;
//     }
// }

// for (let i = 0; i < bills.length; i++) {
//     tips.unshift(calcTip(bills[i]));
//     totals.unshift(calcTip(bills[i]) + bills[i]);

// }
// console.log(tips);
// console.log(totals);

//Coding Challenge 3

// const MARK_MILLER = {
//     firstName: "Mark",
//     lastName: "Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         const BMI = this.mass / this.height ** 2;
//         this.BMI = BMI;
//         return this.BMI;
//     }
// }

// const JOHN_SMITH = {
//     firstName: "John",
//     lastName: "Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         const BMI = this.mass / this.height ** 2;
//         this.BMI = BMI;
//         return this.BMI;
//     }
// }
// if (JOHN_SMITH.calcBMI() > MARK_MILLER.calcBMI()) {
//     console.log(`${JOHN_SMITH.firstName + " " + JOHN_SMITH.lastName}'s BMI is greater than ${MARK_MILLER.firstName + " " + MARK_MILLER.lastName}`);
// } else {
//     console.log(`${MARK_MILLER.firstName + " " + MARK_MILLER.lastName}'s BMI is greater than ${JOHN_SMITH.firstName + " " + JOHN_SMITH.lastName}`);
// }

// console.log(JOHN_SMITH.BMI);

// Code Challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i]);
}

function calcAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));
