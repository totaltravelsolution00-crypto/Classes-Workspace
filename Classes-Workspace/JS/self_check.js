//Q-1 do-while loop with numbers 1–10
// Solution:-

// let a = 1;

// do{
//     console.log(a);
//     a++;
// }
// while (a<=10);

//Q-2 Functions with multiple parameters.
// Solution:-


// function student(name, age) {
//   console.log(name, age,);
// }

// student("Rahul", 30);

//Q-3 Function jo 3 numbers le aur average print kare
//Solution:-

// function averagenum(a, b, c) {
//     let avg = (a + b + c) / 3;
//     console.log(avg);
// }

// averagenum(5, 6, 7);

// Q-4 function jo 2 numbers le aur unka square ka sum print kare
//solution:- 

// function squaresum(a ,b){
//     let result = (a * a) + (b * b);
//     console.log(result);
// }

// squaresum(5,3)

// function num(a,b){
//     let result = (a + b);
//     console.log(result);
// }

// num(4,6)

// function sum(a,b){
//     let result = (a*a) + (b*b);
//     console.log(result);
// }

// sum(4,9);

// Return Function ka code.

// function square(a){
//     return a * a
// }

// let x = square(2)
//     console.log(x);

// HOF ka code.

// function multlple(a,b){
//     return a * b
// }

// function calculate(a, b, caller){
//     return caller(a, b);
// }

// console.log(calculate(2,5,multlple));

let f = multiply;
console.log(f(3, 4));
