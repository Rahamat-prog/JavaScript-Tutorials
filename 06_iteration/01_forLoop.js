// loop : - Loops offer a quick and easy way to do something repeatedly.
// There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times.

// for (let i = 0; i < 10; i++) {
//    const  element = i

//    if (element === 5) {
//         console.log("5 is the best number ");
    
//    }

//     console.log(element);
    
// }

// 1 to 10 number table print
// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`); // 
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`); // 
//    }

// }


// let myArray = ['flash', 'Bathman', 'Superman']
//     console.log(myArray.length);  // 3
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element); // flash Bathman Superman
   
  
    
// }


// break and continue

// for (let i = 1; i < 10; i++) {
//     if (i === 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(i);
    
// }


// for (let i = 1; i < 10; i++) {
//     if (i === 5) {
//         console.log(`Detected 5 `);
//         continue
//     }
//     console.log(i);
    
// }


// Summary of Use Cases:
// for loop: Use when you know the exact number of iterations or when you need to increment a counter.
// while loop: Use when the number of iterations is not known beforehand and depends on a condition.
// do...while loop: Use when you need to ensure that the loop body is executed at least once.
// for...in loop: Use for iterating over the properties of an object (not recommended for arrays).
// for...of loop: Use for iterating over the values of an iterable object (arrays, strings, maps, sets, etc.).