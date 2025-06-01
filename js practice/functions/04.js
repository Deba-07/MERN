// Create a function factorial(n) that returns the factorial of a number.

let fact = 1
const factorial = (num) => {
    for(let i = 1; i <= num; i++){
        fact *= i
    }
    return fact
}

console.log(factorial(5))