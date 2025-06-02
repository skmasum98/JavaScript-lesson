
const textElem = document.getElementById("text");
console.log("textElem", textElem);

// Convert the text into an array of words
const words = textElem.innerText.toLowerCase().split(" ");
console.log("words", words);

// Find the Most Frequent Word


const findMostFrequentWord =  {} ;
words.forEach((word) => {
findMostFrequentWord[word] = (findMostFrequentWord[word] || 0) + 1;
}
);

let mostFrequentWord = "";
let maxCount = 0;

for (const [word, count] of Object.entries(findMostFrequentWord)) {
    if (count > maxCount) {
        maxCount = count;
        mostFrequentWord = word;
    }
}
console.log("Most Frequent Word:", mostFrequentWord);

// Display the Most Frequent Word
const resultElem = document.getElementById("result");
resultElem.innerText = "Most Frequent Word: " + mostFrequentWord + " (Count: " + maxCount + ")";


//2. Create a zebra pattern

const zebraElem = document.querySelectorAll("#cars li")
console.log("zebraElem", zebraElem);

zebraElem.forEach((item, index) => {
    if (index % 2 === 0) {
        item.style.color = 'white';
        item.style.backgroundColor = 'black';

    } else {
        item.style.color = 'black';
        item.style.backgroundColor = 'white';
    }   
});

// 4. Find and Replace Text Inside a Page</h3>
// Write a script that finds all occurrences of a word inside a <p> tag and replaces them with another word dynamically.

// <p id="textToReplace">This is a sample text. This text is for testing purposes.</p>
//         <input type="text" id="findWord" placeholder="Word to find">
//         find word from paragraph and highlight it with a different color
//         <button id="findButton">Find</button>

//         <input type="text" id="replaceWord" placeholder="Word to replace">
//         <button id="replaceButton">Replace</button>
//         <p id="resultText"></p>

function findAndReplace() {
      const findWord = document.getElementById("findWord").value.trim();
      const replaceWord = document.getElementById("replaceWord").value.trim();
      
      if (!findWord) {
        alert("Please enter a word to find.");
        return;
      }

      const paragraphs = document.querySelectorAll("p");
      const regex = new RegExp(findWord, "gi");

      paragraphs.forEach(p => {
        p.innerHTML = p.innerHTML.replace(regex, replaceWord);
      });
    }


    // Extract and Count Unique Links from a Page
// Count all the unique hyperlinks (<a>) in a page and display their count.

    function countUniqueLinks() {
      const allLinks = document.querySelectorAll("a");
      const linkSet = new Set();

      allLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href) {
          linkSet.add(href);
        }
      });

      document.getElementById("count").innerText = linkSet.size;
    }