// function getThis() {
//     console.log(this)
// }

// const obj = {
//     getThis,
// }
// getThis()
// obj.getThis()

// //* O/P => 1st - window (in browser) and global (in node,deno,bun)
// //*        2nd - {getThis: f}

const getThis = () => {
    console.log(this)
}

const obj = {
    getThis,
}
getThis()
obj.getThis()

//* O/P => 1st - {} (window (in browser) and global (in node,deno,bun)) 
//*        2nd - {} (window (in browser) and global (in node,deno,bun))