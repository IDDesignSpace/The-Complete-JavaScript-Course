'use strict';

// console.log(document.querySelector('.message').textContent);
// // Selects message
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 200008;

const checkGuessButton = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');

const generateNewNumber = function () {
  const myNumber = Math.floor(Math.random() * 10);
  return myNumber;
};

checkGuessButton.addEventListener('click', function () {
  const input = Number(guessInput.value);

  if (!guess) {
  } else if (input === number) {
    number.textContent = input;
  }
});
