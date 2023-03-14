'use strict';

function calcAge(birthyear) {
  const age = 2023 - birthyear;
  console.log(firstName);
  function printAge() {
    let output = `You are ${age} years old and you were born on ${birthyear} `;

    if (birthyear >= 1981 && birthyear <= 1996) {
      const firstName = 'Thomas';
      const str = `Oh you're a millenial ${firstName}`;
      console.log(str);

      // Reassigning output for the outer scope vs creating an entirely new variable with const output = "new output";
      let output = 'new OUTPUT!';
    }
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Ian';

calcAge(1990);
