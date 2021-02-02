const cullenites = require('./students');
const myFavoriteNumber = require('./my-favorite-number');
const scream = require('./scream');
const counter = require('./counter');
const { addStudent } = require('./students');

console.log('students', cullenites.students);
console.log('instructor', cullenites.instructor);
// console.log('my favorite number is', myFavoriteNumber);
// console.log('Hello', scream('world'));
addStudent('Josh');
addStudent('Peter');
console.log('students', cullenites.students);

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

let age = 30;
if (age > 23) {
  // console.log('you are old man');
}

function birthday() {
  age++;
  return age;
}

// console.log(`happy birthday to you, you are ${birthday()}`);
// console.log(`happy birthday to you, you are ${birthday()}`);
// console.log(`happy birthday to you, you are ${birthday()}`);
// console.log(`happy birthday to you, you are ${birthday()}`);

for (let student of cullenites.students) {
  console.log(`welcome to node week, ${student}`);
}

function sumOfRange(num1, num2) {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
