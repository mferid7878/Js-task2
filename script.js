"use strict";
//  task1
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
let year = Number(prompt("Enter the year"));
if ((year % 4 === 0 && year % 100 !== 0 )||( year % 400 === 0)) { alert("Artiq il"); }
    else {
        alert("Artiq il deyil");
    }

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