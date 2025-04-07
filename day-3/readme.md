
console.log('Task 1. odd or even'); 

let number = 501; 
console.log(`Number ${number} is ${number % 2 === 0 ? 'even' : 'odd'}.`);


console.log('Task 2. Do you have a Driving License?');
let age = 5;
let hasDrivingLicense = age >= 18 ? true : false; // Ternary operator to check if the person is old enough to have a driving license

console.log(`You are ${age} years old and ${hasDrivingLicense ? 'eligible' : 'not eligible'} for driving license.`);


console.log('task 3 Calculate CTC with a Bonus')

let salary = 12300;
let annualSalary = salary * 12;
let bonus = annualSalary * 0.2;
let ctc = annualSalary + bonus;

console.log(`Annual salary is ${annualSalary} rupees.`);
console.log(`Bonus is ${bonus} rupees.`);
console.log(`Total CTC is ${ctc} rupees.`);



console.log('Task 4. Write a program for the Traffic Light Simulation.')

let light = 'green'; 

const messages = {
    red: 'Traveler needs to Stop!',
    green: 'Traveler can Go!'
};
console.log(`Light Color is ${light}`);
console.log(messages[light]);

// Task 5. Create an Electricity Bill Calculator
console.log('Task 5. Create an Electricity Bill Calculator')
let units = 1; 
let days = 30; 
let rate = 150; // Rate per unit
let bill = units * days * rate; // Total bill calculation

let discount = 0.2; 
let yearlyBill = bill * 12 * discount; // Yearly bill calculation


console.log(`Monthly bill for ${units} units consumed in ${days} days is ${bill} rupees.`);
console.log(`Yearly bill is ${yearlyBill} rupees.`);

// Task 6. Leap Year Checker
console.log('Task 6. Leap Year Checker')

let year = 2025;
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0); 


console.log(`${year} is ${isLeapYear ? 'a leap year' : 'not a leap year'}.`);

// Task 7. Max of Three Numbers
console.log('Task 7. Max of Three Numbers');

let p = 12, q = 25, r = 7;
//Ternary Operator
let max = p > q 
    ? (p > r ? p : r) 
    : (q > r ? q : r);

console.log(`The maximum of ${p}, ${q}, and ${r} is ${max}. //Ternary Operator`);

let maximum = Math.max(p, q, r);

console.log(`Use Math.max ${maximum}`)


// Task 8. Bitwise Doubling
console.log('Task 8. Bitwise Doubling');
let count = 5;
let double = count << 1; // Bitwise left shift operator to double the number
console.log(`Double of ${count} is ${double}.`);
