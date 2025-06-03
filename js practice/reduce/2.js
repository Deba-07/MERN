// Use reduce() to find the maximum number in an array.

const nums = [1, 5, 9, 13, 17, 21, 50, 25, 29, 33, 37];

let acc = nums[0];
let maxNums = nums.reduce((acc, crr) => {
  if (crr > acc) {
    return crr;
  } else {
    return acc;
  }
});
console.log(maxNums);
