<a href="https://ts-day19.netlify.app/">Live Link</a>

**JavaScript-এর Event (ইভেন্ট) কী?**

JavaScript-এ **Event** বলতে বোঝায়, একটি webpage-এ কোনো কাজ বা ঘটনা ঘটলে সেটাকে শনাক্ত করে এবং তার ওপর ভিত্তি করে নির্দিষ্ট কোড চালানো। ব্যবহারকারীর কর্মকাণ্ড বা ব্রাউজার দ্বারা তৈরি যেকোনো ঘটনা ইভেন্ট হিসেবে গণ্য হয়।

### উদাহরণস্বরূপ কিছু সাধারণ ইভেন্ট:

* `click` – কেউ একটি বাটনে ক্লিক করলে
* `mouseover` – মাউস কোনো উপাদানের উপর গেলে
* `keydown` – কেউ কিবোর্ডে কোনো কী চাপলে
* `load` – পেজ লোড হওয়ার সময়
* `submit` – ফর্ম সাবমিট করার সময়

### উদাহরণ (JavaScript কোড সহ):

```html
<button onclick="sayHello()">Click Me</button>

<script>
  function sayHello() {
    alert("Hello! আপনি বাটনে ক্লিক করেছেন।");
  }
</script>
```

এখানে `onclick` একটি **ইভেন্ট** এবং `sayHello()` হল ইভেন্ট হ্যান্ডলার — মানে এই কাজটি ইভেন্ট ঘটলে চালানো হবে।

### সংক্ষেপে:

**Event** হলো একটি নির্দিষ্ট মুহূর্তে ঘটানো অ্যাকশন বা কাজ, যেটার মাধ্যমে JavaScript রেসপন্স করে। ইভেন্ট ব্যবহার করে ওয়েবপেজকে ইন্টার‌্যাকটিভ করা যায়।

---

### 🔹 **Event Handling in Markup (HTML Markup-এ ইভেন্ট হ্যান্ডলিং)** 

**Event Handling in Markup** বলতে বোঝায় HTML ট্যাগের মধ্যে সরাসরি JavaScript ইভেন্ট যুক্ত করা। এই পদ্ধতিতে HTML উপাদানের অ্যাট্রিবিউট হিসেবে ইভেন্ট যুক্ত করে ফাংশন কল করা হয় বা সরাসরি JavaScript কোড লেখা হয়।

---

### ✅ উদাহরণ ১: ইনলাইন ইভেন্ট হ্যান্ডলার

```html
<button onclick="alert('আপনি ক্লিক করেছেন')">Click Me</button>
```

এখানে:

* `onclick` → একটি ইভেন্ট অ্যাট্রিবিউট (ইউজার ক্লিক করলে)
* `alert('আপনি ক্লিক করেছেন')` → এই কোডটি চালানো হবে ইভেন্ট ঘটলে

---

### ✅ উদাহরণ ২: ফাংশন কল করা

```html
<button onclick="sayHello()">Click Me</button>

<script>
  function sayHello() {
    alert("হ্যালো! আপনি বাটনে ক্লিক করেছেন।");
  }
</script>
```

এখানে:

* `onclick="sayHello()"` → ইভেন্ট হ্যান্ডলার ফাংশন কল করে
* `<script>` এর মধ্যে `sayHello()` ফাংশন সংজ্ঞায়িত আছে

---



### ⚠️ লক্ষণীয়:

* **Markup-এ ইভেন্ট হ্যান্ডলিং** ছোট কাজের জন্য ঠিক আছে।
* কিন্তু বড় বা জটিল অ্যাপ্লিকেশনের জন্য **JavaScript দিয়ে আলাদা করে ইভেন্ট হ্যান্ডলিং করা** (যেমন `addEventListener`) নিরাপদ ও maintainable হয়।

---


### 🔹 **Event Handling in Script**

**JavaScript Script-এ ইভেন্ট হ্যান্ডলিং** বলতে বোঝায় HTML থেকে আলাদা করে JavaScript কোডে ইভেন্ট যুক্ত করা, অর্থাৎ DOM (Document Object Model) ব্যবহার করে ইভেন্ট ধরার পদ্ধতি। এই পদ্ধতি প্রফেশনাল ওয়েব ডেভেলপমেন্টে বেশি ব্যবহৃত হয় কারণ এটি কোডকে আলাদা, পরিষ্কার এবং maintainable রাখে।

---


