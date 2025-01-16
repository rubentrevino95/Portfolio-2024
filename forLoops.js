console.log('test')

// generate the first 30 non-negative even numbers
for(let a = 0; a <= 30; a++) {
    let e = a * 2; // Multiple each value of a with 2
    console.log(e);
}

// print the first 100 positive odd numbers
for(let i = 1; i < 200; i+=2) {
    console.log(i)
  }

// print the terms of the sequence 1,6,11...<100
for(let i = 1; i < 100; i += 5) {
    console.log(i);
}

//prints a multiplication table for the first 20 multiples
let num = 0; // Replace the zero with the number
for (let i = 1; i < 21; i++) {
    let result = num * i;
    console.log(num + " x " + i + " = " + result);
}

//shows all the factors of a number the user provides.
let numTwo = 0; // Replace the zero with a number
for (let i = 1; i <= numTwo; i++) {
    if (numTwo % i == 0) {
        console.log(i);
    }
}

//shows whether or not a natural number is a prime number.
let number = 0; // Replace the zero with a number
let countFactor = 0;
for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        countFactor += 1;
    }
}
if (countFactor == 2) {
    console.log(number + " is a prime number");
} else {
    console.log(number + " is not a prime number");
}
