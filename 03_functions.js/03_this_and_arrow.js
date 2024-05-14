"use strict"

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
    
    //* in "use strict" mode, in inside function, console.log(this) will be undefined and the value depends on strict / non strict mode
    
    console.log(this) //*non strict mode => globalObject - global(in node.js), window(in browser)
}
x() //* undefined (in strict mode)
// window.x(); //* window (in strict mode)


//* NOTE => this inside non strict mode - (this substitution), If the value of this keyword is undefined or null, this keyword will be replaced with globalObject ( global(in node.js), window(in browser) ) only in non strict mode


//***************** call, apply, bind methods (sharing methods) *******************

const user2 = {
    fullName: "Aryan Sinha",
    age: 22,
    getName: function(){
        console.log(`Hello ${this.fullName}!`)
    }
}

const user3 = {
    fullName: "Raja Babu",
    age: 27,
}

user2.getName()
user2.getName.call(user3) //* Hello Raja Babu! (value of this = user3)