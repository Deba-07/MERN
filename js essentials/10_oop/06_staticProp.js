class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`)
    }

    static createId(){
        console.log("2345321")
    }
}

const testUser = new User("User1")
// testUser.createId()

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
}

const teach = new Teacher("teacher", "teach@gmail.com", "123")
teach.logMe()
// teach.createId()