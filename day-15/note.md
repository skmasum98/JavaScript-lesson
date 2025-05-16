## 🟡 **Array কী? (What is an Array in JavaScript?)**

**Array** হল একধরনের **ডাটা স্ট্রাকচার** যা অনেকগুলো ভ্যালু বা উপাদান (values or elements) একসাথে একটি জায়গায় **সংরক্ষণ** করতে পারে। এই উপাদানগুলোকে **index** দিয়ে access করা যায়।

➡️ সহজভাবে বললে, array হচ্ছে একটা **list** বা তালিকা।

```js
// একটি সাধারণ Array
let fruits = ["Apple", "Banana", "Mango"];
```

এখানে `fruits` নামক array-এ ৩টি উপাদান আছে:

* "Apple" → index 0
* "Banana" → index 1
* "Mango" → index 2

---

### ✅ **কেন Array ব্যবহার করব?**

* একাধিক ডাটা একসাথে রাখতে হলে
* লুপের মাধ্যমে item গুলোতে কাজ করতে হলে
* ডাটাকে সহজে **manage** ও **access** করতে হলে

---

## 📚 **How to Create an Array in JavaScript?**

Creating an array in JavaScript is very simple. Below are **four common ways** to create an array, with easy explanations:

---

### ✅ 1. **Using Array Literal** (সর্বাধিক ব্যবহৃত পদ্ধতি)

```js
let fruits = ["Apple", "Banana", "Mango"];
```

🔹 এখানে `fruits` একটি array যেটিতে ৩টি item আছে।
🔹 প্রতিটি item একটি string এবং এগুলোর index হয় 0, 1, 2...

---

### ✅ 2. **Using `new Array()` Constructor**

```js
let numbers = new Array(10, 20, 30);
```

🔹 এটি একটি array তৈরি করে যেখানে 3টি সংখ্যা আছে।

🔸 কিন্তু যদি শুধু একটি সংখ্যা দাও:

```js
let arr = new Array(5); // এটি একটি 5-element empty array তৈরি করে
console.log(arr); // [ <5 empty items> ]
```

🟡 তাই এই মেথড কম ব্যবহার করা হয়, কারণ এটি বিভ্রান্তিকর হতে পারে।

---

### ✅ 3. **Creating an Empty Array**

```js
let emptyArray = [];
```

🔹 এখানে কোনো item নেই, কিন্তু পরবর্তীতে `push()` দিয়ে item যোগ করা যায়।

```js
emptyArray.push("Hello");
console.log(emptyArray); // ["Hello"]
```

---

### ✅ 4. **Array with Mixed Data Types**

```js
let mix = ["Text", 100, true, null];
```

🔹 JavaScript arrays বিভিন্ন টাইপের ডাটা রাখতে পারে একসাথে।

---

### 📌 Extra Tips:

* JavaScript arrays **zero-based indexing** ব্যবহার করে। মানে প্রথম item এর index = 0।
* তুমি array এর ভিতরের value গুলা access করতে পারো `arrayName[index]` দিয়ে।

```js
let names = ["Masum", "Rahim", "Karim"];
console.log(names[1]); // Output: Rahim
```

---


## How to Get Elements from an Array (JavaScript)

### 🟢 1. **Access by Index (Index দিয়ে Access করা)**

```js
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Mango
```

📌 মনে রাখো: JavaScript-এ index **0 থেকে শুরু হয়**।
অর্থাৎ `fruits[0]` = 1st element, `fruits[1]` = 2nd element, ইত্যাদি।

---

### 🟢 2. **Access the Last Element**

```js
let fruits = ["Apple", "Banana", "Mango"];

let lastItem = fruits[fruits.length - 1];
console.log(lastItem); // Output: Mango
```

📌 `length` হচ্ছে array-এর মোট item সংখ্যা।
তাই শেষ item পেতে: `array[array.length - 1]`

---

### 🟢 3. **Access with a Loop (Loop দিয়ে সবগুলো item পাওয়া)**

```js
let numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

🔹 এটা প্রতিটি item কে দেখাবে:
10, 20, 30, 40

---

### 🟢 4. **Using `forEach()` Method**

```js
let names = ["Masum", "Rahim", "Karim"];

