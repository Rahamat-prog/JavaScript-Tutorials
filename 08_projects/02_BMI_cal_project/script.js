const form = document.querySelector('form')
// const height = parseInt (document.querySelector('#height').value)    // this usecase will give you empty

form.addEventListener('submit', ( (e) => {
    e.preventDefault( )  // hold not sent in the database

    const height = parseInt (document.querySelector('#height').value) 
    const weight = parseInt (document.querySelector('#weight').value) 
    const result = document.querySelector('#result')

    if (height === " " || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter a valid height `
    }

    else if (weight === " " || height < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter a valid weight`
    }

    else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2)
        if (BMI < 18.6) {
            result.innerHTML = `your BMI ${BMI} (Under Weight)`
        }
        else if(BMI > 24.9 ){
            result.innerHTML = `your BMI ${BMI} (over weight)`
        }
        else{
            result.innerHTML = `your BMI ${BMI} (Normal range)`

        } 
         
        // show result 
        // result.innerHTML = ` BMI is :  ${BMI} `
    }
} ) )