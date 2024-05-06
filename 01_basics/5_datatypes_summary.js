//* Primitive Types

//? 7 Types => String, Number, Boolean, Null(empty), undefined(value not declared), BigInt, Symbol

const score = 100 //* (data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them)

const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail; //* let userEmail = undefined (both are same)

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //* id and anotherId both are different

const bigNumber = 123456789987654321n //* add n at last of a big or large number value
console.log(typeof bigNumber);
console.log(bigNumber);


//* Reference (Non-Primitive Types)

//? Array, Objects, Functions

const heros = ["Rana", "Vikram", "Sinha"]; //* Array
console.log(heros);
console.log(typeof heros);

let myObj = {
    name: "Rana Vikram Sinha",
    age: 22,
}
console.log(myObj);
console.log(typeof myObj);

const myFunction = function(){
    console.log("Hello World");
}
console.log(myFunction);
console.log(typeof myFunction);
console.log(myFunction());
console.log(typeof myFunction());