"use strict";
// Task 1
// let num1 = Number(prompt ("Enter the first number"));
// let num2 = Number(prompt ("Enter the second number"));
// let num3 = Number(prompt ("Enter the third number"));

// if (num1 >= num2 && num1 >= num3) {
//     alert("The largest number is " + num1);
// } else if (num2 >= num1 && num2 >= num3) {
//     alert("The largest number is " + num2);
// } else {
//     alert("The largest number is " + num3);
// }
// <------------------------------------------------------------------------------------>
// Task 2
// let year = Number(prompt("Enter the year"));
// if ((year % 4 === 0 && year % 100 !== 0 )||( year % 400 === 0)) { alert("Artiq il"); }
//     else {
//         alert("Artiq il deyil");
//     }
// <------------------------------------------------------------------------------------>
// Task 3
//    let grade = Number(prompt("Enter your grade"));
   
//    if (grade >= 90) {
//        alert("A");
//    }
//    else if (grade >= 80) {
//        alert("B");
//    }      
//     else if (grade >= 70) {
//          alert("C");
//     }
//     else if (grade >= 60) {
//          alert("D");
//     }
//     else {
//          alert("F");
//     }
// <------------------------------------------------------------------------------------>
// Task 4
// let num = Number(prompt("Enter the number"));

// if (num % 2 === 0) {
//     alert("Cut");
// }
// else {
//     alert("Tek");
// }
// <------------------------------------------------------------------------------------>
// Task 5
// let num = 0

// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");}
//         else if (i % 3 === 0) {       
//             console.log("Fizz");
//         }
//         else if (i % 5 === 0) {
//             console.log("Buzz");
//         }
//         else {
//             console.log(i);
//         }
// }
// <------------------------------------------------------------------------------------>
// Task 6
// let num = Number(prompt("Enter the number"));

// for (let i = 1; i <= 10; i++) {
//     let result = num * i;
//     console.log(num + " * " + i + " = " + result);
// }
// <------------------------------------------------------------------------------------>
// Task 7
// let sum = 0;
// let num = Number(prompt("Enter the number"));
// for (let i =1; i <= num; i++) {
//     sum += i;
// }
// alert("Cemin ededleri" + sum);
// <------------------------------------------------------------------------------------>
// Task 8
let num1 = Number(prompt("Enter the number"));
let operation = prompt("Enter the operation");
let num2 = Number(prompt("Enter the number"));

switch (operation) {
    case "+":
        alert(num1 + num2);
        break;
    case "-":
        alert(num1 - num2);
        break;
    case "*":
        alert(num1 * num2);
        break;
    case "/":
        alert(num1 / num2);
        break;
    default:
        alert("O kilid acilmiyib");
}
