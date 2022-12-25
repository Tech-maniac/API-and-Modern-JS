//ECMA 2015/ES6

//Array Destructuring : 

let details = ["John","Doe",23];

// let firstName = details[0];
// let lastName = details[1];
// let age = details[2];

//console.log(firstName);

let [firstName,lastName,age] = details;

// console.log(firstName);
// console.log(lastName);

//object properties :

//How to get Dynamic data in an object

let myName = "Jenny";
let intro = "How are you?"
const myData = {
    [myName] : intro,
    [20+10] : "is my age",
    grade : "A"
}

//console.log(myData);

//If key & value are same, write it once

let studentName = "Jenny";
let studentAge = 25;

const studentData={
    studentName,
    studentAge 
}

//console.log(studentData);

//Spread operator (...) :
//DRY : 

let shoppingList = ["books","apples","pen"];
//console.log(shoppingList);

let newShoppingList =[...shoppingList,"clothes","chips"];
//console.log(newShoppingList);

//** Operator : 
//2*2*2
//console.log(2**3);

//ECMA 2018 / ES9
//Spread operator for objects :

let personInfo = {name : "John",age:24}
//console.log(personInfo);

let newpersonInfo = {...personInfo}
//console.log(newpersonInfo);

//Advanced JS :

//Synchronous JS

// const abc=()=>{
//     console.log("Function 2 is called");
// }

// const function1=()=>{
//     console.log("Function 1 is called");
//     abc();
//     console.log("Function 1 is called AGAIN");
// }

// //calling function
// function1();

//Asynchronous JS :
const function2=()=>{
    setTimeout(()=>{
        console.log("Function 2 is called");
    },5000)
}

const function1=()=>{
    console.log("Function 1 is called");
    function2();
    console.log("Function 1 is called AGAIN");
}

//calling function
function1();


//API : Application programming interface.















