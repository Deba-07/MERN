// Implement a function with closure that keeps track of how many times it has been called.

const outerFunction = (num) => {
    let count = 0
    return () => {
        count++
        return `This function has called ${count} times and initial number is = ${num}`
    }
}

const number = outerFunction(4)
console.log(number())
console.log(number())
console.log(number())
console.log(number())
console.log(number())
console.log(number())