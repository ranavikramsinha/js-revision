const name = "Rana Vikram Sinha"
const fileCount = 10

console.log(typeof name)
console.log(typeof fileCount)
console.log(`${name} Folder has ${fileCount} files`)

const str1 = new String("Rana Vikram Sinha")
console.log(str1)
console.log(typeof str1)
console.log(str1[0])
console.log(str1.__proto__) //* object
console.log(str1.length)
console.log(str1.charAt(1)) //* indexing from 0
console.log(str1.indexOf('a')) //* if character is not present in a given string then the output will be -1
console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
console.log(str1.toLocaleUpperCase())
console.log(str1.toLocaleLowerCase())


const str2 = str1.substring(0,7)
console.log(str2)

const str3 = str1.slice(2,14)
console.log(str3)

const str4 = str1.slice(-11,-5) //* starts from back
console.log(str4)

const str5 = "     Raja     "
console.log(str5)
console.log(str5.trim()) //* trim also has trimStart() and trimEnd()

const strObj = new String("Boy")
console.log(strObj)
console.log(strObj.toString())
console.log(strObj)
console.log(strObj.valueOf()) //* toString() and valueOf (do the same thing) methods of String values returns this string value

const websiteUrl = "https://Rana%20Vikram%20Sinha"
console.log(websiteUrl)
console.log(websiteUrl.replace("%20","")) //* only replace first %20
console.log(websiteUrl.replaceAll("%20","")) //* replace all %20
console.log(websiteUrl.includes("Rana"))
console.log(websiteUrl.includes("%20"))
console.log(websiteUrl.includes("Raja"))

console.log(str1.split(" ")) //* split on bases of space and converts into array
console.log(typeof str1.split(" ")) //* Object

console.log(str1.startsWith("Rana"))
console.log(str1.startsWith("Vikram"))
console.log(str1.startsWith("Rana",0))
console.log(str1.startsWith("Rana",1))
console.log(str1.startsWith("Vikram",5))

console.log(str1.repeat(5))

console.log(str1.padStart(25, '0'))
console.log(str1.valueOf())
const usingPs = str1.slice(-5)
console.log(usingPs.padStart(str1.length, '#')) //* Read Docs again if confusion happen

console.log(str1.padEnd(25, '0'))
console.log(str1.valueOf())
const usingPe = str1.slice(5)
console.log(usingPe.padStart(str1.length, '#')) //* Read Docs again if confusion happen

const lio = " Sinha"
console.log(str1.lastIndexOf(lio))

console.log(str1.endsWith(" Sinha"))
console.log(str1.endsWith(" Sinha", 16)) //* 16 is not a position (original position => 17) of a in (Rana Vikram Sinha) thats why its false
console.log(str1.endsWith(" Vikram", 11)) //* 11 is a position of m in (Rana Vikram Sinha) thats why its true
console.log(str1.endsWith(" Sinh")) //* false
console.log(str1.endsWith(" Sinh", 16)) //* true

const name1 = "Raja"
const name2 = "Babu"

console.log(name1.concat(name2))
console.log(name1.concat(" ",name2))
console.log(name2.concat(name1))
console.log(name2.concat("+",name1))

const icons = "😊😂🤣"
console.log(typeof icons)
console.log(icons.codePointAt(1))
console.log(icons.codePointAt(2))
console.log(icons.codePointAt(3)) //* print unicode number of icon 🤣(56834)

console.log(str1.charCodeAt(5)) //* character code 86 is equal to V (indexing from 0)