// ** Note: In JavaScript, when you declare an object or an array using const, it means that the reference to the object or array cannot be reassigned to a new object or array. However, the contents (properties or elements) of the object or array can still be modified.
// ** The const declaration prevents reassignment, not modification of internal properties.


// **Singleton Objects

const customer = new Object();
console.log(customer);
customer.id = "22SW037";
customer.name = "Talha";
customer.address = "Tay";
customer.age = 20;
customer.isAdult = true;
console.log(customer);

const otherCustomer = {
    name:"Talha",
    age:20,
    // nested object
    address:{  
        state:"Sindh",
        city:"Tay",
        postalCode:70010
    }
}

console.log(otherCustomer);
console.log(otherCustomer.address);
console.log(otherCustomer.address.state);


// combine two objects
let obj1 = {a:"a", b:"b"};
let obj2 = {c:"c", d:"d"};

// let obj3 = {obj1, obj2};
// console.log(obj3);

let obj3 = Object.assign(obj1, obj2);
console.log(obj3);
// we can also do it like this
let obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

// spread operator
let obj5 = {...obj1, ...obj2};
console.log(obj5);

const user = [
    { id:12,   email:"abcd@gmail.com"},
    { id:12,   email:"abcd@gmail.com"},
    { id:12,   email:"abcd@gmail.com"}
]

console.log(user);
user[0].id = 22;
user[0].email = "emailchanged@gmail.com";
console.log(user);


console.log("Keys ", Object.keys(user));
console.log("values ", Object.values(user));
console.log("Keys ", Object.keys(customer));
console.log("Values ", Object.values(customer));
console.log("Entries ", Object.entries(customer));

console.log("id property exists or not: ", customer.hasOwnProperty('id'));
console.log("username property exists or not:", customer.hasOwnProperty('username'));


const course = {
    name:"Javascript",
    price:1000,
    courseInstructor:"Talha"
}

const {courseInstructor: instructor} = course;
const {name: courseName} = course;

console.log(instructor);
console.log(courseName);


// *** JSON API Intro
// {
//     "name":"javascript",
//     "courseInstructor":"Talha",
//     "price":1000
// }