console.log(Math.PI);
// Math.PI = 4    // => can't overwrite this value

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

const user = {
  name: "guest",
  password: "2edfdkso3",
  isLoggedIn: true,
};

console.log(user);
console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperty(user, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(user, "name"));

for (const [key, value] of Object.entries(user)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
