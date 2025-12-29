//  var a; // Declaration 
//  a = 10; // Intitialize

//  var a = 20; // Globl  Scope // Declare & Intitialize 

//  let b = 20; // Functional Scope

//  const c = 30; // Block Scope

// (Var) is Global even in block scope
// (let) is block in the block scope
// (const) is block in the block scope

// (VAR) ko ham Reintitialize or Redecleration kar sakte hai !

//Example:-

//  var a = 10;
//  a = 20; // reintialize
//  var a = 30; // redecleration

// let b=10;
// b = 20; // Reintitialize
// let b = 30; // Error Because it connot be redeclare

// const c = 10; // it con't be reintialize or redeclare 

// console.log() // Iska use hum code ko print karne keliye use karte hai. () Perathisiss Bolte hai.

// TDZ (Temporal Dead Zone) :- Utna Area jaha tak ham apne variable ko access nahi kar sakte usse ham temporal dead zone kehte hai.

// Hoisting :- Jab ham Variable ko banate ha tho uska intialze part upar chala jata hai or declare parth niche aa jata hai.

// Example
// jesa hamne code likha tha var a = 10; Hoiting ke baad yeah kuch esa ho jata hai :- 
// a = 10; 
// var = a

// Data Type's

// Primitive:- Yaha Per real copy banti hai.

// let a = 10; // Number
// let b = "Hello"; // String
// let c = true; // Boolean true & False
// let d = null; // Null
// let e =     ;  // Undefined by system default
// Bigint = ; // 898n (N)kisi bhi no ke last mai n laga ke =1n karoge tho correct way mai no + hoga.
// symbol // Symbol for unque ID ke liye use hota hai.

// Bigint ka Example:-

// let a = 9007199254740991n; 
// a = a + 6n 
// console.log(a);

// Symbol ka Example:-

// var uid = symbol ("uid")
// var uid2 = symbol ("uid")

// Two Type of Equality
// 1. == (It only check the value)
// 2. === (Strict equality check both value and data type)

// Example:-

// let a = 10;
// let b = 10; 

// Refrence:- (Real copy nahi banti hai yaha refrence banta hai)
// 1. Array, 2. Oject, 3. Function

//Assignment Operators:-
// let a = 12; 
// a -= 11;
// a += 3;
// a /= 2;
// a *= 2;
// a %= 3;

// console.log(a);
// yaha hamesa sequence mai kaam karta hai jisko ham ( Sync Ronous) bolte hai.

//# Logical (&& , || , !)

// 1. (&& :- And Operator).

// true && true = true
// false && true = false
// true && false = false
// false && false = false

//Example 1 :-

// let a = 10;
// let b = 20;
// let c = 30;

// if (a<b && a<c){
//     console.log("a is grater");
// }


//2. (|| :- Or Operator).

//true || true = true
//flase || true = true
//true || false = true
//false || false = false

//Example 1 :-

// let d = 10;
// let e = 25;
// let f = 30;

// if (d<e || d>f) {
//     console.log("d is greater");    
// }

//3. (! :- Not Operator).
// Jo bhi value di hogi uske aage (!) use karne se uska ulta ho jaiga. Jese true hua tho uska ulta false kar dega output mai.
// let a = 10
// let b = 20
// if (!(a>b)) {
//     console.log("print");
// }

// #Unary Operator.
// +- type of -- ++
// ++ Increment 
// Pre increment &  Post increment.
//     {++a}     &     {a++}

// #Ternary Operator.
//  (?) or (:)
//Example:-
// let i = 5;
// let j = 15;
// let l = 30;

// let k = i>1 && i>1 ? "i is great" : j>i && i>j ? "j is great" : j>i || j>i ? "j is great" : none;
//  console.log(k);

//Imp Question 
// let n = 5;
// let result = n++ + ++n; 
// console.log(result);
// First in n++ the value will go 5 nad after that the value of n is no increse to (6) and in (++n) it will gethe new value is it (7) so that the sum is (5 + 7 = 12)

// #Switch Case.
//let val = prompt ("enter a value")

// Switch (val){
// case "one";
//     console.log("one is selected");
//     break;
// case "two";
//     console.log("Two");
//     break;
// case "three";
//     console.log("Three");
//     break;
// defoult;
//     console.log("Valid Value");
//     break;    
// }

// Loops:-

// #1.For Loop:- Kaha se jana hai ---> kab tak jana hai ---> Kaise jana hai.

// #2.While Loop:- Kaha se jana hai ---> kab rukna hai ---> kaise jana hai.

// #3.Do while Loop:- 

// Question Section:- 

// Q-1

// for(let i = 1; i<=10; i++){
//     console.log(i);   
// }

// Q-2

// print even no using for loop

// for(let i = 1; i<=20; i++){
//     if(i%2 === 0)
//         console.log(i);   
//     }

// Q-3
// print odd no 1 to 15 by using while loop

// let a = 1;
// while (a<=15){
//     if(a%2 === 1)
//     console.log(a);
//     ++a;
// }

// Q-4
// print table of 5 

// for(let i = 1; i<=10; i++){
//         console.log(i*5);
// }

// Q-5
// find the sum of no 10 to 50

