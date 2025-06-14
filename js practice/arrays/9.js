// Write a function to merge two sorted arrays into a single sorted one.

function sortedArr(arr1, arr2) {
  const merged = arr1.concat(arr2);
  return merged.sort((a, b) => a - b);
}

let myArr = [3, 5, 9, 1, 2];
let myArr2 = [10, 12, 11, 15, 13];

console.log(sortedArr(myArr, myArr2));
