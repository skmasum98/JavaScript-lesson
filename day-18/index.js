console.log("Day 18: Dom Manipulation");

// Createing a new  element
const pElem = document.createElement("p");

pElem.innerText = "This is a paragraph created using JavaScript.";
document.body.appendChild(pElem);
console.log(pElem);


// insert element

// insert before

document.body.insertBefore(pElem, document.body.firstChild);