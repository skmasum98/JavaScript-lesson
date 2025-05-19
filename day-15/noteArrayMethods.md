# ✅ What is JavaScript Array Methods?
---

JavaScript Array Methods হলো এমন কিছু built-in (built-in = ভিতরে থাকা) ফাংশন, যেগুলোর সাহায্যে আমরা JavaScript এর array গুলোকে modify, search, add/remove, loop, transform করতে পারি — খুব সহজভাবে।

- Array Methods হচ্ছে array-এর উপরে কাজ করার জন্য কিছু প্যাকেজ করা টুল।
- এগুলো ব্যবহার করে array এর ভিতরে থাকা data কে খুব সহজেই manage করতে পারি।

ধরি, তোমার একটা array আছে:

```
let fruits = ['🍎', '🍌', '🍇'];
```
এখন তুমি যদি এই array-তে নতুন কিছু যোগ, সরাও, sort করো, বা সবগুলোকে একসাথে loop করো — তাহলে তুমি array method ব্যবহার করবে।


সবচেয়ে জনপ্রিয় JavaScript Array Methods গুলো:
---

| Method Name   | কাজ কী করে?                                       |
| ------------- | ------------------------------------------------- |
| `.push()`     | array-এর শেষে উপাদান যোগ করে                      |
| `.pop()`      | array-এর শেষ উপাদান সরিয়ে ফেলে                    |
| `.unshift()`  | শুরুতে উপাদান যোগ করে                             |
| `.shift()`    | শুরু থেকে উপাদান সরিয়ে দেয়                        |
| `.map()`      | প্রতিটি উপাদান পরিবর্তন করে নতুন array দেয়        |
| `.filter()`   | শর্ত অনুযায়ী কিছু উপাদান রেখে নতুন array তৈরি করে |
| `.reduce()`   | সব উপাদানকে একটি মানে রূপান্তর করে                |
| `.forEach()`  | প্রতিটি উপাদানের ওপর কাজ করে                      |
| `.includes()` | কোনো উপাদান আছে কিনা জানায়                        |
| `.indexOf()`  | উপাদানের অবস্থান (index) জানায়                    |
| `.join()`     | array কে string এ রূপান্তর করে                    |
| `.sort()`     | উপাদান গুলোকে সাজায়                               |
| `.reverse()`  | উপাদান গুলোকে উল্টে দেয়                           |


---

## 🔰 1. How to **Create** an Array in JavaScript

### ✅ Syntax:

```js
let myArray = [1, 2, 3, 4];
```

### ✅ উদাহরণ:

```js
let fruits = ['🍎', '🍌', '🍇'];
let numbers = new Array(10, 20, 30);
```

---

## 🔰 2. How to **Access** Elements from an Array

### ✅ Syntax:

```js
array[index]
```

### ✅ উদাহরণ:

```js
let fruits = ['🍎', '🍌', '🍇'];
console.log(fruits[0]); // 🍎
console.log(fruits[2]); // 🍇
```

---

## 🔰 3. How to **Update** Elements in an Array

### ✅ Syntax:

```js
array[index] = newValue;
```

### ✅ উদাহরণ:

```js
let fruits = ['🍎', '🍌', '🍇'];
fruits[1] = '🥭'; // ২য় item আপডেট করলাম
console.log(fruits); // ['🍎', '🥭', '🍇']
```

---

## 🔰 4. How to **Remove** Elements from an Array

### ✅ কিছু গুরুত্বপূর্ণ Remove Methods:

| Method      | কাজ                          |
| ----------- | ---------------------------- |
| `.pop()`    | শেষ থেকে সরায়                |
| `.shift()`  | শুরু থেকে সরায়               |
| `.splice()` | যেকোনো জায়গা থেকে সরাতে পারে |

### ✅ উদাহরণ:

```js
let fruits = ['🍎', '🍌', '🍇'];

// pop (শেষ থেকে)
fruits.pop(); // ['🍎', '🍌']

// shift (শুরু থেকে)
fruits.shift(); // ['🍌']

// splice (মাঝখান থেকে)
let numbers = [10, 20, 30, 40];
numbers.splice(1, 2); // index 1 থেকে ২টা সরায়
console.log(numbers); // [10, 40]
```

---

 ✅ Summary:

| কাজ       | কোড                                        |
| --------- | ------------------------------------------ |
| তৈরি      | `let arr = [1, 2, 3]`                      |
| দেখানো    | `arr[0]` → প্রথম উপাদান                    |
| আপডেট     | `arr[1] = 50`                              |
| মুছে ফেলা | `arr.pop()`, `arr.shift()`, `arr.splice()` |

---


## 🔰 What is `concat()`?

`concat()` method ব্যবহার করে তুমি **এক বা একাধিক array বা value-কে মিলে নতুন একটা array** তৈরি করতে পারো।

> 📌 এটা **পুরনো array পরিবর্তন করে না**, বরং **নতুন একটি array** রিটার্ন করে।

