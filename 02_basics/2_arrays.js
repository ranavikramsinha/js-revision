const arr1 = ["Rana", "Vikram", "Sinha"]
const arr2 = ["Raja", "Babu"]

// arr1.push(arr2)
// console.log(arr1)
// console.log(arr1[3][0])

// const arr3 = arr1.concat(arr2)
// console.log(arr3)

const arr4 = [...arr1, ...arr2]
console.log(arr4)

const arr5 = [1, 2, 3, [4, 5], 6, [7, [8, 9]]]
console.log(arr5)

const arr6 = arr5.flat(Infinity)
console.log(arr6)

console.log(Array.isArray("Raja"))
console.log(Array.from("Raja"))
console.log(Array.from({name: "Raja"})) //* gives empty array (interesting for interview)

const num1 = 100
const num2 = 200
const num3 = 300

console.log(Array.of(num1, num2, num3))