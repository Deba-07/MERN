const user = {
    username: "Debasis",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our community`)
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

console.log(this)

function one(){
    let username = "Debasis"
    console.log(this.username)
}
one()

const two = function(){
    let username = "Sam"
    console.log(this.username)
}
two()

const chai = () => {
    let username = "Chai"
    // console.log(this.username)
    console.log(this)
}
chai()

// Explicit Return
const addTwoNums = (num1, num2) => {
    return num1 + num2
}
console.log(addTwoNums(3, 4))

// Implicit Return
const addTwo = (num) => num + 2
console.log(addTwo(2))

const addThree = (num) => (num + 3)
console.log(addThree(3))

const code = (num) => ({username: "Debasis"})
console.log(code(3))