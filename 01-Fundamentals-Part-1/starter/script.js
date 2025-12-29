/*
let js = 'amazing';
// console.log(40 + 8+ 23+ 10);

// console.log("Jonas");
// console.log(23);
*/


// Lesson 1/2: Naming conventions, Data types
// let firstName = "Matilda";
// let myFirstJob = "Coffee Shop";
// let myCurrentJob = "Sawyer";
// let my_name = "Rylan";
// let name1 = "Rylan";

// Lesson 3: Let, const, and var (never use var, var/let are the same thing)
//let allows variable to change
// let age = 30;
// age = 31;
// const variables cannot change
// const birthYear = 1995;

// Lesson 4: Basic Operators
// const now = 2025;
// const ageRylan = now - 1995;
// const ageSarah = now - 2018;
// 2 ** 3 is equal to 2 * 2 * 2

// const myFirstName = "Rylan";
// const lastName = "Deacon-Rogers";


// let x = 10 + 5; // 15
// x += 10; // x = x + 10
// x *= 4; // x = x * 4
// x++; // x = x + 1
// x-- // x = x - 1


// Comparison Operators
// console.log(ageRylan > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// Lesson 5: Operator Precedence

// let a, b;
// a = b = 25 - 10 - 5; // a = b = 10, a = 10
// const averageAge = (ageRylan + ageSarah) / 2; // Average of both ages

// Lesson 6: Strings
// const firstName = "Rylan";
// const job = "Sawyer";
// const birthYear = 1995;
// const year = 2025;

// Concatenation
// const rylan = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(rylan);

// Templates
// const rylanNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(rylanNew);

//Backticks can be used for all strings
// console.log(`String
// with multiple
// lines`);


// Lesson 7: Decisions... if/else statements

// const age = 19;
// if (age >= 18) {
//     console.log("Sarah can start driving 🚗")
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young ☹️, wait another ${yearsLeft} years 😊`)
// }

// const birthYear = 1995;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// CODING CHALLENGE 2
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = Math.round(massMark / (heightMark ** 2));
// const BMIJohn = Math.round(massJohn / (heightJohn ** 2));
// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
// } else {
//     console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
// }


// Lesson 8: Type Conversion and Coercion

// Type Conversion
// const inputYear = '1995';
// console.log(Number(inputYear), inputYear)
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// Type Coercion
// console.log("I am " + 23 + " years old");
// console.log('23' - '10' - 3);
// console.log('23' * '2');
// console.log('23' / '2');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// Lesson 9: Truthy/Falsy values

// 5 Falsy Values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Rylan'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 50;
// if (money) {
//     console.log("Don't spend it all ;)");
// } else {
//     console.log("You should get a job!");
// };

// let height = 0;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// }

// Lesson 9: Equality Operators == vs ===

// const age = 18;
// if (age === 18) console.log('You just became an adult!'); // Strict equality

// if (age == 18) console.log('You just became an adult! (Loose)');

// const favourite = Number(prompt("What is your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 8) {
//     console.log('8 is an amazing number');
// } else if (favourite === 7) {
//     console.log('7 is also a cool number');
// } else {
//     console.log('Number is not 8 or 7');
// }

// if (favourite !== 23) console.log('Why not 8?'); // !== is not equal


// Lesson 10: Boolean Logic

// const hasLicense = true; // A
// const goodVision = true; // B

// console.log(hasLicense && goodVision); // && is the AND operator
// console.log(hasLicense || goodVision); // || Is the OR operator
// console.log(!hasLicense && goodVision);


// if (hasLicense && goodVision) {
//     console.log('Sarah can drive');
// } else {
//     console.log('Someone else should drive');
// }

// const isTired = false; // C

// console.log(hasLicense && goodVision && isTired);

// if (hasLicense && goodVision && !isTired) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive...');
// }

//  CHALLENGE #3
// const scoreDolphins = Math.round((96 + 108 + 89) / 3);
// const scoreKoalas = Math.round((88 + 91 + 110) / 3);

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy!');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy');
// } else {
//     console.log('Both win the trophy');
// }

// Lesson 11: Switch statements

const day = 'monday';

// switch(day){
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Preparing theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day');
// };

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples')
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend');
// } else {
//     console.log('Not a valid day');
// }

// Lesson 12: Conditional(Ternary) Operator

// const age = 2025 - 1995;

// age >= 19 ? console.log('I like coffee ☕') : console.log('I like water 💧');

// const drink = age >= 19 ? 'Coffee ☕' : 'Water 💧';
// console.log(drink)

// console.log(`I like to drink ${age >= 19 ? 'coffee ☕' : 'water 💧'}`);

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);

console.log(`The bill was $${bill}, the tip was $${tip} and the total value is $${bill + tip}`);