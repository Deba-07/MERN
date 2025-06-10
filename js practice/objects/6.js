// Write a function that returns a formatted string of name and city.

const user = {
  name: "Alice",
  address: {
    city: "Wonderland",
    zip: "00001"
  }
};

const formattedString = (obj) => {
    return `name: ${obj.name} and city: ${obj.address.city}`
}

console.log(formattedString(user))