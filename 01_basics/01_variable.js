const accountId=144553
let accountEmail="ravireshav9@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"//do not prefer this way
//if we declare variable without initializing javascript will treat it as undefined
//accountId=2 //not allowed

accountEmail="reshav@google.com"
accountPassword="21212121"
accountCity="Bengaluru"

console.log(accountId);
console.table([
    accountEmail,
    accountId,
    accountPassword,
    accountCity
])
/*
Prefer not to use because of issue in block scope and functional scope
*/
