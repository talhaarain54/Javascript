// ***** Permitive Datatypes

// 7 types:
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const score2 = 100.5;
const isLoggedIn = false;
const temperature = null;
let userEmail; // undefined
let password = undefined; //  undefined

const id = Symbol('22SW037');
const id2 = Symbol('22SW037');
// console.log(id, id2);
// console.log(id === id2);

const bigInt = 12334567897984837777779999999999999999999999999999999999999999999999n;
// console.log(bigInt);
// console.log(typeof bigInt);
// console.log(typeof temperature);






// ***** Refernece Types (Non permitive)
// Arrays, Objects, Functions

const heroes = ["Talha", "Arbab", "Farooque"];
let myObj = {
    name: "Talha",
    age:20
}
const myFunction = function(){
    console.log("Hello World");
    
}


// console.log(typeof score);
// console.log(typeof score2);
// console.log(typeof isLoggedIn);
// console.log(typeof password);
// console.log(typeof temperature);
// console.log(typeof userEmail);
// console.log(typeof heroes);
// console.log(typeof myFunction);
// console.log(typeof myObj);
// console.log(typeof id);
// console.log(typeof id2);




// **+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2 types of memory
// Stach (permitive)
// Heap (non permitive)

let myName = "Talha";
let myFullName = myName;
myFullName = "Talha Shafiq";

console.log(myName);
console.log(myFullName);

let userOne = {
    email:"userone@gmail.com",
    id: 123
}

let userTwo = userOne;
userTwo.email = "userTwo@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
console.log(userOne);
console.log(userTwo);


