'use strict';

// Select Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currScore0El = document.getElementById('current--0');
const currScore1El = document.getElementById('current--1');
// Active Player logic TODO
let activePlayer = 0;
let diceRollScore = 0;
let currentScore = 0;

// scores
const scores = [0, 0];

// // Roll Dice Function
// function generateRandomRoll() {
//   const rndInt = Math.floor(Math.random() * 6) + 1;
//   return rndInt;
// }

// Starting con
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Add listener on
btnRoll.addEventListener('click', function () {
  const diceRollScore = Math.floor(Math.random() * 6) + 1;
  console.log(diceRollScore);

  // Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceRollScore}.png`;

  // Display current score - change based on current player

  // Check if 1
  if (diceRollScore !== 1) {
    currentScore += diceRollScore;
    //currScore0El.textContent = currentScore;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // change to player active class

    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // set score to zero
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
