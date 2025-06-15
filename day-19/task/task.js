console.log("task day 19");


const tabs = document.querySelector(".tab-headers");
const allTab = document.querySelectorAll(".tab")
const allContent = document.querySelectorAll(".content")


tabs.addEventListener("click", (event) => {
    
          
    const clickedTab =event.target;
    if (!clickedTab.classList.contains("tab")) return;
    
        allTab.forEach(
            tab => tab.classList.remove("active")
        );

    
        allContent.forEach(
            content => content.classList.remove("active")
        );
    
    const tabId = clickedTab.getAttribute("data-tab");
    
    
    clickedTab.classList.add("active");
    document.querySelector(`.content[data-tab="${tabId}"]`).classList.add("active");
        console.log(clickedTab.innerText);
        
});


document.addEventListener("keydown", (e) => {
  if (["1", "2", "3"].includes(e.key)) {
    const targetTab = document.querySelector(`.tab[data-tab="${e.key}"]`);
    if (targetTab) targetTab.click();
  }
});

