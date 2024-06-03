async function async1(){
    console.log("async1 start")
    await async2()
    console.log("async1 end")
}

async function async2(){
    console.log("async 2")
}

console.log("script start")

setTimeout(() => {
    console.log("setTimeout")
}, 0)

async1()

new Promise((resolve) => {
    console.log("promise1")
    resolve()
}).then(() => {
    console.log("promise2")
})

console.log("script end")

//* script start   // synchronous
//* async1 start   // synchronous, within async1
//* async 2        // synchronous, within async2 called by async1
//* promise1       // synchronous, within the Promise constructor
//* script end     // synchronous
//* async1 end     // async1 resumes after await, which is after script end due to the async nature
//* promise2       // Promise resolved, .then handler runs
//* setTimeout     // Macro task executed after all synchronous and microtasks