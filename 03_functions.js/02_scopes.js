const val1 = 11
let val2 = 22
var val3 = 33

console.log(val1)
console.log(val2)
console.log(val3)

if (true){
    const val1 = 111
    let val2 = 222
    var val3 = 333 //* var doesn't follow scope rule, it changes all var declared variable values with new value around the global

    console.log(val1)
    console.log(val2)
    console.log(val3)

    val3 = 555 //* this thing also happened so be caution, avoid using var
    console.log(val3)
}

console.log(val1)
console.log(val2)
console.log(val3)