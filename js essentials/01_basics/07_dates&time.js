let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let myCreatedDate = new Date(2024, 8, 6)
console.log(myCreatedDate.toDateString())

let newDate = new Date("2024-09-06")
console.log(newDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000))

let date = new Date()
console.log(date.getDate())
console.log(date.getMonth())

console.log(date.toLocaleString('default', {
    weekday: 'long'
}))