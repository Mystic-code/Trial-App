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

            //ES5
// function driverLicence5(passesTest){
//     if(passesTest){
//         var firstName='john';
//         var yearOfBirth= 1990;

//         console.log(firstName+ ' oborn in ' 
//           + yearOfBirth +' , is now officially allowed to drive a car.');
//     }
//     }

//     driverLicence5(true);

//             // ES6 
// function driverLicence6(passesTest){
//     if(passesTest){
//        let firstName='john';
//       const yearOfBirth= 1990;

//         console.log(firstName+ ' oborn in ' 
//           + yearOfBirth +' , is now officially allowed to drive a car.');
//     }
//     }

//     driverLicence6(true);

//////////////////////////////////////////////////////////////////////

 //       Let and const  //

/* const names = 'Jane smith';
 let ages = 23;
names = 'jane miller';
console.log(names);

let i =23;
for(let i = 0; i<25; i++){
    console.log(i);
}
console.log(i);

*/

//////////////////////////////////////////////////
    // Blocks and IIFEs

 /*   {
        let a= 10;
        let b = 10;
        var c =3 ;
        console.log( a + b+ c);
       
    }
 not like iifes 

 (function(){
 })();
    */

//////////////////////////////////////////
    // String
/* let firstName = 'JOhn';
 let lastName = 'smith';
 // ES5
 console.log('This is'+firstName + 'And '+lastName+'.');
// ES6
console.log(`This is ${firstName} ${lastName}.`);

const n = `${firstName} ${lastName}`;
n.startsWith('J');
n.endsWith('h');
n.includes('oh');
firstName.repeat(5); repets 5 times john
*/

/////////////////////////////////////////////
 /*         // Arrow Functions
const years = [ 1990, 1996, 1992];

// ES5
 var age = years.map(function(el){
    return 2016 - el;
 });
// ES6
let age = years.map( el => 2016 - el);

age = years.map((el, index) => `Age element ${index +1}: ${2016 - el}.`);

age = years.map((el, index) => {
    const noe =new Date().getFullYear();
    const age = now -el;
    return `age element ${ index +1}.`
});


// Lexical this 
*/

       
////////////////////////////////////////////
        // Destructuring //
 ///////////////////////////////////////////
 
// Destructuring Data structure

/*const [year, age] = [1996, 23];
console.log(year);
console.log(age);
*/
// Destructuring a object
/* const obj = {
    firstName:'Biswajit',
    lastName: 'Rout'
};
const { firstName, lastName } = obj;

console.log(firstName, lastName);
*/

//Example
/*
function callYear(year){
    const all =new
    Date().getFullYear() - year;
    return [ all, 65 - all];
}

const [age2, retirment] = callYear(1992);
console.log(age2, retirment );
*/

////////////////////////////
//  Arrays   //
//////////////////////////////////

const  ab = document.querySelectorAll('.box');

Arrary.from(boxes).array.forEach(cur => 
    cur.style.background = 'dodgerblue');
    