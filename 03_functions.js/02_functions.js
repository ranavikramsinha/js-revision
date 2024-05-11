function totalValue1(val){
    return val
}

const total1 = totalValue1(101, 222, 444, 666, 888)
console.log(total1)
console.log(totalValue1(111, 333, 555, 777, 999))


function totalValue2(...val){ //* ... is the rest operator here
    return val
}

const total2 = totalValue2(101, 222, 444, 666, 888)
console.log(total2)
console.log(totalValue2(111, 333, 555, 777, 999))


function totalValue3(val1, val2, ...val){
    return val
}

console.log(totalValue3(1, 2, 3, 4, 5)) //* return val has 3, 4, 5 and val1 has 1 & val2 has 2

function passingObjectInFunction1(getObject){
    console.log(`${getObject.name} is my brother name and his age is ${getObject.age}`)
}

passingObjectInFunction1({ //* passing direct object
    name: "Raja Babu",
    age: 28,
})

const user2 = {
    name: "Rana Vikram Sinha",
    location: "Bangalore",
}

function passingObjectInFunction2(getObject){
    return `${getObject.name} lives in ${getObject.location}`
}

const takingReturnValueOfPassingObjectInFunction = passingObjectInFunction2(user2)
console.log(takingReturnValueOfPassingObjectInFunction)

const user3 = {
    name: "Aryan Sinha",
    sport: "football",
}

function passingObjectInFunction3(getObject){
    console.log(`${getObject.name} has played ${getObject.sport} since childhood`)
}

passingObjectInFunction3(user3)


const arr1 = [100, 200, 300, 400, 500]

function passingArrayValuesInFunction1(getArray){
    return getArray[2]
}

console.log(passingArrayValuesInFunction1(arr1))
console.log(passingArrayValuesInFunction1([600, 700, 800, 900, 1000]))

const arr2 = [11111, 22222, 33333, 44444, 55555]

function passingArrayValuesInFunction2(getArray){
    return getArray[0]
}

const takingPassingArrayValuesInFunction2 = passingArrayValuesInFunction2(arr2)
console.log(takingPassingArrayValuesInFunction2)

const takingPassingArrayValuesInFunction3 = passingArrayValuesInFunction2([123, 456, 789, 234, 567])
console.log(takingPassingArrayValuesInFunction3)