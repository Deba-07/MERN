const userEmail = 'abc@gmail.com'

if (userEmail) {
    console.log("Got the user email.")
} else {
    console.log("No user email found.")
}

// falsy values

// false, 0, -0, bigInt -0n, "", null, undefined, NaN

// truthy values

// "0", "false", " ", [], {}, function(){}

const useremail = []

if(useremail.length === 0){
    console.log("Array is empty.")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty.")
}