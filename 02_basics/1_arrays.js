// const arr1 = [0, 1, 2, 3, 4, 5, true, "Rana Vikram Sinha"]
// console.log(arr1)
// console.log(typeof arr1)
// console.log(typeof arr1[5])
// console.log(typeof arr1[6])
// console.log(typeof arr1[7])

// const arr2 = ["Rana", "Vikram", "Sinha"]
// console.log(arr2)
// console.log(typeof arr2)
// console.log(arr2[0])
// console.log(typeof arr2[0])

const array1 = [0, 1, 2, 3, 4, 5]
console.log(array1.length)
array1.push(8)
console.log(array1.length)
console.log(array1)
console.log(typeof array1)
console.log(array1.push(10)) //* the push method in JavaScript returns the new length of the array after the element is added
console.log(array1)

const pushReturnArray1LengthAfterAddingTheNewElement = array1.push(15)
console.log(pushReturnArray1LengthAfterAddingTheNewElement) //* the push method in JavaScript returns the new length of the array after the element is added
console.log(array1)