---

### ✅ Syntax:

```js
let newArray = array1.concat(array2, array3, ...);
```

---

### 🧠 উদাহরণ ১: দুইটা array মিলে ফেলা

```js
let fruits = ['🍎', '🍌'];
let veggies = ['🥕', '🥒'];

let food = fruits.concat(veggies);

console.log(food); // ['🍎', '🍌', '🥕', '🥒']
```

---

### 🧠 উদাহরণ ২: একাধিক array যোগ করা

```js
let a = [1, 2];
let b = [3, 4];
let c = [5, 6];

let all = a.concat(b, c);
console.log(all); // [1, 2, 3, 4, 5, 6]
```

---

### 🧠 উদাহরণ ৩: array + value যোগ করা

```js
let numbers = [1, 2, 3];
let updated = numbers.concat(4, 5, 6);

console.log(updated); // [1, 2, 3, 4, 5, 6]
```

---

 ✅ Summary:

| কাজ                         | কোড                              |
| --------------------------- | -------------------------------- |
| দুইটা array মিলাও           | `arr1.concat(arr2)`              |
| একাধিক array/ভ্যালু মিলাও   | `arr1.concat(arr2, arr3, value)` |
| পুরনো array পরিবর্তন হয় কি? | ❌ না, নতুন array দেয়             |

---


## 🔰 What is `join()`?

`join()` method দিয়ে তুমি **array-এর সব elements-কে একটি string-এ রূপান্তর করতে পারো**, যেটার মধ্যে **separator (বিভাজক)** দিতে পারো যেমন `,` বা `-` বা `❤️`।

> 📌 এটি একটি **string রিটার্ন** করে।
> 📌 পুরনো array **পরিবর্তন করে না**।

---

### ✅ Syntax:

```js
array.join(separator)
```

* `separator` = কিসের মাধ্যমে array items গুলো আলাদা হবে। (default: `,`)

---

### 🧠 উদাহরণ ১: সাধারণ join

```js
let fruits = ['🍎', '🍌', '🍇'];
let result = fruits.join();

console.log(result); // "🍎,🍌,🍇"
```

---

### 🧠 উদাহরণ ২: কাস্টম separator দিয়ে join

```js
let items = ['🥗', '🍞', '🥩'];
let recipe = items.join(' + ');

console.log(recipe); // "🥗 + 🍞 + 🥩"
```

---

### 🧠 উদাহরণ ৩: emoji দিয়ে join

```js
let emojis = ['❤️', '😊', '🔥'];
let combo = emojis.join('✨');

console.log(combo); // "❤️✨😊✨🔥"
```

---

- Summary:

| কাজ                         | কোড                           |
| --------------------------- | ----------------------------- |
| Array → String              | `arr.join()`                  |
| কাস্টম separator দিয়ে মিলাও | `arr.join('-')`               |
| পুরনো array পরিবর্তন হয়?    | ❌ না, নতুন string রিটার্ন করে |

---

## 🔰 What is `fill()`?

`fill()` method দিয়ে তুমি একটি array-এর **সব বা নির্দিষ্ট কিছু জায়গা একই মান দিয়ে পূরণ (fill) করতে পারো**।

> 📌 এটি **পুরনো array পরিবর্তন করে**।
> 📌 এটি **একই array রিটার্ন করে**।

---

### ✅ Syntax:

```js
array.fill(value, start, end)
```

* `value` → যেই মান দিয়ে array পূরণ হবে
* `start` → কোন index থেকে শুরু করবে (default: 0)
* `end` → কোন index পর্যন্ত পূরণ করবে (default: array.length)

---

### 🧠 উদাহরণ ১: পুরো array ফিল করো

```js
let arr = [1, 2, 3, 4];
arr.fill(0);

console.log(arr); // [0, 0, 0, 0]
```

---

### 🧠 উদাহরণ ২: কিছু অংশ ফিল করো

```js
let arr = [1, 2, 3, 4, 5];
arr.fill(9, 1, 4); // index 1 to 3

console.log(arr); // [1, 9, 9, 9, 5]
```

---

### 🧠 উদাহরণ ৩: শুধু শেষ অংশ ফিল করো

```js
let numbers = [5, 6, 7, 8];
numbers.fill(0, 2); // index 2 থেকে শুরু

console.log(numbers); // [5, 6, 0, 0]
```

---

### ✅ Summary:

| কাজ                       | কোড                 |
| ------------------------- | ------------------- |
| পুরো array ফিল করো        | `arr.fill(0)`       |
| নির্দিষ্ট index থেকে শুরু | `arr.fill(9, 1)`    |
| শুরু আর শেষ index দিলে    | `arr.fill(7, 1, 3)` |
| পুরনো array পরিবর্তন হয়?  | ✅ হ্যাঁ             |

---

📌 **Use Case Example:**

```js
let emptyArr = new Array(5).fill('🎁');
console.log(emptyArr); // ['🎁', '🎁', '🎁', '🎁', '🎁']
```