names.forEach(function(name) {
  console.log(name);
});
```

🔹 `forEach()` automatically সব element-এ লুপ চালায়।

---

### ✅ Bonus: Optional Chaining (সতর্কভাবে access করার উপায়)

```js
let data = ["A", "B"];
console.log(data?.[5]); // Output: undefined (but no error)
```

---


## ✅ How to Add Elements to an Array in JavaScript

---

### 🟢 1. **Using `push()`** → Add to the **end** of the array

(**শেষে item যোগ করার জন্য**)

```js
let fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits); // ["Apple", "Banana", "Mango"]
```

---

### 🟢 2. **Using `unshift()`** → Add to the **beginning** of the array

(**শুরুর দিকে item যোগ করার জন্য**)

```js
let fruits = ["Apple", "Banana"];
fruits.unshift("Orange");
console.log(fruits); // ["Orange", "Apple", "Banana"]
```

---

### 🟢 3. **Using `splice()`** → Add to a **specific position**

(**মাঝে বা নির্দিষ্ট index-এ item যোগ করতে**)

```js
let fruits = ["Apple", "Banana"];
fruits.splice(1, 0, "Mango"); // index 1-এ "Mango" ঢুকবে, কিছু মুছে না
console.log(fruits); // ["Apple", "Mango", "Banana"]
```

> 🔹 Syntax: `array.splice(startIndex, deleteCount, itemToAdd)`

---

### 🟢 4. **Direct assignment by index**

(**নির্দিষ্ট index এ মান বসানো**)

```js
let fruits = [];
fruits[0] = "Apple";
fruits[1] = "Banana";
console.log(fruits); // ["Apple", "Banana"]
```

---

### 🟢 5. **Spread Operator দিয়ে Add করা**

```js
let oldArray = [1, 2, 3];
let newArray = [...oldArray, 4, 5];
console.log(newArray); // [1, 2, 3, 4, 5]
```

---

## 📌 Summary:

| Method                 | বাংলা ব্যাখ্যা                   | যোগ হয় কোথায়         |
| ---------------------- | -------------------------------- | -------------------- |
| `push()`               | array-এর শেষে item যোগ করে       | শেষে                 |
| `unshift()`            | array-এর শুরুতে item যোগ করে     | শুরুতে               |
| `splice()`             | নির্দিষ্ট স্থানে item যোগ করে    | যেকোনো জায়গায়        |
| `array[index] = value` | নির্দিষ্ট index-এ মান বসায়       | নির্দিষ্ট index      |
| `[...oldArray, item]`  | নতুন array তৈরি করে item যোগ করে | শেষ বা যেকোনো জায়গায় |

---


## ✅ How to Remove Elements from an Array in JavaScript

---

### 🟢 1. **Using `pop()`** → Removes the **last item**

**(array-এর শেষ item মুছে ফেলে)**

```js
let fruits = ["Apple", "Banana", "Mango"];
fruits.pop(); // Removes "Mango"
console.log(fruits); // ["Apple", "Banana"]
```

---

### 🟢 2. **Using `shift()`** → Removes the **first item**

**(array-এর প্রথম item মুছে ফেলে)**

```js
let fruits = ["Apple", "Banana", "Mango"];
fruits.shift(); // Removes "Apple"
console.log(fruits); // ["Banana", "Mango"]
```

---

### 🟢 3. **Using `splice()`** → Removes item from **any position**

**(array-এর যেকোনো জায়গা থেকে item মুছে ফেলে)**

```js
let fruits = ["Apple", "Banana", "Mango"];
fruits.splice(1, 1); // index 1 থেকে ১টা item remove
console.log(fruits); // ["Apple", "Mango"]
```

> 🔹 Syntax: `array.splice(startIndex, deleteCount)`

---

### 🟢 4. **Using `filter()`** → Removes by condition

**(নির্দিষ্ট শর্ত অনুযায়ী item বাদ দেয়)**

```js
let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.filter(num => num !== 3); // Remove 3
console.log(newNumbers); // [1, 2, 4, 5]
```

---

### 🟢 5. **Using `delete` operator** (⚠️ Not Recommended)

**(index এর মান undefined করে দেয়, পুরো item remove করে না)**

```js
let fruits = ["Apple", "Banana", "Mango"];
delete fruits[1];
console.log(fruits); // ["Apple", empty, "Mango"]
```

🛑 এটি array-এর length কমায় না, তাই ব্যবহারে সতর্কতা দরকার।

---

## 📌 Summary Table in Bangla:

| Method        | কাজ                                          | কোন জায়গা থেকে?                   |
| ------------- | -------------------------------------------- | --------------------------------- |
| `pop()`       | শেষ item মুছে ফেলে                           | শেষ থেকে                          |
| `shift()`     | প্রথম item মুছে ফেলে                         | শুরু থেকে                         |
| `splice(i,n)` | নির্দিষ্ট index থেকে n সংখ্যক item মুছে ফেলে | যেকোনো জায়গা থেকে                 |
| `filter()`    | condition অনুযায়ী item বাদ দেয়               | যেকোনো জায়গা থেকে                 |
| `delete`      | index এর value undefined করে                 | নির্দিষ্ট index (⚠️ Bad Practice) |

---


## ✅ How to Copy / Clone an Array in JavaScript

---

### 🟢 1. **Using the Spread Operator (`...`)**

**(সবচেয়ে সহজ এবং জনপ্রিয় পদ্ধতি)**

```js
let original = [1, 2, 3];
let copy = [...original];

