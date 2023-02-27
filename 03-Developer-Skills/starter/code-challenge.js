// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!

// Understand
//How do I iterate over a name and number?
// How do I calculate what day?
//How do I add on to string based on how many items there are in the array?

// Sub-problems
// Accept an array of data
// Create initial Message
// Iterate over temperatures
//
// Create a string that tells you what the temperature will be and in how many days based on the position of the item in the array

// Iterate over
// Test data:
// Data 1: [17, 21, 23]
// Data 2: [12, 5, -5, 0, 4]

'use strict';

const printForecast = function (temperatures) {
  let maxTemperatures = temperatures;
  let thermometerMessage = '...';
  for (let i = 0; i < maxTemperatures.length; i++) {
    thermometerMessage += `${maxTemperatures[i]}ºC in ${i + 1} days...`;
  }

  return thermometerMessage;
};

console.log(printForecast([17, 21, 23]));
