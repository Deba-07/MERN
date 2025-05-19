// if statement

const isLoggedIn = true

if(isLoggedIn){
    console.log("Hello")
}

const temperature = 40
if(temperature > 35){
    console.log("Stay inside the home")
}

// if - else statement

if(temperature <= 40){
    console.log("Weak UV")
} else {
    console.log("Strong UV")
}

const score = 200
if (score >= 100) {
    const power = "fly"
    console.log(`User power: ${power}`)
} else {
    console.log(`User power: basic walk`)
}

//console.log(`use power: ${power}`)     => Scope 

// short-hand notation

const balance = 1000
if(balance > 500) console.log("Test-passed");     // You can use ',' to write multiple lines

// Avoid the above syntax => it ruins the code readability

if(balance < 250){
    console.log("Basic plan")
} else if(balance < 500){
    console.log("Bronze plan")
} else if(balance < 750){
    console.log("Gold-plan")
} else{
    console.log("Elite-plan")
}

const userLoggedIn = false
const debitCard = false

if(userLoggedIn && debitCard){
    console.log("You can purchase course")
}else if(userLoggedIn && !debitCard){
    console.log("Please attach your denit card for purchase")
}else{
    console.log("Log-in view the resourses")
}

