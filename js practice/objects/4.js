// Write a function to update the city of the person object.

const person = {
  name: "Debasis",
  age: 23,
  city: "Balasore",
};

const updateCity = (obj, cityName) => {
  obj.city = cityName;
  return obj;
};

console.log(updateCity(person, "Bhubaneswar"));