console.log(copy); // [1, 2, 3]
```

📌 এখন `copy` array-এ কিছু পরিবর্তন করলে, `original` এর কোন প্রভাব পড়বে না।

---

### 🟢 2. **Using `slice()` Method**

**(পুরো array-এর shallow copy তৈরি করে)**

```js
let original = [10, 20, 30];
let copy = original.slice();

console.log(copy); // [10, 20, 30]
```

---

### 🟢 3. **Using `Array.from()`**

**(আরো একটি clean উপায়)**

```js
let original = ["A", "B", "C"];
let copy = Array.from(original);

console.log(copy); // ["A", "B", "C"]
```

---

### 🟡 Note on Reference vs Copy:

```js
let original = [1, 2, 3];
let notCopy = original; // ❌ এটা আসলে reference

notCopy.push(4);

console.log(original); // [1, 2, 3, 4] 😱
```

📌 যদি তুমি `=` দিয়ে assign করো, তাহলে তা একই reference ব্যবহার করে।
তাই নতুন করে পরিবর্তন করলে **original array-ও বদলে যায়**।

---

### 🟢 4. **Deep Copy (for nested arrays)**

```js
let nested = [[1, 2], [3, 4]];
let deepCopy = JSON.parse(JSON.stringify(nested));

console.log(deepCopy); // [[1, 2], [3, 4]]
```

📌 এটা একটি deep copy তৈরি করে, যেখানে nested array-এর ভেতরের data ও আলাদা থাকে।

---

#### 📌 Summary Table:

| Method                              | কাজ করে কিভাবে                     | কবে ব্যবহার করব        |
| ----------------------------------- | ---------------------------------- | ---------------------- |
| `[...array]`                        | Spread operator দিয়ে shallow copy  | Simple copy/cloning    |
| `array.slice()`                     | পুরোটাই কপি করে                    | Simple clone           |
| `Array.from(array)`                 | নতুন array তৈরি করে                | Simple clone           |
| `JSON.parse(JSON.stringify(array))` | Deep copy করে nested array এর জন্য | Nested array থাকলে     |
| `let copy = original`               | কপি না, reference দেয় 😢           | Avoid this for cloning |

---


## ✅ How to Check if a Value is an Array in JavaScript

---

### 🟢 1. **Using `Array.isArray()`** ✅

**(সবচেয়ে সঠিক ও সহজ উপায়)**

```js
let fruits = ["Apple", "Banana"];
console.log(Array.isArray(fruits)); // true
```

📘 **Explanation**:
`Array.isArray()` ফাংশনটি ব্যবহার করলে JavaScript বলে দিবে এটি array কিনা।
👉 যদি হয়, রিটার্ন করবে `true`; না হলে `false`.

---

### 🟢 2. **Using `instanceof` keyword**

(এই পদ্ধতিটিও কাজ করে, কিন্তু কিছু ক্ষেত্রে দুর্বল)

```js
let nums = [1, 2, 3];
console.log(nums instanceof Array); // true
```

📘 **Explanation**:
`instanceof` চেক করে যে এই ভ্যালুটা `Array` class-এর instance কিনা।

❗ কিন্তু যদি ভ্যালুটি ভিন্ন window বা iframe থেকে আসে, তাহলে `false` রিটার্ন করতে পারে।

---

### 🔴 3. **Avoid using `typeof`** (❌ ভুল ধারণা দেয়)

```js
let fruits = ["Apple", "Banana"];
console.log(typeof fruits); // "object" ❌
```

📘 **Note**:
`typeof` দিয়ে চেক করলে এটা "object" দেখাবে কারণ array JavaScript-এ object এর subtype।

---

#### 📌 Summary:

| Method                   | ফলাফল       | ব্যাখ্যা                           |
| ------------------------ | ----------- | ---------------------------------- |
| `Array.isArray(value)`   | ✅ সঠিক      | এটি সবসময় নির্ভুল ফলাফল দেয়        |
| `value instanceof Array` | ✅ মাঝে মাঝে | কিছু edge case-এ কাজ নাও করতে পারে |
| `typeof value`           | ❌ object    | array আলাদা ভাবে চিনতে পারে না     |

---


## ✅ Array Destructuring in JavaScript

### 🟢 Basic Syntax:

```js
const arr = [10, 20, 30];
const [a, b, c] = arr;
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```

📘 আমরা array এর ভেতরের value গুলোকে একসাথে আলাদা আলাদা variable-এ assign করতে পারি।

---

### 1️⃣ **How to Assign a Default Value to a Variable?**

```js
const arr = [5];
const [a = 1, b = 2] = arr;

