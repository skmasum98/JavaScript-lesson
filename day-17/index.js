console.log("Day 17 - 40 Days of JavaScript - Intro to JavaScript DOM");

console.log(document);

let titleElem = document.getElementById("heading");
console.log(titleElem);

let infoElems = document.getElementsByClassName("info");

console.log(infoElems);
console.log(infoElems[0].innerHTML);
console.log(infoElems[1].innerHTML);


[...infoElems].forEach((elem) => {
    console.log(elem);
});

// By Tag Name:
let pTagElems = document.getElementsByTagName("p");
console.log(pTagElems); // HTMLCollection(3) [p.info, p.info, p]

// ✅ querySelector:
let para = document.querySelector("p.info");
console.log("using query selector", para); // p.info first element

// ✅ querySelectorAll:
let paras = document.querySelectorAll("p.info");
console.log("using query selector all", paras);


// ✅ Changing the bg color 
function highlightText() {
    console.log("About to highlight a text...");
    let elements = document.querySelectorAll("p.info");
    elements.forEach((element) => {
        element.style.backgroundColor = "yellow";
    });
}



// Function to filter list items based on input
function filterList() {
    const inputElem = document.getElementById("searchInput");
    const input = inputElem.value;

    const items = document.querySelectorAll("ul#itemList li");

    items.forEach((item) => {
         item.style.display = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none";
        
    });

}
