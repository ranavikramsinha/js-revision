 //* falsy values => false, 0, -0, BigInt 0n, "", null, undefined, NaN
 //* truthy values => true, "0", " ", "false", [], {}, function(){}

 const emptyArray = []

 if(emptyArray.length === 0){ //* .length to find length of an array
    console.log("Array is empty")
 }
 else{
    console.log("Array is not empty")
 }

 
 const emptyObj = {}

 if(Object.keys(emptyObj).length === 0){ //* Object.keys() converts object into array
    console.log("Object is empty")
 }
 else{
    console.log("Object is not empty")
 }