// // Strict Mode - creates visible errors in the developer console
// 'use strict'

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D')

// // Functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// }

// fruitProcessor(2, 3);

// // Function Declaration vs Expressions

// // function declaration 
// function calcAge1(birthYear, currentYear) {
//     return currentYear - birthYear;
// }

// console.log(calcAge1(1990, 2023));


// // function expression - created by storing an anonymous function in a variable

// const calcAge2 = function (birthYear, currentYear) {
//     return currentYear - birthYear;
// }

// const age2 = calcAge2(1958, 2022);
// console.log(age2);


// // Arrow functions 

// const calcAge3 = birthYear => 2037 - birthYear;
// const age = calcAge3(1990);
// console.log(age);

// const yearsUntilRetirement = (birthYear, firstName, currentYear) => {
//     const age = currentYear - birthYear;
//     const retirement = 70 - age;
//     return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetirement(1990, "Ian"));
// const calcAge1 = function (birthYear, currentYear) {
//     const age = currentYear - birthYear;
//     return age;
// }

// const yearsUntilRetirement = function (birthYear, firstName, currentYear) {
//     const age = calcAge1(birthYear, currentYear);
//     const retirement = 70 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired.`);
//     }

// }

// console.log(yearsUntilRetirement(1990, "Ian", 2080));

// const friends = ["Penny", "Tony", "Krissy", "William", "Aubrey", "Ray", "Ron", "Tomone"];

// friends[1] = "Filip";
// friends[2] = "Karolina";

// const calcAge1 = function (birthYear, currentYear) {
//     return currentYear - birthYear;
// }

// const years = [1990, 2008, 2020, 2090, 3000];

// const age1 = calcAge1(years[0]);
// const age2 = calcAge1(years[1]);


// // Array methods
// const pets = [];
// // Adds an item to the end
// pets.push("penny");
// console.log(pets);
// // Adds an item to the end
// pets.unshift("Merlin");
// pets.push("Goldie the Goldfish");
// // Removes an item from the end and stores it in variable
// const popped = pets.pop();
// console.log(popped);

// // Removes an item from the beginning
// const unshifted = pets.shift();

// console.log(pets.indexOf("penny"));

// console.log(pets.includes("penny"));
// console.log(pets.includes("Gremlin"));
// pets.push(10);
// pets.push("rex");

// if (pets.includes("penny")) {
//     console.log("you have a pet named Penny");
// }

// OBJECTS

// const ianArray = ['Barkan', 'Ducharme', 1990]


// const ian = {
//     firstName: 'Ian',
//     lastName: 'Barkan-Ducharme',
//     age: 2023 - 1990,
//     job: "unemployed",
//     friends: ["Penny", "William"]
// }


// const nameKey = "Name";

// console.log(ian["first" + nameKey]);
// console.log(ian["last" + nameKey]);

// const interestedIn = prompt("What do you want to know about Ian? Choose between his last name, age, job, or his friends.");

// if (ian[interestedIn]) {
//     console.log(ian[interestedIn]);
// } else {
//     console.log("Thats not what hes willing to share with you.");
// }

// ian.location = "Philadelphia";
// ian["sports"] = ["Judo", "Jiujitsu", "Kickboxing"];

// // 

// console.log(`${ian.firstName} has ${ian.friends.length} and his best friend is ${ian.friends[0]}`);


const ian = {
    firstName: 'Ian',
    lastName: 'Barkan-Ducharme',
    age: 2023 - 1990,
    job: "unemployed",
    friends: ["Penny", "William"],
    getSummary: function () {
        const summary = `${this.firstName} is ${this.age} and is currently ${this.job}`;
        return summary;
    }
}



