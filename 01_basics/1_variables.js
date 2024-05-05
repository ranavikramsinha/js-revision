const accountId = 12345
let accountEmail = "rana@gmail.com"
var accountPassword = "54321" // don't use var because it creates block & functional scope problem
accountCity = "Delhi"

// accountId = 6 // change in const is allowed

accountEmail = "vikram@gmail.com"
accountPassword = "67890"
accountCity = "Chennai"
let accountState; // undefined

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);