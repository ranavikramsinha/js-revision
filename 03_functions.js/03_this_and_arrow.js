// "use strict"

//* this keyword value depends on how the function is called
const user1 = {
    userFullName: "Rana Vikram Sinha",
    age: 22,

    asking: function(){ //* Here, asking function is a method of an object user1
        console.log(`${this.userFullName}, How are you doing!`) //* this. use current context
        // console.log(this) //* it refers to user1 object
    }
}

user1.asking()
user1.userFullName = "Raja Babu"
user1.age = 27
user1.asking()
console.log(this) //* globalObject - global(in node.js), window(in browser)

function x(){
    
    //* in use strict mode, in inside function, console.log(this) will be undefined and the value depends on strict / non strict mode
    
    console.log(this) //*non strict mode => globalObject - global(in node.js), window(in browser)
}
x() //* undefined (in strict mode)
// window.x(); //* window (in strict mode)


//* NOTE => this inside non strict mode - (this substitution), If the value of this keyword is undefined or null, this keyword will be replaced with globalObject ( global(in node.js), window(in browser) ) only in non strict mode


//***************** call, apply, bind methods (sharing methods) *******************

const user2 = {
    fullName: "Aryan Sinha",
    age: 22,
    getName: function(parameter1, parameter2){ //* you can pass many arguments here
        console.log(`Hello ${this.fullName}! ${parameter1} ${parameter2}`)
    }
}

const user3 = {
    fullName: "Raja Babu",
    age: 27,
}

const user4 = {
    fullName: "Rana Vikram Sinha",
    age: 27,
}

const user5 = {
    fullName: "Pankaj Kumar",
    age: 27,
}

user2.getName("What's up?", "Everything Fine!") //* ("What's up?", "Everything Fine!") arguments passing to getName function method of an object user2

user2.getName.call(user3, "What are you up to?", "All good!") //* Hello Raja Babu!, "What are you up to?" and "All good!" (value of this = user3)

user2.getName.apply(user4, ["Yoooooooooo,", "All good!"]) //* Here after first argument, all arguments pass in array form

const extractedFunction = user2.getName.bind(user5, "Hmmmmmmmmmmm!", "Okay.") //* bind gives the copy of a method  which can be used later
extractedFunction()
console.log(extractedFunction) //* it gives method (function) of an object user2


//************************* Arrow function ************************

const user6 = {
    name: "Eren",
    y: function (){
        //* enclosing lexical context
        const arrowFunction = () => {
            console.log(this)
            console.log(this.name)
        }
        arrowFunction()
    }  
}

user6.y()

const arrowFunction1 = (val1, val2) => { //* Explicit return
    return val1 * val2;
}

console.log(arrowFunction1(3,3))

const arrowFunction2 = (val1, val2) => (val1 / val2) //* Implicit return

console.log(arrowFunction2(3,3))

const arrowFunction3 = () => ({
    name: "Raja Babu",
    fun1: function () {
        console.log(this)
    }
})

console.log(arrowFunction3())