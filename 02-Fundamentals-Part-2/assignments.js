'use strict';

// Functions Assignment

// const describeCountry = function (country, population, capitalCity) {
//     return `${country} has a population of ${population} and its capital city is ${capitalCity}`;
// }

// console.log(describeCountry("Honduras", 200, "badplace"));
// describeCountry("Guatemala", 6000, "notgreatplace");
// describeCountry("Japan", 1000000, "Tokyo");

// // Function declarations vs expressions

// function percentageOfWorld1(population) {
//     const percentage = (population / 7900000000000) * 100;
//     return percentage;
// }

// const china = percentageOfWorld1(1441000000000);
// console.log(china);

// const percentageOfWorld2 = function (population) {
//     const percentage = (population / 7900000000000) * 100;
//     return percentage;
// }

// const percentageOfWorld3 = population => (population / 7900000000000) * 100;


// const describePopulation = function (country, population) {
//     const percentageOfWorld = percentageOfWorld1(population);
//     return `${country} has a population of ${population} which is about ${Math.round(percentageOfWorld)} percent of the world`
// }

// console.log(describePopulation("china", 1441000000000));
// // Arrays 
// const populations = [6000000, 144100000000, 330000000, 9000000];
// console.log(populations.length === 4);
// const percentagesOfPopulations = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

// console.log(percentagesOfPopulations)

// // Array Methods
// const neighbours = ["north korea", "russia", "india"];
// neighbours.push("utopia");
// neighbours.pop();

// if (!neighbours.includes("germany")) {
//     console.log("Probably not a central european country!");
// }

// neighbours[neighbours.indexOf("north korea")] = "korea";
// console.log(neighbours);

// // Objects 

// const country = {
//     country: "usa",
//     capital: "Washington DC",
//     language: "english",
//     population: 331000000,
//     neighbours: ["Mexico", "Canada"],
//     isIsland: false,
//     describe: function () {
//         const description = `My country is ${this.country} the capital is ${this.capital}, we speak ${this.language} our population consists of ${this.population} and is ${this.isIsland ? "an" : "not an"} island`;
//         return description;
//     }
// }

// console.log(country.describe());


// // for loops

// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter ${i} has voted`);
// }

// function percentageOfWorld1(population) {
//     const percentage = (population / 7900000000000) * 100;
//     return percentage;
// }

// const populations = [6000000, 1441000000000, 330000000, 9000000];
// const percentagesOfPopulations = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//     let newPercentage = percentageOfWorld1(populations[i]);
//     if (newPercentage === percentagesOfPopulations[i]) {
//         console.log("They are the same!");
//         percentages2.push(newPercentage);
//     }
// }



// console.log(percentages2)


const countries = [["Canada", "Mexico"], ["Germania"], ["Norway", "Russia", "Sweden"]];
const listOfNeighbours = []
for (let i = 0; i < countries.length; i++) {
    for (let j = 0; j < countries[i].length; j++) {
        if (countries[i][j] == "Canada" || countries[i][j] == "Mexico") {
            console.log(`you are our neighbor ${countries[i][j]}!`);
            listOfNeighbours.push(countries[i][j]);
        } else {
            console.log(`You are not my neighbour ${countries[i][j]}`)
        }

    }
}