function multiplyBy5(num){
    return num * 5
}

multiplyBy5.power = 2
console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function userDetails(username, score){
    this.username = username
    this.score = score
}

userDetails.prototype.increment = function(){
    this.score++
}

userDetails.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}

const user1 = new userDetails("John", 30)
const user2 = new userDetails("Smith", 40)

user1.printMe()