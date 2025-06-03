// Flatten a nested array (e.g., [[1, 2], [3, 4]]) into [1, 2, 3, 4] using reduce().

const arr1 = [
  [1, 2],
  [3, 4],
];

let acc = arr1[0];

const flattenArr = arr1.reduce((acc, crr) => {
  return acc.concat(crr);
});

console.log(flattenArr);
