let students = require('./another-script');
let myFavoriteNumber = require('./my-favorite-number');

console.log('students', students);
console.log(myFavoriteNumber);

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

for (let student of students) {
  // console.log(`welcome to node week, ${student}`);
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
