"use strict"
function createUser(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
createUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years `
};

createUser.prototype.is18 = function () {
    return this.age >= 18;
}

console.log(createUser.prototype);

const user1 = new createUser('lalit', 'jindal', `lalit@gmail.com`, 19, "house no  street city")
console.log(user1.about());
console.log(user1.is18());

for(let key in user1){
    if(user1.hasOwnProperty(key))
        console.log(key);
}




let numbers= new Array(1,2,3);
console.log(Array.prototype);
console.log(numbers);