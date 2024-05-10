const user1 = {
    fullName: "Rana Vikram Sinha",
    age: "23",
    location: "Bangalore",
}
console.log(user1["location"])

const {location} = user1
console.log(location)

const {location: loc} = user1
console.log(loc)