## 🔰 What is `includes()`?

`includes()` method দিয়ে তুমি **চেক করতে পারো** কোনো নির্দিষ্ট **value একটা array-তে আছে কিনা**।

> 📌 এটি **Boolean (true/false)** রিটার্ন করে।
> 📌 Array-এর মধ্যে **element আছে কিনা** তা যাচাই করতে খুবই কাজের।

---

### ✅ Syntax:

```js
array.includes(valueToFind, startIndex)
```

* `valueToFind`: যেই মানটি খুঁজবে।
* `startIndex`: কোথা থেকে খোঁজা শুরু করবে (default: 0)।

---

### 🧠 উদাহরণ ১: সাধারণভাবে খোঁজা

```js
let fruits = ['🍎', '🍌', '🍇'];

console.log(fruits.includes('🍌')); // true
console.log(fruits.includes('🥭')); // false
```

---

### 🧠 উদাহরণ ২: শুরু index দিয়ে খোঁজা

```js
let numbers = [1, 2, 3, 2, 5];

console.log(numbers.includes(2));       // true
console.log(numbers.includes(2, 3));    // true (index 3-এ 2 আছে)
console.log(numbers.includes(2, 4));    // false
```

---

### ✅  Summary:

| কাজ                           | কোড                     |
| ----------------------------- | ----------------------- |
| array-এ item আছে কিনা চেক করা | `arr.includes('🍌')`    |
| নির্দিষ্ট index থেকে খোঁজা    | `arr.includes('🍌', 2)` |
| রিটার্ন করে কি?               | ✅ true / ❌ false        |

---

### ⚠️ Notice:

```js
let mixed = [1, 2, '3'];

console.log(mixed.includes(3));   // false (number !== string)
console.log(mixed.includes('3')); // true
```

---

📌 **Use Case:**

* **Validation** করতে — কোনো item allow বা block করা হবে কিনা।
* খোঁজার সময় `includes()` অনেক বেশি readable ও সহজ।

---


## 🔰 What is `indexOf()`?
---

`indexOf()` method দিয়ে **একটা নির্দিষ্ট মান কোন index-এ আছে তা জানতে পারি**।

> 🔍 এটি প্রথম যেইবার ওই মানটা array-তে পাওয়া যায়, সেই index রিটার্ন করে।
> ❌ যদি না পায়, তাহলে `-1` রিটার্ন করে।

---

### ✅ Syntax:

```js
array.indexOf(searchElement, fromIndex)
```

* `searchElement`: যেই মানটি খুঁজছো
* `fromIndex`: কোন index থেকে খোঁজা শুরু করবে (default: 0)

---

### 🧠 উদাহরণ ১: সাধারণ খোঁজা

```js
let fruits = ['🍎', '🍌', '🍇', '🍌'];

console.log(fruits.indexOf('🍌')); // 1 ( প্রথমবার পাওয়া যায় index 1-এ )
console.log(fruits.indexOf('🍇')); // 2
console.log(fruits.indexOf('🥭')); // -1
```

---

### 🧠 উদাহরণ ২: শুরু index দিয়ে খোঁজা

```js
let nums = [1, 2, 3, 2, 5];

console.log(nums.indexOf(2));      // 1
console.log(nums.indexOf(2, 2));   // 3 (index 2 থেকে খোঁজা শুরু)
```

---

### ✅ Summary:

| কাজ                          | কোড                    |
| ---------------------------- | ---------------------- |
| item-এর প্রথম index খুঁজে    | `arr.indexOf('🍌')`    |
| নির্দিষ্ট index থেকে খোঁজা   | `arr.indexOf('🍌', 2)` |
| না পেলে কি রিটার্ন করে?      | `-1`                   |
| শুধু প্রথম match রিটার্ন করে | ✅ হ্যাঁ                |

---

### ⚠️ Notice:

```js
let mixed = [1, 2, '3'];

console.log(mixed.indexOf(3));   // -1 (number !== string)
console.log(mixed.indexOf('3')); // 2
```

---

📌 **Use Case Example:**

```js
let names = ['Masum', 'Rafi', 'Nila'];
if (names.indexOf('Rafi') !== -1) {
  console.log('Rafi found!');
}
```


## 🔰 What is `reverse()`?

`reverse()` method দিয়ে তুমি **একটি array-কে উল্টো করে ফেলতে পারো**, অর্থাৎ **শেষের element শুরুতে, আর শুরুরটা শেষে** চলে আসে।

> ⚠️ এটি **original array-টাকেই পরিবর্তন করে (mutate)**।

---

### ✅ Syntax:

```js
array.reverse()
```

* কোনো parameter লাগে না।
* return করে modified (reversed) array।

---

### 🧠 উদাহরণ ১: সাধারণ reverse

```js
let fruits = ['🍎', '🍌', '🍇'];

fruits.reverse();

console.log(fruits); // ['🍇', '🍌', '🍎']
```

