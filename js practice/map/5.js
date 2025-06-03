// Use map() to format an array of numbers as currency strings (e.g., $10).

const nums = [2, 3, 4, 5, 6];

let currencyString = nums.map(function (item) {
  let toStrings = item.toString();
  return "$" + toStrings;
});

console.log(currencyString);
