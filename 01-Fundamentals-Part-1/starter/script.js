// // let js = 'amazing';
// // if (js == 'amazing') alert('JavaScript is the BAIN of my existence');

// // console.log('What\'s up NEW YORK');


// const now = 3036;
// const agePenny = now - 2020;
// const ageIan = now - 1990;

// console.log(agePenny * 2, agePenny / 10, 2 ** 3);

// // 2 ** 3 means 2 to the power of 3  = 2 * 2 * 2

// let x = 10 + 5;
// x += 10; // x = x + 10 = 25;
// x *= 4; // x = x * 4 = 100;
// x++; //x = x + 1;
// x--;
// x--;

// //Comparison Operators 

// console.log(agePenny > 100);

// const isACentarian = agePenny;
// console.log(now > 100);

// // Type Conversion
// const inputYear = '1990';

// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 32);

// console.log(Number("69"));
// console.log(String(47));

// console.log(Number("Jonas"))
// console.log(typeOf Number("Jonas"))
// console.log(String(23), 23);

// //Type Coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '5');
// console.log('23' / '5');

// // 5 Falsy values: 0, '',undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Ian'));
// console.log({});


// const money = 0;

// if (money) {
//     console.log("Don't spend it all");
// } else {
//     console.log("Get a job");
// }

// // 

// const age = 18;
// if (age === 18) console.log("Congrats on being an adult str");
// if (age === "18") console.log("Congrats on being an adult (loose)");

// const favorite = Number(prompt("What's your favorite number?"));

// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//     console.log('Cool! 23 is an amazing number!');
// } else if (favorite === 7) {
//     console.log('7 is also a cool number');
// } else if (favorite === 9) {
//     console.log("9 is also a cool number")
// }


// // Logical Operators 

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log("Give this girl a driver's license!")
// } else {
//     console.log("Keep her away from the car....");
// }

// const isTired = false;

// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Give this girl a driver's license!")
// } else {
//     console.log("Keep her away from the car....");
// }



// Switch Statements
const day = "monday";

switch (day) {
    case 'monday':
        console.log('Plan work for the week');
        break;
    case 'tuesday':
        console.log('User Experience Design Course');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('chill out');
        break;
    case 'friday':
        console.log('friday');
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend");
        break;
    default:
        // use for invalid option 
        console.log('Not a valid day');
}




// Ternary operator 

// Ternary operators are expressions not statements 
let age = 9;
age >= 18 ? console.log("You are old enough") : console.log("come back later");

age = 19;
const ofDrinkingAge = age >= 18 ? 'wine' : 'no wine';

let drink;

age >= 18 ? drink = "wine" : drink = "no wine";

console.log(drink);