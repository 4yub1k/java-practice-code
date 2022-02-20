'use strict';

const score0Ele = document.querySelector('#score--0');
const score1Ele = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const player0Ele = document.querySelector('.player--0');
const player1Ele = document.querySelector('.player--1');

const diceE1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentPlayer=0, scores = [0,0,0,0], diceNumber, winScore=50;
//scores = [player1 score, player2 score, total score player1, total score player2]

score0Ele.textContent = 0;
score1Ele.textContent = 0;
diceE1.classList.add('hidden');
player0Ele.classList.add('player--active');
//player1Ele.classList.toggle('player--active');
const changePlayer = function () {
    player1Ele.classList.toggle('player--active');
    player0Ele.classList.toggle('player--active');
}

const winnerCheck = function (currentPlayer) {
    if (scores[currentPlayer] >= winScore) {
        btnRoll.disabled = true;
        btnHold.disabled = true;
        diceE1.classList.add('hidden');
        document.querySelector(`#win--${currentPlayer}`).classList.remove('hidden');
        document.querySelector(`#current--${currentPlayer}`).textContent = 0;
        document.querySelector(`#score--${currentPlayer}`).textContent = scores[currentPlayer+2];
        document
          .querySelector(`.player--${currentPlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${currentPlayer}`)
          .classList.remove('player--active');
      }
    }

const rollDice = function () {
    diceNumber = Math.floor(Math.random() *6) + 1;//0 to 6, or use 7
    console.log(diceNumber);
    //dice-diceNumber.png
    diceE1.classList.remove('hidden');
    diceE1.src = `dice-${diceNumber}.png`; // change attribute
    if (diceNumber !== 1) {
        scores[currentPlayer] += diceNumber;
        scores[currentPlayer+2] += diceNumber; //jump to next index by 2
        //document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
        document.getElementById(`current--${currentPlayer}`).textContent = scores[currentPlayer];

    }else {
        if (currentPlayer){
            scores[currentPlayer] = 0;
            current1.textContent = 0;
            currentPlayer = 0;
            changePlayer();

        }else {
            scores[currentPlayer] = 0;
            current0.textContent = 0;
            currentPlayer = 1;
            changePlayer();

        }
    }
    winnerCheck(currentPlayer);
    
}

const holdDice = function () {
    console.log('HOLD :',diceNumber, 'Current player : ',currentPlayer)
    //for seperately checking on dice number
    /*if (diceNumber == 1) { 
        btnHold.disabled = true;
    }*/
    winnerCheck(currentPlayer);
    if (scores[currentPlayer]!=0 && diceNumber!=1){
        if (currentPlayer){ //if current player value 1(2) then,
            console.log(`Player 2 scores ${scores[1]}`);
            score1Ele.textContent = scores[currentPlayer+2];
            currentPlayer = 0;
            changePlayer();
            //console.log(scores);

        }else {
            console.log(`Player 1 scores ${scores[0]}`);
            score0Ele.textContent = scores[currentPlayer+2];
            currentPlayer = 1;
            changePlayer();
            //console.log(scores);

        }
    }else {
        //use ternary for 0 and 1 checks
        if (currentPlayer){
            scores[currentPlayer]=0;
        }else {
            scores[currentPlayer]=0;
        }
        //console.log(scores);
    }
}

const newDice = function () {
    score0Ele.textContent = 0;
    score1Ele.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    scores = [0,0,0,0]
    diceE1.classList.add('hidden');
    btnRoll.disabled = false;
    btnHold.disabled = false;
    document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--winner');
    document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--active');
}

btnRoll.addEventListener('click',rollDice);
btnHold.addEventListener('click',holdDice);
btnNew.addEventListener('click',newDice);