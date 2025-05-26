// for of

const arr = [1, 2, 3, 4, 5];
// const arr = [" ", "A", "a", "sdf", 0, null, false, undefined]

for (const num of arr) {
  console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
  if (greet === " ") {
    continue;
  }
  console.log(greet);
}

// Map

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "UNITED STATES OF AMERICA");
map.set("NZ", "NEWZELAND");

console.log(map);

for (const key of map) {
  console.log(key);
}

for (const [key, value] of map) {
  console.log(key, value);
}
