// Find duplicates in an array without using Set.

const myArr = [1, 2, 3, 4, 3, 2, 4, 7, 8, 5, 7, 9]

const duplicateValues = (arr) => {
  const countObj = {};
  const duplicates = [];

  arr.forEach(element => {
    if (countObj[element]) {
      countObj[element]++;
    } else {
      countObj[element] = 1;
    }
  });

  for (let key in countObj) {
    if (countObj[key] > 1) {
      duplicates.push(Number(key));
    }
  }

  return duplicates;
};

console.log(duplicateValues(myArr)); 