## ✅ পদ্ধতি 1: `onclick` প্রপার্টি ব্যবহার করে

```html
<button id="myBtn">Click Me</button>

<script>
  const btn = document.getElementById('myBtn');

  btn.onclick = function () {
    alert('এই বার্তাটি স্ক্রিপ্ট থেকে এসেছে!');
  };
</script>
```

🔸 এটি ছোট কাজের জন্য উপযোগী, কিন্তু একটি ইভেন্টে একাধিক কাজ যুক্ত করা যায় না।

---
**`onclick` প্রপার্টি ব্যবহার করলে **একই ইভেন্টে একাধিক হ্যান্ডলার অ্যাড করা যায় না**।

```js
const myBtn2Elem = document.getElementById("myBtn2");

myBtn2Elem.onclick = function () {
  console.log("My Button 2 Clicked");
};

myBtn2Elem.onclick = function () {
  console.log("My Button 2 Clicked Again");
};
```

### ⚠️ উপরের ক্ষেত্রে কী হবে?

শুধুমাত্র দ্বিতীয় `onclick` ফাংশনটি চলবে (👉 **"My Button 2 Clicked Again"**) কারণ দ্বিতীয়টি প্রথমটিকে **overwrite** করে দিয়েছে।

---


## 🔹 **Separating Function in JavaScript Event Handling** 

**Separating function** মানে হলো — ইভেন্ট হ্যান্ডলিংয়ের জন্য ফাংশনটিকে আলাদা করে লিখা, যাতে কোড পরিষ্কার, পুনর্ব্যবহারযোগ্য (reusable), এবং maintainable হয়।

---

### ✅ উদাহরণ (সঠিকভাবে ফাংশন আলাদা করা):

```html
<button id="myBtn3">Click Me</button>

<script>
  // ফাংশন আলাদা করে লেখা
  function handleClick() {
    console.log("Button Clicked!");
  }

  // ইভেন্ট হ্যান্ডলারে ফাংশন কল করা
  const btn = document.getElementById("myBtn3");
  btn.addEventListener("click", handleClick);
</script>
```

---

### 🔸 সুবিধা:

* ফাংশনকে **repeat** বা **reuse** করা যায়
* কোড পরিষ্কার থাকে
* ডিবাগ বা উন্নত ফিচার যোগ করা সহজ হয়

---

### ✅ একাধিক ইভেন্টে একই ফাংশন ব্যবহার:

```html
<button id="btn1">Button 1</button>
<button id="btn2">Button 2</button>

<script>
  function sharedHandler() {
    console.log("একই ফাংশন দিয়ে দুইটি বাটনে কাজ চলছে");
  }

  document.getElementById("btn1").addEventListener("click", sharedHandler);
  document.getElementById("btn2").addEventListener("click", sharedHandler);
</script>
```

---
## 🔹 `addEventListener` কী?

**`addEventListener()`** হলো JavaScript-এর একটি বিল্ট-ইন মেথড, যার মাধ্যমে  HTML এলিমেন্টে **ইভেন্ট (যেমন click, mouseover, keypress ইত্যাদি)** অ্যাড করতে পারো।

---

### ✅ সাধারণ সিনট্যাক্স:

```js
element.addEventListener("event", function);
```

🔹 এখানে:

* `element` = যে HTML এলিমেন্টে ইভেন্ট লাগাবে
* `"event"` = ইভেন্ট টাইপ (যেমন `"click"`, `"mouseover"`, `"submit"` ইত্যাদি)
* `function` = যেটা ইভেন্ট হলে চালানো হবে

---

### ✅ উদাহরণ:

```html
<button id="myBtn">Click Me</button>

<script>
  const btn = document.getElementById("myBtn");

  btn.addEventListener("click", function () {
    alert("বাটনে ক্লিক করা হয়েছে!");
  });
</script>
```

---

### ✅ আলাদা ফাংশন দিয়েও করা যায়:

```js
function handleClick() {
  console.log("Button Clicked");
}

btn.addEventListener("click", handleClick);
```

---

### ✅ সুবিধা:

| সুবিধা                        | ব্যাখ্যা                               |
| ----------------------------- | -------------------------------------- |
| ✅ একাধিক ইভেন্ট অ্যাড করা যায় | একই এলিমেন্টে একাধিক ইভেন্ট হ্যান্ডলার |
| ✅ সহজে রিমুভ করা যায়          | `removeEventListener()` দিয়ে সরানো যায় |
| ✅ কোড পরিষ্কার                | ফাংশন আলাদা করে রাখা যায়               |