console.log(a); // 5 (because it's in array)
console.log(b); // 2 (default value used)
```

📘 যদি array-তে কোনো ভ্যালু না থাকে, তাহলে আমরা `=` দিয়ে default value দিতে পারি।

---

### 2️⃣ **How to Skip a Value in an Array?**

```js
const arr = ["apple", "banana", "mango"];
const [first, , third] = arr;

console.log(first); // "apple"
console.log(third); // "mango"
```

📘 যদি কোনো ভ্যালু নিতে না চাই, তাহলে সেই জায়গায় `,` দিয়ে skip করে যেতে পারি।

---

### 3️⃣ **Nested Array Destructuring in JS**

```js
let fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
```
এখানে fruits array-এর মধ্যে ৫টি আইটেম আছে।
> শেষেরটি হলো একটি nested array: ['🍅', '🍄', '🥕'].

📘 যদি array-এর ভিতরে আবার nested array থাকে, তাহলে destructuring-এর ভেতরেই আরেকটা destructuring করতে হয়।

**Accessing Nested Value (Traditional Way):**

```
const veg = fruits[4];     // veg = ['🍅', '🍄', '🥕']
const carrot = veg[2];     // carrot = '🥕'
```

**অথবা এক লাইনে:**
```
fruits[4][2]; // '🥕'
```
**Nested Destructuring Version:**

```
let [,,,,[,,carrot]] = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
console.log(carrot); // '🥕'
```

Explanation:

* প্রথম ৪টা ভ্যালু skip করেছো: '🍈', '🍍', '🍌', '🍉'

* তারপর destructure করছো ৫ম আইটেম (যেটা একটি array): ['🍅', '🍄', '🥕']

* সেখানে প্রথম দুটো skip করে নিয়েছো তৃতীয় ভ্যালু carrot = '🥕'
---



## How to Use the Rest Parameter in JS?
---

**What is the Rest Parameter?**

The rest parameter syntax:
```
function myFunc(...rest) {}
```
* It uses ... to group the remaining arguments into a single array.


```
const [tomato, mashroom, ...rest] =  ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
console.log(rest);
```
Output : ['🥦', '🥒', '🌽', '🥕', '🥑']

প্রথম দুইটা আইটেম tomato আর mashroom নামে নিছে, আর বাকি সবগুলো rest নামে একটা নতুন array তে রাখা হয়েছে।

✅ Rest parameter always collects the remaining values (must be the last in destructuring).

---

## How to Use the Spread Operator in JS?
---

```
const arr = [1, 2, 3];
console.log(...arr); // 1 2 3
```
**... ব্যবহার করে array বা object এর ভিতরের মানগুলোকে "ভেঙে" ফেলা হয়।**

#### Use Case Spread in Arrays (Copy, Combine)

##### Copy an Array
```
const mySalad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const mySaaladCopy = [...mySalad];

console.log(mySaaladCopy); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]
```
- ...mySalad দিয়ে মূল array এর সব উপাদান নতুন একটা array তে কপি করা হয়েছে।
এখন mySaaladCopy আর mySalad একে অপরের উপর নির্ভরশীল নয়।
```
mySalad === mySaaladCopy; // false
```
---
##### merging arrays using the spread operator
**Merge Two Arrays**
```
const fruits = ['🍎', '🍌', '🍊'];
const vegetables = ['🥕', '🥦', '🌽'];

