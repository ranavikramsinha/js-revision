const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task has happened")
        resolve() //* resolve() executes and then connect to .then()
    }, 1000)
})

promise1.then(() => {
    console.log("Promise1 has come")
})

//* promise2

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task2 has happen")
        resolve()
    }, 1000)
}).then(() => {
    console.log("Promise2 has come")
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: "Rana Vikram Sinha",
            age:23,
        })
    }, 1000)
})

promise3.then((user) => {
    console.log(user)
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({
                username: "Rana Vikram Sinha",
                age:23,
            })
        }
        else{
            reject("Error happened")
        }
    }, 1000)
})

// const user1 = promise4.then((user) => { //* Promise is pending state
//     console.log(user)
//     return user.username
// })

// console.log(user1)

promise4.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch((error) => {
    console.log("Error")
})
.finally(() => {
    console.log("Promise is either resolved or rejected")
})

const promise4Error = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({
                username: "Rana Vikram Sinha",
                age:23,
            })
        }
        else{
            reject("Error happened")
        }
    }, 1000)
})

// const user1 = promise4.then((user) => { //* Promise is pending state
//     console.log(user)
//     return user.username
// })

// console.log(user1)

promise4Error.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch((error) => {
    console.log("Error")
})
.finally(() => {
    console.log("Promise is either resolved or rejected")
})

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({
                username: "Raja Babu",
                age:27,
            })
        }
        else{
            reject("Error")
        }
    }, 1000)
})

async function absorbPromise5(){
    const response = await promise5
    console.log(response)
}

absorbPromise5()

const promise5AsyncHandleError = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({
                username: "Raja Babu",
                age:27,
            })
        }
        else{
            reject("Error")
        }
    }, 1000)
})

async function absorbPromise5AsyncHandleError(){
    try{
        const response = await promise5AsyncHandleError
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

absorbPromise5AsyncHandleError()



// async function users(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const responseInJSON = await response.json()
//         console.log(responseInJSON)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// users()


//* fetch().then().catch().finally()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(date) //* get the "Error" message
})
.catch((error) => {
    console.log("Error")
})

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log("Error")
})

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(date) //* get the "Error" message
})
.catch((error) => {
    console.log("Error")
})