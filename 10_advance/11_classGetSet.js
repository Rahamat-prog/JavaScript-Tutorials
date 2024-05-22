// how to define a class with getter and setter methods for its properties. These methods allow for controlled access and modification of property values, including custom behaviors like formatting or validation.

class user {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    get password() {
        return `the password is ${this._password.toUpperCase()}abs`
    }
    set password(value) {
        this._password = value
    }

    get email() {
        return `${this._email.toUpperCase()} `
    }
    set email(value) {
        this._email = value
    }
}

const chai = new user('rahamat123@gmail.com', '123')  // constractor function
console.log(chai.email);
console.log(chai.password);