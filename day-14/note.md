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


##### SyntaxError
কখন হয়?
যখন কোডে কোন syntax ভুল থাকে।

উদাহরণ:

        if (true {
        console.log("Hello");
        }

🔴 Output: SyntaxError: Unexpected token ')'

##### ReferenceError
📌 কখন হয়?

যখন এমন কোন ভ্যারিয়েবল বা ফাংশন কল করা হয় যেটা ডিক্লেয়ার করা হয়নি।

উদাহরণ:

        console.log(x); // x ডিক্লেয়ার করা হয়নি

🔴 Output: ReferenceError: x is not defined


