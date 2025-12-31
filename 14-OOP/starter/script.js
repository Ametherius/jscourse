'use strict';
const timeLabel = document.querySelector('.time-label');
const locale = navigator.language;

const currentTime = setInterval(() => {
  const time = new Date();
  timeLabel.textContent = new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: 'numeric',
  }).format(time);
});

/*
// Constructor Functions
const Person = function (firstName, birthYear) {
  (this.firstName = firstName), (this.birthYear = birthYear);
  // Never create a method inside a constructor function
  // this.calcAge = function () {
  //   console.log(2025 - this.birthYear);
  // };
};
const rylan = new Person('Rylan', 1995);
console.log(rylan);
// 1. Empty Object Created
// 2. Function called, this = {}
// 3. {} Linked to a prototype
// 4. function automatically returns {}


const matilda = new Person('Matilda', 2003);
const jack = new Person('Jack', 2015);
console.log(matilda, jack);

console.log(rylan instanceof Person);
Person.hey = function () {
  console.log('Hey There! 🤚🤚🤚');
}
Person.hey()
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

rylan.calcAge();
console.log(rylan.__proto__);
console.log(rylan.__proto__ === Person.prototype);

Person.prototype.species = 'Homosapiens';
console.log(rylan.species);

const arr = [3, 2, 6, 7, 1, 9, 9, 3, 6];
console.log(arr.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1)
/*

/*
////////////////////////////
// Coding Challenge 1

const Car = function (make, speed) {
  (this.make = make), (this.speed = speed);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw, mercedes);

Car.prototype.accelerate = function () {
  this.speed += 10
  console.log(`${this.make} is going ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going ${this.speed} km/h`);
};

bmw.accelerate();
bmw.brake()
mercedes.brake();
mercedes.brake()
*/

///////////////////////////////
// ES6 Classes
// Class Expression
// const PersonCL = class{}

// Class Declaration
/*
class PersonCl {
  constructor(fullName, birthYear) {
    (this.fullName = fullName), (this.birthYear = birthYear);
  }

  // Methods will be added to the prototype property of the person class
  calcAge() {
    console.log(2025 - this.birthYear);
  }

  greet() {
    console.log(`Hello ${this.firstName}`);
  }

  get age() {
    return 2025 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log('Hey there');
  }
}

const jessica = new PersonCl('Jessica Davis', 1990);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

jessica.greet();
console.log(jessica);
// 1. Classes are NOT hoisted
// 2. Classes are first class citizens
// 3. Classes are executed in strict mode always

const walter = new PersonCl('Walter White', 1960)
console.log(walter);
PersonCl.hey()

///////////////////////////////////
// Setters and Getters
const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);
*/

/*
/////////////////////////////////////
// Object.create

const PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },
  init(firstName, birthYear) {
    (this.firstName = firstName), (this.birthYear = birthYear);
  },
};

const rylan = Object.create(PersonProto);
rylan.init('Rylan', 1995);
rylan.calcAge();
*/

/*
//////////////////////////////////
// CODING CHALLENGE 2
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`The ${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`The ${this.make} is going at ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
console.log(ford.speedUS);
ford.speedUS = 40;
console.log(ford);
*/

/*
////////////////////////////
// Inheritance Between Classes
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const rylan = new Student('Rylan', 1995, 'Web Development');
console.log(rylan);
rylan.introduce();
rylan.calcAge();

console.log(rylan.__proto__);
console.log(rylan.__proto__.__proto__);
Student.prototype.constructor = Student;
*/

/*
/////////////////////////
// CODING CHALLENGE 3
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`This ${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`This ${this.make} is going at ${this.speed} km/h`);
};

const CarEV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

CarEV.prototype = Object.create(Car.prototype);
CarEV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

CarEV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `The ${this.make} is going ${this.speed}km/h with a charge of ${this.charge}`
  );
};

const tesla = new CarEV('Tesla', 120, 23);
tesla.chargeBattery(90);
tesla.accelerate()
console.log(tesla);
*/

/*
//////////////////////////////////
// ES6 Class Inheritance

class PersonCl {
  constructor(fullName, birthYear) {
    (this.fullName = fullName), (this.birthYear = birthYear);
  }

  // Methods will be added to the prototype property of the person class
  calcAge() {
    console.log(2025 - this.birthYear);
  }

  greet() {
    console.log(`Hello ${this.firstName}`);
  }

  get age() {
    return 2025 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log('Hey there');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

const rylan = new StudentCl('Rylan Deacon-Rogers', 1995, 'Web Development');

const PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },
  init(firstName, birthYear) {
    (this.firstName = firstName), (this.birthYear = birthYear);
  },
};

const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const jay = Object.create(StudentProto);
jay.init('Jay', 2018, 'Computer Science');
jay.introduce()
jay.calcAge()
*/

/*
//////////////////////////////////////
class Account {
  constructor(owner, currency, pin) {
    (this.owner = owner),
      (this.currency = currency),
      (this.pin = pin),
      (this.movements = []),
      (this.locale = navigator.language);

    console.log(`Thanks for opening an account ${owner}`);
  }

  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved');
    }
  }
}

const acc1 = new Account('Jonas', 'CAD', 1111);
acc1.deposit(250);
acc1.withdraw(50);
acc1.requestLoan(150);
console.log(acc1);
*/

/*
///////////////////////////////////
// Encapsulation
// Public Fields
// Private Fields
// Public Methods
// Private MEthods
class Account {
  locale = navigator.language;
  bank = 'Bankist';
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    (this.owner = owner),
      (this.currency = currency),
      (this.#pin = pin),
      // (this.movements = []),
      // (this.locale = navigator.language);

      console.log(`Thanks for opening an account ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved');
    }
    return this;
  }
}

const acc1 = new Account('Rylan', 'CAD', 3114);
console.log(acc1);

acc1
  .deposit(100)
  .withdraw(50)
  .requestLoan(5000)
  .withdraw(4000)
  .deposit(400)
  .withdraw(200);

console.log(acc1);
*/

/////////////////////////////////////////
// CHALLENGE 4
/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class CarEV extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
}

const rivian = new CarEV('Rivian', 120, 23);
console.log(rivian);
