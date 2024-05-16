//* if - else if - else

if(true){    //* if(condition's)
    //* this code executes because the condition is true
}
else{
    //* this code will execute if upper if's not runs because of condition
}

if(false){
    //* this code not executes because the condition is false
}
else if (true){
    //* this code executes because the condition is true
}
else{
    //* this code will execute if upper if's not runs because of condition
}


//************************ Comparison Operator's ***********************

//* <, >, <=, >=, !=, ==, === (also check data types)


//************************ Logical Operator's **************************

//* &&(and), ||(or), !(not)

const age = 22

if (age>17 && age<50){
    console.log("You are an adult")
}
else if (age>49){
    console.log("You are a senior citizen")
}
else if (age>10 && age<18){
    console.log("You are a teenager")
}
else{
    console.log("Enjoy your childhood!")
}