"use strict"
// const userMethod = {
//     about: function () {
//         return `${this.firstName} is ${this.age} years `
//     },
//     is18: function () {
//         returnthis.age >= 18;
//     }
// }
function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // user.about = userMethod.about;
    // user.is18 = userMethod.is18;
    return user;
}
createUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years `
};

createUser.prototype.is18 = function () {
    return this.age >= 18;
}

console.log(createUser.prototype);

const user1 = createUser('lalit', 'jindal', `lalit@gmail.com`, 19, "house no  street city")
console.log(user1.about());
console.log(user1.is18());


