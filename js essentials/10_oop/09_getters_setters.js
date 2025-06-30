class user {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    set email(value){
        this._email = value
    }
    get email(){
        return this._email.toLowerCase()
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        return this._password = value
    }
}

const user1 = new user("abc@gmail.com", "hbxjjisjiwji")
// console.log(user1)
console.log(user1.email)

console.log(user1.password)


// Another way

function Users(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toLowerCase()
        },
        set: function(value){
            this._email = value 
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value 
        }
    })
}

const user2 = new Users("Deba@gmail.com", "Deba")
console.log(user2.email)
console.log(user2.password)

// from object

const Person = {
    _name: "debasis",

    get name(){
        return this._name.toUpperCase()
    },
    set name(value){
        this._name = value
    }
}

const p1 = Object.create(Person)
console.log(p1.name)