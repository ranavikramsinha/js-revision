//* NOTE => new Date() - creates a Date object representing the current date/time • Date.now() - returns the number of milliseconds since midnight 01 January, 1970 UTC.


console.log(Date.now())
const newDate = Date.now()
console.log(newDate)
console.log(typeof newDate)

const newDate1 = new Date()
console.log(newDate1.getTime())
console.log(typeof newDate1)
console.log(typeof newDate1.getTime())

console.log(Date.now())
console.log(Date.now()/1000)
console.log(Math.floor(Date.now()/1000))