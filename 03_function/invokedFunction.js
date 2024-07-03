// Immediately Invoked Function Expressions (IIFE)
// The entire arrow function is wrapped in parentheses ( ). 
// This is a common pattern in JavaScript known as an Immediately Invoked Function Expression (IIFE).

(function chai() {
    console.log(`DB Connected`);
}) ();  // semiclone is must for the write to invoked function 


//  this is arrow invoked function 

( () => {
    console.log(`DB Connected two`); 
} ) ();


// olly IIFE
( (name) => {
    console.log(`DB connected two ${name}`);
} ) ("Hitesh")