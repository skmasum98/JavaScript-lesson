
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
