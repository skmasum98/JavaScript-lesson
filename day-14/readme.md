## Welcome to the <u>Day 14</u> of "40 Days of JavaScript!" 
---
Task
--


### 1. What will be the output of the following code?

    try {
        let r = p + 50;
        console.log(r);
    } catch (error) {
        console.log("An error occurred:", error.name);
    } 
    // This code tries to add p + 50. But since p is not defined, it throws a ReferenceError
    //  also name is is not defined.

**ReferenceError**

---
### 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors
---
    function processPayment(amount) {
        const balance = 1000; // Example balance
        if (amount <= 0) {
            throw new Error("Amount must be positive.");
        } else if (amount > balance) {
            throw new Error("Insufficient balance.");
        } else {
            console.log("Payment processed successfully.");
        }
    }

    // Test the function with different amounts
    try {
        
        processPayment(500); // Valid payment
        processPayment(-100); // Invalid payment (negative amount)
        
    }catch (error) {
        console.log("Error:", error.message);
    }

    try {
        processPayment(1500); // Invalid payment (exceeds balance)
    }catch (error) {
        console.log("Error:", error.message);
    }

**Output**
Payment processed successfully.

index.js:29 Error: Amount must be positive.

index.js:35 Error: Insufficient balance.

---
### 3. Implement a custom error handling system for an e-commerce website that categorizes errors as
* UserError
* PaymentError
* ServerError
* EmailError

 **Define custom error types using function constructors**

        function UserError(message) {
            this.name = "UserError";
            this.message = message;
        }

        function PaymentError(message) {
            this.name = "PaymentError";
            this.message = message;
        }

        function EmailError(message) {
            this.name = "EmailError";
            this.message = message;
        }

        function ServerError(message) {
            this.name = "ServerError";
            this.message = message;
        }

**Checkout Function Example**

    function checkout(user, amount) {
        if (!user.loggedIn) {
            throw new UserError("User must be logged in to checkout.");
        }

        if (amount < price) {
            throw new PaymentError(`Payment amount must be exactly $${price} your payment is $${amount}.`);
        }

        if (!user.email || !user.email.includes("@")) {
            throw new EmailError("Invalid email address.");
        }

        if (Math.random() < 0.2) {
            throw new ServerError("Server is currently down.");
        }

        console.log("Checkout successful!");
    }

**Using the Error Types**

        const user = {
            loggedIn: true,
            email: "user@example.com"
        };

        const price = 100;


    try {
        checkout(user, 90); // Invalid payment (below price)
    } catch (error) {
        if (error.name === "UserError") {
            console.log("User Error:", error.message);
        } else if (error.name === "PaymentError") {
            console.log("Payment Error:", error.message);
        } else if (error.name === "EmailError") {
            console.log("Email Error:", error.message);
        } else if (error.name === "ServerError") {
            console.log("Server Error:", error.message);
        } else {
            console.log("Unknown Error:", error.message);
        }
    }

**Payment Error: Payment amount must be exactly $100 your payment is $90.**

---
### 4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch

        function fetchData(url) {
            if (!url.startsWith("https")) {
                throw new Error("Invalid URL. URL must start with 'https'.");
            }
            // Simulate fetching data
            console.log(`Fetching data from ${url}...`);
        }

        try {
            fetchData("http://example.com"); // Invalid URL
        }catch (error) {
                console.log("URL Error:", error.message);
            }

**Output: URL Error: Invalid URL. URL must start with 'https'.**

        try {
                fetchData("https://example.com"); // Invalid URL
            }catch (error) {
                    console.log("URL Error:", error.message);
                }

**Output: Fetching data from https://example.com...**

---

