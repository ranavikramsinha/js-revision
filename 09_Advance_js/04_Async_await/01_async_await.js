async function asyncRequest() {
    const url = "https://dummyjson.com/users"
    const response = await fetch(url)
    const data = await response.json()
    return data
}

setTimeout(() => {
    asyncRequest().then((data) => console.log(data))
}, 5000)