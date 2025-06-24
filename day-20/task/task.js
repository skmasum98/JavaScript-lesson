
document.querySelector('.nav-menu').addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    const ul = e.target.parentElement;
    ul.querySelectorAll('li').forEach(li => li.classList.remove('active'));

    // যদি already active থাকে তাহলে toggle করে সরিয়ে দেবে
    e.target.classList.toggle('active');
  }
});


// question 2
// <p id="para">My son Mehmed is on class one</p>

const paraElem = document.getElementById('para');

const range = document.createRange();

range.setStart(paraElem.firstChild, 7)
range.setEnd(paraElem.firstChild, 13)

const content = range.extractContents();

const mark = document.createElement('mark');
mark.style.backgroundColor = 'yellow';

mark.appendChild(content);
range.insertNode(mark);



// question 3. Use DocumentFragment for Performance
// Insert 100 list items into the DOM using:

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



  // 

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


  // 5
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