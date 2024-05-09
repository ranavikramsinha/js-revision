//* Singleton: const user = new Object()
//* Non-Singleton: const user = {}

const user1 = {}
user1.id = "777111rana"
user1.name = "Rana Vikram Sinha"
user1.isLoggedIn = true

console.log(user1)

const user2 = {
    email: "rb@gmail.com",
    userFullName: {
        fullName: {
            firstName: "Raja",
            lastName: "Babu"
        }
    }
}

console.log(user2)
console.log(user2.email)
console.log(user2.userFullName)
console.log(user2.userFullName.fullName)
console.log(user2.userFullName.fullName.firstName)
console.log(user2.userFullName.fullName.lastName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const target = {}

const combineObj1AndObj2 = {obj1, obj2} //* objects in object (not recommended)
console.log(combineObj1AndObj2)

const obj3 = Object.assign(target, obj1, obj2) //* now keys and values of all object are in target object
console.log(obj3)
console.log(target === obj3)

const obj4 = {...obj1, ...obj2} //* use this methode to combine all objects into one object
console.log(obj4)

const user3 = [
    {
        id: "1a",
        name: "Rana Vikram Sinha"
    },

    {
        id: "2b",
        name: "Raja Babu"
    },

    {
        id: "3c",
        name: "Aryan Sinha"
    },

    {},
]

console.log(user3)
console.log(user3[0])
console.log(user3[1])
console.log(user3[2])
console.log(user3[3])
// console.log(user3[4]) //* output is undefined because index 4 position is not present
console.log(user3[0].id)
console.log(user3[1].name)

const takingKeysFromAnObjectUser1 = Object.keys(user1) //* output keys in an array
console.log(takingKeysFromAnObjectUser1)

const takingValuesFromAnObjectUser1 = Object.values(user1) //* output values in an array
console.log(takingValuesFromAnObjectUser1)

const takingBothKeysAndValuesFromAnObjectUser1 = Object.entries(user1) //* output keys and values in an array
console.log(takingBothKeysAndValuesFromAnObjectUser1)

const takingKeysFromAnObjectUser2 = Object.keys(user2) //* output keys in an array
console.log(takingKeysFromAnObjectUser2)

const takingValuesFromAnObjectUser2 = Object.values(user2) //* output values in an array
console.log(takingValuesFromAnObjectUser2)

const takingBothKeysAndValuesFromAnObjectUser2 = Object.entries(user2) //* output keys and values in an array
console.log(takingBothKeysAndValuesFromAnObjectUser2)

console.log(user1.hasOwnProperty("name")) //* only checks on keys of an object, not on values
console.log(user1.hasOwnProperty("Rana Vikram Sinha")) //* only checks on keys of an object, not on values
console.log(user1.hasOwnProperty("id"))
console.log(user1.hasOwnProperty("ID"))
console.log(user1.hasOwnProperty("isLoggedIn"))

console.log(user2.hasOwnProperty("name")) //* only checks on keys of an object, not on values
console.log(user2.hasOwnProperty("Rana Vikram Sinha")) //* only checks on keys of an object, not on values
console.log(user2.hasOwnProperty("id"))
console.log(user2.hasOwnProperty("ID"))
console.log(user2.hasOwnProperty("isLoggedIn"))
