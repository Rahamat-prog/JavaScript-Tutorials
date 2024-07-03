//  create Object using Contractor method 
const tinderUsear = new Object()

tinderUsear.id = "123abc"
tinderUsear.name = "Sammy"
tinderUsear.islogin = false

// console.log(tinderUsear); //{ id: '123abc', name: 'Sammy', islogin: false }| //return the key with value 
// console.log(Object.keys(tinderUsear)); // return the keys
// console.log(Object.values(tinderUsear));  // return the value 
// console.log(tinderUsear.hasOwnProperty('islogin'));  // true |It returns true because the islogin property is indeed defined on the tinderUser object.

const regularUser = { 
    email: "rahamat@123" ,
    fullname: {
        userName : {
            firstName : "Rahamat",
            lastName : "Shaikh"
        }
    }
}

// console.log(regularUser.fullname.userName.firstName);




//  concatinate two object 
const obj1 = {
    1 : "a",
    2 : "b",
}

const obj2 = {
    3 : "c", 
    4 : "d"
}

const addObject = {...obj1, ...obj2} //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }| shallow object merging.
const anotherWayAddObject = Object.assign({}, obj1, obj2) // another way to marging two object.

// console.log(addObject);
// console.log(anotherWayAddObject);


const  users = [
    {
        id: 1,
        email: "h@gmail1.com"
    },
    
    {
        id: 2,
        email: "h@gmail2.com"
    },
    {
        id: 5,
        email: "h@gmail3.com"
    },

]

// console.log(users[0].email);
// console.log(users[2].email);






//  Destructure 

const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

console.log(course.courseInstructor);  //

const {courseInstructor : instructor} = course // de structure |This line of code extracts the property courseInstructor from the course object and assigns it to a new variable named instructor.      

console.log(instructor);


// // JavaScript Object Notation (JSON) is a standard text-based format
//  for representing structured data based on JavaScript object syntax
// JSON format 

// {
//     "name" : "Hitesh",
//     "courseName" : "JS in Hindi",
//     "price" : "free"
// };


// inside Array there are object 
[
    {},
    {},
    {}
]