// Rotate an array to the left by k positions.
// Example: [1, 2, 3, 4, 5] rotated by 2 → [3, 4, 5, 1, 2]

let myArr = [1, 2, 3, 4, 5]

function RotateArr(arr, k){
    const n = arr.length
    k = k % n

    const rotated = arr.slice(k).concat(arr.slice(0, k))
    return rotated
}

let newArr = RotateArr(myArr, 3)
console.log(newArr)