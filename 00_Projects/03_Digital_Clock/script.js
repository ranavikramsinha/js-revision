// const clock = document.querySelector("#clock")

// setInterval(() => {
//     let timeNow = new Date()
//     clock.textContent = timeNow.toLocaleTimeString()
// }, 1000)

// const clock = document.getElementById("clock")

// setInterval(() => {
//     let timeNow2s = new Date()
//     clock.textContent = timeNow2s.toLocaleTimeString()
// },2000)

const clock = document.querySelector("#clock")

setInterval(() => {
    let timing = new Date()
    clock.textContent = timing.toLocaleTimeString()
},1500)