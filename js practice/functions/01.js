// Write a function isEven(num) that returns true if a number is even, otherwise false.

const evenNum = (num) => {
    if(num % 2 == 0){
        return true
    }else{
        return false
    }
}
console.log(evenNum(5))