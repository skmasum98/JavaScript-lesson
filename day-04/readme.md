## Task 1. What will be the output of this code snippet and why?
        let day = "Monday";

        switch (day) {
        case "monday":
            console.log("It's the start of the week.");
            break;
        default:
            console.log("It's a normal day.");
        }

**Answer**
                    It's show It's a normal day.

    Because day = "Monday" (with a capital "M") and  case is "monday" 

## Task 2. Build an ATM Cash Withdrawal System

        let amount = 1300;

        if (amount > 0 && amount % 100 === 0) {
            console.log("Withdrawal successful");
        } else {
            console.log("Invalid amount");
        }

**Answer**
                    Withdrawal successful

## Task 3. Build a Calculator with switch-case

        let num1 = 100;
        let num2 = 20;
        let operator = "+"; // Change this to test different operations


        switch (operator) {
            case "+":
                console.log("Result:", num1 + num2);
                break;
            case "-":
                console.log("Result:", num1 - num2);
                break;
            case "*":
                console.log("Result:", num1 * num2);
                break;
            case "/":
                console.log("Result:", num1 / num2);
                break;
            default:
                console.log("Invalid operator");
        }

**Answer**
                    Result: 120

## Task 4. Pay for your movie ticket

        let age = 25; // Change this to test different ages

        if (age < 18) {
            console.log("Ticket price is $3 for children.");
        }
        else if (age >= 18 && age <= 60) {
            console.log("Ticket price is $10 for adults.");
        }
        else if (age > 60) {
            console.log("Ticket price is $8 for seniors.");
        }

**Answer**
                    Ticket price is $10 for adults.

## Task 5. Horoscope Sign Checker

        let month = "july"; // Change this to test different months

        switch (month) {
            case "march":
            case "april":
                console.log("Your zodiac sign is Aries.");
                break;
            case "april":
            case "may":
                console.log("Your zodiac sign is Taurus.");
                break;
            case "may":
            case "june":
                console.log("Your zodiac sign is Taurus.");
                break;
            case "june":
            case "july":
                console.log("Your zodiac sign is Gemini.");
                break;
            case "july":
            case "august":
                console.log("Your zodiac sign is Cancer.");
                break;
            case "august":
            case "september":
                console.log("Your zodiac sign is Leo.");
                break;
            case "september":
            case "october":
                console.log("Your zodiac sign is Virgo.");
                break;
            case "october":
            case "november":
                console.log("Your zodiac sign is Libra.");
                break;
            case "november":
            case "december":
                console.log("Your zodiac sign is Scorpio.");
                break;
            case "december":
            case "january":
                console.log("Your zodiac sign is Sagittarius.");
                break;
            case "january":
            case "february":
                console.log("Your zodiac sign is Capricorn.");
                break;
            case "february":
            case "march":
                console.log("Your zodiac sign is Aquarius.");
                break;
            default:
                console.log("Invalid month.");
                break;
        }


**Answer**
                    Your zodiac sign is Gemini.


## Task 6. Which Triangle?

        let side1 = 6; 
        let side2 = 5; 
        let side3 = 7; 

        if (side1 === side2 && side2 === side3) {
            console.log("Equilateral Triangle");
        }
        else if (side1 === side2 || side2 === side3 || side1 === side3) {
            console.log("Isosceles Triangle");
        } else {
            console.log("Scalene Triangle");
        }   

**Answer**
                    Scalene Triangle