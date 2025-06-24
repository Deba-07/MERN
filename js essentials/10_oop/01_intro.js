const user = {
    username: "Debasis",
    isLoggedIn: true,
    getUserDetails: function(){
        console.log("Got the user details")
    },
    getUsername: function(){
        console.log(`Got username: ${this.username}`)
    }
}

console.log(user.username)
user.getUserDetails()
user.getUsername()

function User(username, isLoggedIn){
    this.username = username
    this.isLoggedIn = isLoggedIn
    this.greetings = function(){
        console.log(`welcome ${this.username}`)
    }

    return this
}

const userOne = new User("Debasis", true)
const userTwo = new User("John", false)
console.log(userOne)
console.log(userTwo)