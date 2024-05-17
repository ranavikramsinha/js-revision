//* for of => Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables

const names = ["Rana", "Raja", "Aryan", "Pankaj", "Rick"]

for (const name of names){
    console.log(name)
}

const userName = "Rana Vikram Sinha"

for (const letter of userName){
    console.log(letter)
}


//*for in => iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties

const obj1 = {
    name: "Rana Vikram Sinha",
    age: 22,
    location: "Bangalore",
}

for (const key in obj1){
    console.log(`${key}: ${obj1[key]}`)
}

//* Instead of using (for in), use these => Object.keys, Object.values and Object.entries

const obj1Keys = Object.keys(obj1)

for (const key of obj1Keys){
    console.log(key)
}

const obj1Values = Object.values(obj1)

for (const value of obj1Values){
    console.log(value)
}

const obj1Entries = Object.entries(obj1)

for (const entrie of obj1Entries){
    console.log(entrie)
}


// const obj2Keys = Object.keys(obj1)

// for (const key in obj2Keys){
//     console.log(key)
// }

// const obj2Values = Object.values(obj1)

// for (const value in obj2Values){
//     console.log(value)
// }

// const obj2Entries = Object.entries(obj1)

// for (const entrie in obj2Entries){
//     console.log(entrie)
// }