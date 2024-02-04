// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';

//////////////////////////////////////////////////
//////                                      //////
//////     PRETTIER SNIPPETS                //////
//////                                      //////
//////////////////////////////////////////////////

// see .prettierrc file and apply the configs

// if (x === 23) console.log(23);

// const calcAge = birthYear => 2023 - birthYear;

/**********************************************************************
//                                                                      //
//             USER SNIPPETS (GLOBAL)                                  //
//                                                                      //
//**********************************************************************/

// console.log('Hello world 1');

// console.log(calcAge(1980));

//**********************************************************************//
//                                                                      //
//             LIVE SERVER INSTALL                                     //
//               AUTO REFRESH CHANGES                                  //
//**********************************************************************//

// use either node install or pluginin in vscode with live-server in term

/**********************************************************************
//                                                                      //
// LEARNING CURVE - TAKE YOUR TIME NO PANIC                                  
//  ALSO THINK ABOUT YOUR PROBLEM SOLVING                         //

// 4 STEP PROCESS TO SOLVING PROBLEMS 

// 1 MAKE SURE YOU UNDERSTAND THE PROBLEM - ASK QUESTIONS
// 2 DIVIDE AND CONCOUR - BREAK BIG PROBLEM INTO SUB TASKS / FUNCTIONS
// 3 DON'T BE TOO PROUD TO RESEARCH ISSUE PREV SOLUTIONS
// 4 WRITE PSEUDO CODE BEFORE ACTUAL CODE 
//
// BUILD A PASSION FOR HOW THINGS WORK 
**/

// PROBLEMS IN PRACTICE

// PROBLEM 1 - We work for a company building a smart home theromometer.
// Our most recent task is this "Given an array of temps, calculate the calc amplitude, keep in mind there might also be an error on the sensor"

// PROBLEM 2 - It needs to take 2 arrays - merge the two arrays
// How to merge 2 arrays

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [4, -1, -12, -3, 'error', 12, 21, 17, 15, 14, 9, 5];

// 1) UNDERSTAND THE PROBLEM
// - what does amplitude mean - difference between highest and lowest
// - what does an error look like
// - How to compute min and max temps

// 2) BREAK INTO SUB-PROBLEMS
// Ignore Errors - How to ignore Errors ?
// Find Max Value
// Find Min Value
// Subtract min from max - return the amplitude value
// const mergeArray = function (temps, temps2) {
//   console.log(temps.concat(temps2));
//   return temps.concat(temps2);
// };

// const calTempAmplitudes = function (t1, t2) {
//   const temps = mergeArray(temperatures, temperatures2);
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// calTempAmplitudes([0, 9, 23, 4, 75]);
// const amplitude = calTempAmplitudes(temperatures);
// console.log(amplitude);

// mergeArray(temperatures, temperatures2);

/**********************************************************************
//                                                                   //
//             DEBUGGING (BUGS)                                      //
//                                                                   //
//*********************************************************************/

// IDENTIFY (During Development, Test Software, Context: Browsers Users)
// > FIND (Dev CONSOLE) - Debugger
// FIX - Fix the solution
// PREVENT (Write some Tests (webdriver.io, Cypress) to prevent in future, check similar bugs don't exist)

// DEBUGGING & BREAKPOINTS

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // 03 fix the bug
//     value: Number(prompt('Degrees Celsius:')),
//   };

//   // 02 FIND THE BUG
//   console.log(measurement);
//   // Nice console output as a table of values in the object
//   console.table(measurement);
//   // warn and error style log4j
//   //console.warn(measurement.value);
//   //console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // 01 - Identify the BUG
// console.log(measureKelvin());

// DEBUGGING IN GOOGLE CHROME

// Sources - select the script.js -

// add breakpoint on the object or variable?

// Step through the code
// STEP
// STEP OVER -> CONTINUE

//// USING A DEBUGGER IN REAL LIFE

// const mergeArray = function (temps, temps2) {
//   console.log(temps.concat(temps2));
//   return temps.concat(temps2);
// };

// const calTempAmplitudes = function (t1, t2) {
//   const temps = mergeArray(temperatures, temperatures2);
//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     debugger;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// calTempAmplitudes([0, 9, 23, 4, 75]);
// const amplitude = calTempAmplitudes(temperatures);
// console.log(amplitude);

// mergeArray(temperatures, temperatures2);

// You can use "debugger" to create a breakpoint in your chrome dev tools

/**********************************************************************
//                  MODULE CODE CHALLENGE (DEBUG)                          
//                                                                   //
//*********************************************************************/

/*
Given an array of forecasting maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "17C in 1 days .. 21 in 2 days .. 23 in 3 days"

create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem solving framework, understand and break into sub tasks

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

1. print forecast can be varying sized array lengths, how know when at end or what day to output.

2. Loop the array and count the days

3. careful as arrays start at 0

4. Transform into string the elements

5. Add in magic celsius value -> SHIFT OPTION 8

*/

const testData1 = [17, 21, 23, 28];
const testData2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  //console.log(arr);
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    str += `${arr[i]}°C in ${[i + 1]} days... `;
    //console.log(`${arr[i]}°C in ${[i + 1]} days... `);
  }
  console.log(str);
};

printForecast(testData1);
printForecast(testData2);
