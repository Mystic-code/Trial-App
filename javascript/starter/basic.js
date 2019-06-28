// Prompt use to get input
/*
var inputData = prompt('What is the number in your mind ?');
console.log(inputData);

// Typeof operator 

var x='hello';
console.log(typeof x);
*/
//coding challange 
//  BMI calculator

//logical operator === return boolean)
 
//falsy values: null, undefined, 0, '', NaN
//truthy values: not falsy values

//function

// function calAge(birth,current){
//         return current-birth;

// }
// var cur = 2020;
// var show = calAge(1996, cur);
// console.log(show);  

// Function Expression

// var work = function(job,name){
//     switch(job){
//         case 'teacher':
//             return name + 'Teaches kids';
//             case 'driver':
//                 return name+'Drivers in UK';
//                default: 
//                return name +'Does something';
//     } 
//     }
// console.log(work('teacher','John'));
// console.log(work('driver','mary'));
// console.log(work('banama','terry'));


// Creating array
/*
var names =['john',true, 2019,'terry'];

names.push('retro');
names.unshift('Mr');
names.pop();
names.shift();
var ind= names.indexOf('john');
*/
/*
//    Object

var john ={
    firstName: 'john',
    lastName: 'Smith',
    birth: 1996,
    family:['jane','make','marly','most'],
    job:'teacher',
    isMarried: false
};
john.isMarried = true;
console.log(john.firstName);
console.log(john.family[2]);
console.log(john['firstName']);
console.log(john.isMarried);

// Object Literal

var jane = new Object();
jane.firstName ='janne';
jane.lastName ='mina';
jane.birthplace ='orissa';
console.log(jane);
*/

//    function inside object
/*
var  mark ={
    fullName: 'Biswajit',
    birthYear: 1996,
    calcAge: function(){
        this.age = 2019 - this.birthYear;
        return this.age;
    }
}

console.log('The age of Biswajit is ' +mark.calcAge());

*/

// Loops in JavaScript

// For Loop
/*
for(var i=0; i<=5;i++)
{
    console.log(i);
}
*/

// Global execution context = where all code is executed but not the one's inside a function
// In execution context is used for code inside functions
//  A execution stack is created for every function execution after the global execution

////////////////////////////////////////////////////

// DOM = Document Object Model
var dice =[0,0];
var activePlayer=0;

//setter
document.querySelector('#player-'+activePlayer).textContent= dice;
 document.querySelector('#player-'+activePlayer).innerHTML='<b>'+dice+'</b>';

 // getter
 var x = document.querySelector('#player-0').textContent;

// change CSS

document.querySelector('.dice').style.display='none';

// Event Handling   Ref: MDN Page Events  // Function called by another function is called callback function
//Ananomous function are those that are written in the place of btn in code
document.querySelector('.btn-roll').addEventListener('click',btn);
function btn(){
    //Does something
}

// using variable

var dice = document.querySelector('.dice');
dice.style.display='block';
dice.src='image-1.png';

// removing and adding classes


