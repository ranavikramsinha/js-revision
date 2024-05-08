const arr1 = [0, 1, 2, 3, 4, 5, true, "Rana Vikram Sinha"]
console.log(arr1)
console.log(typeof arr1)
console.log(typeof arr1[5])
console.log(typeof arr1[6])
console.log(typeof arr1[7])

const arr2 = ["Rana", "Vikram", "Sinha"]
console.log(arr2)
console.log(typeof arr2)
console.log(arr2[0])
console.log(typeof arr2[0])

const arr3 = [0, 1, 2, 3, 4, 5]
console.log(arr3.length)
arr3.push(8)
console.log(arr3.length)
console.log(arr3)
console.log(typeof arr3)
console.log(arr3.push(10)) //* the push method in JavaScript returns the new length of the array after the element is added
console.log(arr3)

const pushReturnarr3LengthAfterAddingTheNewElement = arr3.push(15)
console.log(pushReturnarr3LengthAfterAddingTheNewElement) //* the push method in JavaScript returns the new length of the array after the element is added
console.log(arr3)

const arr4 = new Array(11,12,14,15,16)
console.log(arr4)

const arr5 = new Array("Rana","Vikram","Sinha","Raja","Babu")
// arr5.pop() //* pop out the last element of an array
console.log(arr5)
arr5.unshift("Aryan",1,5) //* add elements at the start of an array
console.log(arr5)
arr5.shift() //* shift one element in an array
arr5.shift() //* shift one element in an array
arr5.shift() //* shift one element in an array
console.log(arr5)
console.log(arr5.includes("Rana"))
console.log(arr5.includes("Aryan"))
console.log(typeof arr5.includes("Aryan"))

const arr6 = arr5.join()
console.log(arr5)
console.log(typeof arr5)
console.log(arr6)
console.log(typeof arr6)