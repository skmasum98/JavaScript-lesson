## Welcome to the <u>Day 14</u> of "40 Days of JavaScript!"

#### Note

## 1. Different Types of Error in JavaScript

| Error Type     | কখন হয়                              |
| -------------- | --------------------------------      |
| SyntaxError    | কোড লেখার নিয়ম ভাঙলে                |
| ReferenceError | অঘোষিত ভ্যারিয়েবল ব্যবহার করলে         |
| TypeError      | ভুল টাইপের ভ্যালুতে অপারেশন করলে      |
| RangeError     | ভ্যালু রেঞ্জের বাইরে গেলে                 |
| EvalError      | eval() ব্যবহার সংক্রান্ত সমস্যা            |
| URIError       | URI encode/decode ভুল ইনপুট দিলে      |


### 1. SyntaxError
কখন হয়?
যখন কোডে কোন syntax ভুল থাকে।

উদাহরণ:

        if (true {
        console.log("Hello");
        }

🔴 Output: SyntaxError: Unexpected token ')'

### 2. ReferenceError
📌 কখন হয়?

যখন এমন কোন ভ্যারিয়েবল বা ফাংশন কল করা হয় যেটা ডিক্লেয়ার করা হয়নি।

উদাহরণ:

        console.log(x); // x ডিক্লেয়ার করা হয়নি

🔴 Output: ReferenceError: x is not defined

### 3. TypeError
📌 কখন হয়?

যখন ভুল টাইপের ভ্যালুতে অপারেশন করার চেষ্টা করা হয়।

উদাহরণ:

        let num = 5;
        num.toUpperCase(); // সংখ্যা থেকে uppercase?

🔴 Output: TypeError: num.toUpperCase is not a function

উদাহরণ 2:

        let obj = null;
        console.log(obj.name); // TypeError: Cannot read properties of null


### 4. RangeError
📌 কখন হয়?

যখন কোনো ভ্যালু গ্রহণযোগ্য রেঞ্জের বাইরে চলে যায়।

উদাহরণ:

        let arr = new Array(-1) // RangeError 
        
        // Array-এর সাইজ নেগেটিভ হতে পারে না

🔴 Output: RangeError: Invalid array length

### 5. EvalError
📌 কখন হয়?

eval() ফাংশন ব্যবহার করার সময় ভুল কিছু করলে।

        eval("var a = ;"); // EvalError

❗ এই error এখন খুব কম দেখা যায়, বিশেষ পরিস্থিতিতে শুধু আসে।

### 6. URIError
📌 কখন হয়?

decodeURI() বা encodeURI() এর সাথে ভুল ইনপুট দিলে।

উদাহরণ:

        decodeURIComponent("%"); // URIError

🔴 Output: URIError: URI malformed


### ⚠️ Parsing Error (Syntax Error)
এটা আসলে syntax error-এর একটি ধরন, যা JavaScript ইঞ্জিন কোড parse করার সময় খুঁজে পায়।

অর্থাৎ, JavaScript যখন কোডের স্ট্রাকচার বিশ্লেষণ করে, তখন যদি syntax ভুল থাকে — তখন parsing error ঘটে।

✅ কখন হয়?

ভুল ব্র্যাকেট

ভুলভাবে if, for ইত্যাদি লেখা

ভুল সেমিকোলন বা কোলন

🎯 উদাহরণ:

        function sayHello( {
        console.log("Hello");
        }
    // SyntaxError: Unexpected token '{'

ব্যাখ্যা: ওপরে ফাংশনের ব্র্যাকেট গঠন ভুল, তাই JavaScript কোড "parse" করতে পারেনি — এটি parsing error।

### ⚠️ Runtime Error
এই error কোড সঠিকভাবে পার্স হয়, কিন্তু যখন কোড চালানো হয় (run time) তখন সমস্যা দেখা দেয়।

✅ কখন হয়?

অঘোষিত ভ্যারিয়েবল ব্যবহার

null বা undefined থেকে প্রপার্টি পড়া

ভুল টাইপে অপারেশন করা

🎯 উদাহরণ: 

        let user;
        console.log(user.name); // user হলো undefined

        TypeError: Cannot read property 'name' of undefined
ব্যাখ্যা: কোড সিনট্যাক্স ঠিক আছে, তাই parse হয়েছে। কিন্তু চালানোর সময় user undefined, তাই error এসেছে — এটি runtime error।


## 2. Handling Errors With try and catch

### try...catch কি?
try...catch হচ্ছে JavaScript-এর একটি error-handling structure, যেটা কোডে কোনো error হলে সেটা ধরতে এবং প্রোগ্রাম বন্ধ না করে সেই error হ্যান্ডেল করতে সাহায্য করে।

Basic Syntax:

        try {
             // logic or code
            // এখানে  সেই কোড লিখো যেটাতে error হতে পারে
        } catch (error) {
            // handle error
            // যদি try ব্লকে error হয়, তাহলে এখানে এসে error ধরবে
        }

### 🧭 Flow (প্রবাহ):

    1. Code inside try gets executed.
    2. If no error in the try block, the catch block will be ignored and will not be
    executed.
    3. If there is an error in the try block, the execution of the try block will be
    suspended and the control will move to the catch block. In the catch block you
    can find the error details and do the needful.

👉 প্রথমে try ব্লক execute হয়।

👉 যদি try ব্লকে error না থাকে, তাহলে catch ব্লকে যাওয়া হবে না।

👉 যদি try ব্লকে error থাকে, তখন catch ব্লকে লাফ দেয় এবং error object পাঠায়।

⚠️ এর ফলে প্রোগ্রাম ক্র্যাশ করে না, বরং সুন্দরভাবে চালু থাকে।

        try {
            console.log("execution starts here");
            abc;
            console.log("execution ends here");
        } catch (err) {
            console.error("An Error has occured");

            console.log(err.name)
            console.log(err.message)
            console.log(err.stack)
        }

Another Example

        try {
            let result = 10 / 0;
            console.log(user); // user is not defined
        } catch (err) {
            console.log("An Error has occured:", err.message);
        }

🔵 Output: An Error has occured: user is not defined

### Error Object (err)
catch(err)-এ যেটা প্যারামিটার হিসেবে পাই, সেটা একটা Error object।

এটার মাধ্যমে  error সম্পর্কে অনেক কিছু জানতে পার:

    err.name – error এর নাম (যেমন: ReferenceError)

    err.message – error message

    err.stack – কোথা থেকে error এসেছে (debugging-এ কাজে লাগে)


| Part          | কাজ                                    |
| ------------- | -------------------------------------- |
| `try`         | সন্দেহজনক কোড ব্লক                     |
| `catch(err)`  | যদি error হয়, তাহলে এখানে হ্যান্ডেল হয় |
| `err.message` | error এর মেসেজ দেখায়                   |


## 3. বাস্তব জীবনের ব্যবহার (Real-World Use Cases)

### 1. API Call (Fetch Request)
যখন আমরা সার্ভার থেকে ডেটা আনি (যেমন: REST API), তখন ইন্টারনেট সমস্যা বা সার্ভার ডাউন থাকলে error হতে পারে। তাই try...catch ব্যবহার করি।

        async function getUserData() {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log('⚠️ ইউজার ডেটা আনতে সমস্যা হয়েছে:', err.message);
        }
        }
        getUserData();

### 2. Form Validation
ইউজার ভুল ইনপুট দিলে error ধরার জন্য try...catch ব্যবহার করা যায়।

        function submitForm(user) {
        try {
            if (!user.name) {
            throw new Error("নাম অবশ্যই দিতে হবে!");
            }
            console.log("Form submitted:", user);
        } catch (err) {
            console.log("❌ ফর্ম সমস্যা:", err.message);
        }
        }
        submitForm({}); // নাম নেই


### 3. LocalStorage ব্যবহার করার সময়
সব ব্রাউজার localStorage সাপোর্ট করে না বা user যদি privacy mode এ থাকে, তখন error হতে পারে।

        try {
        localStorage.setItem('theme', 'dark');
        } catch (err) {
        console.log("⚠️ LocalStorage কাজ করছে না:", err.message);
        }

### 4. JSON.parse() করার সময়
যখন ডেটা parse করতে হয়, কিন্তু সেটা invalid JSON হলে error হয়।

        const jsonString = '{"name":"Masum", "age":25}'; // ঠিক আছে

        try {
        const data = JSON.parse(jsonString);
        console.log(data.name);
        } catch (err) {
        console.log("❌ JSON পার্স করা যায়নি:", err.message);
        }

✳️ যদি JSON ভুল হতো (যেমন "{name:Masum}"), তাহলে catch ব্লকে চলে যেত।

### 5. Third-Party Library Error Handling
তুমি যদি অন্য কোনো লাইব্রেরি বা কোড ব্যবহার করো (যেটা তুমি নিজে লিখো নি), সেখানে ভুল হলে try...catch দিয়ে তাকে নিয়ন্ত্রণে রাখা যায়।

        try {
        someExternalFunction(); // যদি এই ফাংশনে সমস্যা থাকে
        } catch (err) {
        console.log("⚠️ বাইরের ফাংশনে সমস্যা:", err.message);
        }



## 4. Throwing Error

### What is throw?
👉 throw keyword ব্যবহার করে তুমি নিজের মতো করে একটি error তৈরি করতে পারো এবং সেটি "throw" বা ছুঁড়ে দিতে পারো।

🔴 এটি সাধারণত তখন ব্যবহার হয়, যখন তুমি কিছু চেক করে দেখো — এবং ভুল হলে ইচ্ছা করে error তৈরি করো।

🧠 Syntax:

        throw new Error("Own Custom error message");

##### Example

        function validateAge(age) {
            try {
                if (isNaN(age)) {
                    throw new Error(`Invalid input: Age must be a number. Your input is ${age}`);
                }
                console.log(`User's age is: ${age}`);
            } catch (error) {
                console.error("Validation Error:", error.message);
            }
        }

         validateAge("Tapas") // Invalid input: Age must be a number. Your input is Tapas


##### 🎯 Example: Input Validation

        function divide(a, b) {
        if (b === 0) {
            throw new Error("❌ 0 দিয়ে ভাগ করা যায় না!");
        }
        return a / b;
        }

        try {
        console.log(divide(10, 0));
        } catch (err) {
        console.log("⚠️ সমস্যা:", err.message);
        }


🟢 Output: ⚠️ সমস্যা: ❌ 0 দিয়ে ভাগ করা যায় না!

## 5. Rethrowing Error মানে কী?
Rethrow মানে হলো:

    catch ব্লকে error ধরার পর, তুমি চাইলেই আবার সেই error-টি পুনরায় ছুঁড়ে (throw) দিতে পারো — যেন পরবর্তীতে আরেক জায়গায় সেটা ধরা বা হ্যান্ডেল করা যায়।

### 📌 কেন ব্যবহার করব?
কখনো কখনো তুমি সব error catch ব্লকে হ্যান্ডেল করতে চাও না।

কিছু error শুধু লগ করে, আবার ছুঁড়ে দিতে চাও — যেন উপরের লেভেলে হ্যান্ডেল করা যায়।

#### 🧠 Structure:

        try {
        // কোড
        } catch (err) {
        if (err.message === "সাধারণ সমস্যা") {
            console.log("⛔ হ্যান্ডেল করা হলো:", err.message);
        } else {
            throw err; // আবার ছুঁড়ে দাও
        }
        }


 Example: Rethrowing Erro

        function validateForm(formData) {
            try {
                if (!formData.username) throw new Error("Username is Mandatory");
                if (!formData.email.includes("@")) throw new Error("Invalid email format!");
            } catch (error) {
                console.error("Validation Issues Found:", error.message);
            } else {
                throw error; // rethrow // অন্য যেকোনো error আবার ছুঁড়ে দাও
            }
        }

        try {
            validateForm({ username: "Tapas", email: "bademail" }) // // Invalid email
        } catch(error) {
            console.error("Showing error message for user creation", error.message)
        }

🔴  Output: Showing error message for user creation Invalid email format!

আর যদি অন্য error থাকত, তাহলে সেটা catch থেকে আবার throw হয়ে উপরের লেভেলে ধরা যেত।


## 6. try-catch-finally কী?
JavaScript-এ error handle করার সময় আমরা try এবং catch এর সাথে finally ব্যবহার করতে পারি।
finally block সবসময় চলে, error হোক বা না হোক।

🧱 Basic Structure:

        try {
            // কোড যা error করতে পারে
        } catch (err) {
            // error ধরার জায়গা
        } finally {
            // সবশেষে যা-ই হোক, এই কোড চলবেই
            // Code that always runs (cleanup actions)
        }

🎯 উদাহরণ ১: No Error

        try {
        console.log("📥 ডেটা প্রসেস হচ্ছে...");
        let result = 10 / 2;
        console.log("✅ ফলাফল:", result);
        } catch (err) {
        console.log("❌ Error:", err.message);
        } finally {
        console.log("🔚 এই অংশ সবসময় চলবে!");
        }

🟢 Output: 

            📥 ডেটা প্রসেস হচ্ছে...
            ✅ ফলাফল: 5
            🔚 এই অংশ সবসময় চলবে!


🎯 উদাহরণ ২: Error থাকলেও finally চলে

        try {
        let x = y + 1; // y is not defined (ReferenceError)
        } catch (err) {
        console.log("❌ ধরা পড়লো:", err.message);
        } finally {
        console.log("🔚 ফাইনালি ব্লক সবসময় চলবে!");
        }

🟢 Output:  

        ❌ ধরা পড়লো: y is not defined
        🔚 ফাইনালি ব্লক সবসময় চলবে!

##### বাস্তব জীবনে কোথায় finally দরকার হয়?

| Use Case                      | উদাহরণ                          |
| ----------------------------- | ------------------------------- |
| ✅ Cleanup                     | File বা Connection বন্ধ করা     |
| 🧹 Loading Indicator বন্ধ করা | UI থেকে লোডিং রিমুভ করা         |
| ⏱️ Timer বন্ধ করা             | API response দেরি করলে স্টপ করা |


## 7. Creating Custom Error

#### Custom Error মানে কী?
JavaScript-এ আমরা চাইলে নিজের মতো করে নতুন Error টাইপ তৈরি করতে পারি।

এগুলোকে বলে 👉 Custom Errors।

➡️ এগুলো সাধারণত Error class extend করে তৈরি করা হয়।

#### 🔧 কেন Custom Error দরকার?
নির্দিষ্ট ভুলের জন্য আলাদা error তৈরি করা যায়।

Debug বা logging সহজ হয়।

বড় অ্যাপে বিভিন্ন error আলাদা আলাদা হ্যান্ডেল করা যায়।

🧠 Basic Syntax:

        class MyCustomError extends Error {
        constructor(message) {
            super(message);        // parent class-এর constructor কল
            this.name = "MyCustomError";  // কাস্টম নাম
            }
        }

🎯 Example: Constructor Function দিয়ে Custom Error

        function ValidationError(message) {
            this.name = "ValidationError";
            this.message = message;
            this.stack = (new Error()).stack; // error trace
        }

        // Error এর prototype ইনহেরিট করানো
        ValidationError.prototype = Object.create(Error.prototype);
        ValidationError.prototype.constructor = ValidationError;

        function validateCitizen(age) {
        if (age < 60) {
            throw new ValidationError("You are not a senior citizen");
        }
        return "You are a senior citizen";
        }

        try {
            const message = validateCitizen(15);
            console.log(message);
        } catch (error) {
            console.error(`${error.name}: ${error.message}`);
        }


🟢 Output:

        ValidationError: You are not a senior citizen

এখন ValidationError পুরোপুরি Error এর মতোই behave করবে।
