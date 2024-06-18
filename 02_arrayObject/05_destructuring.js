// The main difference between rest and spread is that the rest operator puts the rest of some specific user-supplied values into a JavaScript array.
// But the spread syntax expands iterables into individual elements.

const [a, b, ...rest] = [10, 20, 30, 40, 50]

// console.log(a);
console.log(rest);


// spread operator 
const arr1 = [1,2,3]
const arr2 = [4,5,6]

const addTwoArr = [...arr1, ...arr2]
console.log(addTwoArr);


// rest opeator / rest parameter
function restOperator(...args) {
    const arr = args.map( e => e)  
    console.log(arr);
}

restOperator(1, 2, 3, 4)
restOperator(5, 6, 7, 8)
