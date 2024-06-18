// Coding Challenges on Error Handling and Prototypes

//1. Type Conversion.
function convertNumber(str) {
    try {
        const convertedNum = Number(str)
       
        if (isNaN(convertedNum)) {
           throw new Error("Invalid Number")
        }
        return convertedNum
    }catch {
      return "Invalid Number"
    }
}
console.log(convertNumber("123")); // 123
console.log(convertNumber("abc")); // Invalid Number


//2 Building Robust Functions in JavaScript
function getPerson(person) {
    try {
        if (typeof person !== 'object' || person === null || !('name' in person) || !('age' in person)) {
            throw new Error("Invalid paramiter")
        }
        return `name: ${person.name}, age: ${person.age}`
    } catch (error) {
        return error.message;
    }
}
console.log(getPerson({name: "hitesh", age:40})) // name: hitesh, age: 40
console.log(getPerson({age: 40 })); // Invalid paramiter


//3. Car Description Class.
class myCar {
    constructor(c, y, m) {
        this.company = c
        this.year = y
        this.model = m
    }

    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}`
    }
}
const p = new myCar('Suzuki', 2022, 'Alto k10')
console.log(p.getDescription());


// 4. Employee Class Challenge.
class employee {
    constructor(n, p, s) {
        this.name = n
        this.position = p
        this.salary = s
    }
    getSalary() {
        return `In sha Allah One day I will earn ${this.salary} per month`
    }
}

const emptyObj = new employee("Rahamat", "Software Developer", 100000)
console.log(emptyObj.getSalary());


// 5. Implementing a Person Class with Default Values
class person {
    constructor(name = "Unknown", age = 0) {
        this.name = name
        this.age = age
    }
    getDetails() {
        return `Name is ${ this.name} age is ${this.age}`
    }
}
const persion1 = new person()
console.log(persion1.getDetails());

const persion2 = new person("Hitesh", 40)
console.log(persion2.getDetails());


// 6. Using Static Method to Add Two Numbers with Calculator Class
class calculator {
    
    static add(num1, num2) {
        const addNum = num1 + num2
        return addNum;
    }
}
const sum = calculator.add(2, 4)
console.log(sum);



// 7. Password Checker
class User {
    constructor(username, password) {
        this.username = username;
        this._password = password; // Use a private variable for password
    }

    get password() {
        // Return the password as a string of asterisks
        return '*'.repeat(this._password.length);
    }

    set password(newPassword) {
        // Check if the new password is at least 8 characters long
        const isValidLength = newPassword.length >= 8;
        // Check if the new password contains at least one number
        const containsNumber = /\d/.test(newPassword);
        // Check if the new password contains at least one uppercase letter
        const containsUppercase = /[A-Z]/.test(newPassword);

        if (isValidLength && containsNumber && containsUppercase) {
            this._password = newPassword; // Set the new password if valid
        } else {
            console.error('Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
        }
    }
}

// Example usage:
const user = new User('john_doe', 'Initial2');
console.log(user.password); // Output: ********
user.password = "jsdjQ12jdxs"
console.log(user.password); // ***********
user.password = "has"


// 8. Adding a Method to a Prototype.
function student(name) {
    this.name = name

    student.prototype.printDetails = function() {
        console.log(`Hello my name is ${this.name}`);
    }
}
const R = new student("Rahamat")
console.log(R.printDetails());


// 9. Check the presence using closures.
function numberCheker(arr) {
    return function(num) {
        return arr.includes(num)
    }    
  }

const arr = [1, 2, 3, 4, 5]
const check = numberCheker(arr)
console.log(check(2));
console.log(check(9));



//10. Filter by Category.

function productFilter(products) {
    // Return a function that filters products by category
    return function(category) {
        return products.filter(product => product.category === category);
    };
}

// Example usage:
const products = [
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'Shirt', category: 'Apparel' },
    { id: 3, name: 'Phone', category: 'Electronics' },
    { id: 4, name: 'Shoes', category: 'Apparel' },
    { id: 5, name: 'TV', category: 'Electronics' }
];

const filterByCategory = productFilter(products);

console.log(filterByCategory('Electronics'));
// Output: [{ id: 1, name: 'Laptop', category: 'Electronics' }, { id: 3, name: 'Phone', category: 'Electronics' }, { id: 5, name: 'TV', category: 'Electronics' }]

console.log(filterByCategory('Apparel'));
// Output: [{ id: 2, name: 'Shirt', category: 'Apparel' }, { id: 4, name: 'Shoes', category: 'Apparel' }]


