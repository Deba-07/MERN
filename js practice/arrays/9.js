// Write a function to merge two sorted arrays into a single sorted one.

function sortedArr(arr1, arr2) {
  const merged = arr1.concat(arr2);
  return merged.sort((a, b) => a - b);
}

let myArr = [3, 5, 9, 1, 2];
let myArr2 = [10, 12, 11, 15, 13];

console.log(sortedArr(myArr, myArr2));

let arr = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

console.log(sortedArr(arr, arr2));