### 1. Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.

            {
            console.log(a); //  undefined (hoisted var)
            // console.log(b); //  ReferenceError (TDZ)
            // console.log(c); //  ReferenceError (TDZ)

            var a = "I am var";
            let b = "I am let";
            const c = "I am const";

            console.log(a); //  I am var
            console.log(b); //  I am let
            console.log(c); //  I am const
            }

var a
a কে ব্লকের শুরুতেই hoist করে নেয়।

কিন্তু শুধুমাত্র ডিক্লারেশন হোইস্ট হয়, ভ্যালু না।

তাই প্রথমে console.log(a) করলে দেখায় undefined.

let b এবং const c
এদের ডিক্লারেশনও স্কোপের উপরে নিয়ে যায়, কিন্তু তারা TDZ (Temporal Dead Zone)-এ থাকে।

মানে, যতক্ষণ না কোড let b = ... বা const c = ... লাইনে পৌঁছায়, ততক্ষণ ওগুলোকে এক্সেস করা যাবে না।

তাই আগে console.log(b) বা console.log(c) করলে ReferenceError দিবে।


## 2. Explain Variable and Function Hoisting with Example.

###  1. Variable Hoisting (ভ্যারিয়েবল হোইস্টিং)
JavaScript-এ যখন কোনো ভ্যারিয়েবল var দিয়ে ডিক্লেয়ার হয় , তখন JavaScript সেই ডিক্লারেশনকে স্কোপের একদম উপরে নিয়ে নেয় (before execution)। তবে, ভ্যালুটা হোইস্ট হয় না, শুধু ডিক্লারেশন হয়।

        console.log(a); // undefined        
        var a = 10;                         
        console.log(a); // 10               

##### ভিতরে কী হয়:
        var a;           // hoisted at the top
        console.log(a);  // undefined
        a = 10;

##### let বা const দিয়ে করলে:
        console.log(b); //  ReferenceError
        let b = 20;

কারণ b TDZ (Temporal Dead Zone)-এ থাকে ডিক্লেয়ার না হওয়া পর্যন্ত।

### 2. Function Hoisting (ফাংশন হোইস্টিং)
Function declarations পুরোপুরি হোইস্ট হয়, অর্থাৎ তাদের নাম + বডি (function body) — তাই ডিক্লারেশনের আগে কল করলেও কাজ করে।

        sayHello(); // Hello World!

        function sayHello() {
        console.log("Hello World!");
        }

sayHello() উপরের দিকেই হোইস্ট হয়ে গেছে, তাই আগেই কল করলেও চলে।


 ##### কিন্তু Function Expression বা Arrow Function হলে?

        greet(); //  TypeError: greet is not a function

        var greet = function () {
        console.log("Hi there!");
        };

এখানে greet হোইস্ট হয়, কিন্তু তার ভ্যালু (function) পরে অ্যাসাইন হয় as a variable, greet is not function, function is value of greet

তাই আগে কল করলে greet হবে undefined, আর undefined() করলে হয় TypeError