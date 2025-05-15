const score = 400
console.log(score)

const balance = new Number(500)
console.log(balance)
console.log(typeof balance)
console.log(balance.toString())
console.log(balance.toFixed(3))

const otherNumber = 23.893
console.log(otherNumber.toPrecision(3))

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'))

//                      MATHS

console.log(Math)
console.log(Math.abs(-7))
console.log(Math.round(4.7))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(4, 3, 6, 8))
console.log(Math.max(4, 3, 6, 8))

console.log(Math.random())
console.log(Math.random() * 10)
console.log(Math.floor(Math.random() * 10))

const min = 1
const max = 6
console.log(Math.floor(Math.random() * ((max - min) + 1)) + min)