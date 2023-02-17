/* 
    Use the BMI example from Challenge #1, and the code you already wrote, and
    improve it.

    Print a nice output to the console, saying who has the higher BMI. The message
    is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

    Use a template literal to include the BMI values in the outputs. Example: "Mark's
    BMI (28.3) is higher than John's (23.9)! 
*/

// DATA SET #1
// let markMass = 95;
// let markHeight = 1.95;
// let johnMass = 85;
// let johnHeight = 1.76;

// DATA SET #2
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.88;

// Calculate both their BMIs using the formula
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

// Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John
const markHigherBMI = markBMI > johnBMI;
const johnHigherBMI = markBMI < johnBMI;

// Print a nice output to the console, saying who has the higher BMI.The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"


if (markBMI > johnBMI) {
    console.log(`Mark's BMI is higher!`);
    console.log(`Mark's BMI is ${markBMI} and John's BMI is ${johnBMI}`)
    console.log(`Mark's BMI is ${markBMI - johnBMI} higher than Johns`);
} else {
    console.log(`John's BMI is higher!`);
    console.log(`Johns BMI is ${johnBMI} and Mark's BMI is ${markBMI}`)
    console.log(`John's BMI is ${johnBMI - markBMI} higher than Marks`);
}



