# DOM Advanced Techniques (ডম অ্যাডভান্সড টেকনিক)
### ✅ Efficient DOM Traversal (দ্রুত DOM traversal)

**Efficient DOM Traversal** মানে হলো — **দ্রুত এবং সঠিকভাবে DOM (Document Object Model) এর মধ্যে উপাদান (Element) খুঁজে বের করা ও নেভিগেট করা**।
এটা গুরুত্বপূর্ণ কারণ বড় ওয়েবসাইটে হাজার হাজার DOM এলিমেন্ট থাকতে পারে, তাই দ্রুত traversal করলে performance ভালো থাকে।

---

### 🧠 DOM Traversal কীভাবে কাজ করে?

HTML DOM একটি **ট্রি (গাছের মত)** স্ট্রাকচার। প্রতিটি ট্যাগ/এলিমেন্ট একেকটা **নোড (node)** হিসেবে গঠিত হয়।
তুমি JavaScript দিয়ে DOM এর ভেতরে এক এলিমেন্ট থেকে অন্য এলিমেন্টে যেতে পারো — এটাকেই বলে Traversal।

---

### ✅ কিছু গুরুত্বপূর্ণ Traversal Method:

| Property/Method                  | ব্যাখ্যা                               |
| -------------------------------- | -------------------------------------- |
| `element.parentElement`          | উপরের parent উপাদান                    |
| `element.children`               | সব child উপাদান (HTMLCollection আকারে) |
| `element.firstElementChild`      | প্রথম child উপাদান                     |
| `element.lastElementChild`       | শেষ child উপাদান                       |
| `element.previousElementSibling` | আগের ভাই উপাদান                        |
| `element.nextElementSibling`     | পরের ভাই উপাদান                        |

---

### 🔍 উদাহরণ:

```html
<div class="card">
  <h2 class="title">Hello</h2>
  <p class="desc">Welcome to DOM</p>
</div>
```

```js
const parent = document.querySelector('.card'); // ডিভটা ধরলাম

const firstChild = parent.firstElementChild; // <h2>
const next = firstChild.nextElementSibling;  // <p>
const lastChild = parent.lastElementChild;   // আবার <p>
const parentOfElement = firstChild.parentElement; // আবার .card
```

---

### ⚡ কেন Efficient DOM Traversal গুরুত্বপূর্ণ?

1. **পারফরমেন্স বাড়ে** — একবার সঠিকভাবে নোড ধরলে বারবার DOM খুঁজতে হয় না।
2. **কোড পরিষ্কার থাকে** — বাবা, ভাই, ছেলে ধরেই কাজ হয়।
3. **ভুল কম হয়** — সরাসরি সম্পর্ক (parent-child-sibling) ধরায় ভুল হবার সম্ভাবনা কম।

---

### ✅ মনে রাখার টিপস:

* `parentElement` – প্যারেন্টের খোঁজে
* `firstElementChild` / `lastElementChild` – সন্তানের খোঁজে
* `nextElementSibling` / `previousElementSibling` – ভাইদের খোঁজে

---


## ✅ Template and Cloning (টেমপ্লেট এবং ক্লোন)

### 🔶 Template কী?

`<template>` একটি HTML ট্যাগ যেটা ব্রাউজারে রেন্ডার হয় না (মানে ব্রাউজারে দেখায় না), কিন্তু JavaScript দিয়ে ডায়নামিকভাবে ক্লোন করে ব্যবহার করা যায়।

এটা তখনই কাজে লাগে যখন তুমি একই ধরনের DOM structure বারবার তৈরি করতে চাও।

---

### 📦 উদাহরণ: HTML Template

```html
<template id="card-template">
  <div class="card">
    <h2 class="title">Title</h2>
    <p class="desc">Description</p>
  </div>
</template>
```

🔹 এটি শুধু একটা নকশা বা ছাঁদ — এটা তখনো DOM-এ যোগ হয়নি।

---

### 🔁 ক্লোন এবং ব্যবহার করা

```js
const template = document.getElementById('card-template');  // template ধরলাম

const clone = template.content.cloneNode(true);  // পুরো টেমপ্লেট ক্লোন করলাম (deep copy)

clone.querySelector('.title').textContent = "DOM Advance Topic";  // ভিতরের content বদল
clone.querySelector('.desc').textContent = "Hope you are learning something New";

document.body.appendChild(clone);  // এবার ক্লোনকে DOM-এ যুক্ত করলাম
```

