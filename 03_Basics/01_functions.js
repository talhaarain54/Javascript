function sayMyName(){
    console.log("My name is Talha");
}

// sayMyName();

function addTwoNum(num1, num2){
    // if(typeof num1 == typeof num2)
        console.log(num1 + num2);
}

// addTwoNum(3, 5);
// addTwoNum(3, "5");
// addTwoNum(3, null);



function addTwoNum(num1, num2){
    // let result = num1 + num2;
    // return result; 
    return num1 + num2;
}
const sum = addTwoNum(7, 4);
// console.log("Result: " , sum);


function loginUserMessage(username = "user"){  // if we provide value here this will become the default value in case there is no argument given in the function
    if(username == undefined){
        return "Please enter a username";
    }
    // or 
    // if(!username){
    //     return "Please enter a username";
    // }
    return `${username} just logged in`;
}
// let message = loginUserMessage("Talha");
// console.log(message);

// console.log(loginUserMessage());
// console.log(loginUserMessage(""));


// function calculateCartPrice(... itemPrices){
//     return itemPrices;
// }

function calculateCartPrice(val1, val2, ... itemPrices){
    console.log("val1:", val1, "val2:", val2, "itemPrices:", itemPrices);
    
}

calculateCartPrice(55, 60 ,77, 35, 88);

let user = {
    username:"Talha",
    age:20
}
function handleObject(anyObject){
    console.log(`user name is ${anyObject.username} and age is ${anyObject.age}`);
}
handleObject(user);
handleObject({
    username:"temp",
    age:20
});

const myNewArray = [12, 33, 14, 55, 67];
function returnSecondVale(array){
    return array[1];
}
console.log(returnSecondVale(myNewArray));
console.log(returnSecondVale(["a", "b", "c", "d"]));