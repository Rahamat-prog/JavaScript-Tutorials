import fetch from "node-fetch";

// //  1. Double using callback.

function higherOrder(arr, callback) {
    const doubleArr = []
    for(let i=0; i<arr.length; i++) {
        doubleArr.push(callback(arr[i]))
    }
    return doubleArr;
}

function double(num) {
    return 2 * num
}
const arr = [1, 2, 3, 4, 5]
console.log(higherOrder(arr, double))


// //  2. String Manipulation.

function manipulateString(str) {
    const upperStr = str.toUpperCase()

   function logString() {
        console.log(`The manupulated string is ${upperStr}`)
     }
     logString()
}
manipulateString("Hello World")


// 3. Age in Days.

function ageInDays(person) {
    const fullName = `${person.Fname} ${person.Lname}`
    const age = person.age * 365

    function logMessage() {
        console.log(`The person full name is ${fullName} and age in days ${age}`)
    }++
    logMessage()
}

const person = {
    Fname: 'Rahamat',
     Lname: 'Shaikh', 
     age: 24
}

ageInDays(person)


// // another way to solve 3. Age in Days.

function ageInDays(person, callback) {
    const fullName = `${person.Fname} ${person.Lname}`
    const ageInDays = person.age * 365
    callback(fullName, ageInDays)
}

function logMessage(fullName, ageInDays) {
    console.log(`The person full name is ${fullName} and age in days ${ageInDays}`);
}

function hyHello(fullName) {
    console.log("you are my brotehr", fullName);
}


const person1 = {
    Fname : "Rahamat",
    Lname: "Shaikh",
    age: 24
}

ageInDays(person1, logMessage)
ageInDays(person1, hyHello)



//4. Arrange in alphabetical order.

function booksFilter(books, callback) {
    const title = books.map( (bk) =>  bk.tilte )
    callback(title)
//   const p = books.filter( (bk) => 
//   bk.genre === 'Fiction' && bk.edition >= 200  )
//    callback(p)

}

function logMessage(tilte) {
    console.log(tilte);
}


const books = [
    {
        tilte: "The story",
        author: "rabindra",
        year: 2020
    },
    {
        tilte: 'web Dev',
        author: 'brendan',
        year: 2022
    },
    {
        tilte: 'C++',
        author: 'sfjskf',
        year: 2022
    },
]

booksFilter(books, logMessage)



/// // 5. Greeting Promise.

const greeting = function geet(name) {
    return new Promise((resolve, reject) => {
    const message = `Hello ${name}`
    // console.log(message);
    resolve(message)
    } )
}

greeting('john').then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

// /// another way to consume promsie 

async function greetingConsume() {
    try {
        const response = await greeting("John")
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
greetingConsume()



//  // 6. Fetch results asynchronously.

async function fetchData() {
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        if (!response.ok) {
            throw new Error('Network response is not work')
        } else {
            const data = await response.json()
            console.log(data);
        }
    } catch (error) {
        console.log("error", error);
    }

}

fetchData()



// 7. Multiple requests.

async function MultipleRequest() {
   try {
    const dotoURL = 'https://jsonplaceholder.typicode.com/todos/1';
    const postUrl = 'https://jsonplaceholder.typicode.com/posts/1';

//  // Fetch data from both APIs concurrently
    const [todoResponse, postResponse] = await Promise.all([fetch(dotoURL), fetch(postUrl)])

    // check both response is ok 
    if (!todoResponse.ok) {
        throw new Error('Network response is not okay')
    }if (!postResponse.ok) {
        throw new Error('Network response is not okay')
    } 

    const data1 = await todoResponse.json()
    const data2 = await postResponse.json()
    
    // combine the result into an object 
    const combineResults = {
        todo: data1,
        post: data2
    }
    console.log(combineResults);

   } catch (error) {
     console.error('Error fetching data:', error);
   }

}

MultipleRequest()


