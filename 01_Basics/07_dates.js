// **  All dates starts from 1-jan-1970

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.getTime()); 
// console.log(myDate.toISOString()); 
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleDateString('en-IN'));
// console.log(myDate.getMonth());  // month starts from 0
// console.log(myDate.getDay());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleString('en-IN'));
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleTimeString('en-IN'));
// console.log(typeof myDate);



let myBirthDate = new Date(2004, 0, 16);
// console.log(myBirthDate.toDateString());

// let myDate2 = new Date("2024-01-16");
// console.log(myDate2.toDateString());
// console.log(myDate2.toLocaleString());

// myDate2 = new Date("01-16-2024");
// console.log(myDate2.toDateString());
// console.log(myDate2.toLocaleString());



let timeStamp = Date.now();
console.log(timeStamp); // time in miliseconds from 1-jan-1970
let timeStampOfMyBirthday = myBirthDate.getTime();
let ageInMilliSeconds = timeStamp - timeStampOfMyBirthday;
console.log(timeStampOfMyBirthday);
console.log("convert into seconds: " + ageInMilliSeconds/1000);
console.log("convert into minutes: " + (ageInMilliSeconds/1000)/60);
console.log("convert into hours: " + ((ageInMilliSeconds/1000)/60)/60);
console.log("convert into days: " + (((ageInMilliSeconds/1000)/60)/60)/24);
console.log("convert into months: " + ((((ageInMilliSeconds/1000)/60)/60)/24/30));
console.log("convert into years: " + ((((ageInMilliSeconds/1000)/60)/60)/24)/365.25);


let newDate = new Date();
console.log(newDate.toLocaleString());
console.log(newDate.toLocaleString("default", {
    weekday:"short"
}));
