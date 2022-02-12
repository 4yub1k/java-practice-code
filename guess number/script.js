'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = "Correct Number 😊";
document.querySelector('.number').textContent = 99;
document.querySelector('.score').textContent = 100;

document.querySelector('.guess').value = 50;
console.log(document.querySelector('.guess').value)
*/
let secretNumber = Math.trunc(Math.random() * 100); //math,trunc remove decimal points
console.log(secretNumber);
let score=50,guessCounter=5,highscore;

const resetGame = function () {
    secretNumber = Math.trunc(Math.random() * 100); //math,trunc remove decimal points
    document.querySelector('.message').textContent = 'Start guessing';
    document.querySelector('body').style.backgroundColor = '#585858';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.try').textContent=5;
    document.querySelector('.score').textContent=50;//default score
    document.querySelector('.guess').value='';
    document.querySelector('.check').disabled = false;
    console.log(secretNumber); //correct number

}

const tries = function (){
    guessCounter = Number(document.querySelector('.try').textContent);
    document.querySelector('.try').textContent=--guessCounter;
    if (guessCounter == 0) {
        document.querySelector('.message').textContent = 'You Lost 💀 !';
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.number').style.width = '20rem';
        document.querySelector('.check').disabled = true;
    }
    //console.log(guessCounter)
}

const checkNumber =  function () {
    const guess = Number(document.querySelector('.guess').value); //string to number, default string
    //console.log(guess-secretNumber);
    highscore = Number(document.querySelector('.highscore').textContent);
    const numberDifference = guess-secretNumber
    //console.log(guess)
    if (!guess) {
        document.querySelector('.message').textContent = " Empty ☠";
    }else if (guess==secretNumber){
        document.querySelector('.message').textContent = 'Hurray Correct 😎'
        //let score = document.querySelector('.score').textContent +=1;
        document.querySelector('.score').textContent=++score * 2; //or you can do with post but score-- it first then passing it here
        document.querySelector('body').style.backgroundColor = 'green' // or '#FFFF' any
        document.querySelector('.number').style.width = '20rem' 
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.check').disabled = true;
        if (score > highscore) {
            document.querySelector('.highscore').textContent = score * 2;
        }
        //let score = document.querySelector('.score').textContent +=1;
        //document.querySelector('.score').textContent=score;
    }else if (numberDifference >=10 && numberDifference <=100) {
        document.querySelector('.message').textContent = 'Too High';
        document.querySelector('.score').textContent=--score;
        tries();
    }else if (numberDifference >= -5 && numberDifference <= 5){
        document.querySelector('.message').textContent = 'Wo Too close 😉'
        document.querySelector('.score').textContent=--score;
        tries();
    }else {
        document.querySelector('.message').textContent = 'Too Low';
        document.querySelector('.score').textContent=--score;
        tries();
    }
}


document.querySelector('.check').addEventListener('click',checkNumber)
document.querySelector('.again').addEventListener('click',resetGame)
