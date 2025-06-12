const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const validGuess = document.querySelector(".validGuess");

const p = document.createElement("p");

let number = parseInt(Math.random() * 100 + 1);
let prevGuess = [];
let numGuess = 1;
let isPlay = true;
const MAX_GUSSES = 10

if (isPlay) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    validGuess.innerHTML = "Please enter a valid number";
  } else if (guess < 1) {
    validGuess.innerHTML = "Please enter a number more than one";
  } else if (guess > 100) {
    validGuess.innerHTML = "please enter a number between 1 to 100";
  } else {
    prevGuess.push(guess);
    if (numGuess === MAX_GUSSES) {
      displayGuess(guess);
      displayMessage(`Game Over!!! Random number was ${number}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === number) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < number) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > number) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${(MAX_GUSSES - numGuess) + 1}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = '<h2 id="newGame">Start new game</h2>';
  startOver.appendChild(p);
  isPlay = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    number = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${MAX_GUSSES - numGuess} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    isPlay = true;
  });
}
