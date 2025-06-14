let counter = document.querySelector(".counter");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let reset = document.getElementById("reset");
let message = document.querySelector("#message");

let count = 0;

increment.addEventListener("click", function (e) {
  e.preventDefault();
  count += 1;
  counter.innerHTML = `${count}`;
  message.innerHTML = ""
});

decrement.addEventListener("click", (e) => {
  e.preventDefault();
  if (count > 0) {
    count -= 1;
    counter.innerHTML = `${count}`;
  } else {
    message.innerHTML = "<span>Value can't go less than 0</span>"
  }
});

reset.addEventListener("click", (e) => {
  e.preventDefault();
  count = 0;
  counter.innerHTML = `${count}`;
  message.innerHTML= ""
});
