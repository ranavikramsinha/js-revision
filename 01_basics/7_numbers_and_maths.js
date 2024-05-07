// const score = 700;
// console.log(score);
// console.log(typeof score);

// const num1 = new Number(1400)
// console.log(num1)
// console.log(typeof num1)
// console.log(num1.toString())
// console.log(typeof num1.toString())
// console.log(num1.toFixed(2)) //* 1400.00
// console.log(typeof num1.toFixed(2))

// const num2 = 123.456789
// console.log(num2.toPrecision(3)) //*123
// console.log(num2.toPrecision(5)) //*123.45
// console.log(typeof num2.toPrecision(5)) //* String

// const num3 = 77777777
// console.log(num3.toLocaleString('en-IN'))



//************************* Maths **************************

// console.log(Math)
// console.log(typeof Math)
// console.log(Math.abs(-7)) //* (7) only converts - into +
// console.log(Math.round(4.5))
// console.log(Math.round(4.3))
// console.log(Math.ceil(5.2))
// console.log(Math.floor(7.7))
// console.log(Math.min(1,2,3,4,5))
// console.log(Math.max(7,8,9,1,2))

console.log(Math.random())
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //* output in range of 10 and 20