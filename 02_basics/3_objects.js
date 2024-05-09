//* Object declares into two types, 1st: Singleton and 2nd: Object literals
//* Singleton: Object.create
//* Object literals: const obj={}

const sym1 = Symbol("Aryan")
console.log(sym1)
console.log(typeof sym1)

const obj1 = {
    [sym1]: "Sam",
    sym: "Jaish",
    name: "Rana Vikram Sinha",
    "full name": "Raja Babu",
    age: 23,
    location: "Patna",
    email: "rvs@gmail.com",
    isLoggedIn: true,
    lastLogInDays: ["Monday", "Thursday"]
}

console.log(obj1)
console.log(obj1.name)
console.log(obj1["name"])
console.log(obj1["full name"])
console.log(obj1[sym1])
console.log(typeof obj1[sym1])

// obj1.location = "Bangalore"
// Object.freeze(obj1)
// obj1.location = "Delhi"
// console.log(obj1.location) //* After freezing the object, keys values can't be changed of an object

obj1.name1 = function(){
    console.log("Hello Raja Babu")
}

console.log(obj1.name1())

obj1.name2 = function(){
    console.log(`Hello ${this.name}`)
}

console.log(obj1.name2())