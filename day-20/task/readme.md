### 1. Traverse and Toggle Classes

        <ul class="nav-menu">
            <li class="active">Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
```javascript
document.querySelector('.nav-menu').addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    const ul = e.target.parentElement;
    ul.querySelectorAll('li').forEach(li => li.classList.remove('active'));

    // যদি already active থাকে তাহলে toggle করে সরিয়ে দেবে
    e.target.classList.toggle('active');
  }
});
```


---
### 2. Highlight Text Using Range
```html
        <p id="para">My son Mehmed reads on class one</p>
```

```js
const paraElem = document.getElementById('para');

const range = document.createRange();

range.setStart(paraElem.firstChild, 7)
range.setEnd(paraElem.firstChild, 13)

const content = range.extractContents();

const mark = document.createElement('mark');
mark.style.backgroundColor = 'yellow';

mark.appendChild(content);
range.insertNode(mark);
```


### 3 Use DocumentFragment for Performance 

```html
        <p>Insert 100 list items into the DOM using:</p>
        <ul style="list-style: none;" id="item-list"></ul>
<hr>
        <br>
        <div>
            <h2>DocumentFragment (all at once)</h2>
        <ul style="list-style: none;" id="ul-item"></ul>
        </div>
```

```js

const listElem = document.getElementById("item-list");

  for (let i = 0; i <= 100; i++) {
    const liElem = document.createElement("li");
    liElem.textContent = `DOM using ${i}`;
   
    listElem.appendChild(liElem); // inserted one by one into DOM
  }

  //DocumentFragment (all at once)

  const listElemFr = document.getElementById("ul-item");
  const fragment = document.createDocumentFragment(); // Create the fragment

  for (let i = 0; i <= 100; i++) {
    const liElem = document.createElement("li");
    liElem.textContent = `Document Fragment ${i}`;
    liElem.style.textDecoration = "none";
    fragment.appendChild(liElem); // Append to fragment, not DOM
  }

  listElemFr.appendChild(fragment); // Append all at once to DOM

```

