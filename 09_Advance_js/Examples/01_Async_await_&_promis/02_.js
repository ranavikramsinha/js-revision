const myPromise = new Promise((resolve, reject) => {
    resolve("Promise Resolved");
});

console.log("Start");

setTimeout(() => {
    console.log("function above timeout");
}, 0);

async function exec() {
    console.log("First");
    setTimeout(() => {
        console.log("Await Before Timeout");
    }, 0);

    myPromise.then((response) => console.log(response));

    const response = await fetch("https://api.freeapi.app/api/v1/public/randomjokes");
    const data = await response.json();
    console.log(data.data.data[0]);

    setTimeout(() => {
        console.log("Await After Timeout");
    }, 0);
}

setTimeout(() => {
    console.log("function Below timeout");
}, 0);

exec();
console.log("End");

//* Start (synchronous)
//* First (synchronous inside exec)
//* End (synchronous)
//* Promise Resolved (microtask from myPromise.then)
//* function above timeout (first macrotask from setTimeout)
//* function Below timeout (second macrotask from setTimeout)
//* Await Before Timeout (third macrotask from setTimeout)
//* Data from fetch (microtask from await fetch and await response.json())
//* Fetch request is initiated and the function pauses at await fetch.
//* Other macrotasks and microtasks are processed while the fetch request is pending.
//* Once the fetch request completes, the promise resolves, and the subsequent await response.json() continues.
//* Data is logged as a microtask.
//* Await After Timeout (fourth macrotask from setTimeout)