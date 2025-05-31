### 🧠 **DOM কি?**

DOM বা **Document Object Model** হচ্ছে একটা ওয়েবপেজের **স্ট্রাকচার** বা কাঠামোর মতো। যখন ব্রাউজার একটা HTML ফাইল লোড করে, তখন সেটিকে **একটা গাছের মতো (tree structure)** এ রূপান্তর করে। এর মাধ্যমে আমরা **JavaScript দিয়ে HTML এর যেকোনো অংশে অ্যাক্সেস, পরিবর্তন বা ম্যানিপুলেট** করতে পারি।

---

### 🔍 **DOM এর টাইপ (Types of DOM Nodes)**

```js
console.log(document);
```

`document` হচ্ছে পুরো ওয়েবপেজের মূল অবজেক্ট। এটা DOM Tree এর **root node**।

#### DOM-এর গুরুত্বপূর্ণ কিছু টাইপ:

1. **Document** – পুরো HTML পেজের জন্য।
2. **Node** – DOM Tree এর যেকোনো অংশ (Element Node, Text Node, ইত্যাদি)।
3. **Element** – HTML Tag যেমন `<div>`, `<p>`, `<img>` এগুলোকে বোঝায়।
4. **NodeList** – অনেকগুলো Node এর list (array-like)।
5. **Attr** – যেকোনো HTML element-এর attribute যেমন `src`, `alt` ইত্যাদি।
6. **NamedNodeMap** – অনেকগুলো attribute এর collection।

---

### ✋ DOM Access করার পদ্ধতি (Accessing the DOM)

#### ✅ By ID:

```js
let titleElem = document.getElementById("heading");
console.log(titleElem);
```

➡️ `id="heading"` যেই এলিমেন্টে আছে, সেটা খুঁজে আনে।

#### ✅ By Class:

```js
let infoElems = document.getElementsByClassName("info");
console.log(infoElems);
```

➡️ `.info` ক্লাস ওয়ালা সব এলিমেন্ট খুঁজে আনে। এটা HTMLCollection হয়।

```js
[...infoElems].forEach((elem) => {
    console.log(elem);
});
```

➡️ HTMLCollection কে spread করে একটা array বানিয়ে তার উপর `forEach` চালানো হয়েছে।

#### ✅ By Tag Name:

```js
let pTagElems = document.getElementsByTagName("p");
console.log(pTagElems);
```

➡️ সব `<p>` ট্যাগ খুঁজে আনে।

---

### 🎯 CSS Selector ব্যবহার করে DOM অ্যাক্সেস

#### ✅ querySelector:

```js
let para = document.querySelector("p.info");
console.log("using query selector", para);
```

➡️ শুধুমাত্র **প্রথম** `p.info` এলিমেন্ট রিটার্ন করবে।

#### ✅ querySelectorAll:

```js
let paras = document.querySelectorAll("p.info");
console.log("using query selector all", paras);
```

➡️ সব `p.info` এলিমেন্ট রিটার্ন করবে `NodeList` আকারে।

---

### 📚 সারাংশ (Summary of DOM Access Methods):

```js
// 1. getElementById(id)
// 2. getElementsByClassName(className)
// 3. getElementsByTagName(tagName)
// 4. querySelector(cssSelector)
// 5. querySelectorAll(cssSelector)
```

---

### 🔧 Mini Project - 1: Highlighter App

```js
function highlightText() {
    console.log("About to highlight a text...");
    let elements = document.querySelectorAll("p.info");
    elements.forEach((element) => {
        element.style.backgroundColor = "yellow";
    });
}
```

➡️ এই ফাংশন সব `p.info` ক্লাস ওয়ালা এলিমেন্টের ব্যাকগ্রাউন্ড হলুদ করে দেয়।

---

### 🔎 Mini Project - 2: Filter List

```js
function filterList() {
    const inputElem = document.getElementById("searchInput");
    const input = inputElem.value;

    const items = document.querySelectorAll("ul#itemList li");

    items.forEach((item) => {
        item.style.display = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none";
    });
}
```

➡️ এই ফাংশনে সার্চ ইনপুট এর মান অনুযায়ী `ul#itemList` এর `li` গুলোকেই ফিল্টার করা হয়। মিল না থাকলে `display: none` করা হয়।

---

### ✅ Extra Tip (DevTools ব্যবহার):

তুমি Chrome বা Firefox এর **DevTools** এ গিয়ে Console tab ব্যবহার করে live DOM দেখতে পারো। কোনো element এ ডান-ক্লিক করে → Inspect করে দেখতে পারো।
