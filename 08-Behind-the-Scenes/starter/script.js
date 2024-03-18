'use strict';

// function calcAge(birthYear) {
//   const age = 2024 - birthYear;
//   // This works because even though the first name is defined ouside the function scope it can access the global scope
//   // console.log(firstName);

//   function printAge() {
//     const output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     // Block scope
//     if (birthYear >= 1981 && birthYear <= 2000) {
//       // Be careful as Firstname which is gloabal can be defined in a function scope and reassigned as it looks in function scope first - before looking at the global (only when it doesn't find it).
//       const firstName = 'Sam';
//       const str = `oh you are a millenial, ${firstName}`;
//       console.log(str);
//     }
//     // This wont work as block scoped above only - if var works but not with const ES6
//     // var is function scoped by default
//     //console.log(str);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Iain';
// calcAge(2000);

// These calls are made the calc age function but not accessible in global scope as tghey belong only to printAge and calc age function scopes
//console.log(age);
//printAge();

// 08. HOISTING TDZ IN PRACTICE

// console.log(me); // undefined
// console.log(job); // Reference Error expected - in TDZ
// console.log(year);

// //Functions Tests
// console.log(addDecl(2, 3));
// console.log(addExp(2, 3));
// console.log(addArrow(2, 3));

// var me = 'Iain';
// let job = 'teacher';
// const year = 1991;

// // Function examples of DMZ

// // Function
// function addDecl(a, b) {
//   return a + b;
// }

// //Function Expression
// const addExp = function (a, b) {
//   return a + b;
// };

// // Arrow function
// const addArrow = (a, b) => a + b;

// var x = 1;
// let y = 2;
// const z = 3;

// // True because its using var
// console.log(x === window.x);

// // These are false because using let and const
// console.log(y === window.y);
// console.log(z === window.z);

// the window object = browser
// console.log(this);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
};

calcAge(1991);

// Arrow functions this is the window - lexical this - parent global scope
const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this);
};

calcAgeArrow(1980);

// This with a object method example
const jonas = {
  year: 1980,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};

jonas.calcAge();
