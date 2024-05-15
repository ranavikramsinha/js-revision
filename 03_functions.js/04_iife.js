//* Immediately Invoked Function Expressions (IIFE)
//* => (function name(){})();
//* => ((){})();
//* => ((parameters){})(arguments);
//* ; is important to mention for next iife

(function site(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //* ; is important to mention for next iife

( () => {
    console.log(`DB CONNECTED TWO`)
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("RANA");

// ( function site2() {
//     console.log(`DB CONNECTED TWO`)
// })();


//****************** Practice *******************

(function fun1(name){ //* named IIFE
    console.log(`Hello! ${name}`)
})("Raja Babu");

((name) => { //* unnamed IIFE with parameter's
    console.log(`I am ${name}`)
})("Rana Vikram Sinha");

(() => { //* unnamed IIFE
    console.log(`Panchayat`)
})();