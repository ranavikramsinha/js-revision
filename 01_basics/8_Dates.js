//* NOTE => new Date() - creates a Date object representing the current date/time • Date.now() - returns the number of milliseconds since midnight 01 January, 1970 UTC.

//* Date(year, month, day, hour, minute, second, ms)
const date = new Date(2024, 4, 23, 15, 30, 30, 5);
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toLocaleTimeString())
console.log(date.toTimeString())
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getDay())

const nowDate = new Date()
console.log(nowDate.toString())
console.log(nowDate.toDateString())
console.log(nowDate.toLocaleTimeString())
console.log(nowDate.toTimeString())
console.log(nowDate.getFullYear())
console.log(nowDate.getMonth())
console.log(nowDate.getDate())
console.log(nowDate.getHours())
console.log(nowDate.getMinutes())
console.log(nowDate.getSeconds())
console.log(nowDate.getDay())

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

console.log(`Date is ${nowDate.getDate()} and the time is ${nowDate.toLocaleTimeString()}`)

console.log(nowDate.toLocaleString('default', {
    weekday: "long",
    month: "numeric",
    hour: "2-digit",
}))

console.log(nowDate.toLocaleString('fr-FR', {
    weekday: "long",
    month: "numeric",
    hour: "2-digit"
}))

console.log(nowDate.toLocaleTimeString('default', {
    weekday: "short",
}))
console.log(nowDate.toLocaleDateString('default', {
    weekday: "narrow",
}))