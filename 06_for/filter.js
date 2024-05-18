//* filter

const arr1s = [11,22,33,44,55,66,77,88,99,100]

const value1 = arr1s.filter((arr1) => (arr1>44))
console.log(value1)

console.log("***********************************")

const value2 = arr1s.filter((arr1) => {
    return arr1<=55
})
console.log(value2)

console.log("***********************************")


const arr2s = ["Rana Vikram Sinha", "Raja Babu", "Pankaj Kumar", "Rahul Pandey", "Aryan", "Ayush"]

const value3 = arr2s.filter((arr2) => (arr2.length>7))
console.log(value3)

console.log("***********************************")

const value4 = arr2s.filter((arr2) => (arr2.length<6))
console.log(value4)

console.log("***********************************")

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const user1 = books.filter((book) => (book.genre == "Fiction"))
  console.log(user1)

console.log("***********************************")

  let user2 = books.filter((book) => (book.genre == "Fiction")).filter((book) => (book.publish <= 1986))
  console.log(user2)

console.log("***********************************")

  let user3 = books.filter((book) => (book.genre == "Fiction")).filter((book) => (book.edition < 2008))
  console.log(user3)

console.log("***********************************")

  const user4 = books.filter((book) => (book.genre == "Science" && book.publish >= 2000))
  console.log(user4)

console.log("***********************************")

  const user5 = books.filter((book) => (book.publish >= 1992 && book.edition <= 2015))
  console.log(user5)