const ActiveMenu = document.querySelector(".active");

const menuParent = ActiveMenu.parentElement;
const menuChildren = menuParent.children;

menuChildren.classList.remove("active");

