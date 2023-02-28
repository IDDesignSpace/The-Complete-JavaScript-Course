// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//Problem:
// We work for a company building a smart home thermometer. Our most recent task is:
// given an array of temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error

// Understanding the problem
// What is Temperature altitude and how is it calculated? Difference between min and max temps.
//What is an error and what do we do with it?

//Breaking problem into smaller problems
// How do we ignore an error?
// How do we find max temp?
// How do we find min temp?
// Subtract min from max and return it?

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calculateTempAmplitude = function (temps) {
//   const temperatures = temps;
//   // Test number
//   let maxNumber = 0;
//   let minNumber = 0;
//   for (let i = 0; i < temperatures.length; i++) {
//     if (typeof temperatures[i] !== 'number') continue;
//     if (minNumber > temperatures[i]) {
//       minNumber = temperatures[i];
//     }
//     if (maxNumber < temperatures[i]) {
//       maxNumber = temperatures[i];
//     }
//   }

//   return `The temperature amplitude is ${minNumber - maxNumber}`;
// };

// console.log(calculateTempAmplitude(temperatures));

// const calculateTempNewAmplitude = function (temps1, temps2) {
//   const temperatures = temps1.concat(temps2);
//   // Test number
//   let maxNumber = 0;
//   let minNumber = 0;
//   for (let i = 0; i < temperatures.length; i++) {
//     if (typeof temperatures[i] !== 'number') continue;
//     if (minNumber > temperatures[i]) {
//       minNumber = temperatures[i];
//     }
//     if (maxNumber < temperatures[i]) {
//       maxNumber = temperatures[i];
//     }
//   }

//   return `The temperature amplitude is ${minNumber - maxNumber}`;
// };

// console.log(calculateTempNewAmplitude(temperatures, [45, 8000]));

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // A: Fix
    value: prompt('Degrees Celsius'),
  };
  // B: Find
  console.log(measurement);
  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
