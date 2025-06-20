

// Add this script after your HTML or in a DOMContentLoaded event
const nav = document.getElementById('nav');
const items = nav.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', function() {
    // Remove 'active' from all items
    // items.forEach(li => li.classList.remove('active'));
    // Add 'active' to the clicked item
    this.classList.toggle('active');
  });
});