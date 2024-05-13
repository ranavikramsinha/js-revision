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