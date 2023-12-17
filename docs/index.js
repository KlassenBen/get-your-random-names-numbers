"use strict";

// Selecting Elements
const welcomeMs = document.querySelector("#fr470");
const explainMs = document.querySelector("#fr569");
const body = document.querySelector("body");
const newNumber = document.querySelector("#new-number");
const newNumberContainer = document.querySelector("#number");
const minNumber = document.querySelector("#first-number");
const maxNumber = document.querySelector("#last-number");
const diceImg = document.querySelector("#dice1");
const frnumbers32 = document.querySelector("#fr32");
const frdice339 = document.querySelector("#fr339");
const frnames239 = document.querySelector("#fr239");
const frnumbers = document.querySelector("#frnumbers");
const frnames = document.querySelector("#frnames");
const frdice = document.querySelector("#frdice");

const newNameContainer = document.querySelector("#fr234");
const updateName = document.querySelector("#update-name");
const inputNames = document.querySelector("#names");
const btnnewName = document.querySelector("#btnnew-name");
const btnClearInput = document.querySelector("#btnclear-input");
const btnweekdays = document.querySelector("#use-weekdays");
const btnmonths = document.querySelector("#use-months");

const imgIndLogo = document.querySelector("#img-ind-logo");

// start dice
const TSumOfDice = document.querySelector("#tfr360num");

const conUseDice = document.querySelector("#fr349");
const conNotUseDice = document.querySelector("#fr352");

const btnThrowDice = document.querySelector("#btnthrow-dice");
// end dice

// --> Buttons
const btnnames = document.querySelector("#btnnames");
const btndice = document.querySelector("#btndice");
const btnnumbers = document.querySelector("#btnnumbers");

const btnRand = document.querySelector("#btnnew-number");
const btnReset = document.querySelector("#btnreset");
const btnGotIt = document.querySelector("#btngot-it");

//Building

