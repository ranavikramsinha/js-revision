//* Immediately Invoked Function Expressions (IIFE)
//* => (function(){})();
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