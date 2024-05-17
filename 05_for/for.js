//* For

for (let i=0; i<=10; i++){
    console.log(i)
}

const str1 = "Rana Vikram Sinha"
for (let i=0; i<str1.length; i++){
    console.log(str1[i])
}

const arr1 = [11, 22, 33, 44, 55, 66]
for(let i=0; i<arr1.length; i++){
    console.log(arr1[i])
}

const arr2 = [233, 56, 255, 66, 32]
for(let i=0; i<arr2.length; i++){
    const element = arr2[i]
    console.log(element)
}


//*********************** Break and Continue ***************************

const str2 = "Raja Babu"
for(let i=0; i<=str2.length; i++){
    const element = str2[i]
    if(element === " "){
        console.log(`Space "${element}" has founded`)
        break; //* loop will break and iteration will stop
    }
    else{
        console.log(element)
    }
}


const str3 = "Aryan Sinha"
for(let i=0; i<=str2.length; i++){
    const element = str3[i]
    if(element === " "){
        continue; //* Space will not print and loop will continue to next iteration
    }
    else{
        console.log(element)
    }
}