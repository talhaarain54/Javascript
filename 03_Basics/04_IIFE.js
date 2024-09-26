// *** Immdeiately Invoked Function Expressions (IIFEE)


// normal function 
function connectDB(){
    console.log("DB connected");
}

connectDB();


// IIFE 
// named IIFE
(function connectDB(){
    console.log("DB connected one");
})();


// without name
( () =>{
    console.log("DB connected Two");
})();


// pass any parameter 
( (name) =>{
    console.log(`DB connected Two ${name}`);
})("Talha");