// let sum = 0

// for(let a = 10; a<=50; a++){
//     sum = sum + a
// }
// console.log(sum);

// Q-6
//print no bw 1 to 50 that are divisible by 3

// for (let  i = 1; i<=50; i++){
//     if(i%3 === 0)
//         console.log(i);     
// }

// Q-7
//print number from 1 to 100 that are divisible by 3 and 5

// for (let i = 1; i<=100; i++){
//    if(i%3 === 0 && i%5 === 0){
//     console.log(i);
//    }
// }

//Q-7
//write a loop 1 to 100 that stuck first multlple of 7.

// for(let i = 1; i<=100; i++){
    
//     console.log(i);
//     if(i%7 === 0){
//         break;
//     }
// }

//Q-8
// print first 5 odd no from 1 to 100.
// let count = 0;
// for(let i = 1; i<=100; i++){
//     if(i%2 === 1){
//         console.log(i);
//     count++;
//     }

//     if(count === 5){
//         break;
//     }
//     }

//imp Q-9

// let num = 12345;
// let count = 0;

// while (num>0){
//     count++;
//     num = Math.floor(num/10);//math.floor ka use ham isliye karte hai jise (.) ke baad aane wale value haat jaiga. 
// }
// console.log("total digit are:" +count);

// Q-10.

// let sum = 0;
// for(let i = 1; i <= 100; i++){
//     sum = sum + i;
// } 
// console.log(sum);

// #Day_16.

// Three type of Function :-

//#1. Functuin Statement. //Example:- (function abcd(){}).
//#2. Function Expression. //Example:- (let sum = function(){}).
//#3. Fat arrow function. //Example:- (let num = ()=>{}).
 
//# Dynamic:-

// function dance(val){
//     console.log(`hello ${val}`);
// }

// //# Call:-

// dance("World")
// dance("dance")
// dance("Duniya")

//#1. Parameter:- Vo hai jo ham function ke parathesis me variable dalte hai. [function call (perameter)].
//#2. Argument:- Vo hai jo ham Function ke call me variable ke value ko pass karte hai. [call(Argument)].

//#Example:-

// function sum (v1 , v2){ //Perameter.
//     console.log("sum is : " + (v1 + v2));
// }

// sum (10,30) //Argument.

//# Default Rest:-

// function sum( v1 = 0, v2 = 0){
//     console.log(v1 + v2);
// }

// sum(10,15)

//Rest Oprater:-

// function num( v1, v2, ...args){ // [(...args) ko hi rest oprater bolte hai.]
//     console.log(v1);
//     console.log(v2);
//     console.log(args);
// }

// num (10,20,30,40,50,60,70,80,90);

//# Return:-

// function sum(v1){
//     return 30+v1;
// }

// let result = sum(10);
// console.log(result);


//# First Class Function:-
// function ko ham value ke tarah treat kar sakte hai.
//#Example:-

// function abcd(val){
//     val()
// }

// abcd(function(){
//     console.log("hey");
// })

//#Where a number can be started in a variable a function can be also stored.

//# HOF [Higher order function].
// Hof(Higher order function) wo function ha jo ke return kare ek function ye accept kare function apne parameter mai.
// Jo function kisi function ko input me le
// ya function ko return kare
// usse Higher Order Function kehte hain

// function num(){
//     return function(){
//         console.log("hey");
//     }
// }

// let n = num(); // Function ko accept kara hai or fir call.
// n();

//#Closure:- Ek function jo return kare ek or function  aur return hone wale function hamesha use karenga parent function ka kou bhi variable.

// function abcd(){
//     let a = 10;
//     return function(){
//         console.log(a);
//     }
// }

// let n = abcd();
// n();

//#Lexical scoping :- Lexical scoping ka matlab hai ki variable ke accessibilty ya scope os jagah par depend karti hai jaha wo code likha gaya hai. na ki jaha wo excute ho raha hai.
//#Example:-

// function abcd(){
//     let a = 10;
//     function def(){
//         let b = 20;
//         function ghi(){
//             let c = 30;
//         }
//         ghi();
//     }
//     def();
// }
// abcd();

//# IIFE :- ( Immediate involed function expression).

// (function(){
//     console.log("life");
// })();

//# Hoistin Difference between decleration and expression.

// abcd();
// function abcd(){             // Function Statement.
//     console.log("abc");     //Hoist.
// }

// def();
// let def = function(){    // Function Expression.
//     console.log("def");  // Not Hoist.
// }

//#Q1:- Covert this into a fat arrow function.

// function multlple(a,b){
//     return a*b;
// }

// let num = (a,b) =>{
//     return a*b;
// }

// let result = num(5,6);
// console.log(result);

//#Q2.

// function getscore (...score){
//     let total = 0;
//     score.forEach((val) =>{
//         total = total + val;
//     })
//     return total;
// }   

// let result = getscore (10,20,30,40,50,60,70,80,90,100);
// console.log(result);


//#Q3.

// function checkage(age){
//     if(age>=18)
//         console.log("adult");

//     else {
//         console.log("Minor");
//     }
// }

// function age (age){
//     if( age >= 18) return "adult";
//     return "Minor";
// }