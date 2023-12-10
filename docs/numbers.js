'use strict';

// Selecting Elements
// --> Inputs and display
const body = document.querySelector('body');
const newNumber = document.querySelector('#new-number');
const minNumber = document.querySelector('#first-number');
const maxNumber = document.querySelector('#last-number');
const diceImg = document.querySelector('#dice1');

// --> Buttons
const btnRand = document.querySelector('#btnnew-number');
const btnReset = document.querySelector('#btnreset');

//Building
const resetFunction = function () {
  minNumber.value = 1;
  maxNumber.value = 6;
  dice1.classList.add('hidden');
};
resetFunction();

const random = function (minInput, maxInput) {
  const min = Math.abs(minInput);
  const max = Math.abs(maxInput);
  dice1.classList.remove('hidden');
  if (min && max) {
    if (max > 6) {
      dice1.classList.add('hidden');
    } else {
      dice1.classList.remove('hidden');
    }
    const ran = Math.trunc(Math.random() * (max - (min - 1)) + 1) + (min - 1);
    newNumber.textContent = ran;
    if (ran <= 6) {
      diceImg.src = `dice-${ran}.png`;
    }
  } else {
    const ran = Math.trunc(Math.random() * 6) + 1;
    newNumber.textContent = ran;
    diceImg.src = `dice-${ran}.png`;
  }
};

btnRand.addEventListener('click', function () {
  const min = Number(minNumber.value);
  const max = Number(maxNumber.value);
  random(min, max);
});

btnReset.addEventListener('click', function (e) {
  e.preventDefault();
  resetFunction();
});
