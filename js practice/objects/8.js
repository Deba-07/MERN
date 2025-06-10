// Clone an object deeply using recursion (without using JSON.parse(JSON.stringify(...))).

function deepClone(obj){
    if(obj === null || typeof obj !== 'object'){
        return obj
    }

    if(obj instanceof Date){
        return new Date(obj.getTime())
    }

    if(obj instanceof RegExp){
        return new RegExp(obj.source, obj.flags)
    }

    if(Array.isArray(obj)){
        const clonedArr = []
        for(let i = 0; i < obj.length; i++){
            clonedArr[i] = deepClone(obj[i])
        }
        return clonedArr
    }

    if (typeof obj === 'object'){
        const clonedObj = {}
        for(const key in obj){
            if(Object.prototype.hasOwnProperty.call(obj, key)){
                clonedObj[key] = deepClone(obj[key])
            }
        }
        return clonedObj
    }
}

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
}

const clonedObj = deepClone(originalObject)

console.log('orginal object:', originalObject)
console.log('cloned object:', clonedObj)