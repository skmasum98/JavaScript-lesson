
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
    liElem.textContent = `Item ${i}`;
   
    listElem.appendChild(liElem); // inserted one by one into DOM
  }

  //DocumentFragment (all at once)

  const listElemFr = document.getElementById("item-list");
  const fragment = document.createDocumentFragment(); // Create the fragment

  for (let i = 0; i <= 100; i++) {
    const liElem = document.createElement("li");
    liElem.textContent = `Item ${i}`;
    liElem.style.textDecoration = "none";
    fragment.appendChild(liElem); // Append to fragment, not DOM
  }

  listElemFr.appendChild(fragment); // Append all at once to DOM