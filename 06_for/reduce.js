//* reduce

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const val1 = arr1.reduce((accumulator, currentValue) => {
    console.log(`Accumulator :${accumulator} and Current Value :${currentValue} and Both Sum :${accumulator + currentValue}`)
    return accumulator + currentValue
}, 0)

console.log(val1)

console.log("*********************************")

const val2 = arr1.reduce((accumulator, currentValue) => (accumulator + currentValue),0)
console.log(val2)

console.log("*********************************")

const users = [
    {user1FullName: "Rana Vikram Sinha", spending: 2000
    },
    {user2FullName: "Rana Vikram Sinha", spending: 2000
    },
    {user3FullName: "Rana Vikram Sinha", spending: 2000
    },
    {user4FullName: "Rana Vikram Sinha", spending: 2000
    },
    {user5FullName: "Rana Vikram Sinha", spending: 2000
    },
]

const val3 = users.reduce((accumulator, currentValue) => (accumulator + currentValue.spending), 0)
console.log(val3)