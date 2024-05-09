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

// const arr3 = [0, 1, 2, 3, 4, 5]
// console.log(arr3.length)
// arr3.push(8)
// console.log(arr3.length)
// console.log(arr3)
// console.log(typeof arr3)
// console.log(arr3.push(10)) //* the push method in JavaScript returns the new length of the array after the element is added
// console.log(arr3)

// const pushReturnarr3LengthAfterAddingTheNewElement = arr3.push(15)
// console.log(pushReturnarr3LengthAfterAddingTheNewElement) //* the push method in JavaScript returns the new length of the array after the element is added
// console.log(arr3)

// const arr4 = new Array(11,12,14,15,16)
// console.log(arr4)

// const arr5 = new Array("Rana","Vikram","Sinha","Raja","Babu")
// // arr5.pop() //* pop out the last element of an array
// console.log(arr5)
// arr5.unshift("Aryan",1,5) //* add elements at the start of an array
// console.log(arr5)
// arr5.shift() //* shift one element in an array
// arr5.shift() //* shift one element in an array
// arr5.shift() //* shift one element in an array
// console.log(arr5)
// console.log(arr5.includes("Rana"))
// console.log(arr5.includes("Aryan"))
// console.log(typeof arr5.includes("Aryan"))

// const arr6 = arr5.join() //* converts array into strings and binds all the elements together
// console.log(arr5)
// console.log(typeof arr5)
// console.log(arr6)
// console.log(arr6[4])
// console.log(typeof arr6)

// const arr7 = arr5.slice(1, 3) //* prints from index 1 position to index 2 position
// console.log(arr7)
// console.log(arr5.slice(2))
// console.log(arr5.slice(-2)) //* prints from the last index (backward direction)
// console.log(arr5.slice(0, -2)) //* (-2) not include last 2 elements of an array in this scenario
// console.log(arr5.slice(0, 4)) //* prints from index 0 position to index 3 position
// console.log(arr5) //* after using slice, our original arr5 doesn't get manipulate

const arr5 = new Array("Rana","Vikram","Sinha","Raja","Babu")
// const arr8 = arr5.splice(0, 3) //* prints upto 3 elements of an array from index 0 position 
// console.log(arr8)
// console.log(arr5) //* after using splice, our original arr5 does get manipulate

// const arr8 = arr5.splice(3, 1) //* print 1 element of an array from index 3 position 
// console.log(arr8)
// console.log(arr5) //* after using splice, our original arr5 does get manipulate

// const arr8 = arr5.splice(2) //* prints all the elements of an array from index 2 position 
// console.log(arr8)
// console.log(arr5) //* after using splice, our original arr5 does get manipulate

// const arr8 = arr5.splice(-2, 2) //* prints 2 elements from the last 2nd position of an array
// console.log(arr8)
// console.log(arr5) //* after using splice, our original arr5 does get manipulate

// const arr8 = arr5.splice(-3) //* prints all elements from the last 3rd position of an array
// console.log(arr8)
// console.log(arr5) //* after using splice, our original arr5 does get manipulate

const arr8 = arr5.splice(0, 2, "Aryan", "Rick") //* Remove 2 elements from index 0 and insert Aryan and Rick
console.log(arr8)
console.log(arr5) //* after using splice, our original arr5 does get manipulate, added/insert Aryan and Rick and Rana and Vikram get removed