---

### 🧠 উদাহরণ ২: সংখ্যার ক্ষেত্রে

```js
let numbers = [1, 2, 3, 4, 5];

numbers.reverse();

console.log(numbers); // [5, 4, 3, 2, 1]
```

---

### ❗️Warning: It changes the original array

```js
let original = ['a', 'b', 'c'];
let reversed = original.reverse();

console.log(original); // ['c', 'b', 'a']
console.log(reversed); // ['c', 'b', 'a']  (same array)
```

---

### ✅ Original না পাল্টে Reverse দেখতে চাইলে:

```js
let letters = ['x', 'y', 'z'];
let reversed = [...letters].reverse(); // Spread করে কপি করো

console.log(letters);  // ['x', 'y', 'z']
console.log(reversed); // ['z', 'y', 'x']
```

---

### ✅ Summary:

| কাজ                        | কোড                             |
| -------------------------- | ------------------------------- |
| array কে উল্টো করা         | `arr.reverse()`                 |
| original array পাল্টে যায়? | ✅ হ্যাঁ (mutates)               |
| নতুন কপি উল্টো করতে চাই    | `let copy = [...arr].reverse()` |

---

📌 **Use Case:**

* Array-এর উল্টো অর্ডারে লুপ চালানো।
* Stack / undo feature বানাতে।

---

## 🔰 What is `sort()`?
---

`sort()` method দিয়ে তুমি **একটি array-এর elements কে নির্দিষ্ট ক্রমে সাজাতে পারো** — সাধারণত **ascending order** এ।

> ⚠️ এটি **original array-টাকেই পরিবর্তন করে (mutate)**।

---

### ✅ Syntax:

```js
array.sort(compareFunction)
```

* `compareFunction` না দিলে → elements গুলিকে **string হিসেবে alphabetically** sort করে।
* `compareFunction` দিলে → তুমি নিজের মতো করে sort-এর rule বানাতে পারো।

---

#### 🧠 উদাহরণ ১: Alphabetical (default)

```js
let fruits = ['banana', 'apple', 'cherry'];

fruits.sort();

console.log(fruits); // ['apple', 'banana', 'cherry']
```

---

#### ❗️ উদাহরণ ২: Number sort (সমস্যা আছে)

```js
let numbers = [100, 25, 3, 50];

numbers.sort();

console.log(numbers); // [100, 25, 3, 50] ❌ ভুল! (string হিসেবে sort করেছে)
```

---

#### ✅ সঠিকভাবে সংখ্যাকে sort করতে (ascending):

```js
let numbers = [100, 25, 3, 50];

numbers.sort((a, b) => a - b);

console.log(numbers); // [3, 25, 50, 100]
```

---

### 🔄 Descending order (descending):

```js
let numbers = [100, 25, 3, 50];

numbers.sort((a, b) => b - a);

console.log(numbers); // [100, 50, 25, 3]
```

---

### 🔠 অক্ষর অনুযায়ী sort (case sensitive):

```js
let names = ['masum', 'Rafi', 'nayeem', 'Anika'];

names.sort();

console.log(names); // ['Anika', 'Rafi', 'masum', 'nayeem'] (A → Z)
```

---

### 🧪 Complex: Object array sort

```js
let users = [
  { name: 'Masum', age: 22 },
  { name: 'Rafi', age: 18 },
  { name: 'Nayeem', age: 25 }
];

users.sort((a, b) => a.age - b.age);

console.log(users);
// [
//   { name: 'Rafi', age: 18 },
//   { name: 'Masum', age: 22 },
//   { name: 'Nayeem', age: 25 }
// ]
```

---

### ✅ Summary:

| কাজ                         | কোড                         |
| --------------------------- | --------------------------- |
| Alphabetical sort           | `arr.sort()`                |
| সংখ্যাকে ascending order এ  | `arr.sort((a, b) => a - b)` |
| descending order            | `arr.sort((a, b) => b - a)` |
| objects sort (by age/name)  | custom compare function     |
| original array পরিবর্তন হয়? | ✅ হ্যাঁ                     |

---

📌 **Use Case:**

* Name, number, price, score লিস্ট sort করা
* Leaderboard তৈরি
* Filter ও Search এর আগে sort দেখানো

---


## 🔰 What is `splice()`?

✅ **`splice()` method in JavaScript** — array থেকে item **remove, add, replace** করার জন্য সবচেয়ে powerful method।

🔧 `splice()` দিয়ে তুমি array-এর মধ্যে থেকে elements:

* ✅ **remove** করতে পারো
* ✅ **add** করতে পারো
* ✅ ✅ **replace** করতে পারো

> ⚠️ এটি মূল array-টাকেই **পরিবর্তন করে (mutate)**।

---

### ✅ Syntax:

```js
array.splice(startIndex, deleteCount, item1, item2, ...)
```

* `startIndex`: কোথা থেকে শুরু করবে
* `deleteCount`: কতগুলো element মুছে ফেলবে
* `item1, item2`: নতুন item যোগ করতে চাইলে

