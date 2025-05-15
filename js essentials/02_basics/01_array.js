const myArr = [1, 2, 3, 4, 5]
const heros = ["Thor", "SpiderMan", "IronMan"]

const myArr2 = new Array(2, 4, 6 ,8)
console.log(myArr2)
console.log(myArr[0])

//              Array Methods

myArr.push(6)
console.log(myArr)

myArr.pop()
console.log(myArr)

myArr.unshift(0)
console.log(myArr)

myArr.shift()
console.log(myArr)
console.log(myArr.includes(3))
console.log(myArr.indexOf(1))
console.log(myArr.indexOf(7))

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

console.log("A ", myArr)
const newArr1 = myArr.slice(1, 3)
console.log(newArr1)

console.log("B ", myArr)
const newArr2 = myArr.splice(1, 3)
console.log(newArr2)

console.log("C ", myArr)