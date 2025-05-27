const coding = ["JavaScript", "Ruby", "Rust", "Solidity", "Python", "Java", "C++"]

coding.forEach((item) => (console.log(item)))

function printMe(item){
    console.log(item)
}
coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    console.log(item, index, arr)
})

const studentsExamRegistration = [
    {
        name: "Debasis Das",
        school: "School of MCA",
        roll: "UPC23MCA001",
        isRegistered: true
    },
    {
        name: "Subham Sekhar Bal",
        school: "School of Computer Science",
        roll: "UPC23MSC002",
        isRegistered: false
    },
    {
        name: "Ashutosh Mishra",
        school: "School of MCA",
        roll: "UPC23MCA007",
        isRegistered: true
    },
    {
        name: "Sridhar Pradhan",
        school: "School of Management",
        roll: "UPC23MBA005",
        isRegistered: true
    }
]

studentsExamRegistration.forEach( (item) => {
    console.log(`Name: ${item.name} - isRegistered ${item.isRegistered}`)
})

const values = coding.forEach( (item) => {
    console.log(item)
    // return item
})
// console.log(values)  => returns undefined

