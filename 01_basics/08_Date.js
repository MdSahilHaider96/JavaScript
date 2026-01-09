// DATES

let myDate = new Date()
// console.log(`to String : ` + myDate.toString());
// console.log(`locale DateString : ` + myDate.toLocaleDateString());
// console.log(`to Locale String : ` + myDate.toLocaleString());
// console.log(`to Locale TimeString : ` + myDate.toLocaleTimeString());
// console.log(`to TimeString ` + myDate.toTimeString());

// console.log(typeof myDate); // its a Object

// let myCreatedDate = new Date (2024 ,1 , 9 , 14 , 32 ,) // its like array 0 is january and 11 is december (y:m:d:t:h)
let myNewDate = new Date(`05-24-2009`) // m:d:y
// console.log(myNewDate.toLocaleString()); 

let myTimeStamp = Date.now()
// console.log(myTimeStamp// output in milliseconds
// console.log(myNewDate.getTime); //output in milliseconds then compare to myTimeStamp
// console.log(Date.now());// output in millisecond but i want in seconds    
// console.log(Math.floor(Date.now() / 1000));// output in millisecond but i want in seconds    

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getHours());
// console.log(newDate.getMonth());

let another = newDate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit"

})
console.log(another);

     
