// ** Note: In JavaScript, when you declare an object or an array using const, it means that the reference to the object or array cannot be reassigned to a new object or array. However, the contents (properties or elements) of the object or array can still be modified.
// ** The const declaration prevents reassignment, not modification of internal properties.



// ** Oject literals

let mySymbol = Symbol("key1");

let user = {
    name: "Talha",
    "full name": "Muhammad Talha",
    // mySymbol:"mykey1",  // it will be not used as a symbol , not a blid syntax
    [mySymbol]:"mykey1",
    age:20,
    email:"abc@gmai.com",
    location:"TAY",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

// console.log(user.email);
// console.log(user["email"]); // Dot notation is commonly used, but bracket notation is useful when the property name has spaces, special characters, or is dynamically set.
// console.log(user["full name"]); // can not be accessed by .(dot)
// console.log(user[mySymbol]);
// console.log(typeof user[mySymbol]);

// user.email = "changedemail@gmail.com";
// Object.freeze(user);
// user.email = "freezedobject@gmail.com";
// console.log(user);

user.greetings = function(){
    console.log("Hello I am a user");
}

user.greetingsTwo = function(){
    console.log(`Hi User ${this.name}`);
}



// console.log(user.greetings);
// console.log(user.greetings());
// console.log(user.greetingsTwo());
// console.log(user.greetingsThree());

console.log(user);
delete user.location;
console.log(user);


// property shorthand
let name = "Abc";
let age = 22;
let person = {name, age};
console.log(person);




