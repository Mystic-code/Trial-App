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

document.querySelector('.player-0-panel').classList.toggle('active');



////////////////////////////////////////////////////////////////////////////////////////////
                            //   Advance JavaScript   //
////////////////////////////////////////////////////////////////////////////////////////////


//              Construtor Or Prototype
//    It acts like a blue Print TO create more Objects.

//               Inheritance
 //    One Object is based on another object. It has access to property of parent object.
  
 //            Java script is prototype based language.

 //               JavaScript Constructor To create instances of a blueprint.

 //        Use Capital Letter For function Cunstructor.

  //               On use of new a empty object is created.
/*
  var Person = function(name, yob, weight, height){
    this.name = name;
    this.yob = yob;
    this.weight =weight;
    this.height = height;
                    this.calculateAge = function(){
                        console.log(2019-this.yob);
                    
    }    
}
                         OR
                Person.prototype.calsulateAge = function(){   // Method can be used outside the object property section Using Prototype Property
                     console.log(2019-this.yob);
                }         

                Person.prototype.name ='Biswajit';  // Can set property value Externally



    var john = new Person('John',1996,56,5.9);
    var Tim = new Person('Tim',1986,56,5.9);
    var mary = new Person('Mary',1994,56,5.9);
     john.calculateAge();
     Tim.calculateAge();
     mary.calculateAge();
     
     
     */
    /*
    //////////////////////////////////////////////////////////
                  // Object.create  //
    //////////////////////////////////////////////////////////
      */  
  /*
      var personProto = {
        calculateAge: function(){
            console.log(2016 -this.yearofBirth);

        }
    };
     var john = Object.create(personProto);
     john.name = 'john';
     john.yearofBirth = 1996;
     john.job = 'teacher';



     var jane = Object.create(personProto,
     {
         name:{value:'jane'},
         yearofBirth: {value:1993},
         job: { value:'designer'}
   } );
   
*/
           // Primitives vs Objects  
/*
           In Objects the reference is taken insted of the value
              Primitive doesn't change when new value is added.

       */
     
       ///    Function
       /*
       Function is an instance of the object type.
       Function Behaves like a object.
       function can be passed as argument 
       returned from a function.
       */

       // Passing Function as arguments

// var years = [ 1990,1992,1929,1992,1983,1922];

//   function arrayCalc(arr, fn){
//        var arrRes=[];
//        for(var i =0; i< arr.length; i++){
//            arrRes.push(fn(arr[i]));
//        }
//        return arrRes;
//      }
//     function calculateAge(el){
//         return 2016-el;
//     } 

//     function isFullAge(el){
//         return el>=18;
//     }

//     function maxHeartRate(el){
//         if(el>=18 && el<=81){
//         return Math.round(206.9 - (0.67 * el));
//       }else{
//           return -1;

//       }
//       }

//   var a = arrayCalc(years, calculateAge);
//   console.log(a);

//   var fullAges = arrayCalc(a, isFullAge );
//  var rates = arrayCalc(a, maxHeartRate);
//   console.log(fullAges);
//   console.log(rates);


// //  Function Costructor

// var Person = function(name, yob, weight, height){
//     this.name = name;
//     this.yob = yob;
//     this.weight =weight;
//     this.height = height;
//     this.calculateAge = function(){
//         console.log(2019-this.yob);
//     }    
// }
  
     
// var personProto = {
//     calculateAge: function(){
//         console.log(2016 -this.yearofBirth);

//     }
// };
//  var john = Object.create(personProto);
//  john.name = 'john';
//  john.yearofBirth = 1996;
//  john.job = 'teacher';



//  var jane = Object.create(personProto,
//  {
//      name:{value:'jane'},
//      yearofBirth: {value:1993},
//      job: { value:'designer'}
// } );


// var a  = 23;
//            var b = a;
//            console.log(a,b);


// var years = [ 1990,1992,1929,1992,1983,1922];

//   function arrayCalc(arr, fn){
//        var arrRes=[];
//        for(var i =0; i< arr.length; i++){
//            arrRes.push(fn(arr[i]));
//        }
//        return arrRes;
//      }
//     function calculateAge(el){
//         return 2016-el;
//     } 

