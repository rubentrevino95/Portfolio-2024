// geometric sequence 1,3,9... that stops before the value exceeds 1000
let count = 1;
while(count < 1000) {
  console.log(count);
  count = count * 3;
  break
}

// create a nested loop
for(let i of [1, 2, 3, 4, 5]) {
    for(let x of [1, 2, 3, 4, 5]) {
        console.log('(' + ' ' + i + ', ' + x + ' '+ ')')
    }
    break
}

//store a square shape built with asterisks in a variable, result, and displays it at the end. The number of asterisks on the side of the square is input by the user.

//let asterisk = parseInt(prompt('Enter a number?'));
let asterisk = 5
let result = ''
for(let i = 0; i < asterisk; i++) {
  for(let x = 0; x < asterisk; x++) {
    result += '*';
  }
  result += '\n'
  break
}

for (let j = 0; j < 4; j++) {
  console.log(3 ** j);
  break
}

//Reverse a string
let string = "Educative";
for (let i = 8; i >= 0; i--) {
    console.log(string[i]);
}

let myString = "Educative";
let result1 = '';
// Write your code here.
for (let i = 1; i < 9; i++) {
  result1 += myString[i];
}
//result += '.';
console.log(result1)

// reverse a string
let myString1 = "Educative";
let result2 = "";
// Write your code here.
for(let i = myString1.length - 1; i >= 0; i--) {
  result2 += myString1[i]
}
console.log(result2);