---

### 🆚 `onclick` vs `addEventListener`

| বিষয়                    | `onclick` | `addEventListener()`          |
| ----------------------- | --------- | ----------------------------- |
| একাধিক ফাংশন            | ❌ না      | ✅ হ্যাঁ                       |
| মোডার্ন ও স্ট্যান্ডার্ড | ❌ না      | ✅ হ্যাঁ                       |
| রিমুভ করা               | ❌ কঠিন    | ✅ সহজ (`removeEventListener`) |

---

### 🔚 সংক্ষেপে:

`addEventListener()` হলো ইভেন্ট অ্যাড করার আধুনিক ও শক্তিশালী পদ্ধতি যা JavaScript-এ ব্যবহার করা হয় ইউজার ইন্টারঅ্যাকশন হ্যান্ডল করার জন্য।


## 🔹 `removeEventListener()` কী?

**`removeEventListener()`** হলো JavaScript-এর একটি মেথড, যার সাহায্যে আগে `addEventListener()` দিয়ে যেই ইভেন্ট হ্যান্ডলার অ্যাড করা হয়েছিল, সেটিকে **সরিয়ে (remove)** দেওয়া যায়।

---

### ✅ সাধারণ সিনট্যাক্স:

```js
element.removeEventListener("event", functionReference);
```

🔹 এখানে:

* `element` → HTML এলিমেন্ট
* `"event"` → ইভেন্ট টাইপ (যেমন `"click"`, `"mouseover"`, ইত্যাদি)
* `functionReference` → আগের সেই একই ফাংশনের রেফারেন্স যেটা `addEventListener`-এ ব্যবহার করা হয়েছিল

---

### ⚠️ গুরুত্বপূর্ণ:

* শুধুমাত্র **নাম দেওয়া ফাংশন** (function reference) দিলে `removeEventListener()` কাজ করে।
* **অ্যানোনিমাস ফাংশন বা অ্যারো ফাংশন ইনলাইনে দিলে কাজ করবে না**।

---

### ✅ উদাহরণ:

```html
<button id="myBtn">Click Me</button>
<button id="removeBtn">Remove Listener</button>

<script>
  const btn = document.getElementById("myBtn");
  const removeBtn = document.getElementById("removeBtn");

  // ফাংশন আলাদা করে রাখা
  function handleClick() {
    alert("Button Clicked!");
  }

  // addEventListener
  btn.addEventListener("click", handleClick);

  // removeEventListener
  removeBtn.addEventListener("click", function () {
    btn.removeEventListener("click", handleClick);
    alert("Click event removed!");
  });
</script>
```

➡️ এখন, প্রথম বাটনে ক্লিক করলে alert আসবে, কিন্তু দ্বিতীয় বাটনে ক্লিক করলে `click` ইভেন্ট মুছে যাবে।

---

### ❌ নিচেরটা কাজ করবে না (কারণ function reference আলাদা):

```js
btn.addEventListener("click", function () {
  console.log("Clicked");
});

btn.removeEventListener("click", function () {
  console.log("Clicked");
});
```

👉 উপরের দুইটা **ভিন্ন ফাংশন**, তাই রিমুভ হবে না।

---

### 🔚 সংক্ষেপে:

| বিষয়   | removeEventListener()                 |
| ------ | ------------------------------------- |
| কাজ    | আগের addEventListener মুছে ফেলে       |
| দরকার  | ফাংশনের ঠিক একই রেফারেন্স             |
| সুবিধা | ইভেন্ট নিয়ন্ত্রণ আরও ভালোভাবে করা যায় |

---

## 🔹 DOMContentLoaded কী?
DOMContentLoaded হলো একটি স্পেশাল JavaScript ইভেন্ট যা তখন ঘটে যখন ব্রাউজারে পুরো HTML পুরোপুরি লোড ও পার্স (parse) হয়ে গেছে, কিন্তু ইমেজ, CSS, ভিডিও ইত্যাদি সব রিসোর্স এখনো লোড হয়নি।

✅ সহজভাবে বললে:
👉 DOMContentLoaded ইভেন্ট দেখায়:

"HTML ডকুমেন্ট সম্পূর্ণ লোড হয়েছে, এখন JavaScript নিরাপদে DOM-এ কাজ করতে পারবে।"