const salad = [...fruits, ...vegetables];

console.log(salad);
// Output: ['🍎', '🍌', '🍊', '🥕', '🥦', '🌽']
```
- ...fruits এবং ...vegetables দিয়ে দুইটা array-এর সব উপাদান ভেঙে একত্রে একটা নতুন array salad তৈরি করা হয়েছে।
- এইভাবে আমরা দুইটা বা আরও বেশি array merge করতে পারি।

**Merge with Additional Items**
```
const mix = ['🥗', ...fruits, '🧀', ...vegetables, '🍞'];
console.log(mix);
// Output: ['🥗', '🍎', '🍌', '🍊', '🧀', '🥕', '🥦', '🌽', '🍞']
```
- Extra elements ('🥗', '🧀', '🍞') can also be added in between.

---
##  Destructuring Use Cases in JavaScript
### ✅ How to Swap Values with Destructuring?

যদি দুইটি মান একে অপরের সাথে বদলাতে চাই, তাহলে destructuring দিয়ে করা যাবে খুব সহজেই:
```
let first = '😔';
let second = '🙂';

// Swap using destructuring
[first, second] = [second, first];

console.log(first);  // '🙂'
console.log(second); // '😔'
```
- প্রথমে ছিল:
first = '😔', second = '🙂'
- তারপর [first, second] = [second, first] এই লাইনে
দুইটা মান একে অপরের সাথে বদলানো হয়েছে।

💡 এটা হলো এক লাইনেই মান swap করার সবচেয়ে সহজ এবং readable উপায়।



### ✅ How to Merge Arrays?
**1. Using Spread Operator**

**Merge Two Arrays**
```
const fruits = ['🍎', '🍌', '🍊'];
const vegetables = ['🥕', '🥦', '🌽'];

const salad = [...fruits, ...vegetables];

console.log(salad);
// Output: ['🍎', '🍌', '🍊', '🥕', '🥦', '🌽']
```
- ...fruits এবং ...vegetables দিয়ে দুইটা array-এর সব উপাদান ভেঙে একত্রে একটা নতুন array salad তৈরি করা হয়েছে।
- এইভাবে আমরা দুইটা বা আরও বেশি array merge করতে পারি।

**Merge with Additional Items**
```
const mix = ['🥗', ...fruits, '🧀', ...vegetables, '🍞'];
console.log(mix);
// Output: ['🥗', '🍎', '🍌', '🍊', '🧀', '🥕', '🥦', '🌽', '🍞']
```
- Extra elements ('🥗', '🧀', '🍞') can also be added in between.

---

## ✅ What is the .length Property?

In JavaScript, the .length property of an array returns the number of elements in that array.

Example:
```
const fruits = ['🍎', '🍌', '🍇', '🥭'];

console.log(fruits.length); // 4
```
- fruits.length মানে fruits নামের array-তে কতটি উপাদান আছে সেটা জানায়। উপরের কোডে ৪টি ফল থাকায় 4 দেখাবে।

        const arr1 = [11, 21, 73];
        console.log(arr1.length); // 3

- এই array-তে ৩টি সংখ্যা আছে → তাই arr1.length === 3

        const arr2 = new Array(7);
        console.log(arr2.length); // 7

- এটি ৭টি empty slots সহ একটা array তৈরি করেছে।

Changing .length manually:

        arr1.length = 9;
        console.log(arr1);

- এটি arr1 এর length বাড়িয়ে ৯ করে দিলো।
- এতে নতুন ৬টি empty/undefined slot যোগ হয়।
- Now arr1 becomes:

      [11, 21, 73, <6 empty items>]




**✅ Use Cases**
- 1️⃣ Check if an Array is Empty

        const list = [];

        if (list.length === 0) {
          console.log("Array is empty");
        }

- 2️⃣ Get the Last Item of an Array

        const items = ['🍕', '🍔', '🍟'];

        const lastItem = items[items.length - 1];
        console.log(lastItem); // 🍟


শেষ উপাদান পেতে array.length - 1 index ব্যবহার করো।

- ✅ Also Works on Strings

        const word = "JavaScript";
        console.log(word.length); // 10

length দিয়ে string-এ কতটি character আছে সেটাও জানা যায়।


