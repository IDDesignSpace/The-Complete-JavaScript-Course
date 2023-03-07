'use strict';
// User Rolls Dice
//
// Selected Elements
const scoreText1 = document.querySelector('#score--0');
const scoreText2 = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const newGameButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const currentScorePlayerOne = document.querySelector('#current--0');
const currentScorePlayerTwo = document.querySelector('#current--1');
const playerOneSection = document.querySelector('.player--0');
const playerTwoSection = document.querySelector('.player--1');
let currentScore = 0;
let playerOneScore;
let playerTwoScore;
let activePlayer;

// Starting Conditions
const resetGame = function () {
  activePlayer = 1;
  playerOneScore = 0;
  playerTwoScore = 0;
  scoreText1.textContent = playerOneScore;
  scoreText2.textContent = playerTwoScore;
};

// Change active player function

const changeActivePlayer = function () {
  //check  who the active player is, updates active player, and
  if (activePlayer != 1) {
    activePlayer = 1;
    playerOneSection.classList.add('active');
    playerTwoSection.classList.remove('active');
  } else {
    activePlayer = 2;
    playerOneSection.classList.remove('active');
    playerTwoSection.classList.add('active');
  }
};

// Update player score
rollButton.addEventListener('click', function () {
  // 1. Generate new dice roll
  const diceRoll = Math.trunc(Math.random() * 6) + 1;
  console.log(diceRoll);
  // 2. Display dice roll

  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${diceRoll}.png`;

  // 3. Check if you rolled 1: if true change to next player
  //   return dice;
  if (diceRoll != 1) {
    // Add dice to current score
    currentScore += diceRoll;
    currentScorePlayerOne.textContent = currentScore;
  } else {
    currentScore = 0;
    currentScorePlayerOne.textContent = currentScore;
    // Change the active player
  }
});

holdButton.addEventListener('click', changeActivePlayer);
resetGame();
