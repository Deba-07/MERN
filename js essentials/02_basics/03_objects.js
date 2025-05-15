// Object literals

const mySym = Symbol("key1")
const User = {
    name: "Debasis",
    "full name": "Debasis Das",
    [mySym]: "myKey1",
    age: 23,
    location: "Balasore",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoggedIndays: ["Monday", "Thurseday"]
}

console.log(User.email)
console.log(User["email"])
console.log(User["full name"])
console.log(User[mySym])

User.email = "debasis@google.com"
console.log(User)

//Object.freeze(User)
User.email = "debasis@abc.com"
console.log(User)

User.greeting = function(){
    console.log(`Hello ${User["name"]}`)
}
console.log(User.greeting)
User.greeting()