// Create an object with a method greet() that uses this to refer to its own properties.

const originalObject = {
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345"
  },
  hobbies: ["reading", "hiking"],
  scores: [10, 20, { math: 95, science: 88 }],
  birthDate: new Date(),
  pattern: /abc/gi,
  greet(){
    return `hello ${this.name}`
  }
}

console.log(originalObject.greet())