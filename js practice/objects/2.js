// Write a function that returns all keys of an object.

const person = {
  name: "Debasis",
  age: 23,
  city: "Balasore",
};

const objKeys = (obj) => {
  console.log(Object.keys(obj));
};

objKeys(person)