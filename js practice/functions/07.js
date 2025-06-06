// Create a function that takes an array and a callback, and returns a new array where the callback is applied to each item (like a custom map).

const customMap = (arr, callback) => {
  if (!Array.isArray(arr)) {
    console.log("The first argument must be an array");
  }
  if (typeof callback !== "function") {
    console.log("The second argument must be a callback function");
  }
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(callback(arr[i], i));
  }
  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = customMap(numbers, (num) => num * 2);
console.log(doubleNumbers);
