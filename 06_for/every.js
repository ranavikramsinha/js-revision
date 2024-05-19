//* every => The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value

const allEvenNumber1 = [2, 4, 6, 8, 10]

const result1 = allEvenNumber1.every((allEvenNumber, i, array) => { //* if condition is true for all elements in the array, it returns true 
    if(allEvenNumber % 2 === 1){
        console.log(`Found an odd number: ${array[i]}`)
    }
    return allEvenNumber % 2 === 0
})

console.log(result1)

console.log("***************************************")

const allEvenNumber2 = [2, 41, 61, 8, 10]

const result2 = allEvenNumber2.every((allEvenNumber, i, array) => { //* if condition is not true for all elements in the array, it returns false 
    if(allEvenNumber % 2 === 1){
        console.log(`Found an odd number: ${array[i]}`)
    }
    return allEvenNumber % 2 === 0
})

console.log(result2)