---

### 🔍 ধাপে ধাপে ব্যাখ্যা:

| ধাপ                | কাজ                               |
| ------------------ | --------------------------------- |
| `getElementById()` | টেমপ্লেট খুঁজে বের করা            |
| `template.content` | টেমপ্লেটের ভিতরের আসল কনটেন্ট     |
| `cloneNode(true)`  | ডিপ ক্লোন করা (সব child সহ)       |
| `querySelector()`  | ভিতরের এলিমেন্ট খুঁজে মান বসানো   |
| `appendChild()`    | DOM-এ সেই ক্লোনকৃত উপাদান যোগ করা |

---

### 🧠 কেন Template ব্যবহার করব?

✅ Reusable HTML
✅ বারবার একই structure তৈরি করতে
✅ Performance ভালো
✅ Code clean ও DRY (Don’t Repeat Yourself)

---

### 🧪 উদাহরণঃ

তুমি যদি ১০টা প্রোডাক্ট কার্ড বা ইউজার প্রোফাইল তৈরি করতে চাও, তাহলে প্রতিটা DOM তৈরি না করে একটা template বানিয়ে বারবার clone করতে পারো।

---

### ✨ Bonus Tip:

তুমি চাইলে clone করার সময় একটা `loop` ব্যবহার করে অনেকগুলো clone তৈরি করতে পারো:

```js
for (let i = 1; i <= 5; i++) {
  const clone = template.content.cloneNode(true);
  clone.querySelector('.title').textContent = `Title ${i}`;
  clone.querySelector('.desc').textContent = `This is item ${i}`;
  document.body.appendChild(clone);
}
```

---

### 🔚 সংক্ষেপে:

**`<template>`** হচ্ছে এমন HTML কোড যেটা রেন্ডার হয় না,
**`cloneNode(true)`** দিয়ে সেটা ক্লোন করে DOM-এ অ্যাড করা হয়।

---


---

## ✅ Document Fragment (ডকুমেন্ট ফ্র্যাগমেন্ট)

### 🔶 সংজ্ঞা:

**Document Fragment** হলো JavaScript-এর এমন একটি অস্থায়ী DOM container, যেটা **মূল DOM-এর অংশ নয়** যতক্ষণ না তুমি সেটা DOM-এ যুক্ত করো।

এইটা মূলত performance boost করার জন্য ব্যবহার করা হয় — কারণ বারবার DOM update না করে, একটা ফ্র্যাগমেন্টের ভিতর সব তৈরি করে শেষে একবারে DOM-এ যুক্ত করা হয়।

---

### 🔧 Syntax:

```js
const fragment = document.createDocumentFragment();
```

এটা একটা খালি container তৈরি করে।

---

### 🧪 উদাহরণ:

```js
const fragment = document.createDocumentFragment();

for (let i = 0; i <= 3; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}

document.getElementById("list").appendChild(fragment);
```

---

### 📖 ব্যাখ্যা:

1. **createDocumentFragment()**
   → এটা একটি ফাঁকা, অস্থায়ী container তৈরি করে।

2. **loop এর মাধ্যমে DOM বানানো**
   → আমরা একাধিক `<li>` তৈরি করছি এবং `fragment` এ রাখছি।

3. **একবারেই DOM-এ যুক্ত করা**
   → শেষে `#list` এর ভিতরে `fragment` যুক্ত করা হচ্ছে।

---

### 🔥 কেন Document Fragment ব্যবহার করব?

| কারণ               | ব্যাখ্যা                                  |
| ------------------ | ----------------------------------------- |
| ✅ Performance      | একাধিক DOM update না করে, একবারেই করা যায় |
| ✅ Memory Efficient | DOM reflow/repaint কম হয়                  |
| ✅ Clean Structure  | কোডও সুন্দর হয় এবং কাজও ফাস্ট হয়          |

---

### ❌ যদি না ব্যবহার করি?

যদি তুমি একটার পর একটা `appendChild()` দিয়ে DOM-এ সরাসরি যোগ করো, তাহলে প্রতিবার DOM re-render হবে। বড় ডেটা লোডে এটা অনেক স্লো করে ফেলে।

