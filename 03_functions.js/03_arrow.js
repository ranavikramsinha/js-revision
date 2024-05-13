const user1 = {
    userFullName: "Rana Vikram Sinha",
    age: 22,

    asking: function(){
        console.log(`${this.userFullName}, How are you doing!`) //* this. use current context
    }
}

user1.asking()
console.log(user1)
user1.userFullName = "Raja Babu"
user1.age = 27
user1.asking()
console.log(user1)