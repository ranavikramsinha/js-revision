//* map => same as forEach and also returns value

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const val1 = arr1.map((arr) => (arr < 8)) //* while comparing, map gives true or false as a value
console.log(val1)

console.log("**********************************")

const arr2 = ["Rana Vikram Sinha", "Raja Babu", "Pankaj Kumar", "Rahul Pandey", "Aryan", "Ayush"]

const val2 = arr2.map((arr) => {
    console.log(arr);
    return arr
})
console.log(val2)

console.log("**********************************")