---

### ✅ ১. Remove elements

```js
let fruits = ['🍌', '🍎', '🍉', '🍇'];

fruits.splice(1, 2); // index 1 থেকে ২টা item remove

console.log(fruits); // ['🍌', '🍇']
```

> ✂️ `🍎` এবং `🍉` মুছে গেছে

---

### ✅ ২. Add elements

```js
let veggies = ['🥦', '🥕'];

veggies.splice(1, 0, '🌽', '🍆'); // index 1 এ কিছু delete না করে add করো

console.log(veggies); // ['🥦', '🌽', '🍆', '🥕']
```

> ➕ নতুন item ঢুকেছে মাঝখানে

---

### ✅ ৩. Replace elements

```js
let foods = ['🍔', '🍕', '🍟'];

foods.splice(1, 1, '🌮'); // index 1 থেকে ১টা item replace করো

console.log(foods); // ['🍔', '🌮', '🍟']
```

> 🔄 `🍕` replace হয়ে গেছে `🌮` দিয়ে

---

### ✅ ৪. Get deleted items

```js
let drinks = ['🍵', '🥤', '🧃'];

let removed = drinks.splice(1, 2);

console.log(drinks);  // ['🍵']
console.log(removed); // ['🥤', '🧃']
```

> 🧪 return করে delete হওয়া items এর array

---

### 🔁 Summary Table:

| কাজ           | কোড উদাহরণ                              |
| ------------- | --------------------------------------- |
| Remove        | `arr.splice(2, 1)`                      |
| Add           | `arr.splice(2, 0, '🥑')`                |
| Replace       | `arr.splice(1, 1, '🍣')`                |
| Deleted item  | `let x = arr.splice(0, 2)` (return করে) |
| Array mutate? | ✅ হ্যাঁ                                 |

---

📌 **Real use cases:**

* Array থেকে item delete বা update করা
* UI list update করা (e.g., remove user/comment)
* Cart থেকে item remove বা update

---

## ✅ What is `at()`?
---

👉 `at()` method দিয়ে তুমি array বা string থেকে **নির্দিষ্ট index** এর value নিতে পারো।
🔁 এটাতে **positive এবং negative** index দুইটাই কাজ করে।

---

### ✅ Syntax:

```js
array.at(index)
```

---

### ✅ Example 1: Positive Index

```js
const fruits = ['🍎', '🍌', '🍉', '🍇'];

console.log(fruits.at(1)); // '🍌'
```

> ⚡ index 1 মানে দ্বিতীয় item: '🍌'

---

### ✅ Example 2: Negative Index

```js
const fruits = ['🍎', '🍌', '🍉', '🍇'];

console.log(fruits.at(-1)); // '🍇' (last item)
console.log(fruits.at(-2)); // '🍉'
```

> 🧲 Negative index দিয়ে পেছন থেকে ধরতে পারো
> 🧠 `-1` মানে: last element

---

### ✅ VS Traditional Way

```js
let arr = [10, 20, 30];

console.log(arr[arr.length - 1]); // old way
console.log(arr.at(-1));          // modern way ✅
```

---

### ✅ Works on Strings Too

```js
let word = "Masum";

console.log(word.at(0));   // 'M'
console.log(word.at(-1));  // 'm'
```

---

### 🔁 Summary Table:

| কাজ               | কোড উদাহরণ             |
| ----------------- | ---------------------- |
| 1st item          | `arr.at(0)`            |
| Last item         | `arr.at(-1)`           |
| 2nd last item     | `arr.at(-2)`           |
| String support    | ✅ হ্যাঁ                |
| Array mutate করে? | ❌ না (non-destructive) |

---

📌 **Use case:**

* কোনো array-এর শেষ element পেতে
* Destructuring ছাড়াই নির্দিষ্ট element access করতে
* Safe access with negative index


---

## ✅ What is `copyWithin()`?

---

👉 `copyWithin()` method দিয়ে তুমি **একই array-এর ভিতরে** কিছু elements **কপি করে অন্য জায়গায় বসাতে পারো**, **original array-তেই**।

> ⚠️ এটি **mutable** — অর্থাৎ original array পরিবর্তন করে ফেলে।

---

### ✅ Syntax:

```js
arr.copyWithin(target, start, end)
```

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| `target`  | কোথা থেকে replace শুরু হবে                     |
| `start`   | কোন index থেকে কপি শুরু হবে                    |
| `end`     | কোন index পর্যন্ত কপি করবে (but not including) |

---

### ✅ Example 1: Basic Copy

```js
let fruits = ['🍎', '🍌', '🍇', '🍉', '🍍'];

fruits.copyWithin(1, 3); // index 3 থেকে শুরু করে, index 1 থেকে বসাবে

console.log(fruits); // ['🍎', '🍉', '🍍', '🍉', '🍍']
```

