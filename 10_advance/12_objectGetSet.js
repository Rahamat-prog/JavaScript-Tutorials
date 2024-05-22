const user = {
    _password : '123',
    _email : 'rahamat123@gmail.com',

    set email(value) {
        this._password = value
    },
    get email() {
        return `Email is ${this._email.toUpperCase()}`
    }
}

const chai = Object.create(user)  //
console.log(chai.email);