---

### 🧠 মনে রাখার কিছু কথা:

* **Document Fragment নিজেই DOM-এ দেখা যায় না**
* কিন্তু তার ভেতরের সবকিছু DOM-এ যুক্ত হয়
* এটা একটা **temporary holding area**

---

### 🖼️ ধরো তুমি একসাথে ১০০টা ডাটা লোড করছো:

```js
function renderList(items) {
  const fragment = document.createDocumentFragment();

  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    fragment.appendChild(li);
  });

  document.querySelector('#list').appendChild(fragment);
}
```

এভাবে তুমি বড় ডাটা খুব দ্রুত DOM-এ রেন্ডার করতে পারো।

---

### 🔚 সংক্ষেপে:

**Document Fragment** হলো এক ধরনের **খসড়া DOM**, যেখানে তুমি DOM তৈরি করে রাখো, এবং শেষে পুরোটা একসাথে যোগ করো।

---


---

## ✅ `Range` (রেঞ্জ) কি?

**`Range`** হলো JavaScript DOM API-এর একটি ফিচার, যা দিয়ে তুমি HTML ডকুমেন্টের **একটি অংশ বা সিলেকশন নির্ধারণ** করতে পারো — character-level পর্যন্ত নির্দিষ্ট করে।

তুমি DOM-এর নির্দিষ্ট জায়গা (text, element, বা node) থেকে শুরু করে আরেক জায়গা পর্যন্ত **select**, **modify**, বা **clone** করতে পারো।

---

### 🧪 উদাহরণ:

```html
<p id="para">Hello <strong>DOM</strong> Lover!</p>
```

```js
const p = document.getElementById('para');

const range = document.createRange();

// শুরু: "Hello " এর পর
range.setStart(p.firstChild, 6); 

// শেষ: "Lover!" এর মধ্যে 4-এ
range.setEnd(p.childNodes[2], 4);

const content = range.cloneContents();

console.log(content);
```

---

### 📖 ব্যাখ্যা:

| ধাপ                      | ব্যাখ্যা                                   |
| ------------------------ | ------------------------------------------ |
| `createRange()`          | নতুন `Range` অবজেক্ট তৈরি করো              |
| `setStart(node, offset)` | কোথা থেকে শুরু হবে সেটা নির্ধারণ           |
| `setEnd(node, offset)`   | কোথায় গিয়ে শেষ হবে সেটা নির্ধারণ           |
| `cloneContents()`        | ঐ রেঞ্জ-এর ভেতরের কনটেন্ট কপি করে ফেরত দেয় |

---

### 🧠 মনে রাখার পয়েন্ট:

* **Node বলতে** বুঝায় DOM-এর এলিমেন্ট বা টেক্সট
* **Offset** মানে হলো character বা child node index (0-based)
* `range` দিয়ে তুমি `deleteContents()`, `extractContents()`, `insertNode()` ইত্যাদি করতে পারো

---

### 🛠️ আরও কিছু ব্যবহারের জায়গা:

| কাজ              | মেথড                |
| ---------------- | ------------------- |
| কপি করা          | `cloneContents()`   |
| মুছে ফেলা        | `deleteContents()`  |
| কেটে নেওয়া (cut) | `extractContents()` |
| ইনসার্ট করা      | `insertNode(node)`  |

---

### 🧙‍♂️ বাস্তব জীবনের উপযোগিতা:

✅ Text editor বানাতে
✅ Custom text selection highlight
✅ Text replace বা annotate করতে
✅ Drag & drop বা copy paste system করতে

---

### 🔚 সংক্ষেপে:

* `Range` দিয়ে তুমি DOM-এর নির্দিষ্ট অংশ ধরতে পারো।
* এটা মূলত text-based এবং **high precision selection tool**।
* একে ব্যবহার করে modify, clone, delete বা insert করা যায়।

---
---

## ✅ Shadow DOM কী?

**Shadow DOM** হলো এমন একটি DOM tree যেটা মূল DOM (Main Document DOM)-এর বাইরে গঠন করা হয়, এবং সেটি **encapsulated/private** — মানে বাইরের CSS বা JS তার ভিতরের কিছুকে দেখতে বা পরিবর্তন করতে পারে না।

