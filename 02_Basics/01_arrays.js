// **** Arrays
// resizable in javascript
// can have mix datatypes values in one array
const array = [0, 2, 3, 4, 6, 7];
// const myHeros = ["Batman", "Supeman", "Spiderman"];
// const array2 = new Array(23, 325 , 645, 29, 4, 103);
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array);
// console.log(array.toString());

// array.push(10);
// array.push(8);
// console.log(array);

// array.pop();
// console.log(array);

// array.unshift(44);
// console.log(array);
// array.shift();
// console.log(array);

// console.log(array.includes(3));
// console.log(array.indexOf(99));

// let myArray = array.join();
// console.log(typeof array, array);
// console.log(typeof myArray, myArray);


console.log("A", array);
let newArray = array.slice(1, 3);
console.log(newArray);
console.log("B", array);


newArray = array.splice(1, 3);
console.log(newArray);
console.log("C", array);