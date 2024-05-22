// reduce pactice
// reduce : The reduce method in JavaScript is used to reduce an array to a single value. It iterates over each element of the array and accumulates a result by applying a callback function that you provide.

const myNums = [1, 2, 3, 4]

// const totalNums = myNums.reduce( function(accumulator, currectValue) {
//     console.log(`acc: ${accumulator} and curr: ${currectValue}`);
//     return accumulator + currectValue
// }, 0)

// console.log(totalNums);

// understand the above example 
// The callback function provided to reduce has two parameters:

// accumulator: This parameter accumulates the result of the callback function. It starts with the initial value provided (0 in this case).
// currentValue: This parameter is the current element being processed in the array.


// const totalNums = myNums.reduce( (acc, curr) => acc + curr, 0 )   // easy way 

// console.log(totalNums); // 10


// understand reduce with ex 

// const soppingCard = [
//     {
//         coursename : "JavaScript Course",
//         price : 1999
//     },
//     {
//         coursename : "C++ Course",
//         price : 2999
//     },
//     {
//         coursename : "C Course",
//         price : 999
//     }
// ]

// const  totalPrice = soppingCard.reduce( (acc, item) => acc + item.price, 0 )  // here we could easily add total price of sopping card, using reduce

// console.log(`totalPrice of all the couse is: ${totalPrice}`);
