'use strict';

// We read a property of the element we selected using DOM manipulation which is the textContent
// message is a class in the .html page
// console.log(document.querySelector('.message').textContent);

// //I select the class and I then edit it...
// document.querySelector('.message').textContent = 'Correct Number!🥳';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

// document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //when the user has not guessed yet!
  if (score > 0) {
    //when there is no input
    if (!guess) {
      displayMessage('No Number ⚠️');
    }

    //when player wins
    else if (guess === number) {
      displayMessage('Congratulations! 🥳');
      document.querySelector('.number').textContent = number;

      //we write just body to signify the elements name...
      document.querySelector('body').style.backgroundColor = '#60b347';
      //we always put the values in a string
      document.querySelector('.number').style.width = '30rem';

      // If the score obtained is larger than the highscore...
      if (score > highscore) {
        highscore = score;
        // document.querySelector('.labelHighscore').textContent =
        //   'New Highscore!:';
        document.querySelector('.highscore').textContent = highscore;
      }
    }

    //when guess is to low
    else if (guess < number) {
      displayMessage('Too Low! 😔');
      score--;
      document.querySelector('.score').textContent = score;
    }

    //when guess is too high
    else {
      displayMessage('Too High! 😯');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  //when the player loses the game
  else {
    displayMessage('You Lost the Game! 😔');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
