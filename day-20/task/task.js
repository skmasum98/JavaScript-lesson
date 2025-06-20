
document.querySelector('.nav-menu').addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    const ul = e.target.parentElement;
    ul.querySelectorAll('li').forEach(li => li.classList.remove('active'));

    // যদি already active থাকে তাহলে toggle করে সরিয়ে দেবে
    e.target.classList.toggle('active');
  }
});


// question 2
// <p id="para">My son Mehmed is on class one</p>

const paraElem = document.getElementById('para');

const range = document.createRange();

range.setStart(paraElem.firstChild, 7)
range.setEnd(paraElem.firstChild, 13)

const content = range.extractContents();

const mark = document.createElement('mark');
mark.style.backgroundColor = 'yellow';

mark.appendChild(content);
range.insertNode(mark);

