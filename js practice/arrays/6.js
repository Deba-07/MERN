// Write a function to flatten a nested array one level deep.
// Example: [1, [2, 3], 4] → [1, 2, 3, 4]

const myArr = [1, [2, 3], 4]
let newArr = []
const flattenArr = (arr) => {
    arr.forEach(element => {
        if(Array.isArray(element)){
            element.forEach((nestedElement) => {
                newArr.push(nestedElement)
            })
        } else {
            newArr.push(element)
        }
    });
    return newArr;
}

console.log(flattenArr(myArr))