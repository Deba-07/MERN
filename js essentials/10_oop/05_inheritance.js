class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`)
    }
}

const test = new Teacher("Debasis", "abc@test.com", "1234")
test.addCourse()
test.logMe()

const test2 = new User("Test")
test2.logMe()

console.log(test === test2)
console.log(test === Teacher)
console.log(test instanceof Teacher)
console.log(test instanceof User)