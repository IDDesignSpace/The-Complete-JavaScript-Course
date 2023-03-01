'use strict';

// console.log(document.querySelector('.message').textContent);
// // Selects message
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 200008;

let newSecretNumber;
let numberOfAttempts = 1;
let highScoreNumber = 0;
let currentScore = 10;
const checkGuessButton = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const newGameButton = document.querySelector('.again');
const score = document.querySelector('.score');
const highScoreText = document.querySelector('.highscore');

//
const resetGame = function () {
  numberOfAttempts = 1;
  currentScore = 10;
  newSecretNumber = Math.trunc(Math.random() * 10) + 1;
  checkGuessButton.addEventListener('click', checkGuess);
  number.textContent = '?';
  message.textContent = '🚀 Start guessing ...';
  score.textContent = currentScore;
  guessInput.value = '';
  document.body.style.backgroundColor = 'BLACK';
  console.log(newSecretNumber);
};

const checkGuess = function () {
  // This is the check guess function
  const input = Number(guessInput.value);

  // Logic that checks the guess
  if (!input) {
    message.textContent = 'Type a number';
  } else if (input === newSecretNumber) {
    numberOfAttempts++;
    number.textContent = input;
    message.textContent = 'You did it 🔥';
    document.body.style.backgroundColor = 'green';
    number.style.width = '50%';
    // This sets the highscore
    if (highScoreNumber != 0 && numberOfAttempts < highScoreNumber) {
      highScoreNumber = numberOfAttempts;
      highScoreText.textContent = numberOfAttempts - 1;
    } else {
      highScoreNumber = numberOfAttempts;
      highScoreText.textContent = numberOfAttempts - 1;
      checkGuessButton.removeEventListener('click', checkGuess);
    }
  } else if (
    input > newSecretNumber &&
    numberOfAttempts != 10 &&
    currentScore != 0
  ) {
    message.textContent = 'Lower';
    numberOfAttempts++;
    currentScore--;
    score.textContent = currentScore;
    console.log(numberOfAttempts);
  } else if (
    input < newSecretNumber &&
    numberOfAttempts != 10 &&
    currentScore != 0
  ) {
    message.textContent = 'Higher';
    numberOfAttempts++;
    currentScore--;
    console.log(numberOfAttempts);
    score.textContent = currentScore;
  } else {
    score.textContent = 0;
    message.textContent = 'Game Over Friend';
    checkGuessButton.removeEventListener('click', checkGuess);
    document.body.style.backgroundColor = 'red';
  }
};

window.onload = resetGame();
newGameButton.addEventListener('click', resetGame);
checkGuessButton.addEventListener('click', checkGuess);

// const secretNumber = Math.trunc(Math.random() * 10) + 1;
// document.querySelector('.number').textContent;
// let score = 10;
// console.log(secretNumber);
// document.querySelector('.check').addEventListener('click', function () {
//   // This is the check guess function
//   const guess = Number(document.querySelector('.guess').value);

// Logic that checks the guess
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number';
//   } else if (guess == secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Number!';
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       score--;
//       document.querySelector('.message').textContent = 'Too High';
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You Lost';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       score--;
//       document.querySelector('.message').textContent = 'Too Low';
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You Lost';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
