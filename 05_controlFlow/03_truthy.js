const userEmail = []

if (userEmail) {
    console.log("Got user email");

}else console.log("don't get user email ");

// falsy values 
//  false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values 
//  true, " " , [] , '0' {} , function() {} , "false"

//  prove this is empty array

if (userEmail.length === 0) {
    console.log("Array is empty ");
}

// prove object is empty 

const myObj = {}

if(Object.keys(myObj).length === 0) {   
    console.log("Empyt object ");
}


// Nullish Coalescing Operator (??): null undefined

// The Nullish Coalescing Operator (??) is used to provide a default value when dealing with null or undefined values. It returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand.

let val1;

// val1 = 5 ?? 10   // - > 5
// val1 = null ?? 10  // -> 10
// val1 = undefined ?? 10  // -> 10 
// val1 = null ?? 10 ?? 20 // 10 

// console.log(val1);


//  terniary operator 

//  condition ? true :  false  // syntax

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less then or eqal to 80") : console.log("grater then 80");;