class App {
  #months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  #weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  #colors = [
    "#ffebcd",
    "#a52a2a",
    "#deb887",
    "#d2691e",
    "#dc143c",
    "#006400",
    "#556b2f",
    "#8b008b",
    "#9400d3",
    "#b22222",
    "#ff00ff",
    "#ffd700",
    "#f08080",
    "#ff4500",
    "#6a5acd",
    "#ee82ee",
    "#9acd32",
  ];

  constructor() {
    this._init();
    this._events();
  }

  _init() {
    this._resetNumbers();
    this._initDice();
    this._onbording();
    // this._initDice();
  }

  _onbording() {
    welcomeMs.style.transform = "translateY(190%)";
    setTimeout(function () {
      welcomeMs.style.opacity = "0";
      welcomeMs.style.rotate = "-60deg";
      setTimeout(function () {
        welcomeMs.style.display = "none";
        explainMs.style.transform = "translateY(500px)";
        setTimeout(function () {
          explainMs.style.transform = "translateY(0px)";
        }, 10000);
      }, 1400);
    }, 3000);
  }

  _initDice() {
    // conUseDice.removeChild(conUseDice.firstElementChild);
    // const html = '<img src="images/black-1.png" alt="" height="200px" />';
  }

  _displayDice() {
    imgIndLogo.src = "images/dice-logo.png";
    btnnames.classList.remove("btnactive");
    btnnames.classList.add("btnnonactive");

    btndice.classList.remove("btnnonactive");
    btndice.classList.add("btnactive");

    btnnumbers.classList.remove("btnactive");
    btnnumbers.classList.add("btnnonactive");

    frnumbers.style.transform = "translateX(0)";
    frdice.style.transform = "translateX(-100%)";
    frnames.style.transform = "translateX(-100%)";
  }

  _displayNames() {
    imgIndLogo.src = "images/names-logo.png";
    btnnames.classList.remove("btnnonactive");
    btnnames.classList.add("btnactive");

    btndice.classList.add("btnnonactive");
    btndice.classList.remove("btnactive");

    btnnumbers.classList.remove("btnactive");
    btnnumbers.classList.add("btnnonactive");

    frnames.style.transform = "translateX(0)";
    frdice.style.transform = "translateX(0%)";
    frnumbers.style.transform = "translateX(0%)";
  }

  _displayNumbers() {
    imgIndLogo.src = "images/numbers-logo.png";
    btnnames.classList.remove("btnactive");
    btnnames.classList.add("btnnonactive");

    btndice.classList.add("btnnonactive");
    btndice.classList.remove("btnactive");

    btnnumbers.classList.add("btnactive");
    btnnumbers.classList.remove("btnnonactive");

    frnames.style.transform = "translateX(-200%)";
    frdice.style.transform = "translateX(-200%)";
    frnumbers.style.transform = "translateX(-200%)";
  }
  //

  //

  //

  //

  //

  //

  //

  //
  _resetNumbers() {
    minNumber.value = 1;
    maxNumber.value = 6;
    newNumber.textContent = 5;
  }

  _random(min, max) {
    const ran = Math.trunc(Math.random() * (max - (min - 1)) + 1) + (min - 1);
    return ran;
  }

  _getRandomNumber() {
    const min = Number(minNumber.value);
    const max = Number(maxNumber.value);
    newNumber.textContent = this._random(min, max);
    this._animateNumber(0.3, 1, 7, -8);
  }

  // names here

  _randFunction(num) {
    const randNum = Math.trunc(Math.random() * num);
    return randNum;
  }

  _randNameUpdate() {
    if (inputNames.value === "") {
      inputNames.value = "Input at least two names";
    }
    const arrNames = [];
    arrNames.push(inputNames.value.split(","));

    const num = this._randFunction(arrNames.flat(2).length);

    const name = arrNames.flat()[num];
    if (inputNames.value === "Input at least two names") {
      updateName.textContent = "Name";
    } else {
      updateName.textContent = name;
    }
  }

  _colorChange() {
    updateName.style.backgroundColor = colors[randFunction(colors.length)];
  }

  _animateName(deg, time, degplus, degminus) {
    let curdeg = 0;
    const rotate = setInterval(function () {
      curdeg += deg;

      if (curdeg <= degplus) {
        newNameContainer.style.rotate = `${curdeg}deg`;
      } else {
        clearInterval(rotate);

        const rotateback = setInterval(function () {
          curdeg -= deg;

          if (curdeg >= degminus) {
            newNameContainer.style.rotate = `${curdeg}deg`;
          } else {
            clearInterval(rotateback);

            const rotateZero = setInterval(function () {
              curdeg += deg;

              if (curdeg <= 0) {
                newNameContainer.style.rotate = `${curdeg}deg`;
              } else {
                clearInterval(rotateZero);
              }
            }, time);
          }
        }, time);
      }
    }, time);
  }

  _animateNumber(deg, time, degplus, degminus) {
    let curdeg = 0;
    const rotate = setInterval(function () {
      curdeg += deg;

      if (curdeg <= degplus) {
        newNumberContainer.style.rotate = `${curdeg}deg`;
      } else {
        clearInterval(rotate);

        const rotateback = setInterval(function () {
          curdeg -= deg;

          if (curdeg >= degminus) {
            newNumberContainer.style.rotate = `${curdeg}deg`;
          } else {
            clearInterval(rotateback);

            const rotateZero = setInterval(function () {
              curdeg += deg;

              if (curdeg <= 0) {
                newNumberContainer.style.rotate = `${curdeg}deg`;
              } else {
                clearInterval(rotateZero);
              }
            }, time);
          }
        }, time);
      }
    }, time);
  }

  _animateDice(deg, time, degplus, degminus) {
    let curdeg = 0;
    const rotate = setInterval(function () {
      curdeg -= deg;
      console.log(curdeg);

      if (curdeg >= degplus) {
        // conUseDice.style.rotate = `${curdeg}deg`;
        conUseDice.style.transform = `translateY(${curdeg}%`;
      } else {
        console.log("done");
        clearInterval(rotate);

        const rotateback = setInterval(function () {
          curdeg += deg;

          if (curdeg <= degminus) {
            // conUseDice.style.rotate = `${curdeg}deg`;
            conUseDice.style.transform = `translateY(${curdeg}%`;
          } else {
            clearInterval(rotateback);

            const rotateZero = setInterval(function () {
              curdeg -= deg;

              if (curdeg >= 0) {
                // conUseDice.style.rotate = `${curdeg}deg`;
                conUseDice.style.transform = `translateY(${curdeg}%`;
              } else {
                clearInterval(rotateZero);
              }
            }, time);
          }
        }, time);
      }
    }, time);
  }

  _newName() {
    this._randNameUpdate();

    this._animateName(0.3, 1, 2.3, -3.5);
  }

  _choseMonth() {
    inputNames.value = this.#months.join(", ");
  }
  _choseWeekdays() {
    inputNames.value = this.#weekdays.join(", ");
  }
  _clearNamesInput() {
    inputNames.value = "";
  }

  _setDice() {
    while (conUseDice.firstChild) {
      conUseDice.removeChild(conUseDice.firstChild);
    }
  }

  _throwDice() {
    this._animateDice(0.5, 1, -10, 3);
    let sum = 0;
    const colors = [];
    const arrLength = conUseDice.childElementCount;
    let html = ``;

    for (let i = 0; i < arrLength; i++) {
      const color = conUseDice.children[i].getAttribute("data-color");
      colors.push(color);
    }

    for (let i = 0; i < colors.length; i++) {
      const num = this._random(1, 6);

      html += `<img
      class="imgdice-use"
      src="images/${colors[i]}-${num}.png"
      data-color="${colors[i]}"
      data-number="${num}"
      alt=""
    />`;
    }
    this._setDice();
    conUseDice.insertAdjacentHTML("beforeend", html);

    for (let i = 0; i < arrLength; i++) {
      const number = conUseDice.children[i].getAttribute("data-number");
      // colors.push(color);
      sum += Number(number);
    }
    TSumOfDice.textContent = sum;
  }

  _events() {
    //  numbers here
    btnRand.addEventListener("click", this._getRandomNumber.bind(this));

    btnReset.addEventListener("click", this._resetNumbers.bind(this));
    btnnames.addEventListener("click", this._displayNames.bind(this));

    btndice.addEventListener("click", this._displayDice.bind(this));

    btnnumbers.addEventListener("click", this._displayNumbers.bind(this));

    // names here
    btnnewName.addEventListener("click", this._newName.bind(this));

    btnClearInput.addEventListener("click", this._clearNamesInput.bind(this));

    btnmonths.addEventListener("click", this._choseMonth.bind(this));
    btnweekdays.addEventListener("click", this._choseWeekdays.bind(this));

    //

    conUseDice.addEventListener("click", function (e) {
      if (e.target.classList.contains("imgdice-use")) {
        let html;

        html = `<img
        class="imgdice-not-use"
        src="images/${e.target.dataset.color}-${e.target.dataset.number}.png"
        data-color="${e.target.dataset.color}"
        data-number="${e.target.dataset.number}"
        alt=""
      />`;

        console.log(html);
        console.log(e.target.dataset.color);
        e.target.remove();

        conNotUseDice.insertAdjacentHTML("beforeend", html);
      }
    });

    conNotUseDice.addEventListener("click", function (e) {
      if (e.target.classList.contains("imgdice-not-use")) {
        let html;

        html = `<img
        class="imgdice-use"
        src="images/${e.target.dataset.color}-${e.target.dataset.number}.png"
        data-color="${e.target.dataset.color}"
        data-number="${e.target.dataset.number}"
        alt=""
      />`;

        e.target.remove();

        conUseDice.insertAdjacentHTML("beforeend", html);
      }
    });

    btnThrowDice.addEventListener("click", this._throwDice.bind(this));

    btnGotIt.addEventListener("click", function () {
      explainMs.style.transform = "translateY(0px)";
    });
  }

  //
}
const app = new App("here");

// and App here

//--> Buttons
