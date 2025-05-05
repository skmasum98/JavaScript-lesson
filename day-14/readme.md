# 🛠️ JavaScript Errors Explained in Bangla

## 📚 1. Different Types of Errors in JavaScript

| 🧩 Error Type      | 📌 কখন হয়                          |
| ------------------ | ---------------------------------- |
| **SyntaxError**    | কোড লেখার নিয়ম ভাঙলে              |
| **ReferenceError** | অঘোষিত ভ্যারিয়েবল ব্যবহার করলে    |
| **TypeError**      | ভুল টাইপের ভ্যালুতে অপারেশন করলে   |
| **RangeError**     | ভ্যালু রেঞ্জের বাইরে গেলে          |
| **EvalError**      | `eval()` ব্যবহার সংক্রান্ত সমস্যা  |
| **URIError**       | URI encode/decode-এ ভুল ইনপুট দিলে |

---

### 1️⃣ SyntaxError

**📌 কখন হয়?**
যখন কোডে কোনো **syntax ভুল** থাকে।

**🧪 উদাহরণ:**

```js
if (true {
  console.log("Hello");
}
```

**🔴 Output:** `SyntaxError: Unexpected token ')'`

---

### 2️⃣ ReferenceError

**📌 কখন হয়?**
যখন এমন কোনো **ভ্যারিয়েবল বা ফাংশন কল** করা হয় যেটা ডিক্লেয়ার করা হয়নি।

**🧪 উদাহরণ:**

```js
console.log(x); // x ডিক্লেয়ার করা হয়নি
```

**🔴 Output:** `ReferenceError: x is not defined`

---

### 3️⃣ TypeError

**📌 কখন হয়?**
ভুল টাইপের ভ্যালুতে **অপারেশন করলে**।

**🧪 উদাহরণ 1:**

```js
let num = 5;
num.toUpperCase(); // সংখ্যা থেকে uppercase?
```

**🔴 Output:** `TypeError: num.toUpperCase is not a function`

**🧪 উদাহরণ 2:**

```js
let obj = null;
console.log(obj.name); // null থেকে প্রপার্টি পড়া
```

**🔴 Output:** `TypeError: Cannot read properties of null`

---

### 4️⃣ RangeError

**📌 কখন হয়?**
যখন কোনো ভ্যালু **গ্রহণযোগ্য রেঞ্জের বাইরে** চলে যায়।

**🧪 উদাহরণ:**

```js
let arr = new Array(-1); // Array সাইজ negative হতে পারে না
```

**🔴 Output:** `RangeError: Invalid array length`

---

### 5️⃣ EvalError

**📌 কখন হয়?**
`eval()` ব্যবহার করার সময় ভুল syntax থাকলে।

**🧪 উদাহরণ:**

```js
eval("var a = ;");
```

**🔴 Output:** `EvalError`

❗ এটি এখন খুব কম দেখা যায়।

---

### 6️⃣ URIError

**📌 কখন হয়?**
`decodeURI()` বা `encodeURI()` এর সাথে ভুল ইনপুট দিলে।

**🧪 উদাহরণ:**

```js
decodeURIComponent("%");
```

**🔴 Output:** `URIError: URI malformed`

---

### ⚠️ Bonus: Parsing Error (A Kind of SyntaxError)

**📌 কখন হয়?**
JavaScript কোড parse করার সময় **syntax ভুল** পেলে।

**🧪 উদাহরণ:**

```js
function sayHello( {
  console.log("Hello");
}
```

**🔴 Output:** `SyntaxError: Unexpected token '{'`

**ব্যাখ্যা:** ব্র্যাকেট ভুল, তাই কোড parse হয়নি।

---

### ⚠️ Bonus: Runtime Error

**📌 কখন হয়?**
Syntax ঠিক, কিন্তু কোড **চালানোর সময়** সমস্যা হয়।

**🧪 উদাহরণ:**

```js
let user;
console.log(user.name); // user হলো undefined
```

**🔴 Output:** `TypeError: Cannot read property 'name' of undefined`

**ব্যাখ্যা:** কোড parse হয়েছে, কিন্তু চালানোর সময় সমস্যা — তাই runtime error।

---

> ✅ আপনি এই নোটটি JavaScript শিখতে বা শেখাতে Reference হিসেবে ব্যবহার করতে পারেন।

---

Let me know if you'd like a downloadable PDF or visual infographic for this!
