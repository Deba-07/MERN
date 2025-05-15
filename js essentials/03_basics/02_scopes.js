// let a = 10
// const b = 20
// var c = 30

// console.log(a)
// console.log(b)
// console.log(c)

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
//console.log(a)
//console.log(b)
console.log(c)

function one(){
    const username = "Debasis"
    function two(){
        const website = "You-tube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()

if(true){
    const username = "Deba"
    if(username === "Deba"){
        const website = " You-tube"
        console.log(username + website)
    }
    //console.log(website)
}
//console.log(username)

// ..........Interesting Fact.............

console.log(addOne(5))

function addOne(num){
    return num + 1
}

//console.log(addTwo(5))

const addTwo = function(num){
    return num + 2
}