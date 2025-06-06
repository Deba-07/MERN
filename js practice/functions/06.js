// Write a function that returns another function which multiplies any number by a given factor.

const multiplier = (factor) => {
  return function double(num) {
    return num * factor;
  };
};

const double = multiplier(2);
console.log(double(5));
