// const div1 = document.createElement("div")
// console.log(div1)

// div1.className = "classInDiv1"
// div1.id = Math.round((Math.random() * 10) + 1)
// div1.setAttribute("title", "titleInDiv1")
// div1.style.backgroundColor = "#123456"
// div1.style.padding = "33px"
// div1.style.borderRadius = "22px"
// // div1.innerText = "Rana Vikram Sinha"
// const addTextInDiv1 = document.createTextNode("Rana Vikram Sinha")
// div1.appendChild(addTextInDiv1)

// document.body.appendChild(div1)

function createDiv(colors, text){
    const div = document.createElement("div")
    div.style.color = `${colors}`
    div.innerText = `${text}`
    document.body.appendChild(div)
}

const arrayOfColors = ["red","yellow","green","brown","orange"]
const arrayOfTexts = ["Red","Yellow","Green","Brown","Orange"]

for(let i=0; i<arrayOfColors.length; i++){
    createDiv(arrayOfColors[i], arrayOfTexts[i])
}