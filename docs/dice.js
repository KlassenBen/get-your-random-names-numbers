'use strict';

// Selecting Elements
// --> Inputs and display
const body = document.querySelector('body');
const containerDice = document.querySelector('#container-dices');
const NumberDice = document.querySelector('#number-dice');
const dice1 = document.querySelector('#dice1');

// --> Buttons
const btnRand = document.querySelector('#btnthrow');
const btnPlus = document.querySelector('#btnadd-dice');
const btnSubtr = document.querySelector('#btndelete-dice');
//Building

//--> Varibles
let numDice = 1;
let numThrow = 1;
const arrDice = [dice1];

//--> Setings
NumberDice.textContent = numDice;

//--> Functions

const random = function (min, max) {
  const ran = Math.trunc(Math.random() * (max - (min - 1)) + 1) + (min - 1);

  return ran;
};

const addDice = function () {
  numDice = numDice + 1;
  numThrow = numThrow + 1;
  NumberDice.textContent = numDice;
  const htmlInsert = `<span> <img src="dice-${numDice}.png" alt="dice-5" height="120" id="dice${numDice}" /></span>`;
  containerDice.insertAdjacentHTML('beforeend', htmlInsert);
};

const delDice = function () {
  numDice = numDice - 1;
  numThrow = numThrow - 1;
  NumberDice.textContent = numDice;
  const dice1 = document.querySelector(`#dice${numDice + 1}`);
  dice1.remove(dice1);
};

const realRand = function (min, max) {
  for (let rep = 1; rep <= numThrow; rep++) {
    {
      console.log(`loop ${rep}`);
      const ran = Math.trunc(Math.random() * (max - (min - 1)) + 1) + (min - 1);
      if (ran <= 6) {
        const diceCurr = document.querySelector(`#dice${rep}`);

        diceCurr.src = `dice-${ran}.png`;
        console.log(diceCurr);
      }
    }
  }
};

//--> Buttons
btnRand.addEventListener('click', function (e) {
  e.preventDefault();
  realRand(1, 6);
});

btnPlus.addEventListener('click', function (e) {
  e.preventDefault();

  if (numDice < 6) {
    addDice();
  }
});
btnSubtr.addEventListener('click', function (e) {
  e.preventDefault();
  if (numDice > 1) {
    delDice();
  }
});
