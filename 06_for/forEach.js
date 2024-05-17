//* forEach => this method of Array instances executes a provided function once for each array element

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