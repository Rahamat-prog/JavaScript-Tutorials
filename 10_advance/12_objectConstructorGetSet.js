function user(email, password) {
    this._email = email  
    this._password = password

    // Object.defineProperty to create getter and setter methods for the password property. 
    Object.defineProperty(this, 'password', {
        get: function() {
           return this._password // underscore means its become private so anyone can not access easy way
        },
        set: function(value) {
            this._password = value
        }
    })
        
}

const chai = new user('chai@.com', 'abs')
console.log(chai.password);
console.log(chai._email);