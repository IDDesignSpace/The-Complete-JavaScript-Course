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
let scores, currentScore, activePlayer, playing;
// Starting Conditions

const resetGame = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  currentScorePlayerOne.textContent = 0;
  currentScorePlayerTwo.textContent = 0;
  scoreText1.textContent = currentScorePlayerOne.textContent;
  scoreText2.textContent = currentScorePlayerTwo.textContent;
  playerOneSection.classList.remove('player--winner');
  playerTwoSection.classList.remove('player--winner');
  playerOneSection.classList.add('player--active');
  playerTwoSection.classList.remove('player--active');
};

resetGame();

// Change active player function

// const changeActivePlayer = function () {
//   //check  who the active player is, updates active player, and set the current score to zero
//   currentScore = 0;
//   if (activePlayer != 1) {
//     console.log('I am player #1');
//     activePlayer = 1;
//     playerOneSection.classList.add('player--active');
//     playerTwoSection.classList.remove('player--active');
//     console.log(typeof currentScorePlayerOne.textContent);
//     currentScore = Number(currentScorePlayerOne.textContent);
//   } else {
//     activePlayer = 2;
//     console.log('I am player #2');
//     playerOneSection.classList.remove('player--active');
//     playerTwoSection.classList.add('player--active');
//     currentScore = Number(currentScorePlayerTwo.textContent);
//   }
// };

function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerOneSection.classList.toggle('player--active');
  playerTwoSection.classList.toggle('player--active');
}

// Update player score
rollButton.addEventListener('click', function () {
  if (playing) {
    // 1. Generate new dice roll
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    console.log(diceRoll);
    // 2. Display dice roll

    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${diceRoll}.png`;

    // 3. Check if you rolled 1: if true change to next player
    //   return dice;
    if (diceRoll != 1 && currentScore != 100) {
      // Add dice to current score
      currentScore += diceRoll;
      // if (playerOneSection.classList.contains('player--active')) {
      //   currentScorePlayerOne.textContent = currentScore;
      // } else {
      //   currentScorePlayerTwo.textContent = currentScore;
      // }
      console.log(activePlayer);
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Checks who the active player is and then sets their score to 0 because they rolled a 1
      // if (playerOneSection.classList.contains('player--active')) {
      //   currentScorePlayerOne.textContent = 0;
      //   changeActivePlayer();
      // } else {
      //   currentScorePlayerTwo.textContent = 0;
      //   changeActivePlayer();
      // }
      currentScore = 0;
      scores[activePlayer] = 0;
      switchPlayer();
    }
  }
});

holdButton.addEventListener('click', function () {
  // Checks the state of playing Add current score to active players score
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    if (scores[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

// holdButton.addEventListener('click',changeActivePlayer);
newGameButton.addEventListener('click', resetGame);
