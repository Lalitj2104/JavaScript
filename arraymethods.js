"use strict"

//important methods
//1. forEach

const no=[1,2,3,4,5];
function func(number,index){
    console.log(`inddex is ${index} and number is ${number}`);
}

no.forEach(func);

//multipy each number by 2

no.forEach(function(number) {
    console.log(`multiplied no is ${number*2}`)
})

const obj=[
    {name:'lalit',roll:2210991847},
];

obj.forEach(fun=>{
    console.log(fun.name)
})


//2. map method

const num=[3,6,1,4,8];

const sq=function(num){
    return num*num;
}

const square=num.map(sq);
console.log(square);


//3.filter method

const even=(number)=>{
    if(number%2===0){
        return number;
    }
}

const evenNum=num.filter(even);
console.log(evenNum);


//4. reduce 
// const aws=[1,2,3,4,5]

// const sum=aws.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// });
// console.log(sum); 



const userCart=[
    {product:1,Name:"mobile",price:20000},
    {product:2,Name:"laptop",price:22000},
    {product:3,Name:"tv",price:15000},
]

const totalAmount=userCart.reduce((totalprice,currentprice)=>{
    return totalprice+currentprice.price;
},0)

console.log(totalAmount);


//sort function
 const  numbers=[5,9,1200,410,300]
 numbers.sort();
 console.log(numbers);

numbers.sort((a,b)=>a-b);
console.log(numbers);


//for sorting the userCart 
userCart.sort((a,b)=>{
    return a.price-b.price;
});

console.log(userCart);



// find function 
const myArray=["hello","cat","doggy","lion"]

// function islength(string){
//     return string.length ===3;
// }

// const ans=myArray.find(islength);

const ans=myArray.find((string)=>{
    return string.length ===3;
})
console.log(ans);