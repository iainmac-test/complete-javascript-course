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

// Init valiables in init function but not initialised
let currentScore, scores, activePlayer, playing;

const init = function () {
  // CURRENT SCORES AND SCORES RESET
  score0El.textContent = 0;
  score1El.textContent = 0;
  currScore0El.textContent = 0;
  currScore1El.textContent = 0;
  // Make DICE hidden
  diceEl.classList.add('hidden');
  // REMOVE WINNER CLASS
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  // INIT SCORES
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  playing = true;
};

// Load init on start up
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // set score to zero
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Starting con
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Add listener on
btnRoll.addEventListener('click', function () {
  if (playing) {
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
      switchPlayer();
    }
  } else {
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. ADD CURRENT SCORE TO ACTIVE PLAYER
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. CHECK PLAYER SCORES >= 100
    // FINISH THE GAME
    if (scores[activePlayer] >= 100) {
      // Stop the game - set game state to be false disables the button listeners for btnRoll and btnHold
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      // STOP THE GAME
    } else {
      // 3. SWITCH THE PLAYER
      switchPlayer();
    }
  } else {
  }
});

btnNew.addEventListener('click', init);
