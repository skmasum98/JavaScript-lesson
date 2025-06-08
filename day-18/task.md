### ✅ What is DOM Manipulation?

**DOM Manipulation** মানে হলো —
👉 ওয়েব পেজের **HTML এলিমেন্টগুলোকে JavaScript দিয়ে তৈরি করা, পরিবর্তন করা, মুছে ফেলা, বা জায়গা বদলানো।**

---

### 🔍 DOM (Document Object Model) কী?

* একটি ওয়েবপেজ লোড হলে, ব্রাউজার HTML কে একটি **"Document Object Model (DOM)"**-এ রূপান্তর করে।
* DOM হলো একটি **ট্রি-স্ট্রাকচার**, যেখানে প্রতিটি HTML ট্যাগ একটি **নোড (node)** হিসেবে কাজ করে।

```html
<!-- Example HTML -->
<html>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

এটি DOM Tree-তে এমনভাবে তৈরি হয়:

```
html
 └── body
      └── h1 → "Hello World"
```

---

### 🛠️ DOM Manipulation দিয়ে কী কী করা যায়?

| কাজ                         | উদাহরণ                                                             |
| --------------------------- | ------------------------------------------------------------------ |
| **Element তৈরি করা**        | `document.createElement("p")`                                      |
| **Element যোগ করা**         | `parent.appendChild(child)`                                        |
| **Content পরিবর্তন করা**    | `element.innerText = "Hello"`                                      |
| **Element মুছে ফেলা**       | `element.remove()`                                                 |
| **Attribute পরিবর্তন করা**  | `img.setAttribute("src", "image.jpg")`                             |
| **Style বা Class পরিবর্তন** | `element.style.color = "red"`<br>`element.classList.add("active")` |

---
