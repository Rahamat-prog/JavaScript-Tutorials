// 1. Count the occurrences.
function countOccurrence(str) {
    let occurrence = {}
    for (const char of str) {
        if (occurrence[char]) {
            occurrence[char]++
        }
        else {
            occurrence[char] = 1
        }
    }
    console.log(str);
    console.log(occurrence);
}
countOccurrence('chai aur code')


// 2. Only unique items are allowed.
function uniqueElement(arr) {
    // Create a new Set from the array
   const uniqueSet = new Set(arr)
   // Convert the Set back to an array if needed
   const  uniqueArray = [...uniqueSet]
   return uniqueArray // Return the array with unique elements
      
}
const arr = [1, 2, 3, 1, 2, 3]
const result = uniqueElement(arr)
console.log(result);


// 3. Swap the values.
function swapValue(x, y) {
    // destructuring 
    [y, x] = [x, y]
    return [y, x]
}
const x = 5
const y = 10 
console.log(`The value is x and y ${x} ${y}`);
const swap = swapValue(x, y)
const withutComa = `${swap.join(' ')}`
console.log(`the swap value is ${withutComa}`);


// 4. Access random elements.
function randomElement(arr) {
    if (arr.length < 3) {
        // console.log(arr.length);
        console.log('provide at least 3 element')
    }
    else {
        const [first, second] = arr
        const last = arr[arr.length - 1]
        return [first, second, last]
    }
   
}
const arr4 = [1, 2, 3, 4, 5]
const result4 = randomElement(arr4)
console.log(result4); // [1, 2, 5]


//5. Min and max values.
function minmax(arr) {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    return {max, min}
}

const arr5 = [1, 2, 3, 6]
console.log(minmax(arr5));


//6. Nested Objects.
function extractNameAndStreet(person) {
    // Destructure the nested object
    const { address: { name, street } } = person;
    return { name, street };
}
const person = {
    name: "John Doe",
    address: {
        name: "Home",
        street: "123 Main Street"
    }
};
// Extract name and street properties
const { name, street } = extractNameAndStreet(person);
// console.log({ name, street }); // Output: { name: 'Home', street: '123 Main Street' }