> `🍉`, `🍍` → কপি করে index 1 থেকে বসানো হয়েছে।

---

### ✅ Example 2: With Start and End

```js
let veggies = ['🥕', '🌽', '🥒', '🍅', '🍄'];

veggies.copyWithin(0, 2, 4);

console.log(veggies); // ['🥒', '🍅', '🥒', '🍅', '🍄']
```

> index 2 থেকে 4 পর্যন্ত কপি করে index 0 থেকে বসানো হয়েছে।

---

### ✅ Example 3: Negative Index Support

```js
let items = [1, 2, 3, 4, 5, 6];

items.copyWithin(-4, -2); // last 2 → replace from index -4

console.log(items); // [1, 2, 5, 6, 5, 6]
```

---

### ✅ Summary Table:

| কাজ                         | কোড উদাহরণ                |
| --------------------------- | ------------------------- |
| Copy from index 2 to 4      | `arr.copyWithin(0, 2, 4)` |
| শুধু start থেকে শেষ পর্যন্ত | `arr.copyWithin(1, 3)`    |
| Negative index use          | `arr.copyWithin(-4, -2)`  |
| Array mutate করে?           | ✅ হ্যাঁ                   |

---

📌 **Real Use Case:**

* Repeating part of an array without loops
* Performance-sensitive in-place data change

---


## ✅ What is `flat()`?

---

`flat()` method দিয়ে তুমি **nested arrays (ভিতরের ভিতরে array)** কে **একটা flat/single level array-তে** রূপান্তর করতে পারো।

---

### ✅ Syntax:

```js
array.flat(depth)
```

| Parameter | Description                                  |
| --------- | -------------------------------------------- |
| `depth`   | কতটা গভীর পর্যন্ত flatten করবে (default = 1) |

---

## ✅ Example 1: Default (1 Level) Flatten

```js
const fruits = ['🍎', ['🍌', '🍇'], '🍉'];

const flatFruits = fruits.flat();

console.log(flatFruits); // ['🍎', '🍌', '🍇', '🍉']
```

---

### ✅ Example 2: Multiple Levels Flatten

```js
const deepArray = [1, 2, [3, 4, [5, 6, [7]]]];

const flat1 = deepArray.flat(1); // One level
const flat2 = deepArray.flat(2); // Two levels
const flatInfinity = deepArray.flat(Infinity); // Fully flat

console.log(flat1);        // [1, 2, 3, 4, [5, 6, [7]]]
console.log(flat2);        // [1, 2, 3, 4, 5, 6, [7]]
console.log(flatInfinity); // [1, 2, 3, 4, 5, 6, 7]
```

---

### ✅ Example 3: Removing Empty Slots

```js
const weirdArray = [1, , 2, [3, , 4]];

console.log(weirdArray.flat()); // [1, 2, 3, 4]
```

`flat()` automatically removes **empty slots** (`holes`) from the array too!

---

### ✅ Summary Table:

| কাজ                         | কোড উদাহরণ           |
| --------------------------- | -------------------- |
| ১ লেভেল ফ্ল্যাটেন           | `arr.flat()`         |
| ২ বা আরও গভীর flatten       | `arr.flat(2)`        |
| সব লেভেল একসাথে             | `arr.flat(Infinity)` |
| খালি জায়গা remove করে?      | ✅ হ্যাঁ              |
| Original array পরিবর্তন হয়? | ❌ না, নতুন array দেয় |

---

📌 **Real Use Case:**

* API response এ nested data → flat list বানানো
* `map().flat()` করে চেইনিং করা (যেমন `flatMap()`)

---


## 🔹 কি বুঝায় "Grouping Elements"?

"Grouping elements" মানে হলো একটার মতো মানগুলোকে **একসাথে একটি group বা object** আকারে সাজানো। এটি সাধারণত `reduce()` বা `Array.prototype.group()` (ES2023) দিয়ে করা হয়।

---

### ✅ 1. Grouping using `reduce()`:

```js
const fruits = ['🍎', '🍌', '🍎', '🍇', '🍌', '🍇', '🍇'];

const grouped = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(grouped);
// Output: { '🍎': 2, '🍌': 2, '🍇': 3 }
```

🔍 ব্যাখ্যা:

* `reduce()` দিয়ে আমরা প্রতিটি item গুনে নিচ্ছি এবং একে object আকারে রাখছি।

---

### ✅ 2. Grouping using `Array.prototype.group()` (ES2023+)

```js
const users = [
  { name: "Ali", age: 20 },
  { name: "Raju", age: 21 },
  { name: "Nila", age: 20 },
  { name: "Tuhin", age: 22 },
];

const groupedByAge = users.group(user => user.age);

console.log(groupedByAge);

/*
{
  20: [
    { name: "Ali", age: 20 },
    { name: "Nila", age: 20 }
  ],
  21: [{ name: "Raju", age: 21 }],
  22: [{ name: "Tuhin", age: 22 }]
}
*/
```

