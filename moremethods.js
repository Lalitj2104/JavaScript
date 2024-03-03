"use strict"
//set
const numbers=new Set([1,2,3,3]);
console.log(numbers);


//maps
const person=new Map();
person.set('firstName','coder');
person.set('age',18);
person.set('work','fromHome');
person.set(1,'one');
console.log(person);
// console.log(person.get(1))
//this loop will iterate on whole pair
//we can't use this loop on objects.
for(let keys of person){
    console.log(keys)
}

//this loop will work on the keys of the map
for(let key of person.keys()){
    console.log(key,typeof(key));
}


const person1={
    id:1,
    first:'harshit'
}
const person2={
    id:2,
    first:'harshita'
}

const extraInfo=new Map();
extraInfo.set(person1,{age:10,gender:"male"});
extraInfo.set(person2,{age:20,gender:"female"});
console.log(person1.id);
console.log(extraInfo.get(person1).age)
console.log(extraInfo.get(person2).gender)

//coloning 
const obj={
    key1:"1",
    key2:2
}


//old approach
const obj2=Object.assign({},obj);
//new appraoch
const obj3={...obj}
console.log(obj2)
console.log(obj3)

//optional chaining

const que={
    first:'harshit',
    // house:{no:10000}
}  

console.log(que?.first);
// console.log(que.house.no)   this will give error instead we use
console.log(que?.house?.no)