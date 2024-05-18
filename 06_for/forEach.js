//* forEach => this method of Array instances executes a provided function once for each array element and forEach never return value's

const names = ["Rana", "Raja", "Aryan", "Pankaj", "Rick"]

//* callback
names.forEach(function(namewhatever){
    console.log(namewhatever)
})

console.log("***********************************")

//* anonymous
names.forEach((namewhatever) => { //* arrow function
    console.log(namewhatever)
})

console.log("***********************************")

//* named function

function namedFunction(namewhatever){
    console.log(namewhatever)
}

names.forEach(namedFunction)

console.log("***********************************")

//* element, index, array

function upperCase (val, index, array){
    array[index] = val.toUpperCase()
}

names.forEach(upperCase) //* converting values into uppercase
names.forEach(namedFunction) //* prints

console.log("***********************************")

const users = [
    {
        userName: "Raja Babu",
        age: 27,
    },
    {
        userName: "Pankaj Pandey",
        age: 27,
    },
    {
        userName: "Rana Vikram Sinha",
        age:24,
    },
]

users.forEach((user) => {
    console.log(user.userName)
})

console.log("***********************************")

users.forEach((user) => {
    console.log(user.age)
})