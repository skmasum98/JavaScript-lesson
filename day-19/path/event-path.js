console.log("Event Bubbling, Capturing, and Delegation");


// Event Capturing and Bubbling

// In event bubbling, the event starts from the target element and bubbles upwards through its ancestors (parent → grandparent → etc.).

// The Flow is: Child → Parent → Grandparent → Document

// Bubbling

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent Clicked");
    
})
document.getElementById("child").addEventListener("click", () => {
    console.log("Child Clicked");
    
})
document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent Clicked");
    
})

// Capturing

// In event capturing, the event flows from the outermost ancestor down to the target element before the actual target handles it.

// The Flow is: Document → Grandparent → Parent → Child

// Rarely used, but useful if you want to catch events before they reach the target.

document.getElementById("parent").addEventListener("click", () => {
    console.log("Capture Parent Clicked");
    
},true)
document.getElementById("child").addEventListener("click", () => {
    console.log("Capture  Child Clicked");
    
},true)
document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Capture Grandparent Clicked");
    
},true)