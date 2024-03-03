"use strict"
const userMethod = {
    about: function () {
        return `${this.firstName} is ${this.age} years `
    },
    is18: function () {
        returnthis.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age=age;
    user.address = address;
    user.about = userMethod.about;
    user.is18 = userMethod.is18;
    return user;
}

const user1 = createUser('lalit', 'jindal', `lalit@gmail.com`, 19, "house no  street city")
console.log(user1.about());


