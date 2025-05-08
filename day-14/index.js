// 1. What will be the output of the following code?
// try {
//     let r = p + 50;
//     console.log(r);
// } catch (error) {
//     console.log("An error occurred:", error.name);
// }


// Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors
// function processPayment(amount) {
//     const balance = 1000; // Example balance
//     if (amount <= 0) {
//         throw new Error("Amount must be positive.");
//     } else if (amount > balance) {
//         throw new Error("Insufficient balance.");
//     } else {
//         console.log("Payment processed successfully.");
//     }
// }

// // Test the function with different amounts
// try {
    
//     processPayment(500); // Valid payment
//     processPayment(-100); // Invalid payment (negative amount)
    
// }catch (error) {
//     console.log("Error:", error.message);
// }

// try {
//     processPayment(1500); // Invalid payment (exceeds balance)
// }catch (error) {
//     console.log("Error:", error.message);
// }

// Implement a custom error handling system for an e-commerce website that categorizes errors as
// UserError
// PaymentError
// ServerError

// Define custom error types using function constructors
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

//  Checkout Function Example

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

// Using the Error Types

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


// Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch

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

try {
        fetchData("https://example.com"); // Invalid URL
    }catch (error) {
            console.log("URL Error:", error.message);
        }


// 5. Implement a custom error type ValidationError using constructor functions to handle form validation errors

// Example usage
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


// 6.

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

//7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). 
// If parsing fails, catch the error and return "Invalid JSON"

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
 