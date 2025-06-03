// From an array of prices, calculate the total price.

const prices = [19.99, 25.5, 9.95, 12.0, 50.75, 3.2, 100.0, 7.49, 33.33, 14.88];

const acc = prices[0];
const totalPrice = prices.reduce((acc, crr) => {
  return acc + crr;
});
console.log(totalPrice);
