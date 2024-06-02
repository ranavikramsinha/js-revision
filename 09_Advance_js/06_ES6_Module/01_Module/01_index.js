import {usersData, myName, brother as bro} from "./02_Module_file_01.js"  //* (as) use for rename
import newNameForUsersData from "./02_Module_file_01.js"
import usersData2, {myName2, getFirstUserData, getSecondUserData} from "./02_Module_file_01.js"
import * as exportAll from "./02_Module_file_01.js" //* (*) contains all export

import productsData from "./03_Module_file_02.js"
import newNameForProductsData, {productName} from "./03_Module_file_02.js" //* when we use default while exporting, we can import with any name it doesn't matter

console.log("Hello1")
console.log(usersData)
console.log(myName)
// console.log(brother)
console.log(bro)
console.log(productsData)

//* Note => two export default are not possible
console.log(newNameForProductsData)
console.log(newNameForUsersData)
console.log(myName2)
console.log(usersData2)
console.log(productName)
console.log(getFirstUserData)
console.log(getFirstUserData())
console.log(getSecondUserData) //* arrow function
console.log(getSecondUserData())

console.log(exportAll)
console.log(exportAll.default) //* get usersData
console.log(exportAll.brother)
console.log(exportAll.getThirdUserData)
console.log(exportAll.getThirdUserData())