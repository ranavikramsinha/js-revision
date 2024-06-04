const person1 = {name: "Raja", age: 23}
const person2 = person1
person2.age = 31
console.log(person1.age) //* Output: 31

const person3 = {name: "Rana", age: 27}
const person4 = structuredClone(person3) //* modern way for deep copy
person4.age = 31
console.log(person3.age) //* Output: 27

const person5 = {name: "Aryan", age: 25}
const person6 = JSON.parse(JSON.stringify(person1)) //* old & classic way for deep copy
person6.age = 31
console.log(person5.age) //* Output: 25

//* NOTE =>
//* 
//* If you are working in an environment where structuredClone is not available, you can use the lodash library's cloneDeep function:
//* 
//* First, install lodash:
//* npm install lodash
//* 
//* 
//* Then use it in your code:
//* 
//* const _ = require('lodash')
//* 
//* const person7 = {name: "John", age: 30}
//* const person8 = _.cloneDeep(person1)
//* person8.age = 31
//* console.log(person7.age) //* Output: 30