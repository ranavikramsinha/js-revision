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
console.log(str1.charAt(1))
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