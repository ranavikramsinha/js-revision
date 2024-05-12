// var c = 700
let a = 70

if(true){
    let a = 10
    const b = 20
    // console.log("INNER: ", a)
    // var c = 30 // don't use var
    // c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "rana"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    // two()
}

one()

if(true){
    const username = "rana"
    if (username === "rana"){
        const website = " vikram"
        // console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)

// +++++++++++++++++++++++ interesting ++++++++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}

addTwo(10)
const addTwo = function(num){
    return num + 2
}

// addTwo(10)