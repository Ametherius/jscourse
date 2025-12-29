'use strict';

// LESSON 1: Strict Mode
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

// LESSON 2: Functions
// function logger () {
//     console.log(`My name is Rylan`);
// }

// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

//     return juice;
// }

// fruitProcessor(5, 0);

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Lesson 3: Function Expressions vs Expressions

// Function Declaration
// function calcAge1(birthYear) {
//     return 2025 - birthYear;
// }

// const age1 = calcAge1(1995);
// console.log(age1);

// // Function expression
// const calcAge2 = function (birthYear) {
//     return 2025 - birthYear
// }

// const age2 = calcAge2(1995);
// console.log(age1, age2);

// Lesson 4: Arrow Functions


// const calcAge3 = birthYear => 2025 - birthYear;

// const age3 = calcAge3(1995);
// console.log(age3);

// const yearsLeft = (birthYear, firstName) => {
//     const age = 2025 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;

//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsLeft(1995, "Rylan"));
// console.log(yearsLeft(1971, 'Evelyn'));

// Lesson 5: Functions calling other functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges)
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;

//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// CODING CHALLENGE 5

// const calcAverage = (score1, score2, score3) => {
//     let average = (score1 + score2 + score3) / 3;
//     return average;
// }

// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {

//     let winner;
//     if (avgDolphins >= 2 * avgKoalas) {
//         winner = `Dolphins win (${scoreDolphins} vs ${scoreKoalas})`;
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         winner = `Koalas win (${avgKoalas} vs ${avgDolphins})`;
//     } else {
//         winner = `No Team Wins`;
//     }
//     return winner;
// }

// console.log(checkWinner(scoreDolphins, scoreKoalas));

// LESSON 6: Arrays intro
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ['Brandon', 'Steph', 'Gabe'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// years;

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Dustin"
// console.log(friends);

// const rylan = ['Rylan', 'Deacon-Rogers', 2025 - 1995, 'Sawyer', friends];
// console.log(rylan);

// // Exercise
// const calcAge = (birthYear) => {
//     return 2025 - birthYear;
// }

// Lesson 7: Basic Array Methods

// Add Elements
// const friends = ['Steph', 'Brandon', 'Gabe'];
// friends.push('Dustin');
// friends;

// friends.unshift('Calc');
// friends;

// // Remove Elements
// friends.pop(); // Last Element
// friends;

// friends.shift(); // First Element
// friends;

// console.log(friends.indexOf('Gabe'));

// console.log(friends.includes('Brandon'));
// console.log(friends.includes('Bob'));

//  CODING CHALLENGE 6

// function calcTip(bill) {
//     const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100 ) : bill * (20 / 100);
//     return tip;
// } 

// const total = calcTip(100);
// total;
// const bills = [125, 555, 44];
// const tips = [];
// tips.push(calcTip(bills[0]));
// tips.push(calcTip(bills[1]));
// tips.push(calcTip(bills[2]));
// console.log(tips);

// const totals = [];
// totals.push(bills[0] + tips[0]);
// totals.push(bills[1] + tips[1]);
// totals.push(bills[2] + tips[2]);
// totals

// LESSON 8: Intro to Objects
// const  rylan = {
//     firstName: 'Rylan',
//     lastName: 'Deacon-Rogers',
//     age: 2025 - 1995,
//     job: 'Sawyer',
//     friends: ['Steph', 'Brandon', 'Gabe', 'Dustin']
// };

// LESSON 9: Dot vs Bracket Notation
// const  rylan = {
//     firstName: 'Rylan',
//     lastName: 'Deacon-Rogers',
//     age: 2025 - 1995,
//     job: 'Sawyer',
//     friends: ['Steph', 'Brandon', 'Gabe', 'Dustin']
// };
// rylan;

// console.log(rylan.age);
// console.log(rylan['age']);

// const nameKey = 'Name';
// console.log(rylan['first' + nameKey]);
// console.log(rylan['last' + nameKey]);

// // const interestedIn = prompt('What do you want to know about Rylan? Choose between firstName, lastName, age, job, and friends');
// // console.log(rylan[interestedIn]);

// const challengeSentence = `${rylan.firstName} has ${rylan.friends.length} friends, and his best friends name is ${rylan.friends[0]}.`
// console.log(challengeSentence);

// LESSON 10: Object Methods
// const  rylan = {
//     firstName: 'Rylan',
//     lastName: 'Deacon-Rogers',
//     birthYear: 1995,
//     job: 'Sawyer',
//     friends: ['Steph', 'Brandon', 'Gabe', 'Dustin'],
//     hasDriversLicense: false,

//     // calcAge: function(birthYear) {
//     //     return 2025 - birthYear;
//     // }

//     //   calcAge: function() {
//     //     return 2025 - this.birthYear;
//     // }

//     calcAge: function() {
//       this.age = 2025 - this.birthYear;
//       return this.age;
//     },

//     createSummary: () => {
//       return `${rylan.firstName} is a ${rylan.calcAge()} year old ${rylan.job} and he has ${rylan.hasDriversLicense ? 'a' : 'no'} driver's license`
//     }
//   }

// console.log(rylan.calcAge())
// console.log(rylan.age);

// // Challenge
// console.log(rylan.createSummary());

// CODING CHALLENGE 7
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}