function setUsername(username){
    this.username = username
}

function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const user1 = new createUser("Deba", "deba@gmail.com", "873ydvdbnsjk")
console.log(user1)