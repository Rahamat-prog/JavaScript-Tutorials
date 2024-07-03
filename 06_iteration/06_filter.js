//  filter  - > return true / false  value 

//The filter method in JavaScript is used to create a new array with all elements that pass a certain condition. It iterates over each element of the array and includes only those elements for which the callback function returns true.

// besically in for each loop we can't return the value so, we use filter 

//different b/w filter and map : => 
//In summary, map is used for transforming elements, while filter is used for selecting elements based on a condition. Both methods are powerful tools for working with arrays in JavaScript and are commonly used in functional programming paradigms.


// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item) => {
//     console.log(item); // js ... 
//     // return item  //  here not permisable to use retun key.
// } )


// const myNums = [1, 2, 3,  4, 5, 6, 7, 8, 9, 10]

// const newNamber = myNums.filter( (num) => num > 5 )   // one way 

// console.log(newNamber); //[ 6, 7, 8, 9, 10 ]


// const myNums = [1, 2, 3,  4, 5, 6, 7, 8, 9, 10]

// const newNamber = myNums.filter( (num) => {  // another way 
//     return num  // must write return key
// } ) 

// console.log(newNamber);


//  understand filter using exmple 

// const books =  [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ]

// let userBooks = books.filter( (bk) => {
//     return bk.genre === "Fiction" && bk.publish >= 1987
// } )

// // const userBooks = books.filter( (bk) => bk.genre === 'Fiction'&& bk.publish >= 1987 )

// console.log(userBooks);
