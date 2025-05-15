//singleton

const appUser = new Object()

appUser.id = "123werybywbdc"
appUser.name = "Deba"
appUser.isLoggedIn = false

console.log(appUser)
console.log(Object.keys(appUser))
console.log(Object.values(appUser))
console.log(Object.entries(appUser))
console.log(appUser.hasOwnProperty('isLoggedIn'))
console.log(appUser.hasOwnProperty('isLogged'))

const regularUser = {
    email: "bac@google.com",
    fullname: {
        firstname: "Debasis",
        lastname: "Das"
    },
    age: 23,
    isLoggedIn: false
}

console.log(regularUser)
console.log(regularUser.fullname.firstname)

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)

const obj4 = {...obj1, ...obj2}
console.log(obj4)

const user = [
    {id: 1, email: "a@gmail.com"},
    {id: 1, email: "a@gmail.com"},
    {id: 1, email: "a@gmail.com"}
]

console.log(user[1].email)

const course = {
    courseName: "JS-Hindi",
    price: 999,
    courseInstructor: "Debasis"
}

const {courseInstructor: instructor, price} = course
console.log(instructor)
console.log(price)