🔔 Note: `group()` method শুধু **modern browsers/Node.js (v20+)** এ কাজ করে।

---

### ✅ 3. Manual Grouping by Property (No `reduce`)

```js
const data = ['🍎', '🍌', '🍎', '🍇', '🍌'];

const groups = {};

for (let fruit of data) {
  if (!groups[fruit]) {
    groups[fruit] = [];
  }
  groups[fruit].push(fruit);
}

console.log(groups);
// Output: { '🍎': ['🍎', '🍎'], '🍌': ['🍌', '🍌'], '🍇': ['🍇'] }
```

---

### ✅ Summary Table:

| কাজ                               | পদ্ধতি             |
| --------------------------------- | ------------------ |
| ভ্যালু গুনে গ্রুপ করা             | `reduce()`         |
| অবজেক্টের প্রপার্টি অনুযায়ী গ্রুপ | `group()` (ES2023) |
| ম্যানুয়ালি গ্রুপিং                | for-loop           |

---

## 🔷 Static Array Methods মানে কী?


✅ **Static Array Methods in JavaScript** — এই মেথডগুলো `Array` ক্লাসের সাথে সরাসরি কাজ করে, কোনো নির্দিষ্ট array instance এর সাথে না।

---

### ✅ 1. What is Array-like in JavaScript?

🔹 **Array-like objects** এমন জিনিস যা দেখতে array-এর মতো কিন্তু পুরোপুরি array না।

**উদাহরণ:**

```js
function showArgs() {
  console.log(arguments); // Array-like object
}

showArgs("🍎", "🍌", "🍇");
```

👉 `arguments`, `NodeList`, `HTMLCollection` এগুলো array-like — এদের মধ্যে `.length` থাকে, কিন্তু `map()` বা `forEach()` নেই।

---

### ✅ 2. `Array.from()` method

🔹 এটি **array-like** বা **iterable** জিনিসকে real array-তে রূপান্তর করে।

#### 📌 Syntax:

```js
Array.from(arrayLike [, mapFn])
```

#### ✅ Example:

```js
const name = "Masum";
const letters = Array.from(name);
console.log(letters); // ['M', 'a', 's', 'u', 'm']

const doubled = Array.from([1, 2, 3], x => x * 2);
console.log(doubled); // [2, 4, 6]
```

👉 Useful for: converting `NodeList`, `arguments`, or string to real array

---

### ✅ 3. `Array.fromAsync()` method *(ES2024)*

🔹 `Array.fromAsync()` হচ্ছে asynchronous version of `Array.from()` — এর মাধ্যমে async iterables বা promise values থেকে array তৈরি করা যায়।

#### ✅ Example:

```js
const getFruits = async () => {
  const fruits = await Array.fromAsync(['🍎', '🍌', '🍇'].values());
  console.log(fruits);
};

getFruits();
```

👉 Useful for: working with async data sources like streams or promises

---

### ✅ 4. `Array.of()` method

🔹 এটি multiple values থেকে একটা নতুন array তৈরি করে।

#### ✅ Example:

```js
const arr = Array.of(3);
console.log(arr); // [3]

const fruits = Array.of('🍎', '🍌', '🍇');
console.log(fruits); // ['🍎', '🍌', '🍇']
```

📌 `Array.of(3)` creates `[3]`
📌 `new Array(3)` creates empty array with length 3 → `[ <3 empty items> ]`

---

### 🔚 Summary Table:

| Static Method       | Description                                       |
| ------------------- | ------------------------------------------------- |
| `Array.from()`      | Converts array-like/iterable to real array        |
| `Array.fromAsync()` | Async version of `from()`                         |
| `Array.of()`        | Creates array from arguments                      |
| `Array-like`        | Objects with `length` but not full array features |

---




## ✅ **JavaScript Array Iterator Methods** 
---

— এই মেথডগুলো array-এর উপর লুপ চালিয়ে একাধিক কাজ সহজে করার জন্য ব্যবহার হয়।

---

### ✅ 1. `filter()`

🔹 শর্ত অনুযায়ী matching element-গুলা রিটার্ন করে (new array দেয়)।

```js
const fruits = ['🍎', '🍌', '🍇', '🥦'];
const longFruits = fruits.filter(fruit => fruit.length > 1);
console.log(longFruits);
```

---

### ✅ 2. `map()`

