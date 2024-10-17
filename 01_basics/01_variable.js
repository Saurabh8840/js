// three types of variables

const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
//we can also declare like this no issues were happens
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed const can't modified


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])