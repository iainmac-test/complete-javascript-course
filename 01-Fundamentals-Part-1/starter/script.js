/*
let js = "amazing";

console.log(40 + 8 + 23 - 10);
console.log("Iain");
console.log(23);

let firstName = "Iain";
let age = 43;
console.log(firstName);

let PI = 3.1415;
*/

////// PRIMITIVE TYPES & DYNAMIC TYPING (string, number, boolean)

/* let isOver18 = true;
console.log(isOver18);

// typeof operator
console.log("isOver18 is a " + typeof isOver18 + " primitive type");

let year;
console.log(year);
console.log(typeof year);

year = 1999;
console.log(typeof year);

console.log(typeof null);
*/

///////////////////// Let Var and Const
// let age = 30;
// age = 31; // Reasigning or mutating a variable

// // Const not changing like PI or a DOB
// const PI = 3.146;
// PI = 7.7;

// // Const is immutable which means it always needs an initial variable

// // var is the old way of asigning variables pre es6
// // dont use var anymore always const or let

// var job = "programmer";
// job = "teacher";

//////////// OPERATORS - math, logical, assignments operators
// const now = 2023;
// const ageIain = now - 1980;
// const ageMax = now - 2015;

// console.log(ageIain + 2, ageMax * 10, 2 ** 3);

// 2 ** 3 = power of 2 poiwer of 3 = 2x2x2

// const firstName = "Iain";
// const lastName = "MacDonald";

// console.log(firstName + " " + lastName);

// console.log(typeof String);

// /// Assignemnt Operators

// let x = 10 + 5; // 15
// x += 10; // 15 + 10 ansd assigning so 25
// x *= 4; // 25 x 4 = 100
// x--; // opposite of ++ takes one away
// console.log(x);

// // Comparison Operators
// console.log(ageIain > ageMax); // >, <, <= or >=

// There is a logical JS order to logical vs numberical operators see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

//////////////// STRINGS - TEMPLATE LITERALS

// let firstName = "Iain";
// let job = "Test Manager";
// let year = 2023;
// let birthyear = 1980;

// const macca =
//   "I'm " + firstName + ", a " + (year - birthyear) + " years old " + job;
// console.log(macca);

// // Template literals using back ticks `` using ${variableName}

// const maccaLiteral = `I'm ${firstName}, a ${year - birthyear} years old ${job}`;
// console.log("maccaLiteral: " + maccaLiteral);

////// If Else and logics

// let age = 16;
// //const isOldEnough = age >= 18;
// // put the expression in the parethesis
// if (age >= 18) {
//   console.log(`Josh can start driving now 🚗`);
// } else {
//   let yearsLeft = 18 - age;
//   console.log(`Josh is unable to drive yet ❌ wait ${yearsLeft} years please!`);
// }

/// Type Conversion
// const inputYear = "1991";

// console.log(
//   `Converted to Number:  ${typeof Number(inputYear)} ${Number(inputYear)}`
// );
// console.log(`Converted to String:  ${typeof inputYear} ${Number(inputYear)}`);

// // Without the Number function it is treated as a string and it concats
// console.log(Number(inputYear) + 18);

////// Type Coercion - Auto converts in the JS engine
// console.log("I am " + 23 + " years old");
// // Coersion can be strange in that the minus on strings is intreprated to be numbers but the other way round using + concaternates as one string
// console.log("23" - 10 - "3"); // = 10
// // vs
// console.log("23" + 10 + "3"); // = "23103"

// //// Game to work out what we thing n =

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// let i = 2 + 3 + 4 + "5";
// console.log(i);

// // The minus conversion treats it all the way as numbers and the 5 gets appended as a string 1 append 5 = 15
// // 10 - 4 = 6    minus 3 = 3    ... minus 2 = 1
// // 1 appended 5 string = 15 then
// let j = "10" - "4" - "3" - 2 + "5";
// console.log(j);

// TRUTHY AND 5 FALSY values
// Values that when converted become either true or false

// 5 Falsy values ->           0,          '' (empty string),       undefined,      NaN,             null     + false obviously

// Everything else is true then

// Try it out here are the bool values

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean("Iain"));
// console.log(Boolean(NaN));
// console.log(Boolean(null));

// // 0 is falsy remember so it will evaluate false and get a job
// const money = 0;
// if (money) {
//   console.log("Spend your money wisely");
// } else {
//   console.log("Get a job quickly");
// }

// // Beware as 0 and undefined evealuate to falsy
// let height = 0;
// if (height) {
//   console.log("Yay, height is defined");
// } else {
//   console.log("Height is undefined");
// }

///// Equality operators  == and ===
/// check the values are equal as well as greater than > and < less than.
// Loose equality operator double == - always try to use strict equality operatpr triple ===
// const age = "18";
// if (age === 18) console.log("Its the same");

// if (age == 18) console.log("its the same ");

// const favNumber = prompt("Whats your favourite number?");
// console.log(favNumber);

// console.log(typeof favNumber);

// // if (favNumber == "23") {
// //   // This is loose operator so works on a string
// //   console.log("This is cool number ");
// // }

// if (Number(favNumber) === 23) {
//   // This is strict operator so doesn't works on a string
//   console.log("This is cool number 2");
// } else if (Number(favNumber) === 7) {
//   console.log("This is cool 7");
// } else if (Number(favNumber) === 5) {
//   console.log("This is cool 5");
// } else {
//   console.log("final block if all others dont match /......");
// }

// if (favNumber != 23) {
//   console.log("Why not 23");
// }

// 24 Logical Operators
// const hasDrivingLicense = true; // A
// const hasGoodVision = true; // B

// const isTired = false; // C

// console.log(hasDrivingLicense && hasGoodVision); // AND
// console.log(hasDrivingLicense || hasGoodVision); //OR
// console.log(!hasGoodVision); // NOT (inverts the value)

// //const shouldDrive = hasDrivingLicense && hasGoodVision;

// // above is not good form better to add it to the if decision block

// if (hasDrivingLicense && hasGoodVision && !isTired) {
//   console.log("You can drive Sarah");
// } else {
//   console.log("someone else should drive");
// }

// SWITCH STATEMENTS

// const day = "saturday";

// switch (day) {
//   case "monday": // day === monday basically (strict equality comparison)
//     console.log("Plan a course");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory vids");
//     break;
//   case "tuesday":
//   case "wednesday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record vids");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Have some time off enjoy");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// CONDITIONAL TERNARY (3 PARTS)
// WRITE AN IF ELSE ALL ON ONE LINE

const age = 4;
// age >= 18
//   ? console.log("I like to drink 🍷")
//   : console.log("I like to drink 💦");

///////////////TERNARY 2 lines///////////////////////
const drink = age >= 18 ? "wine 🍷" : "water 💦";
console.log(drink);
////////////////////////////////////////////////////////

// VS ////IF ELSE BLOCK (7 LINES) ////////
////////////same statement as if else (Ternary looks much neater)

let drink2;

if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💦";
}

console.log(drink2);

/////// Can just use in template literal to output
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💦"}`);

/// CODED EXERCISE

const bill = 275;

/* Write your code below. Good luck! 🙂 */

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, and the tip was ${tip}, and the total value ${
    bill + tip
  }`
);
