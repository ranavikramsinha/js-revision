function myName(){
    console.log("Rana Vikram Sinha")
}

myName()

function addTwoNumbers(number1, number2){ //* this function is not returning anything (only printing)
    console.log(number1+number2)
}

addTwoNumbers(3,3)
addTwoNumbers(3,"5") //* converts into strings
addTwoNumbers("5", 6) //* converts into strings
addTwoNumbers(5,null)

const value = addTwoNumbers(5,5)
console.log("After addition what's the value: ", value) //* output is going to be undefined because addTwoNumbers function doesn't return the add value

function addNumbers(num1, num2){ //* this function returns the added value
    return num1+num2;
}

const addValue = addNumbers(5,5)
console.log(addValue) //* 10 because addNumbers function returns an added value and then storing the value in addValue

