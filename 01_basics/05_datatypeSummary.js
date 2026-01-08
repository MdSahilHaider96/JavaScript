/*  PRIMITIVE DATA TYPE

7 TYPES  ; STRING , NUMBER , BOOLEAN , NULL , UNDEFINED , SYMBOL , BIGINT

REFERENCE TYPE - NON PRIMITIVE DATA TYPE

ARRAY , OBJECTS , FUNCTIONS all are typeof OBJECT but functions are called objectfunction

JAVASCRIPT IS A DYNAMICALLY TYPED
*/
// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId);

// n denote a BIGINT
const bigNumber = 546877821563158451n

// ARRAY
const heroes = ["IRONMAN" , "THOR" , "LOKI"]

// OBJECT no variable also possible
let myObj = {
    name : "TONY STARK",
    character : "IRON MAN",
}
// console.log(myObj);

// FUNCTIONS

const myfunct = function(){
    console.log("HELLO WORLD");
}

// console.log(typeof heroes);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* STACK(PRIMITIVE) => COPY AND HEAP(NON PRIMITIVE) => REFERENCE
*/
// stack example :  stack give you copy only

let myname = "SAHIL"
let anothername = myname
anothername = "HAIDER"

// console.log(myname);
// console.log(anothername);
 // heap example

 let user = {
    name : "sahil",
    email : "sahil@email.com"
 }
let user2 = user

user2.email = "haider@google.com"

console.log(user.email);
console.log(user2.email);
 // both are changes because reference