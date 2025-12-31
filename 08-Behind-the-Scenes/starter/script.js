'use strict';
// JS Engines constain a callstack and a heap
// Compilation vs Interpretation
// Compilaton has two steps: Compilation(converting source code to machine code)
// Step 2: Execution

// Just in time compilaton of JavaScript
// 1. Parsing happens first
// 2. Compilation is seconds
// 3. Execution is last

// 3 Types of scope in JS
// 1. Global
// 2. Function
// 3. Block (let/const variables are block scoped)

// Lexical Scoping: The rules of where we can access variables are based on exactly where in the code functions and blocks are written

// Every score always has access to all the variables from all  its outer scopes. This is the scope chain

// When a variable is not in the current scope, the engine looks up in the scope chane until it finds the variable it's looking for(Variable Look Up)
// Scope Chain is a one way street(Up only)
// The scope chain in a certain scope is squal to adding together all the variable environments of all the parent scopes
// The scope chain has nothing to do with the order in which functions were called.

// Global function scope
// function calcAge(birthYear) {
//     const age = 2025 - birthYear;

//     function printAge() {
//         const output = `${firstName} you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1995) {
//             var isMillenial = true;
//             const millenial = `Oh you're a millenial ${firstName}`;
//             console.log(millenial)

//             function add(a, b) {
//                 return a + b;
//             }
//         }
//     }

//     printAge();
//     return age;
// }

// const firstName = 'Rylan';
// calcAge(1995);
// // console.log(age);
// printAge();
