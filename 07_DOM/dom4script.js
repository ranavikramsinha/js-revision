function optimizeAddLiElement (name){
    const li = document.createElement("li")
    console.log(li)
    li.appendChild(document.createTextNode(`${name}`))
    document.querySelector(".names").appendChild(li)
}
optimizeAddLiElement("Rana")
optimizeAddLiElement("Pankaj")

//* NOTE => innerHTML, textCont and innerText, Traverse all the elements in it before adding the new element's


//* Edit Element

