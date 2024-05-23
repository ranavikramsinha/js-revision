// const buttons = document.querySelectorAll(".button")
// // console.log(buttons)
// const body = document.querySelector("body")

// buttons.forEach((button) => {
//     // console.log(button)
//     button.addEventListener("click", (event) => {
//         // console.log(event)
//         // console.log(event.target)
//         if(event.target.id === "red"){
//             body.style.backgroundColor = event.target.id
//         }
//         else if(event.target.id === "cyan"){
//             body.style.backgroundColor = event.target.id
//         }
//         else if(event.target.id === "orange"){
//             body.style.backgroundColor = event.target.id
//         }
//         else if(event.target.id === "brown"){
//             body.style.backgroundColor = event.target.id
//         }
//     })
// })

// const buttons = document.querySelectorAll(".button")
// const wholeBody = document.querySelector("body")

// buttons.forEach((button) => {
//     button.addEventListener("click", (event) => {
//         if(event.target.id === "red"){
//             wholeBody.style.backgroundColor = event.target.id
//         }
//         else if(event.target.id === "cyan"){
//             wholeBody.style.backgroundColor = event.target.id
//         }
//         else if(event.target.id === "orange"){
//             wholeBody.style.backgroundColor = event.target.id
//         }
//         else if(event.target.id === "brown"){
//             wholeBody.style.backgroundColor = event.target.id
//         }
//     })
// })

const buttons = document.querySelectorAll(".button")
console.log(buttons)
const fullBody = document.querySelector("body")

buttons.forEach((button) => {
    console.log(button)
    button.addEventListener("click", (event) => {
        if(event.target.id === "red"){
            fullBody.style.backgroundColor = event.target.id
        }
        else if(event.target.id === "cyan"){
            fullBody.style.backgroundColor = event.target.id
        }
        else if(event.target.id === "orange"){
            fullBody.style.backgroundColor = event.target.id
        }
        else if(event.target.id === "brown"){
            fullBody.style.backgroundColor = event.target.id
        }
    })
})

const resets = document.querySelector(".reset")
console.log(reset)

resets.addEventListener("click", (event) => {
    if(event.target.id === "reset"){
        fullBody.style.backgroundColor = "#1f1f1f"
    }
})