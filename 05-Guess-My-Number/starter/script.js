'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

// Developer Option show to screen to answer - Debugging
//document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No Input
  if (!guess) {
    //document.querySelector('.message').textContent = '🚫 No number Entered!';
    displayMessage('🚫 No number Entered!');
    // When Player Wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    //document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // Implement in memory score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When player is wrong
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? '📈 Too High !' : '📉 Too Low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('💥 Lost Game');
      //document.querySelector('.message').textContent = '💥 Lost Game';
    }
  }
  // Too HIGH
  // else if (guess > secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = '📈 Too High !';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 Lost Game';
  //   }
  //   // Too LOW
  // } else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = '📉 Too Low !';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 Lost Game';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  //reset score variable to 20
  score = 20;

  // Developer Option show to screen to answer - Debugging
  //document.querySelector('.number').textContent = secretNumber;

  // Reset the secret number
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  //document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  // Restore the stylings
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  // Dev hack
  //document.querySelector('.number').textContent = secretNumber;
});
