const start = document.getElementById("start");
const stop = document.getElementById("stop");
const body = document.querySelector("body");

function getColor() {
  const letters = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let intervalId = null;

start.addEventListener("click", function () {
  let bodyColor = function () {
    body.style.backgroundColor = getColor();
  };
  if (intervalId === null) {
    intervalId = setInterval(bodyColor, 2000);
  }
});

stop.addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
});
