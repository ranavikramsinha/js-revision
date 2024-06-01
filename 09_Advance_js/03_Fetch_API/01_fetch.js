// fetch("https://dummyjson.com/products/add",{
//     // method: "GET"
//     method: "POST",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify({
//         title: "Lash Product",
//         category: "Cosmetics",
//     })
// })
// .then((response) => response.json())
// .then((data) => console.log(data))


// fetch("http://dummjson.com/users")
// .then((response1) => response1.json())
// .then((usersData) => fetch(`https://dummyjson.com/posts/user/${usersData.users[0].id}`))
// .then((response2) => response2.json())
// .then((posts) => fetch(`https://dummyjson.com/comments/post/${posts.posts[0].id}`))
// .then((response3) => response3.json())
// .then((commentsData) => fetch(`https://dummyjson.com/users/${commentsData.comments[1].user.id}`))
// .then((response4) => response4.json())
// .then((commentsDataOfUser) => console.log(commentsDataOfUser))
// .catch((error) => console.log(error))


fetch("http://dummyjson.com/users")
  .then((response1) => response1.json())
  .then((usersData) => {
    //* Make the second fetch request
    return fetch(`https://dummyjson.com/posts/user/${usersData.users[0].id}`);
  })
  .then((response2) => response2.json())
  .then((posts) => {
    //* Make the third fetch request
    return fetch(`https://dummyjson.com/comments/post/${posts.posts[0].id}`);
  })
  .then((response3) => response3.json())
  .then((commentsData) => {
    //* Make the fourth fetch request
    return fetch(`https://dummyjson.com/users/${commentsData.comments[1].user.id}`);
  })
  .then((response4) => response4.json())
  .then((commentsDataOfUser) => {
    //* Log the final data
    console.log(commentsDataOfUser);
  })
  .catch((error) => console.log("Error Request Failed", error));
