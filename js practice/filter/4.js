// From an array of students, filter those who scored above 80.

const students = [
    {
        name: "Debasis",
        score: 85
    }, 
    {
        name: "John",
        score: 55
    }, 
    {
        name: "Rahul",
        score: 67
    }, 
    {
        name: "Prasant",
        score: 89
    }, 
    {
        name: "Kishore",
        score: 55
    }, 

]

console.log(students.filter((item) => item.score > 80))