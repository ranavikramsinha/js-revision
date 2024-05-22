// function optimizeAddLiElement (name){
//     const li = document.createElement("li")
//     console.log(li)
//     li.appendChild(document.createTextNode(`${name}`))
//     document.querySelector(".names").appendChild(li)
// }
// optimizeAddLiElement("Rana")
// optimizeAddLiElement("Pankaj")

// function optAddElement (name){
//     const li = document.createElement("li")
//     li.appendChild(document.createTextNode(`${name}`))
//     document.querySelector(".names").appendChild(li)
// }

// optAddElement("Pankaj")

function optAddElementWithColor (name, color){
    const li = document.createElement("li")
    li.style.color = `${color}`
    li.appendChild(document.createTextNode(`${name}`))
    document.querySelector(".names").appendChild(li)
}

optAddElementWithColor("Pankaj", "Orange")
optAddElementWithColor("Rishav", "Yellow")
optAddElementWithColor("Rana", "Green")

//* NOTE => innerHTML, textCont and innerText, Traverse all the elements in it before adding the new element's


//* Edit Element

