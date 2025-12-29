'use strict';

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

let secretNum = Math.trunc(Math.random() * 20) + 1;
;
const number = document.querySelector('.number');
const again = document.querySelector('.again');
let highScore = 0;
const highScoreText = document.querySelector('.highscore');
let score = 20;
const scoreText = document.querySelector('.score');

function displayMessage(message) {
    const messageText = document.querySelector('.message')
    messageText.textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    console.log(document.querySelector('.guess').value);

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
       displayMessage('No Number!');
    } else if (guess === secretNum) {
        displayMessage('🥳 Correct Number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        number.style.width = '30rem';
        number.textContent = secretNum;

        if (score > highScore) {
            highScore = score;
            highScoreText.textContent = highScore;
        }
    // Guess is wrong
    } else if (guess !== secretNum) {
        if (score > 1) {
            displayMessage(guess > secretNum ? 'Too High' : 'Too Low')
            score--
            scoreText.textContent = score;
        } else {
            displayMessage('You lost the game!')
            scoreText.textContent = 0;
        }
    } 
});

again.addEventListener('click', function() {
    number.textContent = '?';
    number.style.width = '15rem';
    score = 20;
    scoreText.textContent = score;
    displayMessage('Start Guessing...')
    document.querySelector('body').style.backgroundColor = '#222';
    secretNum = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = '';
})

