console.log('js');

let age = 30;

if (age > 23) {
  console.log('you are old man');
}

function birthday() {
  age++;
  return age;
}

console.log(`happy birthday to you, you are ${birthday()}`);

let cullenites = ['Michael', 'Dusty', 'George', 'Vada'];

for (let student of cullenites) {
  console.log(`welcome to node week, ${student}`);
}

$(document).ready(() => {
  $(body).append('<h1>Hello World</h1>');
});
