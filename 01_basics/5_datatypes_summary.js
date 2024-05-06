//* Primitive Types

//? 7 Types => String, Number, Boolean, Null(empty), undefined(value not declared), BigInt, Symbol

const score = 100 //* (data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them)

const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail; //* let userEmail = undefined (both are same)

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); //* id and anotherId both are different

// const bigNumber = 123456789987654321n //* add n at last of a big or large number value
// console.log(typeof bigNumber);
// console.log(bigNumber);


// //* Reference (Non-Primitive Types)

// //? Array, Objects, Functions

// const heros = ["Rana", "Vikram", "Sinha"]; //* Array
// console.log(heros);
// console.log(typeof heros);

// let myObj = {
//     name: "Rana Vikram Sinha",
//     age: 22,
//     happy: false,
//     life: undefined,
// }
// console.log(myObj);
// console.log(typeof myObj.name);
// console.log(typeof myObj.age);
// console.log(typeof myObj.happy);
// console.log(typeof myObj.life);
// console.log(typeof myObj);

// const myFunction = function(){
//     console.log("Hello World");
// }
// console.log(myFunction);
// console.log(typeof myFunction);
// console.log(myFunction());
// console.log(typeof myFunction());

//* Stack (Primitive) get a copy of an original value

let myName = "Rana"
let myAnotherName = myName
myAnotherName = "Vikram"

console.log(myName);
console.log(myAnotherName);

//* Heap (Non-Primitive) get a reference of an original value

let userRana = {
    email: "rvs@gmail.com",
    upi: "rvs@ybl",
}

let userVikram = userRana
userVikram.email = "svr@gmail.com"

console.log(userRana.email)
console.log(userVikram.email)