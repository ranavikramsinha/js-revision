// function makeHttpRequest(method, url, callback) {
//     const xhr = new XMLHttpRequest()
//     xhr.responseType = 'json'
//     xhr.addEventListener('load', () => {
//       callback(xhr.response)
//     })
  
//     xhr.open(method, url)
//     xhr.send()
//   }
  
//   makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
//     makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
//       console.log(postsData) //* https://dummyjson.com/posts/15
//       makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
//         console.log(commentsData) //* https://dummyjson.com/comments/post/15
//         makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
//           console.log(userData); //* https://dummyjson.com/users/74
//         });
//       });
//     });
//   })

// function makeHttpRequest(method, url){
//     const xhr = new XMLHttpRequest()
//     xhr.responseType = "json"

//     const promise1 = new Promise((resolve, reject) => {
//         xhr.addEventListener("load", () => {
//             resolve(xhr.response)
//         })
        
//         xhr.addEventListener("error", () => {
//             reject("Request Failed")
//         })
//     })

//     xhr.open(method, url)
//     xhr.send()

//     return promise1
// }

// makeHttpRequest("GET", "https://dummyjson.com/users")
// .then((usersData) => makeHttpRequest("GET", `https://dummyjson.com/posts/user/${usersData.users[0].id}`))
// .then((postsData) => makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
// .then((commentsData) => makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`))
// .then((commentsUserData) => console.log(commentsUserData))
// .catch((err) => console.log(err))

function makeHttpRequest(method, url){
    const xhr = new XMLHttpRequest()
    xhr.responseType = "json"

    const promise2 = new Promise((resolve,reject) => {

        xhr.addEventListener("load", () => {
            setTimeout(() => {
                resolve(xhr.response)
            }, 1000)
        })

        xhr.addEventListener("error", () => {
            setTimeout(() => {
            reject("Request Failed")
            }, 1000)
        })

    })

    xhr.open(method, url)
    xhr.send()

    return promise2
}

makeHttpRequest("GET", "https://dummyjson.com/users")
.then((usersData) => makeHttpRequest("GET", `https://dummyjson.com/posts/user/${usersData.users[0].id}`))
.then((posts) => makeHttpRequest("GET", `https://dummyjson.com/comments/post/${posts.posts[0].id}`))
.then((commentsData) => makeHttpRequest("GET", `https://dummyjson.com/users/${commentsData.comments[1].user.id}`))
.then((commentsDataOfUser) => console.log(commentsDataOfUser))
.catch((error) => console.log(error))