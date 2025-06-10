console.log("Event Defaults");

document.getElementById("websiteLink").addEventListener("click", function(e){
    e.preventDefault();
    console.log("Navigating to website prevented");
    
})


document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    console.log("Form submission prevented");
    
})