### 5. Implement a custom error type ValidationError using constructor functions to handle form validation errors

        const userInput = { 
            username: "", 
            age: -2 
        };
        const userInput2 = { username: "JohnDoe", age: 25 }; // Valid input

        function ValidationError(message) {
            this.name = "ValidationError";
            this.message = message;
        }

        function validateUser(input) {
            try {
                if (!input.username) {
                    throw new ValidationError("Username is required.");
                }
                if (input.age <= 0) {
                    throw new ValidationError("Age must be a positive number.");
                }
                console.log("User input is valid.");
            } catch (error) {
                if (error instanceof ValidationError) {
                    console.log("Validation Error:", error.message);
                } else {
                    console.log("Unknown Error:", error.message);
                }
            }   
        }
        validateUser(userInput); // Invalid input
        validateUser(userInput2); // Valid input


**Output: Validation Error:**
-Username is required.
-User input is valid.

---
### 6.Write a function readFile(filePath) that simulates reading a file. If the file does not exist (simulate with a condition), throw a "File not found" error. Handle the error with try...catch. Make sure you have code to handle releasing the IO resources
```
        function readFile(filePath) {
            try {
                // Simulate file reading
                if (!filePath.endsWith(".txt")) {
                    throw new Error("File format not supported. Only .txt files are allowed.");
                }
                console.log(`Reading file: ${filePath} successfully.`);
            }
            catch (error) {
                if (error.message.includes("not supported")) {
                    console.log("File not found:", error.message);
                } else {
                    console.log("Unknown Error:", error.message);
                }
            }
            finally {
                console.log("File read operation completed.");
            }
        }

        readFile("document.pdf"); // Invalid file format
        readFile("document.txt"); // Valid file format
```

**Output: 1**
* File not found: File format not supported. Only .txt files are allowed.
* File read operation completed.

**Output: 2**
* Reading file: document.txt successfully.
* File read operation completed.

---
### 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse().  If parsing fails, catch the error and return "Invalid JSON"
```
function parseJson(str) {
    try {
      const result = JSON.parse(str);
      return result;
    } catch (error) {
      return "Invalid JSON";
    }
    finally {
        console.log("JSON parsing operation completed.");
    }
  }

console.log(parseJson('{"name": "Masum", "age": 25}')); 
console.log(parseJson('{name: "Masum"}'));  
```
**Output: 1** 
```
* JSON parsing operation completed.
* {
    "name": "Masum",
    "age": 25
}
```

**Output: 2** 

* JSON parsing operation completed.
* Invalid JSON
---
### 8. What is the purpose of throw in JavaScript?

- It catches an error
- It stops the execution of a program
- **It creates a new error manually**✅
- It prints an error message
---
### 9. What does the finally block do in a try...catch statement?

- Runs only if an error occurs
- Runs only if no error occurs
- **Runs regardless of whether an error occurs or not**✅
- Stops the execution of the script

---

### 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object

| **Keyword / Concept** | **Usage**                               | **Example**                                  | **Explanation (বাংলায়)**                                                              |
| --------------------- | --------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------- |
| `try`                | Runs code that might cause an error     | `try { let x = JSON.parse(data); } `      | সম্ভাব্য এরর হওয়া কোড এখানে রাখা হয়। এরর হলে সরাসরি `catch` এ চলে যায়।                |
| `catch`               | Handles the error thrown in `try` block | `catch (e) { console.log(e.message); } `  | যদি `try` ব্লকে এরর হয়, `catch` ব্লকে এসে সেটিকে হ্যান্ডল করে।                        |
| `throw`               | Manually creates & throws an error      | `throw new Error("Invalid input"); `      | নিজে থেকে এরর তৈরি করে ছুঁড়ে দেয়, যেন সেটি `catch` দ্বারা ধরা যায়।                    |
| `rethrow`             | Throws error again after catching it    | `catch (e) { if (!e.handled) throw e; } ` | এরর `catch` করার পর আবার `throw` করে দেয়, যদি চাই না এখানেই হ্যান্ডল হোক।             |
| `Error` object        | Built-in object for creating errors     | `new Error("Something went wrong") `      | এর মাধ্যমে কাস্টম এরর তৈরি করা যায়, যেমন `Error`, `TypeError`, `SyntaxError` ইত্যাদি। |


---
---