//     function isFullAge(el){
//         return el>=18;
//     }

//     function maxHeartRate(el){
//         if(el>=18 && el<=81){
//         return Math.round(206.9 - (0.67 * el));
//       }else{
//           return -1;

//       }
//       }

//   var a = arrayCalc(years, calculateAge);
//   console.log(a);

//   var fullAges = arrayCalc(a, isFullAge );
//  var rates = arrayCalc(a, maxHeartRate);
//   console.log(fullAges);
//   console.log(rates);

/////////////////////////////////////////////////////////////
                      // Function Inside Function
/////////////////////////////////////////////////////////////


// function interviewQuestion(job){
//     if(job ==='designer'){
//         return function(name){
//             console.log(name+',can you please explain what aUX design is?');

//         }
//     }else if( job === 'teacher'){
//         return function(name){
//             console.log('WHat subject do you teach, '+name+'?');

//         }

//     }else{
//         return function(name){
//             console.log('Hello'+name+', what do you do?');

//         }
//     }
// }

// var teacherQuestion = 
// interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');


// teacherQuestion('john');
// designerQuestion('John');

// interviewQuestion('teacher')('mark'); 

//////////////////////////////////////////////////////////////////////////////
                   //    IIFE    // - Immediatly invoked fucnction expression
//////////////////////////////////////////////////////////////////////////////

// function game(){   
// var score = Math.random() *10;
//     console.log(score >= 5);
//     }
//     game();

//     //  This is IIFE
//     (function(){
//         var score = Math.random() * 10;
//         console.log(score >= 5);

//     })();

//     console.log(score);

// // Adding Paramenter to IIFE

// (function(googLuck){
//     var score = Math.random() * 10;
//     console.log(score >= 5 - googLuck);

// })(5);

////////////////////////////////////////////////////////////////////
                    // Closers //

   //    Although the retirment function returns the resut but still the retirmentIND get Executed
   //   Inner Function has always access to the variables and functions of the outer function 
   //   Even thought the outer function id alreay executed.                
/////////////////////////////////////////////////////////////////////////////
/*
  function retirement(retirementAge){
      var a = 'year left until retirment. ';
        return function(yearofBirth){
            var age = 2019 - yearofBirth;
            console.log((retirementAge - age) + a);
        }
  }

  var retirmentIND = retirement(66);
  retirmentIND(1996);
 
  // Can Call Directly
  retirement(65)(1996);


  function interviewQuestion(job){
      var a ='can YOu please explain waht UX design is?';
      if(job === 'designer'){
          
      return  function(name){
          console.log(name+ a);
      }
  }
*/

////////////////////////////////////////////////////////////////
                // Bind-  Call - Apply //
/////////////////////////////////////////////////////////////////

// var john ={
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style,timeOfDay){
//         if(style === 'formal'){
//             console.log('Good'+ timeOfDay+ ', Ladies and Gentlemen! I\'m a ' + this.name
//             + ' , I\'m' + this.job+ 'and I\'m'
//             +this.age+ 'years old.');
//         } else if(style === 'friendly'){
//             console.log('Hey! What\'sup?I\'m a ' +this.name+
//             'and I\'m' +this.age+ 'years old. Have a nice' +timeOfDay+'.');
//         }
//     }
        
//     };
// var emily = {
//     name:'Emily',
//     age: 35,
//   job: 'designer'
// };  

// john.presentation('formal','morning');

// john.presentation.call(emily, 'friendly','afternoon');

//           // syntax for apply but cannot be used in this function.
// // john.presentation.apply(emily, ['friendly', 'afternoon']);  

//    // bind makes a copy of the function and gives some preset paramenters.
//  var johnFriendly= john.presentation.bind(john, 'friendly')   
//  var emilyFormal= john.presentation.bind(emily,'formal');
//  emilyFormal('afternoon');


////////////////////////////////////////////////////////////////
                  //                 // 
////////////////////////////////////////////////////////////////                  

