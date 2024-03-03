"use strict"
//methods
//function inside object

const person={
    firstName:'coder',
    age:19,
    about: function(){
        console.log(`person name is ${this.firstName} and age ${this.age}`)
    }
}

person.about();

//in a mannered way

function personalInfo(){
    console.log(`my name is ${this?.firstname} and is age ${this?.age}`);
}

const obj={
    firstname:'coder',
    // age:19,
    about: personalInfo 
}
const obj1={
    firstname:'coders',
    age:19,
    about: personalInfo 
}
const obj2={
    firstname:'coderss',
    age:37,
    about: personalInfo 
}

obj.about();
obj1.about();
obj2.about();


// this will give window object
//console.log(window)
console.log(this);

//call apply bind  functions

//we are a type of borrowing the function of another object
//call
const user={
    firstname:'coderss',
    age:37,
    about: function(hobby,music){
        console.log(`my name is ${this.firstname} and age is ${this.age} ${hobby} ${music}`);
    }
}
user.about();
const user1={
    firstname:'coder',
    age:7,
   
}
user.about.call(user1,"guitar","guitarsikhda");

//apply
//difference is we can add additional in an array
user.about.apply(user1,["violin","shada"]);

//bind
//this will not print the dat insead it will return it in a function an dwe can call that function
const func=user.about.bind(user1,"tabla","sheikh");
func()


//arrow functions

//in arrow functions we do not use this keyword beacuse in the aroow function by default it will an upper value

const users={
    firstname:'coderss',
    age:37,
    about: (hobby,music)=>{
        console.log(`my name is ${this.firstname} and age is ${this.age} ${hobby} ${music}`);
    }
}

const userq={
    firstname:'coder',
    age:7,
   
}
users.about.call(userq);

