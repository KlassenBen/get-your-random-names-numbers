// 'use strict';

// Selecting Elements
// --> Inputs and display
const body = document.querySelector('body');
const updateName = document.querySelector('#update-name');

//--> Inputs
const inputNames = document.querySelector('#names');
// const select = document.querySelector('#select');

// --> Buttons
const btnRand = document.querySelector('#btnnew-name');
const btnClearInput = document.querySelector('#btnclear-input');
const btnweekdays = document.querySelector('#use-weekdays');
const btnmonths = document.querySelector('#use-months');

//Building

//--> Varibles
// const selectedNames = select.options[select.selectedIndex].text;

//--> Arrays
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const colors = [
  '#ffebcd',
  '#a52a2a',
  '#deb887',
  '#d2691e',
  '#dc143c',
  '#006400',
  '#556b2f',
  '#8b008b',
  '#9400d3',
  '#b22222',
  '#ff00ff',
  '#ffd700',
  '#f08080',
  '#ff4500',
  '#6a5acd',
  '#ee82ee',
  '#9acd32',
];

//--> Functions
const randFunction = function (num) {
  const randNum = Math.trunc(Math.random() * num);

  return randNum;
};

const randNameUpdate = function () {
  if (inputNames.value === '') {
    inputNames.value = 'Input at least two names';
  }
  const arrNames = [];
  arrNames.push(inputNames.value.split(','));

  const num = randFunction(arrNames.flat(2).length);

  const name = arrNames.flat()[num];
  if (inputNames.value === 'Input at least two names') {
    updateName.textContent = 'Name';
  } else {
    updateName.textContent = name;
  }
};

const colorChange = function () {
  updateName.style.backgroundColor = colors[randFunction(colors.length)];
};

//--> Buttons
btnRand.addEventListener('click', function (e) {
  e.preventDefault();

  randNameUpdate();

  colorChange();
});

btnClearInput.addEventListener('click', function (e) {
  e.preventDefault();
  inputNames.value = '';
});

btnmonths.addEventListener('click', function (e) {
  inputNames.value = months.join(', ');
});
btnweekdays.addEventListener('click', function (e) {
  inputNames.value = weekdays.join(', ');
});
