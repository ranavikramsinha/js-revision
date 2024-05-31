//* Synchronous example => Each line of code is executed one after the other. If a line of code takes time (like a long calculation or a network request), the next lines wait until it’s done

console.log('Customer 1 orders steak');
console.log('Cooking steak...');
console.log('Serving steak to Customer 1');
console.log('Customer 2 orders pasta');
console.log('Cooking pasta...');
console.log('Serving pasta to Customer 2');


//* Asynchronous example => Code can start a task and then move on to the next one before the first task is completed. When the first task is ready, it comes back and finishes up

console.log('Customer 1 orders steak');
setTimeout(() => {
  console.log('Serving steak to Customer 1');
}, 3000); // Simulates cooking time

console.log('Customer 2 orders pasta');
setTimeout(() => {
  console.log('Serving pasta to Customer 2');
}, 1500); // Simulates cooking time
