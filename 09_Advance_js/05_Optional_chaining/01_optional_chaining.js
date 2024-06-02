const user1 = {
    firstName: "Rana",
    middleName: "Vikram",
    lastName: "Sinha",
    age: "23",
    address: {
        city: "Patna",
    },

    getFullName: function(){
        return `${this.firstName} ${this.middleName} ${this.lastName}`
    }
}

const user2 = {
    firstName: "Rana",
    middleName: "Vikram",
    lastName: "Sinha",
    age: "23",
    // address: {
    //     // city: "Patna",
    // },

    getFullName: function(){
        return `${this.firstName} ${this.middleName} ${this.lastName}`
    }
}

const cityName1 = "city"

console.log(user1.getFullName?.())

console.log("******************************")

console.log(user1.address?.city) //* mostly used this method

console.log("******************************")

console.log(user1.address?.["city"])

console.log("******************************")

console.log(user1.address?.[cityName1])

console.log("******************************")

const cityName2 = "city"

console.log(user2.getFullName?.())

console.log("******************************")

// if(user2.address){
//     if(user2.address?.city){
//         console.log(user2.address.city)
//     }
//     else {
//         console.log(user2.address?.city ?? "City is not available")
//     }
// }
// else {
//     console.log(user2?.address ?? "Address is not available")
// }

//* upper if and else can be written as (look below)

console.log(user2.address?.city ?? "Address is not available or City is not available")

console.log("******************************")

console.log(user2.address?.city ?? "City is not available") //* mostly used this method

console.log("******************************")

console.log(user2.address?.["city"] ?? "City is not available")

console.log("******************************")

console.log(user2.address?.[cityName2] ?? "City is not available")

console.log("******************************")