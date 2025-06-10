console.log("day 19 JavaScript Events");
// Event Handling in Markup
function handleClick (greeting) {
    console.log(`button clicked with  ${greeting}`);
    
}
// Event Handling in Script
const myBtn2Elem = document.getElementById("myBtn2")
myBtn2Elem.onclick = function()  {
    console.log(`My Btn 2 Clicked`);
    
}
// Can not add multiple

myBtn2Elem.onclick = function()  {
    console.log(`My Btn 2 Clicked again`);
    
}


// Separating fundtion
myBtn2Elem.onclick = handleClick;
myBtn2Elem.onclick = () => handleClick("Hola");


// addEventListener and removeEventListener

const countbtnElem = document.getElementById("countBtn")
// //addEventListener
// counter = 0;
// countbtnElem.addEventListener ("click", function(){
//     console.log("counter", counter);
//     counter++;
// })

// // removeEventListener
// countbtnElem.removeEventListener ("click", function(){
//     console.log("counter", counter);
//     counter++;
// })


// Write way : first define funconality
counter = 0;
const handleCount = function (){
    console.log("counter", counter);
    counter++;
}

const greeting = function (){
    console.log("Thank You");
    
}

countbtnElem.addEventListener ("click", handleCount)
countbtnElem.addEventListener ("click", greeting)
countbtnElem.removeEventListener ("click", handleCount)

// event Object

const searchElem = document.getElementById("search-id")
function handleChange(event){
    console.log(event);
    console.log("Event Type", event.type);
     console.log("Target:", event.target);
    console.log("Target Name:", event.target.name);
    console.log("Target Value:", event.target.value);
    console.log("Event Type:", event.type);
    console.log("Current Target:", event.currentTarget);
    console.log("this:", this);
    
    
}

searchElem.addEventListener("change", handleChange)