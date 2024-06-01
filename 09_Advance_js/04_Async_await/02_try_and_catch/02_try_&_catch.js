async function asyncRequest(){
    try{
        const url = "http://dummyjson.com/users"
        const response = await fetch(url)
        const usersData = await response.json()
        return usersData
    }
    catch(error){
        console.log("Error:", error)
    }
}


setTimeout(() => {
    asyncRequest().then((data) => {
        console.log(data)
    })
},2000)