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

### 4. Build a “Smart Cloner”

```html
    <p>Create a UI with an element and a “Clone” button. Use cloneNode(true) and cloneNode(false) and show the difference visually.</p>
    <div class="container">
        <div class="controls">
            <button id="clone-true">Clone (true)</button>
            <button id="clone-false">Clone (false)</button>

        </div>

        <div id="original" class="box">
            <h2>Original Box</h2>
            <p>This paragraph is inside the box.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi similique sed dolor molestiae eaque repellendus commodi suscipit, sequi laudantium eius officiis ullam omnis, veniam ex consequatur labore voluptatem mollitia. Corrupti.</p>
        </div>

        <h3>Clones:</h3>
        <div id="clones"></div>
    </div>
```

```js
const original = document.getElementById("original");
  const clones = document.getElementById("clones");

  document.getElementById("clone-false").addEventListener("click", () => {
    const shallowClone = original.cloneNode(false); // Only clones outer box
    shallowClone.style.borderColor = "blue";
    // shallowClone.textContent = "Clone Node False ";
    clones.appendChild(shallowClone);
  });

  document.getElementById("clone-true").addEventListener("click", () => {
    const deepClone = original.cloneNode(true); // Clones box + children
    deepClone.style.borderColor = "red";
    clones.appendChild(deepClone);
  });

```

### 5. MutationObserver Watcher

```html
    <div id="watched" class="box">
    Hello, I am being watched!
    </div>

    <button onclick="addChild()">Add Child</button>
    <button onclick="changeClass()">Change Class</button>
    <button onclick="changeText()">Change Text</button>

</div>
```
  
```js
  const watched = document.getElementById('watched');

  // Set up the MutationObserver
  const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        console.log('🔍 New child node added:', mutation.addedNodes[0]);
      }
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        console.log('🔍 Class attribute changed to:', watched.className);
      }
      if (mutation.type === 'characterData') {
        console.log('🔍 Text content modified:', mutation.target.data);
      }
    }
  });

  // Start observing
  observer.observe(watched, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true // Needed to watch text changes inside
  });

  // Button functions
  function addChild() {
    const newElem = document.createElement('p');
    newElem.textContent = 'I am a new child!';
    watched.appendChild(newElem);
  }

  function changeClass() {
    watched.classList.toggle('highlight');
  }

  function changeText() {
    watched.firstChild.textContent = 'Text has been updated!';
  }

```