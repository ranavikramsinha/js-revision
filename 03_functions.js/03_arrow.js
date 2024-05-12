// const user = {
//     username: "rana",
//     price: 1099,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`)
//         // console.log(this)
//     }

// }

// user.welcomeMessage()
// user.username = "vikram"
// user.welcomeMessage()

// console.log(this)


// function one(){
//     console.log(this);
// }
// one()

// function one(){
//     let username = "rana"
//     console.log(this)
// }
// one()

// function one(){
//     let username = "rana"
//     console.log(this.username)
// }
// one()

// const one = function(){
//     let username = "rana"
//     console.log(this.username)
// }
// one()

// const one = () => {
//     let username = "rana"
//     console.log(this)
// }
// one()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(5,5))

// const addTwo = (num1, num2) => num1 + num2

// console.log(addTwo(5,5))

// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(5,5))

const addTwo = (num1, num2) => ({username: "rana"})

console.log(addTwo(5,5))