// Create a function that counts the number of keys in a nested object (recursively).

const user = {
  name: "Alice",
  address: {
    city: "Wonderland",
    zip: "00001"
  },
  age: 23
};

const countKeys = (obj) => {
    let count = 0
    for (const key in obj){
        if(Object.prototype.hasOwnProperty.call(obj, key)){
            count++
            if(typeof obj[key] === 'object' && obj[key] === null){
                count += countKeys(obj[key])
            }
        }
    }
    return count
}

console.log(countKeys(user))