function sum(...numbers){
    return numbers.reduce((total, number) => total + number, 0)
}

console.log(sum(1,2,3,4,5))


const arr1 = [1,2,3]
const arr2 = [4,5]

const arr3 = [...arr1, ...arr2]
console.log(arr3)