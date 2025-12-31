'use strict';

// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);

// console.log(bookings);

// const flight = 'LH234';
// const rylan = {
//   name: 'Rylan Deacon-Rogers',
//   passport: 3782910383635,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 3782910383635) {
//     alert('Checked In');
//   } else {
//     alert('Wrong Passenger');
//   }
// };

// // checkIn(flight, rylan);
// // console.log(flight);
// // console.log(rylan);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000000);
// };

// newPassport(rylan);
// console.log(rylan);
// checkIn(flight, rylan);

////////////////////////////////////////
// Higher order functions

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher order function
// const transformer = function (str, func) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed String: ${func(str)}`);

//   console.log(`Transformed by: ${func.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// // Callbacks used all the time in JS
// const high5 = function () {
//   console.log('🤚');
// };

// document.body.addEventListener('click', high5);

// ['Martha', 'Rylan', 'Steph'].forEach(high5);

////////////////////////////////////
// FUNCTIONS RETURNING FUNCTIONS

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   }
// }

// const greetingHey = greet('Hey');
// greetingHey('Rylan');
// greetingHey('Steph');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Rylan Deacon-Rogers');
// lufthansa.book(889, 'Mike Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;
// // Does not work
// // book(23, 'Steph Paltiel')

// book.call(eurowings, 23, 'Steph Paltiel');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Grayson Paltiel');

// const swiss = {
//   airline: 'Swiss Airlines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 449, 'Evelyn Deacon-Rogers');
// console.log(swiss);

// const flightData = [449, 'George Cooper'];
// // book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);
// console.log(swiss);

// ///////////////////////////////////////////
// // BIND METHOD
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(433, 'Jackie Deacon-Rogers');
// console.log(eurowings);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Rylan Deacon-Rogers');
// bookEW23('Steph Paltiel');

// // with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial Application
// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// // const addVAT = addTax.bind(null, 0.23);
// // console.log(addVAT(100));
// // console.log(addVAT(23));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));

///////////////////////////////
// CODING CHALLENGE 1
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write Your Answer)`
//       )
//     );
//     console.log(answer);

//     if (typeof answer === 'number' && answer < this.answers.length) {
//       this.answers[answer]++;
//     }
//     // console.log(this.answers);
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results: ${this.answers.join(', ')}`);
//     }
//   },
// };

// const pollBtn = document.querySelector('.poll');

// pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

//////////////////////////////////////////////////////
// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// // Immediately invoked function expression
// (function () {
//   console.log('This will never run again');
// })();

// (() => console.log('This will never run again'))();

/////////////////////////////////////
// CLOSURES

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} Passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();
