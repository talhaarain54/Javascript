const accountId = 1234;
let accountEmail = "araintalha0304@gmail.com";
var accountPassword = "12345";
accountCity = "TandoAllahyar";
let accountState;

// There are two ways to decalre a variable in javascript
// let and var 
/* The difference between let and var is in the scope of the variables they create:
Variables declared by let are only available inside the block where they're defined.
Variables declared by var are available throughout the function in which they're declared.

prefer not to use var because of issue in block scope and functional scope
let is mostly preferred for it's block scoping and it helps to avoid uninentional errors that are caused by using var.

*/

// const variable's value is constant and it's value can't be changed
// accountId = 12; // not allowed
console.log(accountId);

accountEmail = "abcd@gmail.com";
accountPassword = 54321;
accountCity = "Hyderabad";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
