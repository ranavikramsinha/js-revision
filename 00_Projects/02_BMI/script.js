// const form = document.querySelector("form")
// console.log(form)

// form.addEventListener("submit", (event) => {
//     event.preventDefault()

//     const height = parseInt(document.querySelector("#height").value)
//     const weight = parseInt(document.querySelector("#weight").value)
//     const results = document.querySelector("#result")

//     if(height === "" || height < 1 || isNaN(height)){
//         results.textContent = "Not a valid height"
//     }
//     else if(weight === "" || weight < 1 || isNaN(weight)){
//         results.textContent = "Not a valid weight"
//     }
//     else if(height > 0 && weight > 0){
//         const bmiResult = (weight/((height*height)/10000)).toFixed(1)
        
//         if(bmiResult < 18.6){
//             results.innerHTML = `<div>${bmiResult}</div><div>Under Weight = Less than 18.6</div>`
//         }
//         else if(bmiResult > 18.5 && bmiResult <25){
//             results.innerHTML = `<div>${bmiResult}</div><div>Normal Range = 18.6 and 24.9</div>`
//         }
//         else if(bmiResult > 24.9){
//             results.innerHTML = `<div>${bmiResult}</div><div>Overweight = Greater than 24.9</div>`
//         }
//     }
// })

const selectingForm = document.querySelector("form")
console.log(selectingForm)

selectingForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#result")

    if(height === "" || height < 1 || isNaN(height)){
        results.innerHTML = `<div>Not a valid height</div>`
    }

    else if(weight === "" || weight < 1 || isNaN(weight)){
        results.innerHTML = `<div>Not a valid weight</div>`
    }

    else if(height > 0 || weight > 0){

        const bmiResult = (weight/((height*height)/10000)).toFixed(1)

        if(bmiResult < 18.6){
            results.innerHTML = `<div>${bmiResult}</div><div>Under Weight = Less than 18.6</div>`
        }
        else if(bmiResult > 18.5 && bmiResult <25){
            results.innerHTML = `<div>${bmiResult}</div><div>Normal Range = 18.6 and 24.9</div>`
        }
        else if(bmiResult > 24.9){
            results.innerHTML = `<div>${bmiResult}</div><div>Overweight = Greater than 24.9</div>`
        }
      
    } 
})