/* Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter). */

// Store Mark's and John's mass and height in variables
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.88;

// // Calculate both their BMIs using the formula
// let markBMI = markMass / markHeight ** 2;
// let johnBMI = johnMass / johnHeight ** 2;
// // Create a Boolean variable 'markHigherBMI' containing information about
// // whether Mark has a higher BMI than John

// console.log(markBMI);
// console.log(johnBMI);

// const markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI)

let markMass = 95;
let markHeight = 1.95;
let johnMass = 85;
let johnHeight = 1.76;

// Calculate both their BMIs using the formula
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
// Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John

console.log(markBMI);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI)