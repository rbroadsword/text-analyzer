// Business Logic
function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
}
  let wordCount = 0; 
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  console.log(wordCount)
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (text.trim().length === 0) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
  if(word.toLowerCase() === element.toLowerCase()) {
    wordCount++
  }
});
  return wordCount;
}