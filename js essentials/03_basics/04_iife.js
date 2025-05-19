// Immediately Invoked Function Expression

(function code(){
    console.log(`DB CONNECTED`)
})();

( () => {
    console.log(`DB TWO CONNECTED`)
})();

( (name) => {
    console.log(`Hello ${name}`)
})("Debasis") 