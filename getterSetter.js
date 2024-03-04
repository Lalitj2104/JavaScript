"use strict"

class person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    get fullname(){
       return`${this.firstName} ${this.lastName}`
    }
    set fullname(fullname){
        const[firstname,lastname]=fullname.split(" ");
        this.firstName=firstname,
        this.lastName=lastname;
    }

    
}


const person1=new person("Lalit","Jindal",19);
person1.fullname="Lalit Jindal";
console.log(person1);