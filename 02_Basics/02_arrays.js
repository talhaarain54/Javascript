const marvel_heroes = ["Thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "Flash", "Batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);



// let all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes);



// let heroes3 = ["Talha", "Farooque", "Arbab"];
// let heroes = [...marvel_heroes, ...dc_heroes, ...heroes3];
// console.log(heroes);


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = anotherArray.flat(2);
console.log(real_another_array);


console.log(Array.isArray("Talha")); // flase
console.log(Array.isArray(["Talha", "Farooque", "Arbab"])); // true
console.log(Array.from("Talha"));
console.log(Array.from({name:"Talha", age:"20"})); // interesting case, empty array, we need to specify that we want to make array from which ( key or value )


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
