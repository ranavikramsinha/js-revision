// const val1 = 11
// let val2 = 22
// var val3 = 33

// console.log(val1)
// console.log(val2)
// console.log(val3)

// if (true){
//     const val1 = 111
//     let val2 = 222
//     var val3 = 333 //* var doesn't follow block scope rule, it changes all var declared variable values with new value around the global scope and others block scope

//     console.log(val1)
//     console.log(val2)
//     console.log(val3)

//     val3 = 555 //* this thing also happened so be caution, avoid using var
//     console.log(val3)
// }

// console.log(val1)
// console.log(val2)
// console.log(val3)



//************************ function in function ****************************

function functionOne(){
    const userOneName = "Rana"

    function functionTwo(){
        const userOneWebsite = "anime.com"
        console.log(userOneName)
        console.log(userOneWebsite)
    }
    // console.log(userOneWebsite) //* this line of code gives an error because of block scope rule

    functionTwo()

    console.log(userOneName)
    // console.log(userOneWebsite) //* this line of code throws an error because of block scope rule
}

functionOne()

if(true){
    const firstName = "Raja"

    if(true){
        const lastName = " Babu"
        console.log(firstName + lastName)
    }

    // console.log(firstName + lastName) //* this throws an error due to lastName variable is not available in 1st if block scope (block scope rule)
}

// console.log(firstName) //* Error due to block scope rule
// console.log(lastName) //* Error due to block scope rule



//********************************* function initialization rules ********************************

console.log(val1(55))

function val1(val){
    return val*2
}


const val2 = function val2(val){
    return val/2
}

console.log(val2(22)) //* access val2 after initialization


// console.log(val3(8)) //* Error, cannot access 'val3' before initialization

// const val3 = function val3(val){
//     return val-1
// }