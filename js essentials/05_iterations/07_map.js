const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nums = myNums.map((item) => item + 10);

console.log(nums);

// Chaining

const evenNums = myNums
  .map((item) => item + 10)
  .filter((item) => item % 2 == 0);
console.log(evenNums);

// const oddNums = myNums.map( (num) => num % 2 != 0 ).map( (num) => num + 10)
// console.log(oddNums)
