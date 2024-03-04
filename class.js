"use strict"

// class CreateUser {
//     constructor(firstName, lastName, email, age, address) {
//         console.log("constructor created")
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }
//     about() {
//         return `${this.firstName} is ${this.age} years `
//     }
//     is18() {
//         return this.age >= 18;
//     }
// };

// const user1= new CreateUser('lalit', 'jindal', `lalit@gmail.com`, 19, "house no  street city")
// console.log(Object.getPrototypeOf(user1))

class animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat = () => `${this.logname} is eating`
    isSuprcute() {
        if (this.age <= 1) {
            return true;
        }
    }
    iscute = () => true;
}

// const ani=new animal('tommy',1);
// console.log(ani.eat())
// console.log(ani.isSuprcute())
// console.log(ani.iscute())


class dog extends animal {
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }
    run(){
        return `${this.speed} kmph is running speed of ${this.name}`
    }

}

const doggy=new dog('tom',1,30);
console.log(doggy.run())