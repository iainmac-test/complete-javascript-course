// "use strict"; // 1st statement in the script file - catches errors in console of issues

// // let hasDriversLicense = false;
// // const passTest = true;

// // if (passTest) hasDriverLicense = true;
// // if (hasDriversLicense) console.log("I can drive!");

// // //const private = 563;

// //////////// 33 FUNCTIONS /////////////////

// // function logger() {
// //   console.log("My name is Iain");
// // }

// // logger();
// // logger();

// // function fruitProcessor(apples, oranges) {
// //   //   console.log(apples, oranges);
// //   return `with ${apples} apples and ${oranges} oranges.`;
// // }

// // const appleJuice = fruitProcessor(5, 0);
// // console.log(`apple juice ${appleJuice}`);

// // const appleOrangeJuice = fruitProcessor(2, 4);
// // console.log(`apple orange juice ${appleOrangeJuice}`);

//////////////////////////////////////////////////
//////                                      //////
//////      FUNCTION DECLARATIONS           //////
//////                                      //////
//////////////////////////////////////////////////

// // Try simplify the code so you return the values rather than retuning an assigned value

// //// Function declaration

// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

// const ageIain = calcAge1(1980);

// //// Function Expression - not named function but assigned it to a variable which you can then call? Why one over another - ⁇

// // Expressions produce values
// // You can call function expression declarations before defined in code but you cant do that with function declaration due to hoisting

// // broadly similar in approach main thing is styling and personal preference one vs other

// // const calcAge2 = function (birthYear) {
// //   return 2023 - birthYear;
// // };

// // const ageSam = calcAge2(1979);

// // console.log(ageIain, ageSam);

// // //// ARROW FUNCTIONS - SHORTHAND OF DECLARATION EXPRESSIONS ///////

// // const calcAge3 = function (birthYear) {
// //   return 2023 - birthYear;
// // };

// // /// AS a comparison to Function Expression you can shorthand it like this
// // /// The return is implicit in arrow functions so is great for simple return
// // // the return is part of the solution just not expressly in the code
// // // You can though add the return if its more complex

// // const calcAge4 = (birthYear) => 2023 - birthYear;

// // const ageJosh = calcAge4(2006);

// // console.log(ageJosh);

// // const yearsUntilRetirement = (birthYear, firstName) => {
// //   const age = 2023 - birthYear;
// //   const retirement = 65 - age;
// //   // return retirement;
// //   return `${firstName} retires in ${retirement} years`;
// // };

// // console.log(yearsUntilRetirement(1980, "Iain"));
// // console.log(yearsUntilRetirement(1977, "Phil"));

// // //// Functions calling other functions using fruitProcessor and another function to cut fruit into pieces

// // Major benefit is to support DRY principle and abstraction of logic so easier to understand

// // function cutFruitPieces(fruit) {
// //   return fruit * 4;
// // }

// // function fruitProcessor(apples, oranges) {
// //   //   console.log(apples, oranges);

// //   const applePieces = cutFruitPieces(apples);
// //   const orangePieces = cutFruitPieces(oranges);

// //   return `with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
// // }

// // console.log(fruitProcessor(2, 3));

