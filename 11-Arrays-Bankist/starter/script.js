'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'Premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'Standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'Premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'Basic',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const moves = sort ? movements.slice().sort((a, b) => a - b) : movements;

  moves.forEach(function (move, i) {
    const type = move > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${move}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const displaySummary = function (account) {
  const deposits = account.movements
    .filter(move => move > 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumIn.textContent = `${deposits}€`;

  const withdrawals = account.movements
    .filter(move => move < 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumOut.textContent = `${Math.abs(withdrawals)}€`;

  const interest = account.movements
    .filter(move => move > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const printBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, bal) => acc + bal, 0);
  labelBalance.textContent = `${acc.balance}`;
};

// Event Handlers
let currentAccount;

const updateUI = function (acc) {
  // Display Movements
  displayMovements(acc.movements);

  // Display Balance
  printBalance(acc);

  // Display Summary
  displaySummary(acc);
};

btnLogin.addEventListener('click', function (event) {
  event.preventDefault();
  console.log('LOGIN');

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');

    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiver = accounts.find(
    account => account.username === inputTransferTo.value
  );
  // console.log(amount, receiver);

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiver &&
    currentAccount.balance >= amount &&
    receiver?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiver.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (event) {
  event.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some(move => move >= amount / 10)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // UpdateUI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (event) {
  event.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// displaySummary(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const printBalance = function (acc) {
//   acc.balance = acc.movements.reduce((acc, move) => acc + move, 0);
//   labelBalance.textContent = `${acc.balance}`;
// };
// printBalance(account1.movements);

/////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e'];

// // // Array Slice Method
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log([...arr]);

// // // Array Splice Method
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // Reverse Array Method
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT Method
// const letters = [arr.concat(arr2)];
// console.log(letters);

//////////////////////////////////////
// // AT METHOD
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // Getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('Rylan'.at(-1));

////////////////////////////////////////
// FOR EACH METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement: ${i + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement: ${i + 1} You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('-------FOREACH-------');
// movements.forEach(function (move, i, arr) {
//   if (move > 0) {
//     console.log(`Movement ${i + 1} You deposited ${move}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(move)}`);
//   }
// });

///////////////////////////////////
// FOR EACH MAPS AND SETS
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// // Map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'EUR', 'USD', 'GBP', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

/////////////////////////////////////////
// CHALLENGE 1
// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);

//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);

//   dogs.forEach(function (dog, i) {
//     if (dog > 3) {
//       console.log(`Dog ${i + 1} is ${dog} and not a puppy`);
//     } else {
//       console.log(`Dog ${i + 1} is ${dog} and is a puppy`);
//     }
//   })

//   // console.log(dogsJuliaCorrected);
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// const eurtoUSD = 1.1;

// const movementsUSD = movements.map(move => Math.trunc(move * eurtoUSD));

// console.log(movementsUSD);

// const moveDescription = movements.map((move, i) => {
//   return `Movement ${i + 1}: You ${
//     move > 0 ? 'deposited' : 'withdrew'
//   } ${Math.trunc(move)}`;
// });

// console.log(moveDescription);

// console.log(accounts);

// const deposits = movements.filter(function (move) {
//   return move > 0;
// });
// console.log(deposits);
// console.log(movements);

// const withdrawals = movements.filter(function (move) {
//   return move < 0;
// });
// console.log(withdrawals);

// console.log(movements);

// // Accumulator = snowball
// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`Iteration: ${i} ${acc}`);
//   return acc + curr;
// }, 0);

// console.log(balance);

// // Maximum Value
// const max = movements.reduce(function (acc, move) {
//   if (acc > move) return acc;
//   else return move;
// }, movements[0]);
// console.log(max);

///////////////////////////////////////
// CODING CHALLENGE 2
// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(age => {
//     return age <= 2 ? age * 2 : 16 + age * 4;
//   });
//   // console.log(humanAge);

//   const adults = humanAge.filter(age => {
//     return age >= 18;
//   });
//   // console.log(under18);

//   const average = adults.reduce((acc, age, i, arr) => {
//     acc + age / arr.length;
//   }, 0);
//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

/////////////////////////////////////////
// METHOD CHANING
// const eurtoUSD = 1.1;
// const totalDepositsUSD = movements
//   .filter(move => move > 0)
//   // .map(move => move * eurtoUSD);
//   .map((move, i, arr) => {
//     move * eurtoUSD;
//     console.log(arr);
//   })
//   .reduce((acc, move) => acc + move, 0);
// console.log(totalDepositsUSD);

/////////////////////////////////////////////
// CODING CHALLENGE 3
// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(avg1);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg2);

////////////////////////////////
// FIND METHOD
// const firstWithdrawal = movements.find(move => move < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

////////////////////////////
// Findlast Method
// console.log(movements);
// const lastWithdrawal = movements.findLast(move => move < 0);
// console.log(lastWithdrawal);

// const lastLarge = movements.findLastIndex(move => Math.abs(move) > 1000);
// console.log(lastLarge);

// console.log(`Your last large movement was ${lastLarge - 1} movements ago`);

// Some and Every
// console.log(movements);
// console.log(movements.includes(-130));

// // SOME
// const anyDeposits = movements.some(move => move > 0);
// console.log(anyDeposits);

// // EVERY
// console.log(movements.every(move => move > 0));
// console.log(account4.movements.every(move => move > 0));

// // Separate Callback
// const deposit = move => move > 0;

/////////////////////////////////////
// flat method

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8],
// ];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const grandTotal = allMovements.reduce((acc, amt) => acc + amt, 0);
// console.log(grandTotal);

// const overallBalance = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, amt) => acc + amt, 0);

// console.log(overallBalance);

///////////////////////////////////////////////////////////////
// CODING CHALLENGE 4
/*
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

// const breeds = [
//   {
//     breed: 'German Shepherd',
//     averageWeight: 32,
//     activities: ['fetch', 'swimming'],
//   },
//   {
//     breed: 'Dalmatian',
//     averageWeight: 24,
//     activities: ['running', 'fetch', 'agility'],
//   },
//   {
//     breed: 'Labrador',
//     averageWeight: 28,
//     activities: ['swimming', 'fetch'],
//   },
//   {
//     breed: 'Beagle',
//     averageWeight: 12,
//     activities: ['digging', 'fetch'],
//   },
//   {
//     breed: 'Husky',
//     averageWeight: 26,
//     activities: ['running', 'agility', 'swimming'],
//   },
//   {
//     breed: 'Bulldog',
//     averageWeight: 36,
//     activities: ['sleeping'],
//   },
//   {
//     breed: 'Poodle',
//     averageWeight: 18,
//     activities: ['agility', 'fetch'],
//   },
// ];

// // 1.
// const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
// console.log(huskyWeight);

// // 2.
// const dogBothActivities = breeds.find(
//   breed =>
//     breed.activities.includes('running') && breed.activities.includes('fetch')
// ).breed;
// console.log(dogBothActivities);

// // 3.
// const allActivities = breeds.flatMap(breed => breed.activities);
// console.log(allActivities);

// // 4.
// const uniqueActivites = new Set([...allActivities]);
// console.log(uniqueActivites);

// // 5.
// const swimmingAdjacent = [
//   ...new Set(
//     breeds
//       .filter(breed => breed.activities.includes('swimming'))
//       .flatMap(breed => breed.activities)
//       .filter(activity => activity !== 'swimming')
//   ),
// ];
// console.log(swimmingAdjacent);

// // 6.
// console.log(breeds.every(breed => breed.averageWeight > 10));

// // 7.
// console.log(breeds.some(breed => breed.activities.length >= 3));

//////////////////////////////
// SORTING ARRAYS

// Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// // Numbers
// console.log(movements);

// // Return < 0: a, b keep order
// // Return > 0: b, a switch order

// // Ascending
// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (b > a) {
//     return -1;
//   }
// });
// console.log(movements);

// // Descending
// movements.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (b > a) {
//     return 1;
//   }
// });

// console.log(movements);

/////////////////////////////////////////
// ARRAY GROUPING
// console.log(movements);

// const groupedMovements = Object.groupBy(movements, movement =>
//   movement > 0 ? 'deposits' : 'withdrawals'
// );
// console.log(groupedMovements);

// const groupedByActivity = Object.groupBy(accounts, account => {
//   const movementCount = account.movements.length;

//   if (movementCount >= 8) return 'Very Active';
//   if (movementCount >= 4) return 'Active';
//   if (movementCount >= 1) return 'Moderate';
//   return 'Inactive';
// });

// console.log(groupedByActivity);

// const groupedAccounts = Object.groupBy(accounts, account => account.type);
// console.log(groupedAccounts);

//////////////////////////////////
// CREATING/FILLING ARRAYS

// const arr = new Array(7);
// console.log(arr);

// arr.fill(0);
// console.log(arr);

// labelBalance.addEventListener('click', function (event) {
//   event.preventDefault();
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });

////////////////////////////////////////////////////////
// NON-DESTRUCTIVE ARRAY METHODS
// console.log(movements);

// // toReversed
// const reversedMovements = movements.toReversed();
// console.log(reversedMovements);
// console.log(movements);

// // toSorted (sort), toSpliced (splice)
// // movements[1] = 2000;

// const newMovements = movements.with(1, 2000);
// console.log(newMovements);
// console.log(movements);

////////////////////////////////////////////
// SUMMARY: WHICH ARRAY METHOD TO USE

// Mutating Original
// .push or .unshift (adding)
// .pop, .shift, .splice (removing)
// .reverse, .sort, .fill (others)

// New array based on Original
// .map (loop, same length as original)
// .filter(filters using condition)
// .splice (taking portion of original)
// .with (one item replaced)
// .flat/.flatMap (flattened)
// .toReversed (reversed)
// .toSorted (sorting)
// .toSpliced (deleted items)
// .concat (joining arrays)

// An array index based on
// .indexOf (based on value)
// .findIndex (test condition)
// .findLastIndex (test condition)

// An Array element based on
// .find (test conditions)
// .findLast (test conditions)
// .at (based on position)

// Know if array includes (based on)
// .includes (value)
// .some (test condition)
// .every (test condition)

// A new string (based on)
// .join (separator)

// Transform value (based on)
// .reduce (accumulator)

// To loop array
// .forEach (callback)

////////////////////////////////////////////
// Array methods
// const backDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(move => move > 0)
//   .reduce((acc, sum) => acc + sum, 0);

// console.log(backDepositSum);

////////////////////////////////////////////
// FINAL CODING CHALLENGE

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
*/

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
//   { weight: 18, curFood: 244, owners: ['Joe'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// // 1.
// dogs.forEach(function (dog) {
//   dog.recFood = Math.floor(dog.weight ** 0.75 * 28);
// });
// console.log(dogs);

// // 2.
// const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
// const eatsTooMuch =
//   sarahsDog.curFood > sarahsDog.recFood
//     ? `Sarah's dog eats too much`
//     : "Sarah's dog doesn't eat too much";

// console.log(eatsTooMuch);

// // 3.
// const ownersTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recFood)
//   .flatMap(dog => dog.owners);

// const ownersTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recFood)
//   .flatMap(dog => dog.owners);

// // 4.
// console.log(`${ownersTooMuch.join(' and ')}'s dogs are eating too much food`);
// console.log(
//   `${ownersTooLittle.join(' and ')}'s dogs aren't eating enough food`
// );

// // 5.
// console.log(dogs.some(dog => (dog.curFood = dog.recFood)));

// // 6.
// console.log(
//   dogs.every(
//     dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
//   )
// );

// // 7.
// const dogsOkay = dogs.filter(
//   dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
// );
// console.log(dogsOkay);

// // 8.
// const eatingHabits = Object.groupBy(dogs, dog => {
//   if (dog.curFood === dog.recFood) return 'EXACT';
//   if (dog.curFood > dog.recFood) return 'Too Much';
//   if (dog.curFood < dog.recFood) return 'Too Little';
// });
// console.log(eatingHabits);

// // 9.
// const numOwners = Object.groupBy(dogs, dog => dog.owners.length);
// console.log(numOwners);

// // 10.
// const dogsSorted = dogs.toSorted((a, b) => {
//   if (a.recFood > b.recFood) return -1;
//   if (a.recFood < b.recFood) return 1;
// });

// console.log(dogsSorted);
