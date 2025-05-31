
const textElem = document.getElementById("text");
console.log("textElem", textElem);

// Convert the text into an array of words
const words = textElem.innerText.split(" ");
console.log("words", words);

// Find the Most Frequent Word
function mostFrequentWord(words) {
    const wordCount = words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});

    const sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);
    const mostFrequent = sortedWords[0];

    const resultElem = document.getElementById("result");
    resultElem.innerHTML = `Most Frequent Word: ${mostFrequent[0]} (Count: ${mostFrequent[1]})`;

    return mostFrequent[0];
}

const mostWord = mostFrequentWord(words);
console.log("Most Frequent Word:", mostWord);
console.log();


