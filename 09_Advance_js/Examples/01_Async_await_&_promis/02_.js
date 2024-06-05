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
