// Write a curry function that turns add(2, 3) into add(2)(3).

function curriedAdd (a){
    return function (b){
        return a + b
    }
}

const result = curriedAdd(2)
console.log(result(3))