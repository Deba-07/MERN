class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}2wedcjri`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user = new User("Deba", "deba@google.com", "3eewwjn")
console.log(user.encryptPassword())
console.log(user.changeUsername())

// Behind the scene

function Users(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

Users.prototype.encryptPassword = function(){
    return `${this.password}23esdije`
}

Users.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const user2 = new Users("john", "j@email.com", "123wesa")
console.log(user2.encryptPassword())
console.log(user2.changeUsername())