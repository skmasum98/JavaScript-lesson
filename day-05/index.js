console.log("day 05");
console.log("1. Generate a Pyramid Pattern using Nested Loop");

let star = " *";
for (let Pyramid = 0; Pyramid <= 5; Pyramid++) {
    console.log(star);
    star += " *";
}




// 2. Generate a Multiplication Table using For Loop as it is shown below:
console.log("2. Multiplication Table of 5");

let n=5;

for (let result = 1; result <= 10; result++) {
    console.log(`${n} x ${result} = ${n * result}`);
}


// 3. Find the Sum of Odd Numbers from 1 to 500 using For Loop:
console.log("3. Sum of Odd Numbers from 1 to 500");

let sum = 0;
for (let i = 1; i<= 500; i++) {
    if (i % 2 === 1) {
        sum += i;
    }
}
console.log("Sum of Odd Numbers", sum);

console.log("4. Skipping Multiples of 3");

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i); 
}



console.log("5. Reverse Digits of a Number (Using while loop)");


let number = "56789";
let reversed = "";

let i = number.length - 1;
while (i >= 0) {
  reversed += number.charAt(i);
  i--;
}

console.log("Reverse Digits of a Number 56789 (string)", reversed);           
console.log("Reverse Digits of a Number 56789 (Number)", +reversed);