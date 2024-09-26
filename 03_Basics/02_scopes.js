// var c = 300;
let a = 100;


if(true){
    let a = 10;
    const b = 20;
    // var c = 30;
    console.log(a);    
}

console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Talha";

    function two(){
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website);     
    two();
}
one();


if(true){
    const username = "Talha";
    if(username === "Talha"){
        const website = "youtube";
        console.log(username + website);
    }
    // console.log(website); 
}
// console.log(username);



// *************** Interesting  *********************

console.log(addOne(6));
function addOne(value){
    return value + 1;
}

// console.log(addTwo(5));
const addTwo = function(value){
    return value + 2;
}
console.log(addTwo(8));