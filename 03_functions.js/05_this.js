function getThis() {
    console.log(this)
}

const obj = {
    getThis,
}
getThis()
obj.getThis()

//* O/P => 1st - window (in browser) and global (in node,deno,bun)
//*        2nd - {getThis: f}

const getThis2 = () => {
    console.log(this)
}

const obj2 = {
    getThis2,
}
getThis2()
obj2.getThis2()

//* O/P => 1st - {} (window (in browser) and global (in node,deno,bun)) 
//*        2nd - {} (window (in browser) and global (in node,deno,bun))

function getThis3 () {
    console.log(this)
}

const obj3 = {
    getObjThis: function(){
        console.log(this)
    },
}
getThis3()
console.log(obj3)

//* O/P => 1st - window (in browser) and global (in node,deno,bun)
//*        2nd - {getObjThis: f}

const getThis4 = () => {
    console.log(this)
}

const obj4 = {
    getObjThis: () => {
        console.log(this)
    },
}
getThis4()
obj4.getObjThis()

//* O/P => 1st - {} (window (in browser) and global (in node,deno,bun)) 
//*        2nd - {} (window (in browser) and global (in node,deno,bun))