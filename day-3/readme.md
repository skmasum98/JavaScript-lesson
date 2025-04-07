
## Task 1. odd or even

	let number = 501; 
	console.log(`Number ${number} is ${number % 2 === 0 ? 'even' : 'odd'}.`);
**Result:**
	Number 501 is odd.

## Task 2. Do you have a Driving License?

	let age = 5;
	
	let hasDrivingLicense = age >= 18 ? true : false; 
	
	console.log(`You are ${age} years old and ${hasDrivingLicense ? 'eligible' : 'not eligible'} for driving license.`);

**Result:**

	You are 5 years old and not eligible for driving license.

## Task 3 Calculate CTC with a Bonus

		let salary = 12300;
		let annualSalary = salary * 12;
		let bonus = annualSalary * 0.2;
		let ctc = annualSalary + bonus;
		
		console.log(`Annual salary is ${annualSalary} rupees.`);
		console.log(`Bonus is ${bonus} rupees.`);
		console.log(`Total CTC is ${ctc} rupees.`);

**Result:**

	Annual salary is 147600 rupees.
	Bonus is 29520 rupees.
	Total CTC is 177120 rupees.

## Task 4. Write a program for the Traffic Light Simulation
		
		let light = 'green'; 
		
		const messages = {
		    red: 'Traveler needs to Stop!',
		    green: 'Traveler can Go!'
		};
		console.log(`Light Color is ${light}`);
		console.log(messages[light]);

**Result:**

	Light Color is green
	Traveler can Go!
 
## Task 5. Create an Electricity Bill Calculator

		let units = 1; 
		let days = 30; 
		let rate = 150; // Rate per unit
		let bill = units * days * rate; // Total bill calculation
		
		let discount = 0.2; 
		let yearlyDiscount = (bill * 12) * discount; 
		let yearlyBill = (bill * 12) - yearlyDiscount; // Yearly bill calculation
		
		
		console.log(`Monthly bill for ${units} units consumed in ${days} days is ${bill} rupees.`);
		console.log(`Yearly bill is ${yearlyBill} rupees.`);
  
**Result:**

	Monthly bill for 1 units consumed in 30 days is 4500 rupees.
 	Yearly bill is 43200 rupees. 
  **4500*12=54000-20%=43200**

## Task 6. Leap Year Checker


		let year = 2025;
		let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0); 
		
		
		console.log(`${year} is ${isLeapYear ? 'a leap year' : 'not a leap year'}.`);


**Result:**

	2025 is not a leap year.

 
## Task 7. Max of Three Numbers
		let p = 12, q = 25, r = 7;
		//Ternary Operator
		let max = p > q 
		    ? (p > r ? p : r) 
		    : (q > r ? q : r);
		
		console.log(`The maximum of ${p}, ${q}, and ${r} is ${max}. //Ternary Operator`);
**Math.Max**
		let maximum = Math.max(p, q, r);
		
		console.log(`Use Math.max ${maximum}`)

**Result:**

	The maximum of 12, 25, and 7 is 25.
 	Use Math.max 25

## Task 8. Bitwise Doubling

		let count = 5;
		let double = count << 1; // Bitwise left shift operator to double the number
		console.log(`Double of ${count} is ${double}.`);

**Result:**
	Double of 5 is 10.
  
