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
const currentScoreText = document.querySelector('.current-score');
const playerOneSection = document.querySelector('.player--0');
const playerTwoSection = document.querySelector('.player--1');
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
  switch (diceRoll) {
    case 1:
      console.log('i am working ');
      diceElement.classList.remove('hidden');
      diceElement.src = 'dice-1.png';
      break;
    case 2:
      diceElement.src = 'dice-2.png';
      diceElement.classList.remove('hidden');
      break;
    case 3:
      diceElement.src = 'dice-3.png';
      diceElement.classList.remove('hidden');
      break;
    case 4:
      diceElement.src = 'dice-4.png';
      diceElement.classList.remove('hidden');
      break;
    case 5:
      diceElement.src = 'dice-5.png';
      diceElement.classList.remove('hidden');
      break;
    case 6:
      diceElement.src = 'dice-6.png';
      diceElement.classList.remove('hidden');
      break;
  }
  // 3. Check if you rolled 1: if true change to next player
  //   return dice;
  if (diceRoll === 1) {
    changeActivePlayer();
  }
});

holdButton.addEventListener('click', changeActivePlayer);
resetGame();
