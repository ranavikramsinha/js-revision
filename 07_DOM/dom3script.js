const div1 = document.createElement("div")
console.log(div1)

div1.className = "classInDiv1"
div1.id = Math.round((Math.random() * 10) + 1)
div1.setAttribute("title", "titleInDiv1")
div1.style.backgroundColor = "#123456"
div1.style.padding = "33px"
div1.style.borderRadius = "22px"
// div1.innerText = "Raja Babu"
const addTextInDiv1 = document.createTextNode("Raja Babu")
div1.appendChild(addTextInDiv1)

document.body.appendChild(div1)