DOMContentLoaded ইভেন্ট হলো এমন একটি ইভেন্ট যা DOM পুরো লোড হওয়ার পর JavaScript কোড চালাতে ব্যবহার করা হয়, যাতে DOM এলিমেন্ট পাওয়া যায় এবং কোনো Error না আসে।


### ✅ উদাহরণ:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOMContentLoaded Example</title>
</head>
<body>
    <h1>Hello World</h1>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            console.log("DOM সম্পূর্ণ লোড হয়েছে!");
        });
    </script>
</body>
</html>
```
### ✅ ব্যাখ্যা:
DOMContentLoaded ইভেন্টের মাধ্যমে আমরা নিশ্চিত হতে পারি যে HTML ডকুমেন্ট সম্পূর্ণ লোড হয়েছে এবং এখন আমরা DOM-এ নিরাপদে কাজ করতে পারি। এটি বিশেষ করে তখন উপকারী যখন আমাদের JavaScript কোডের কিছু অংশ DOM এলিমেন্টের উপর নির্ভর করে।      
### ⚠️ কেন ব্যবহার করবেন?
* **Error এড়াতে**: যদি JavaScript কোড DOM এলিমেন্টের উপর নির্ভর করে, তাহলে DOMContentLoaded ইভেন্ট ব্যবহার করলে Error এড়ানো যায়। 

* **Performance**: DOMContentLoaded ইভেন্ট দ্রুত ঘটে, কারণ এটি শুধুমাত্র HTML লোড হওয়ার পর ঘটে। তাই ইমেজ বা অন্যান্য রিসোর্স লোড হওয়ার অপেক্ষা করতে হয় না।
* **User Experience**: ইউজার ইন্টারফেস দ্রুত রেসপন্স করে, কারণ JavaScript কোড DOM লোড হওয়ার সাথে সাথে চালানো যায়।



## 🔵 **Event Bubbling কী?**

**Event Bubbling** হলো JavaScript-এর একটি ইভেন্ট প্রক্রিয়া, যেখানে একটি ইভেন্ট যখন কোনো **চাইল্ড (Child)** এলিমেন্টে ঘটে, তখন সেটা ধীরে ধীরে **তার প্যারেন্ট, গ্র্যান্ডপ্যারেন্ট, তারপর পুরো document পর্যন্ত উপরে উপরে ছড়িয়ে পড়ে (bubble হয়)**।

---

### ✅ সহজভাবে বললে:

👉 তুমি যদি একটি `<button>` ক্লিক করো যা একটি `<div>` এর ভিতরে থাকে, তাহলে সেই ক্লিক ইভেন্ট শুধু বাটনে নয়, তার প্যারেন্ট `<div>`, তারপর তারও প্যারেন্ট — সব জায়গায় পৌঁছে যায়, যদি তাদের ইভেন্ট লিসেনার থাকে।

---

### 🔁 Bubbling Flow:

```
Child → Parent → Grandparent → Document
```

---

### ✅ উদাহরণ:

```html
<div id="grandparent">
  <div id="parent">
    <button id="child">Click Me</button>
  </div>
</div>

<script>
  document.getElementById("child").addEventListener("click", () => {
    console.log("Child Clicked");
  });

  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent Clicked");
  });

  document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent Clicked");
  });
</script>
```

#### 👉 Output (তুমি বাটনে ক্লিক করলে):

```
Child Clicked  
Parent Clicked  
Grandparent Clicked
```

➡️ কারণ ইভেন্টটি **বাবল হয়ে উপরের দিকে** গেছে।

---

### 🛑 ইভেন্ট বাবল বন্ধ করতে চাইলে:

```js
document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation(); // উপরের দিকে ছড়ানো বন্ধ
  console.log("Child Clicked");
});
```

---

### 🔍 কখন Event Bubbling দরকার হয়?

* **Event Delegation** করতে (এক parent এলিমেন্টে event handle করা)
* বড় DOM-এ পারফরম্যান্স বাড়াতে
* কম কোডে ইভেন্ট হ্যান্ডল করতে

---

### 📌 সংক্ষেপে:

| বিষয়          | বিবরণ                                |
| ------------- | ------------------------------------ |
| কী            | Event নিচ থেকে উপরের দিকে ছড়ায়       |
| ডিফল্ট        | হ্যাঁ                                |
| বন্ধ করা যায়? | ✅ `e.stopPropagation()` দিয়ে         |
| উপকার         | কোড সহজ হয়, event delegation করা যায় |

---

