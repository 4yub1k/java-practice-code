'use strict';

const modal = document.querySelector('.window');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-window');
const btnOpen = document.querySelectorAll('.show-window');

console.log(btnOpen)

const buttonClicked = function (){
    console.log('Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i=0;i< btnOpen.length;i++) {
    btnOpen[i].addEventListener('click',buttonClicked);
}

btnClose.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})