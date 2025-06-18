console.log("DOM - Advanced");

// Efficient DOM traversal
const parent = document.querySelector('.card');
const firstChild = parent.firstElementChild;
const next = firstChild.nextElementSibling;
const lastChild = parent.lastElementChild;
const parentOfElement = firstChild.parentElement;

// Templates and Cloning
const templete = document.getElementById("card-template")
const clone = templete.content.cloneNode(true);
clone.querySelector('.title').textContent = "Cloned Card Title";
clone.querySelector('.desc').textContent = "This is a cloned card description.";
document.body.appendChild(clone);


//document Fragment
const fragment = document.createDocumentFragment();
for (let i = 0; i < 5; i++) {
  const li = document.createElement('li');
  li.innerHTML =    `<h2>Card Fragment ${i + 1}</h2>
                    <p>This is Fragment card number ${i + 1}.</p>`;
  fragment.appendChild(li);
}
document.querySelector('#list').appendChild(fragment);
// document.body.appendChild(fragment);


// range

const para = document.querySelector('#para');

const range = document.createRange();
range.setStart(para.firstChild, 6);
range.setEnd(para.childNodes[2], 4);

const selection = range.cloneContents();
console.log(selection);

// shadow DOM
 document.querySelector(".card").innerHTML

 // Shadow host 
const shadowHost = document.querySelector('#box');
const shadow = shadowHost.attachShadow({ mode: 'open' });
shadow.innerHTML = `
  <style>
    p {
      color: blue;
      font-size: 20px;
    }
  </style>
  <p>This is a shadow DOM paragraph.</p>
`;


// Advance class manipulation

const btn = document.querySelector('.btn');
btn.classList.add('active');
btn.classList.remove('active');
btn.classList.toggle('active'); // Toggles the 'active' class
btn.classList.contains('active'); // Checks if 'active' class is present
btn.classList.replace('active', 'inactive'); // Replaces 'active' with 'inactive'

// handlling large scale dom update

function addItems(count) {
  const frag = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const div = document.createElement('div');
    div.textContent = `Item ${i}`;
    frag.appendChild(div); // DOM-এ নয়, fragment-এ রাখছি
  }

  document.body.appendChild(frag); // শেষে একবারে DOM-এ যুক্ত
}

addItems(100); // ১০০০টা ডিভ দ্রুত যোগ


// mutation observer

// const observer = new MutationObserver(callback);
  // observer.observe(targetNode, config);

const target = document.getElementById('watchMe');

const Observer = new MutationObserver((mutationsList, observer) => {
   for (const mutation of mutationsList) {
    console.log(`Mutation type: ${mutation.type}`);

    if (mutation.type === 'childList') {
      console.log('A child node has been added or removed.');
    } else if (mutation.type === 'attributes') {
      console.log(`The ${mutation.attributeName} attribute was modified.`);
    }
   }
});
