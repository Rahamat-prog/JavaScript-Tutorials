// map  -> game of multiiple calculation 

//The map method in JavaScript is used to create a new array by applying a transformation function to each element of an existing array

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNumbers = myNumers.map( (num) => {  // here we use backet its means return key 
    return (num * 10) + 1
    
} ).filter( (num) => {
    return num >= 40 
} )

console.log(newNumbers); //[ 41, 51,  61, 71,  81, 91, 101]


// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumbers = myNumers // here we use olny parenthesis // use of map do multiple culculation also we can use filter inside map 
//                   .map( (num) => num * 10  )
//                   .map( (num) => num + 1  )
//                   .filter( (num) => num >= 40  )

// console.log(newNumbers);


// Transform an array of numbers by doubling each element.
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(number => number * 2);

// console.log(doubled); // Output: [2, 4, 6, 8, 10]
