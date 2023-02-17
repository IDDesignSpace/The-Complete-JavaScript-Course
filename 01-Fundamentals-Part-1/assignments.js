// // Part 1: Values and Variables
// let country = "USA";
// let continent = "North America";
// let population = 331000000;

// console.log(country + " " + continent + " " + population);

// // Part 1: Data Types
// let isIsland = false;
// let populationOfUsa = 331000000;

// console.log(isIsland);
// console.log(population);
// console.log(country);


// // Part 1: let,var, and const
// let language = "English";

// const ageOfEarth = 4500000000;
// const COUNTRY_FOUNDED = 1776;

// // COUNTRY_FOUNDED = 2021;

// // Part 1: Basic Operators

// let halfThePopulation = population / 2;

// console.log(population + 1);

// let populationOfFinland = 6000000;
// let isPopulationGreaterThan = populationOfUsa > populationOfFinland;
// let averagePopulation = 33000000;
// let isBigCountry = averagePopulation > populationOfUsa;
// let description = "United State is in North America and its population is 331000000";

// // Part 1: Template literals
// let newDescription = `The ${country}  was founded in ${COUNTRY_FOUNDED} and it has a population of ${populationOfUsa} and it's national language is ${language}`;


// // Part 1: if/else statements
// if (populationOfUsa > 33000000) {
//     console.log(`The population of ${country} is above average.`)
// } {
//     console.log('The population is average');
// }

//  // Part 1: Type Coercion

// console.log('9' - '5');  // 4
// console.log('19' - '13' + '17');  // "617"
// console.log('19' - '13' + 17); // 23
// console.log('123' - '13 ' + 17); // 127
// console.log('123' < 57); //false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// Equality Operators

// let numNeighbours = Number(prompt());

// if (numNeighbours === 1) {
//     console.log("Only one border!");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border!");
// } else {
//     console.log("No Neighbors!");
// }

// Logical Operators

let country = "Canada";
let countryPopulation = 30000000;
let isIsland = false;
let language = "spanglish";

if (countryPopulation < 50000000 && isIsland === false && language == "english") {
    console.log("You should live in Canada!");
} else {
    console.log("you should research some different countries");
}

switch (language) {
    case "chinese":
    case "mandarin":
        console.log("MOST of the worlds native speakers");
        break;
    case "spanish":
        console.log("2nd most popular language");
        break;
    case "english":
        console.log("3rd most popular language");
        break;
    case "hindi":
        console.log("4th most popular language");
        break;
    case "arabic":
        console.log("5th most popular language");
        break;
    default:
        console.log("Thats a great langauge");
        break;
}

countryPopulation > 33000000 ? console.log("USA's pop is below average") : console.log("USA's population is above average.");