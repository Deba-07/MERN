// Write a function reverseString(str) that returns the reversed version of the input string.

const reverseStr = (str) => {
    const reversedString = str.split("").reverse().join("")
    console.log(reversedString)
}
reverseStr("Debasis")