// ///// REVIEWING FUNCTIONS

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years 😢`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }

//   // Be careful to put code

//   //return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1980, "Iain"));
// console.log(yearsUntilRetirement(1950, "OLd Man"));

//////////////////////////////////////////////////
//////                                      //////
//////      ARRAYS                          //////
//////                                      //////
//////////////////////////////////////////////////

// const friend1 = "Nick";
// const friend2 = "Phil";
// const friend3 = "Iain";

// // Literal Array syntax
// const friends = ["Nick", "Phil", "Iain"];
// console.log(friends);

// // Construct from Array Object

// const y = new Array(1979, 1980, 2023, 2006);
// console.log(friends[0]);
// // Get length of array
// console.log(friends.length);
// // Get the last element
// console.log(friends[friends.length - 1]);

// // Add elements and remove them
// friends[2] = "jay";
// console.log(friends);

// // Exercise
// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const age1 = calcAge(y[0]);
// const age2 = calcAge(y[1]);
// const age3 = calcAge(y[y.length - 1]);

// // Construct a new Array of ages created by clc age function
// const ages = [calcAge(y[0]), calcAge(y[1]), calcAge(y[y.length - 1])];
// console.log(ages);

////// ARRAYS FUNCTIONS

/// ADD TO ARRAYS - push / unshift
/// Push (add to last entry)
// friends.push("John");
// console.log(friends);

// // Unshift add to start
// friends.unshift("Sam");
// console.log(friends);

// // REMOVE FROM ARRAYS - pop / shift

// friends.pop(); // removes last element
// console.log(friends);
// friends.shift(); // Removes the first element
// console.log(friends);

// // Find items in Array
// console.log(friends.indexOf("jay"));
// // Es6 logic returns true false
// console.log(friends.includes("Stephen"));
// console.log(friends.includes("jay"));

//// Arrays Challenge with ternary Operator
/* Write your code below. Good luck! 

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44. 🙂 */

// const calcTip = function (bill){
//   return bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125,555,44]

// const tips = [ calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]) ];

// console.log(bills, tips);

//////////////////////////////////////////////////
//////                                      //////
//////      OBJECTS                         //////
//////                                      //////
//////////////////////////////////////////////////

// Object has 5 properties

// "Property or Key" i.e. firstName, lastName with a "value" of Iain
// const iain = {
//   firstName: "Iain",
//   lastName: "Macdonald",
//   age: 2023 - 1980,
//   job: "Tester",
//   friends: ["Nick", "Phil", "Ryan"],
// };

// console.log(iain.firstName);

// ///// You can use square bcakets to create an expression
// const namekey = "Name"; // creates a reference for repeating Suffix can be used like below

// console.log(iain["first" + namekey]);
// console.log(iain["last" + namekey]);

// const interestedIn = prompt(
//   "What do you want to know about Iain, chose between firstName, lastName, friends, age and job?"
// );

// /// SQUARE brackets allows an expression to get to the right value of the object
// //console.log(iain[interestedIn]);

// // if (iain[interestedIn]) {
// //   console.log(iain[interestedIn]);
// // } else {
// //   console.log(
// //     "wrong selection, chose between firstName, lastName, friends, age and job"
// //   );
// // }

// /// How to add new properties with .dot and brackets []
// iain.location = "Leeds";
// iain["twitter"] = "@iainmac";

// // console.log(iain);

// // Jonas has 3 friends and his best friend is called michael

// console.log(
//   `${iain.firstName} has ${iain.friends.length} friends and his best friend is called ${iain.friends[0]}`
// );

//////////////////////////////////////////////////
//////                                      //////
//////     OBJECT METHODS                   //////
//////                                      //////
//////////////////////////////////////////////////

// "Property or Key" i.e. firstName, lastName with a "value" of Iain
// const iain = {
//   firstName: "Iain",
//   lastName: "Macdonald",
//   birthYear: 1980,
//   job: "Tester",
//   friends: ["Nick", "Phil", "Ryan"],
//   hasDriversLicense: false,

// calcAge: function (birthYear) {
//   return 2023 - birthYear;
// },

// Using this keyword give you access to the object calling the function so in this instance its the Iain object

// calcAge: function (birthYear) {
//   console.log(this);
//   return 2023 - this.birthYear;
// },

// You can create new variables in JS by using the object name or this keywork - in this example we create a new one called age for the object.
//   calcAge: function () {
//     console.log(this);
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },

//   // /// In comparison to function expression
//   // const calcAge3 = function (birthYear) {
//   //   return 2023 - birthYear;
//   // }

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} year-old ${
//       this.job
//       // Use ternary operator check if true do one thing return a string or other other and return the other no DL option
//     }, and he ${
//       this.hasDriversLicense ? "has" : "does not have"
//     } a driving license`;
//   },
// };
// // call the method to create the age property
// // console.log(iain.calcAge());

// // You will then get a new property iain.age set so you can just call that rather than calling iain.calcAge() function multiple times
// // This could be a performance issue
// console.log(iain.age);

// console.log(iain.getSummary());

///// CODING CHALLENGE

// Note the height value is meter point cm and not whole number

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     //this.bmi = this.mass / (this.height * this.height);
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     //this.bmi = this.mass / (this.height * this.height);
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// console.log(john.bmi, mark.bmi);

// /// Calculate with a ternary operator if john bmi greater than marks then true or false - with two different string literals returns
// console.log(
//   john.calcBMI() > mark.calcBMI()
//     ? `John Smith's BMI (${john.calcBMI()}) is higher than Mark Miller's (${mark.calcBMI()})!`
//     : `Mark Miller's (${mark.calcBMI()}) is higher than John Smith's BMI (${john.calcBMI()})!`
// );

//////////////////////////////////////////////////
//////                                      //////
//////          LOOPS                       //////
//////                                      //////
//////////////////////////////////////////////////

// For loop keeps running while condition is TRUE
// for (let rep = 0; rep <= 10; rep++) {
//   console.log(`Lifting weights 🏋️‍♂️ Iteration ${rep}`);
// }

/// Looping an array
// const iain = [
//   "Iain",
//   "Macdonald",
//   2023 - 1980,
//   "Tester",
//   ["Nick", "Phil", "Ryan"],
// ];

// const types = [];

// for (let i = 0; i < iain.length; i++) {
//   console.log(iain[i], typeof iain[i]);
//   types.push(typeof iain[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }
// console.log(ages);

// Continue and Break

// You can use break and continue to jump the iteration of the loop but keep iterating, and also break the entire loop.
// For example if in the iteration you fins something like a string or a number ?
// for (let i = 0; i < iain.length; i++) {
//   /// Only log strings
//   if (typeof iain[i] === "number") break;
//   console.log(iain[i], typeof iain[i]);
// }

/// LOOPING THE ARRAY BACKWARDS
// On the iain array start at end element array.length -1

// for (let i = iain.length - 1; i >= 0; i--) {
//   console.log(i, iain[i], typeof iain[i]);
// }

// /// Loop within a loop
// // Exercise sets and reps

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`----------------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: lifting weight repetition ${rep} 🏋️‍♂️`);
//   }
// }

// /// While loops ( checks whilst the loop is true)
// // You can set your conditions outside the while loop
// // While loop is a bit more useful for non counter based things
// let rep = 1;
// while (rep <= 10) {
//   console.log(`lifting weight repetition ${rep} 🏋️‍♂️`);
//   rep++;
// }

/// While roll dice dont break until randomly roll a 6

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// // While good for looping when you dont know how many times you need to loop - could be 0 could be hundreds
// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is going to end - its a 6");
// }

//////////////////////////////////////////////////
//////                                      //////
//////     LOOPING CODING CHALLENGE         //////
//////                                      //////
//////////////////////////////////////////////////

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  console.log(calcTip(bills[i]));
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
console.log(calcAverage(tips));
