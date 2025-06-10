const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "<span>Please enter a valid height</span>";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "<span>Please enter a valid weight</span>";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;

    const message = document.querySelector('#message')
    if (bmi < 18.6){
        message.innerHTML = '<span>You are under weight</span>'
    } else if(bmi >= 18.6 && bmi <= 24.9){
        message.innerHTML = '<span>Your weight is in normal range</span>'
    } else {
        message.innerHTML = '<span>You are over weight</span>'
    }
  }
});
