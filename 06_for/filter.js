//* filter

const arr1s = [11,22,33,44,55,66,77,88,99,100]

const value1 = arr1s.filter((arr1) => (arr1>44))
console.log(value1)

const value2 = arr1s.filter((arr1) => {
    return arr1<=55
})
console.log(value2)


const arr2s = ["Rana Vikram Sinha", "Raja Babu", "Pankaj Kumar", "Rahul Pandey", "Aryan", "Ayush"]

const value3 = arr2s.filter((arr2) => (arr2.length>7))
console.log(value3)

const value4 = arr2s.filter((arr2) => (arr2.length<6))
console.log(value4)