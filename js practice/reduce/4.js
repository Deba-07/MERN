// Count how many times each letter appears in a string using reduce().

const strings = "aaabbbcccdddeeetfdvgtfttttthudeyyshh";

let strArr = [...strings];

const latterCount = strArr.reduce((acc, crr) => {
  if (acc[crr]) {
    acc[crr]++;
  } else {
    acc[crr] = 1;
  }
  return acc;
}, {});

console.log(latterCount);
