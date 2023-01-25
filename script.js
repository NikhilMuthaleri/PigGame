'use strict';
//selecting elements
/*
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const buttonRoll = document.querySelector('.btn--roll');
const buttonNew = document.querySelector('.btn--new');
const buttonHold = document.querySelector('.btn--hold');

const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//current score storing
const scores = [0, 0];
let currentScore = 0;//currentScore
let activePlayer = 0;
//rolling dice functionality
buttonRoll.addEventListener('click', function () {
    //1. generating a random dice roll
    const diceNo = Math.trunc(Math.random() * 6) + 1;
    //2.display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNo}.png`;
    //3.check for rolled 1
  if (diceNo !== 1) {
    currentScore += diceNo;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
  }
  
})
*/

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const buttonNewgame = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
dice.classList.add('hidden');

let scores, currentScore, activePlayer,playing;

const init = function () { 

   scores = [0, 0];
   currentScore = 0;
   activePlayer = 0;
   playing = true;

  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  dice.classList.remove('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

};

init();
const switching = function () {
  if (playing) {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
    currentScore = 0;   
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

  }
}


buttonRoll.addEventListener('click', function () {
  if (playing) {
    const diceNum = Math.trunc(Math.random() * 6) + 1;

    dice.src = `dice-${diceNum}.png`;
    dice.classList.remove('hidden');

    if (diceNum !== 1) {
      currentScore += diceNum;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    } else {
      switching();
    }
  }
})



buttonHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 20) {

      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      
      dice.classList.add('hidden');

      switching();
    }
  }
})

buttonNewgame.addEventListener('click', init);
