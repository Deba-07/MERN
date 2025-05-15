const accountId = 122333;
let accountEmail = "abc@gmail.com";
var accountPassword = "qwasdr567890";

// accountId = 7857568  not allowed

console.log(accountId);
console.table([accountId, accountEmail, accountPassword]);

// Avoid the use of var key word bcz of issue in block scope and functional scope

let accountState;
console.log(accountState)