🔹 প্রত্যেক element কে modify করে নতুন array তৈরি করে।

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```

---

### ✅ 3. `reduce()`

🔹 সব element কে একত্রে reduce করে একটাই value তৈরি করে।

```js
const nums = [10, 20, 30];
const total = nums.reduce((acc, cur) => acc + cur, 0);
console.log(total); // 60
```

---

### ✅ 4. `reduceRight()`

🔹 ডান দিক থেকে শুরু করে reduce করে।

```js
const letters = ['a', 'b', 'c'];
const result = letters.reduceRight((acc, cur) => acc + cur);
console.log(result); // "cba"
```

---

### ✅ 5. `some()`

🔹 কোনো একটা element condition match করলে `true` দেয়।

```js
const hasEven = [1, 3, 4].some(num => num % 2 === 0);
console.log(hasEven); // true
```

---

### ✅ 6. `every()`

🔹 সবগুলো element condition match করলে `true` দেয়।

```js
const allPositive = [2, 4, 6].every(num => num > 0);
console.log(allPositive); // true
```

---

### ✅ 7. `find()`

🔹 প্রথম matching element return করে।

```js
const nums = [5, 7, 9, 10];
const found = nums.find(num => num > 8);
console.log(found); // 9
```

---

### ✅ 8. `findIndex()`

🔹 প্রথম matching element-এর index return করে।

```js
const index = nums.findIndex(num => num > 8);
console.log(index); // 2
```

---

### ✅ 9. `findLast()` *(ES2023)*

🔹 শেষের দিক থেকে শুরু করে প্রথম matching element return করে।

```js
const nums = [2, 4, 6, 7, 9];
console.log(nums.findLast(x => x % 2 !== 0)); // 9
```

---

### ✅ 10. `findLastIndex()` *(ES2023)*

🔹 শেষের দিক থেকে শুরু করে প্রথম matching index return করে।

```js
console.log(nums.findLastIndex(x => x % 2 !== 0)); // 4
```

---

### ✅ 11. Array Method Chaining

🔹 একাধিক method একসাথে use করা।

```js
const result = [1, 2, 3, 4, 5]
  .filter(x => x % 2 === 0)
  .map(x => x * 10);
console.log(result); // [20, 40]
```

---

### ✅ 12. `forEach()`

🔹 লুপের মতো কাজ করে, return দেয় না।

```js
['🍕', '🍔', '🍟'].forEach((item, index) => {
  console.log(`${index + 1}: ${item}`);
});
```

---

### ✅ 13. `entries()`

🔹 index এবং value pair দেয়।

```js
const list = ['a', 'b', 'c'];
for (let [index, value] of list.entries()) {
  console.log(index, value);
}
```

---

### ✅ 14. `values()`

🔹 শুধু values return করে (iterator আকারে)।

```js
const iter = ['x', 'y', 'z'].values();
console.log(iter.next().value); // x
```

---

### ✅ 15. `flatMap()`

🔹 map() + flat() একসাথে।

```js
const nums = [1, 2, 3];
const mapped = nums.flatMap(n => [n, n * 2]);
console.log(mapped); // [1, 2, 2, 4, 3, 6]
```

---


## **JavaScript-এর Immutability Array Methods** 

— যেগুলো মূল Array পরিবর্তন না করেই নতুন Array রিটার্ন করে।
👉 এগুলো হলো: `toReversed()`, `toSorted()`, `toSpliced()`, `with()`
📌 ইমিউটেবল মানে হলো: **original array অপরিবর্তিত থাকে**।

---

### ✅ 1. `toReversed()`

🔸 `.reverse()` এর মতো কিন্তু ইমিউটেবল (original array বদলায় না)।

```js
const nums = [1, 2, 3];
const reversed = nums.toReversed();

console.log(reversed); // [3, 2, 1]
console.log(nums);     // [1, 2, 3]
```

---

### ✅ 2. `toSorted()`

🔸 `.sort()` এর মতো কিন্তু original array বদলায় না।

```js
const letters = ['d', 'c', 'b'];
const sorted = letters.toSorted();

console.log(sorted);  // ['b', 'c', 'd']
console.log(letters); // ['d', 'c', 'b']
```

---

### ✅ 3. `toSpliced(start, deleteCount, ...items)`

🔸 `.splice()` এর মতো, কিন্তু original array অপরিবর্তিত থাকে।

```js
const fruits = ['🍎', '🍌', '🍇'];
const newFruits = fruits.toSpliced(1, 1, '🥭');

console.log(newFruits); // ['🍎', '🥭', '🍇']
console.log(fruits);    // ['🍎', '🍌', '🍇']
```

---

### ✅ 4. `with(index, value)`

🔸 নির্দিষ্ট index-এ নতুন মান বসিয়ে একটি নতুন array রিটার্ন করে।

```js
const veggies = ['🥕', '🥒', '🌽'];
const updated = veggies.with(1, '🍅');

console.log(updated); // ['🥕', '🍅', '🌽']
console.log(veggies); // ['🥕', '🥒', '🌽']
```

---

### ✅ Summary Table:

| Method         | Description                     | Mutates? |
| -------------- | ------------------------------- | -------- |
| `toReversed()` | Reverse without modifying array | ❌ No     |
| `toSorted()`   | Sort without modifying array    | ❌ No     |
| `toSpliced()`  | Splice-like but immutable       | ❌ No     |
| `with()`       | Change value at index immutably | ❌ No     |

---

✳️ Immutability ensures your **original data stays safe**, making debugging and tracking state easier — especially useful in frameworks like **React**.

---