// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// john.calcBMI();
// console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);

// LESSON 10: The For Loop

// For loop keeps running while condition is true
// for (let i = 0; i < 11; i++) {
//     console.log(`Lifting weights repetition ${i}`)
// }

// LESSON 11: Looping Arrays
// const rylan = [
//     'Rylan',
//     'Deacon-Rogers',
//     2025 - 1995,
//     'Sawyer',
//     ['Steph', 'Brandon', 'Gabe', 'Dustin']
// ];

// const types = [];

// for (let i = 0; i < rylan.length; i++) {
//     console.log(rylan[i], typeof rylan[i]);

//     // Filling Types array
//     // types[i] = typeof rylan[i];
//     types.push(typeof rylan[i]);
// }

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2025 - years[i]);
// }

// console.log(ages);

// // continue and break

// // Only strings
// for (let i = 0; i < rylan.length; i++) {
//     if (typeof rylan[i] !== 'string') continue;
//     console.log(rylan[i], typeof rylan[i]);

// }

// // BREAK WITH NUMBER
// for (let i = 0; i < rylan.length; i++) {
//     if (typeof rylan[i] === 'number') break;
//     console.log(rylan[i], typeof rylan[i]);

// }

// LESSON 12: Looping backwards

const rylan = [
    'Rylan',
    'Deacon-Rogers',
    2025 - 1995,
    'Sawyer',
    ['Steph', 'Brandon', 'Gabe', 'Dustin']
];

// for (let i = rylan.length - 1; i >= 0; i--) {
//     console.log(i, rylan[i]);
// }

// for (let e = 1; e < 4; e++) {
//     console.log(`-----Starting Exercise ${e}`)

//     for (let r = 1; r < 6; r++) {
//         console.log(`Exercise ${e}: Lifing weights ${r}`)
//     }
// }

// LESSON 13: While Loop
// for (let r = 1; r < 4; r++) {
//     console.log(`Lifting weights repetition ${r}`)
// }

// let r = 1;
// while (r <= 10) {
//     console.log(`Lifting weights repetiton ${r}`);
//     r++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is ending...')
// }

// FUNDAMENTALS CHALLENGE FINAL:
// const calcTip = function(bill) {


//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; 
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// for (let t = 0; t < bills.length; t++) {
//     tips.push(calcTip(bills[t]));
// }

// console.log(tips);
// const totals = [];
// for (let total = 0; total < bills.length; total++) {
//     totals.push(bills[total] + tips[total]);
// }

// console.log(totals);