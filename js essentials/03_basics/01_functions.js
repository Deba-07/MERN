function sayMyName(){
    console.log("Debasis")
}

sayMyName()

function addTwoNums(num1, num2){
    console.log(num1 + num2)
}
addTwoNums(3, -7)
const result = addTwoNums(3, 4)
console.log(result)

function addTwoNumbers(num1, num2){
    return num1 + num2
    //console.log("Debasis")  => After return no code will be executed
}
const output = addTwoNumbers(5, 6)
console.log(output)

function userLoginMessage(username){
    return `Username ${username} logged in successfully!`
}

console.log(userLoginMessage("Deba_111"))
console.log(userLoginMessage(""))
console.log(userLoginMessage())

function addItemPriceToCart(...num){
    return num
}
console.log(addItemPriceToCart(100, 2000, 4567, 345678, 467))

const course = {
    courseName: "Python full-stack",
    price: 2999
}

function handleObject(anyObject){
    console.log(`Course name is ${anyObject.courseName} and price is ${anyObject.price}`)
}
handleObject(course)
handleObject({
    courseName: "Java full-stack",
    price: 2499
})

const arr = [100, 200, 300, 400]

function getSecondValueFromArray(getArray){
    console.log(getArray[1])
}
getSecondValueFromArray(arr)