const user = {
    username: "Talha",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website and you paid ${this.price} for this website subscription`);
        console.log(this);
        
    }
}


user.welcomeMessage();
user.username = "Temp";
user.welcomeMessage();

// console.log(this);  // In the browser the global object is windows but here its empty 


// function one(){
//     let username = "Talha";
//     console.log(this.username);    
// }
// one();


// const one = function(){
//     let username = "Talha";
//     console.log(this.username);    
// }
// one();



// ************ Arrow Function
// const one = () =>{
//     let username = "Talha";
//     console.log(this.username);  
//     console.log(this);   
// }
// one();
// console.log(globalThis);


// const addTwo = (num1, num2) =>{
//     return num1 + num2;
// }
// console.log(addTwo(3, 5));



// ** implicit return
// const addTwo = (num1, num2) => (num1 + num2);
// const addTwo = (num1, num2) => num1 + num2;


// const obj = () => {username:"Talha", age:20};
const obj = () => ({username:"Talha", age:20});
console.log(obj());
