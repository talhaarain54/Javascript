const name = "Talha";
const speed = 50;
console.log(name + speed + " km/hr"); // outdated, prefer not to use like this 


// ***** template literals and string interpolation
console.log(`${name} ${speed} km/hr`); // use the backicks, this key is located bellow the ESC button and and left side of the "1"
console.log(`My name is ${name} and my bike's avg speed is ${speed} km/hr`);

const gameName = new String("Talha Shafiq");
// console.log(gameName[0]);
// console.log(gameName[1]);
// console.log(gameName[2]);
// console.log(gameName.length);
// console.log(gameName.charAt(4));
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('T'));
// console.log(gameName.localeCompare('talha shafiq'));


const newString = gameName.substring(0, 4);
console.log(newString);


const newString2 = gameName.slice(-1, 2);
console.log(newString2);

let newStringOne = "     Talha     ";
console.log(newStringOne);
newStringOne = newStringOne.trim();
console.log(newStringOne);

const url = "https://google.com/talha%20shafiq%20arain";
console.log(url);
console.log(url.replace("%20", "-"));
console.log(url.replaceAll("%20", "-"));
console.log(url.includes("arain"));
console.log(url.includes("abcd"));

const anotherString = "Talha-shafiq-arain";
console.log(anotherString.split("-"));
console.log(anotherString.split("-", 2));