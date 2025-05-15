const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "flash", "Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)

const allNewHeros = [...marvel_heros, ...dc_heros]
console.log(allNewHeros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10], 11]]
const another_array1 = another_array.flat(Infinity)
console.log(another_array1)

console.log(Array.isArray("Debasis"))
console.log(Array.from("Debasis"))
console.log(Array.from({name: "Debasis"})) //interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))