// Introduction to exceptional error handling in Javascript
// Introduction to try-catch

try {
    let x = undefined
    console.log(x[0]);
}
catch(err) {
    console.log("Error handeling in catch", err);
} finally {
    console.log(" Finally always get executed");
}
console.log("end");


// // higher order function ->
// // In JavaScript, a higher-order function is a function that can accept other functions as an arguments,

function callbachFunction(name) {
    console.log("Hi I'm callback function", name);
}

function higherOrder(name, func) {
    func(name)
    console.log("mai ap ke piche hu ");
}

higherOrder("javascript", callbachFunction)



//  real example of higher order function 

const radius = [1,2 ,3]

// logic for find out area of circle 
const area = function(radius) {
    return Math.PI * radius * radius
    
}

// logic for find out diameter of circle 
const diameter = function(radius) {
    return  2 * radius
    // return storeDiameter
}

// a reusable function to calculate area, diameter, etc
const  calculate = function(radius, logic) {
    const output = []
    for(let i = 0; i < radius.length; i++) {
     output.push(logic(radius[i]))
    
    }
    return output
}

console.log(calculate(radius, area)) // [ 3.141592653589793, 12.566370614359172, 28.274333882308138 ]
console.log(calculate (radius, diameter)) //[ 2, 4, 6 ]


