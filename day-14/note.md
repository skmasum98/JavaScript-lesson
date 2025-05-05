## Welcome to the <u>Day 14</u> of "40 Days of JavaScript!"

#### Note

### 1. Different Types of Error in JavaScript

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


