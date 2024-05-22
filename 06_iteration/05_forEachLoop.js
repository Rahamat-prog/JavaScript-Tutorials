//  for each loop mostly use 
//Use forEach loop when you need to iterate over array elements 
// and execute a callback function for each element, without creating a new array.
// It provides a cleaner and more concise syntax compared to traditional for loops,

// default syntax
// array.forEach(element => {
    
// });


const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function(val) {   // there is no function name cause its callback 
//     console.log(val);
// } )


// coding.forEach((item,) => {   // use for each loop in arrow function with backet 
//     console.log(item);
// } )


// coding.forEach( (value) => console.log(value) )  // use for each loop in arrow function without backet 


// const numbers = [10, 20, 30, 40, 50];

// numbers.forEach( (value, index) => console.log(`index: ${index}: ${value}`) ) // use for each loop in arrow function without backet 


// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => { // we can pass multiple paramiter inside for each loop
//     console.log(index, item);
// })


// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach((item) => {
//     console.log(item.languageName);     // here we can return particular value from inside Array then object, using for each loop
// } )


// When to Use forEach
// When you need to iterate over an array to perform operations such as logging, updating external variables, or making API calls.
// When you want to keep your code clean and readable without managing loop indices manually.
// When you do not need to break out of the loop early.