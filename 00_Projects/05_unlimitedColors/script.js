const randomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = "#"

    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }

    return color
}

// console.log(Math.floor(Math.random() * 16))

// console.log(randomColor())

const changeBackgroundColor = () => { //*
    return document.body.style.backgroundColor = randomColor()
}

// function changeBackgroundColor() {
//     document.body.style.backgroundColor = randomColor()
// }

let valid = null

document.querySelector("#startButton").addEventListener("click", () => {
    if(valid === null){
        valid = setInterval(changeBackgroundColor, 1000)
    }
})

document.querySelector("#stopButton").addEventListener("click", () => {
    if(valid !== null){
        clearInterval(valid)
        valid = null
    }
})