এটা ওয়েব কম্পোনেন্ট তৈরিতে ব্যবহৃত হয়, যেখানে একেকটা কম্পোনেন্ট থাকে নিজের স্টাইল, নিজের behavior সহ একদম আলাদা।

---

### 📦 উদাহরণ:

```html
<div id="box"></div>
```

```js
const shadowHost = document.getElementById('box');

// শ্যাডো রুট তৈরি করলাম
const shadow = shadowHost.attachShadow({ mode: 'open' });

// এর ভিতরে কিছু HTML এবং CSS দিলাম
shadow.innerHTML = `
  <style>
    p {
      color: red;
      font-weight: bold;
    }
  </style>
  <p>Hello Shadow!</p>
`;
```

---

### 📖 ব্যাখ্যা:

| অংশ                         | কাজ                                          |
| --------------------------- | -------------------------------------------- |
| `shadowHost.attachShadow()` | শ্যাডো DOM তৈরি করা হয়                       |
| `{ mode: "open" }`          | বাইরের JS থেকে shadow DOM access করা যাবে    |
| `innerHTML`                 | shadow DOM-এর ভিতরের HTML ও CSS নির্ধারণ করা |

---

### 🔐 Shadow DOM Modes:

| Mode     | Access                                           |
| -------- | ------------------------------------------------ |
| `open`   | বাইরের JS থেকে access করা যাবে (উদাহরণে ব্যবহৃত) |
| `closed` | বাইরের JS থেকে shadow DOM access করা যাবে না     |

---

### 🧠 কেন Shadow DOM দরকার?

✅ CSS/JS Isolation
✅ Code Encapsulation
✅ Custom Web Components বানানো
✅ নামের conflict এড়ানো (e.g., `.btn` ক্লাস সব জায়গায় affect না করা)

---

### 🛠️ Practical Use Case:

ধরো তুমি এমন একটা button বানালে যেটা stylish, animation সহ — আর সেটা অন্যদের ওয়েবসাইটেও কাজ করবে।
Shadow DOM ব্যবহার করে তুমি **internal CSS/JS scope**-এ সেটাকে একদম আলাদা রাখতে পারো।

---

### ⚠️ সাধারণ DOM vs Shadow DOM:

| বিষয়          | সাধারণ DOM                | Shadow DOM          |
| ------------- | ------------------------- | ------------------- |
| Global effect | হ্যাঁ, সব কিছু affect করে | না, শুধু নিজের ভিতর |
| CSS leakage   | হয়                        | হয় না               |
| Reusability   | কম                        | বেশি                |
| নিরাপত্তা     | সাধারণ                    | বেশি encapsulated   |

---

### 🔚 সংক্ষেপে:

* Shadow DOM = **নিজস্ব private DOM tree**
* বাইরের CSS/JS এর কোন প্রভাব পড়ে না
* Web Component বা Custom UI বানাতে খুব দরকারি

---

---

## ✅ Advanced Class Manipulation (উন্নততর ক্লাস ম্যানিপুলেশন)

HTML এলিমেন্টে CSS ক্লাস **যোগ করা**, **সরানো**, **টগল করা**, বা **একটি ক্লাস অন্য ক্লাসে পরিবর্তন** করা — সবই করা যায় JavaScript দিয়ে `classList` প্রোপার্টি ব্যবহার করে।

---

### 🔧 Syntax:

```js
const element = document.querySelector('.btn');
```

---

### 🔹 `classList.add("className")`

একটি বা একাধিক ক্লাস যোগ করে।

```js
element.classList.add('active');
```

➡️ `active` ক্লাস DOM-এ যোগ হবে।

---

### 🔹 `classList.remove("className")`

একটি বা একাধিক ক্লাস মুছে ফেলে।

```js
element.classList.remove('disabled');
```

➡️ `disabled` ক্লাস মুছে যাবে যদি থাকে।

---

### 🔹 `classList.toggle("className")`

ক্লাস না থাকলে **যোগ করে**, থাকলে **সরিয়ে ফেলে**।

```js
element.classList.toggle('visible');
```

➡️ এটি ক্লিক করার সময় দেখা যায়/লুকানো যায় এমন effect বানাতে কাজে লাগে।

---

### 🔹 `classList.replace("oldClass", "newClass")`

একটি ক্লাসকে অন্য ক্লাসে পরিবর্তন করে।

