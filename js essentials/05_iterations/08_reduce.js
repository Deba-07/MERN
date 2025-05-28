const arr = [1, 2, 3, 4, 5];

const val = arr.reduce(function (acc, crr) {
  console.log(`accumlator: ${acc} and currentValue: ${crr}`);
  return acc + crr;
}, 0);
console.log(val);

const val1 = arr.reduce((acc, crr) => acc + crr);
console.log(val1);

let initialValue = 10;
const val2 = arr.reduce((acc, crr) => {
  console.log(`acc: ${acc} and crr: ${crr}`);
  return acc * crr;
}, initialValue);
console.log(val2);

const coursesCart = [
  {
    courseName: "JS Course",
    price: 2999,
  },
  {
    courseName: "Python Course",
    price: 999,
  },
  {
    courseName: "cybersecurity Course",
    price: 8999,
  },
  {
    courseName: "Data Scientist Course",
    price: 12999,
  },
];

const totalPrice = coursesCart.reduce((acc, course) => acc + course.price, 0);
console.log(totalPrice);
