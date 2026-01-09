const name =  "haider"
const repoCount = 50

// console.log(name + repoCount);

// Modern way
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount} `);
// another method for String

const name2 = new String(`Sahil`)
// console.log(name2);
/*  this is not array this object
console.log(name2)
VM283529:1 String {'Sahil'}0: "S"1: "a"2: "h"3: "i"4: "l"length: 5[[Prototype]]: String[[PrimitiveValue]]: "Sahil"
undefined */
// console.log(typeof name2);
// console.log(name2.length);
// console.log(name2[3]);
// console.log(name2.toUpperCase());
// console.log(name2.charAt(4)); // check in which position are character
// console.log(name2.indexOf('l')); // check char position 
// console.log(name2.substring(1,3)); // it  helps to split the String start word to end position
const newString = new String(`HAIDER`)
// console.log(newString.slice(3,5)); // this String method it helps to slice the String
// console.log(typeof newString.slice(3,5));
const anotherString = `  SAHIL  `
// console.log(anotherString);
// console.log(anotherString.trim()); // remove spaces from Strings
// console.log(anotherString.trimEnd());// remove spaces from end and trimStart() remove spaces from start

const url = (`www.sb_ecom/sahil/cart%20page.com`)
// console.log(url);
// console.log(url.replace(`%20`,`_`));// replace specific word from Strings

// console.log(url.includes(`haider`)); // this method check ur word available in strings  or not
console.log(url.split(`/`)); // this split the string by ur input 