```js
element.classList.replace('error', 'success');
```

➡️ `error` থাকলে সেটা সরিয়ে `success` যোগ করবে।

---

### 🧠 উদাহরণ:

```js
const btn = document.querySelector('.btn');

btn.classList.add('active');           // "active" যোগ করলো
btn.classList.remove('disabled');      // "disabled" সরালো
btn.classList.toggle('visible');       // থাকলে সরাবে, না থাকলে যোগ করবে
btn.classList.replace('error', 'success'); // "error" কে "success" এ পরিবর্তন
```

---

### 🧪 HTML উদাহরণ:

```html
<button class="btn error disabled">Click Me</button>
```

এখন JavaScript-এ ক্লাসগুলো ম্যানিপুলেট করে style, animation, বা behavior নিয়ন্ত্রণ করা যাবে।

---

### 🔥 Advanced Use:

```js
if (!btn.classList.contains('active')) {
  btn.classList.add('active');
}
```

👉 `.contains('className')` দিয়ে চেক করা যায় কোনো ক্লাস আছে কিনা।

---

### 🎯 কোথায় ব্যবহার করা হয়?

| ক্ষেত্র           | কাজ                               |
| ----------------- | --------------------------------- |
| UI toggle         | show/hide section                 |
| Form validation   | error/success ক্লাস দেওয়া         |
| Button states     | active/disabled toggle            |
| Animation trigger | ক্লাস দিয়ে CSS animation চালু করা |

---

### 🔚 সংক্ষেপে:

| মেথড         | কাজ                    |
| ------------ | ---------------------- |
| `add()`      | ক্লাস যোগ              |
| `remove()`   | ক্লাস সরানো            |
| `toggle()`   | ক্লাস টগল করা          |
| `replace()`  | ক্লাস পরিবর্তন         |
| `contains()` | ক্লাস আছে কিনা চেক করা |

---


---

## ✅ Handling Large-Scale DOM Updates (বড় DOM আপডেট পরিচালনা)

### 🔶 সমস্যাটা কী?

যখন তুমি অনেকগুলো DOM element (যেমন ১০০০টা `div` বা `li`) **সরাসরি DOM এ একটার পর একটা** যোগ করো, তখন প্রত্যেকবার DOM রি-রেন্ডার (reflow/repaint) হয় — ফলে পেজ স্লো হয়ে যেতে পারে।

---

### 🔧 সমাধান: Use `DocumentFragment`

তুমি প্রথমে সব উপাদান `DocumentFragment`-এ তৈরি করে রাখো, তারপর একবারেই DOM-এ যুক্ত করো।

---

### 🧪 উদাহরণ:

```js
function addItems(count) {
  const frag = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const div = document.createElement('div');
    div.textContent = `Item ${i}`;
    frag.appendChild(div); // DOM-এ নয়, fragment-এ রাখছি
  }

  document.body.appendChild(frag); // শেষে একবারে DOM-এ যুক্ত
}

addItems(1000); // ১০০০টা ডিভ দ্রুত যোগ
```

---

### 🧠 ব্যাখ্যা:

| ধাপ                        | কী হচ্ছে                                |
| -------------------------- | --------------------------------------- |
| `createDocumentFragment()` | অস্থায়ী DOM container তৈরি              |
| Loop করে `div` বানানো      | কিন্তু DOM-এ না দিয়ে ফ্র্যাগমেন্টে রাখা |
| একবারে `appendChild(frag)` | সবকিছু একসাথে DOM-এ যুক্ত হচ্ছে         |

---

### 📈 Performance কেন বাড়ে?

* প্রতি লুপ iteration-এ DOM update না হওয়ায় browser বারবার render করে না
* শুধু একবারেই render করে
* এটা কম **reflow/repaint cycle** তৈরি করে
* এর ফলে performance অনেক বেশি ভালো হয়

---

### 🧪 Without fragment – Performance কম:

```js
for (let i = 0; i < 1000; i++) {
  const div = document.createElement('div');
  div.textContent = `Item ${i}`;
  document.body.appendChild(div); // প্রত্যেকবার DOM আপডেট!
}
```

এইটা করলে প্রতিটা লুপ DOM-এ insert করে, তাই গতি কমে যায়।

---

