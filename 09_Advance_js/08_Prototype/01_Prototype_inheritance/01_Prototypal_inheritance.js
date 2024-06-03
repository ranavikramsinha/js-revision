let faang = {
    name: "google",
    salary: function() {
        console.log("600k salary")
    },
}

let engineer = Object.create(faang, {
    name: {value: "Rana Vikram Sinha",
           // writable: true, //* if true, for changing
           // enumerable: true, //* if true, for printing when console.log(engineer)
           // configurable: true //* if true, the property can be deleted and these attributes can be modified
    },
    taskAssigned: {
        value: 2,
        // writable: true,
        // enumerable: true,
        // configurable: true
    }
})

engineer.taskAssigned = 5 //* When creating properties using Object.create, you need to provide a descriptor object for each property. This object can specify value, writable, enumerable, and configurable attributes.
 
//* value: The value associated with the property (in this case, 2)
//* writable: If true, the value of the property can be changed
//* enumerable: If true, the property will be listed during enumeration of the object's properties
//* configurable: If true, the property can be deleted and these attributes can be modified

console.log(engineer.name)
console.log(engineer.taskAssigned)
console.log(engineer)


let faangg = {
    name: "google",
    salary: function() {
        console.log("600k salary")
    },
}

let engineerr = Object.create(faang, {
    name: {value: "Rana Vikram Sinha",
           writable: true, //* if true, for changing
           enumerable: true, //* if true, for printing when console.log(engineer)
           configurable: true //* if true, the property can be deleted and these attributes can be modified
    },
    taskAssigned: {
        value: 2,
        writable: true,
        enumerable: true,
        configurable: true
    }
})

engineerr.name = "Raja Babu"
engineerr.taskAssigned = 5

console.log(engineerr.taskAssigned)
console.log(engineerr)