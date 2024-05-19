//* some => The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array

const evenNumber1 = [0, 2, 4, 6, 8, 10]

const result1 = evenNumber1.some((evenNumber) => { //* if condition is true for any element in the array, it returns true 
    return evenNumber % 2 === 0
})

console.log(result1)

const result2 = evenNumber1.some((evenNumber) => { //* if condition is not true for any element in the array, it returns false 
    return evenNumber % 2 === 1
})

console.log(result2)

console.log("*******************************************")

const evenNumber2 = [0, 2, 4, 61, 8, 10]

const result3 = evenNumber2.some((evenNumber, i , array) => {
    if(evenNumber % 2 === 1){
        console.log(array[i])
    }
    return evenNumber % 2 === 1
})

console.log(result3)