### 🎯 বাস্তব ব্যবহারের জায়গা:

| Use case         | Example                                 |
| ---------------- | --------------------------------------- |
| Chat messages    | ১০০০+ message render                    |
| Product list     | বড় ই-কমার্স সাইটে প্রোডাক্ট লোড         |
| Comments section | Lazy load বা paginate করা কমেন্ট        |
| Data dashboard   | রিয়েল-টাইম রিপোর্ট, চার্ট, উপাদান আপডেট |

---

### 🧠 Bonus Tips:

* শুধু `DocumentFragment` নয়, Virtual DOM (React/Vue) বা diffing algorithm ও performance বাড়ায়
* Lazy loading বা pagination ব্যবহার করলে আরও efficient হয়

---

### 🔚 সংক্ষেপে:

* বড় DOM update একবারে করো, বারবার নয়
* **DocumentFragment** ব্যবহার করে DOM-এ একবারে insert করো
* এতে performance অনেক ভালো হয় এবং user experience উন্নত হয়

---

---

## ✅ Mutation Observer (ডম পরিবর্তন মনিটর) কী?

`MutationObserver` হলো JavaScript-এর একটি **বিল্ট-ইন API**, যেটা দিয়ে তুমি জানতে পারো DOM-এ কোনো পরিবর্তন হয়েছে কিনা।

এটা DOM-এর পরিবর্তন **observe/watch** করে, এবং পরিবর্তন ঘটলেই তোমার নির্ধারিত callback ফাংশন চালায়।

---

### 📦 ব্যবহার কখন দরকার?

✅ কেউ DOM-এ নতুন element যোগ করলে
✅ কোনো attribute পরিবর্তিত হলে
✅ টেক্সট কনটেন্ট বদলালে
✅ SPA/React/Vue অ্যাপে DOM ডায়নামিকভাবে বদলালে

---

### 🔧 উদাহরণ কোড:

```js
const target = document.getElementById('watchMe');

// observer তৈরি
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    console.log(`Mutation type: ${mutation.type}`);

    if (mutation.type === 'childList') {
      console.log('✅ A child node was added or removed.');
    }

    if (mutation.type === 'attributes') {
      console.log(`🔧 Attribute changed: ${mutation.attributeName}`);
    }

    if (mutation.type === 'characterData') {
      console.log(`✏️ Text changed to: ${mutation.target.data}`);
    }
  }
});

// কোন কোন পরিবর্তন দেখতে চাও — সেটা কনফিগার
const config = {
  childList: true,
  attributes: true,
  characterData: true,
  subtree: true,
};

// observer চালু করো
observer.observe(target, config);
```

---

### 🔄 DOM পরিবর্তন:

```js
function changeDOM() {
  target.textContent = "Goodbye!";
  target.setAttribute("data-status", "Changed");
}
```

➡️ এই ফাংশন DOM পরিবর্তন করলে `MutationObserver` সেটা detect করে কনসোলে রিপোর্ট করবে।

---

### 🧠 ব্যাখ্যা:

| অংশ                       | ব্যাখ্যা                          |
| ------------------------- | --------------------------------- |
| `MutationObserver()`      | নতুন observer তৈরি                |
| `observe(target, config)` | কোন DOM ও কোন পরিবর্তনগুলো দেখবে  |
| `mutationsList`           | যেসব পরিবর্তন হয়েছে, তাদের তালিকা |
| `subtree: true`           | টার্গেটের ভিতরের DOM-ও দেখবে      |

---

### 🔍 config এর অপশন:

| অপশন                  | মানে                         |
| --------------------- | ---------------------------- |
| `childList: true`     | element যোগ/সরানো দেখবে      |
| `attributes: true`    | attribute পরিবর্তন দেখবে     |
| `characterData: true` | টেক্সট পরিবর্তন দেখবে        |
| `subtree: true`       | সব nested child সহ দেখতে চাও |

---

### 🔚 সংক্ষেপে:

* `MutationObserver` দিয়ে DOM-এর **পরিবর্তন খুঁজে বের** করা যায়
* Callback ফাংশনে সেই পরিবর্তনের বিস্তারিত পাওয়া যায়
* এটি performance-friendly এবং ইভেন্ট-ভিত্তিক (বিপরীতে `setInterval()`-এর মতো নয়)

---


