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

