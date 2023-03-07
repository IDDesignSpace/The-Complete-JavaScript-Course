'use strict';
// User Rolls Dice
//
// Selected Elements
const scoreElement1 = document.querySelector('#score--0');
const scoreElement2 = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');

diceElement.classList.add('hidden');
scoreElement1.textContent = 0;
scoreElement2.textContent = 0;
