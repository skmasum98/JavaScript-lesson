console.log("Day 18: Dom Manipulation");

// Createing a new  element
const pElem = document.createElement("p");

pElem.innerText = "This is a paragraph created using JavaScript.";
document.body.appendChild(pElem);
console.log(pElem);


// insert element

// insertBefore

const span = document.createElement("span");
span.innerText = "আমি একটি span";
const pElement = document.querySelector("p");
document.body.insertBefore(span, pElement);

// insert after
// const h2 = document.createElement("h2");
// h2.innerText = "আমি একটি h2";
// document.body.insertBefore(h2, pElement.nextElementSibling);

// // insert at the end
// const div = document.createElement("div");
// div.innerText = "আমি একটি div";
// document.body.insertBefore(div, null);


// modify content
{
    //innerText vs innerHTML
    const pElement2 = document.querySelector("p");
    pElement2.innerText = "<u>This is a modified</u> paragraph using innerText.";

    //it will not render HTML tags, it will show the text as is.
    // <u>This is a modified</u> paragraph using innerText.

    //innerHTML will render HTML tags
    pElement2.innerHTML = "<u>This is a modified</u> paragraph using innerHTML.";
}

// remove element
{
    const list = document.getElementById("item-list");
    const firstItem = list.children[0];
    list.removeChild(firstItem); // remove first item from the list

    const pElement = document.querySelector("p");
    //list.replaceChildren(pElement); // সব children মুছে p যোগ

   //document.getElementById("removeMe").remove(); // সরাসরি মুছে ফেলা

}


// // Read, Write, Remove Attributes
// {
//     const imgElm = document.querySelector("img")
//     // Read attribute
//     // console.log(imgElm.getAttribute("src")); // Read src attribute
//     // console.log(imgElm.src); // Read src attribute using property

//     // Write attribute
    

//     imgElm.setAttribute("src", "images.png"); // Change src attribute

//     // Remove attribute
//     imgElm.removeAttribute("height"); // Remove height attribute

// }

const imgElm = document.querySelector("img");
const removeHeightBtn = document.getElementById("removeHeight");

removeHeightBtn.addEventListener("click", () => {
    imgElm.removeAttribute("height"); // Remove height attribute
    console.log("Height attribute removed");
});

// remove width btn
const removeWidthBtn = document.getElementById("removeWidth");

removeWidthBtn.addEventListener("click",  () => {
    imgElm.removeAttribute("width");
});

// Change image
function changeImgSrc() {
    const imageElement = document.getElementById("changeImgSrc")
    imageElement.setAttribute("src", "images.png")
    
}