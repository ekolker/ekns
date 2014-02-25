function countWords(inputWords)
{
  // console.log(inputWords)
  // var output = {};
  return inputWords.reduce(function(prev, curr)
  {
    if (prev[curr] === undefined)
    {
      prev[curr] = 0;
    }
    prev[curr]++;
    return prev;
    // console.log(prev, curr)
  }, {});
}

module.exports = countWords;


/*

 function countWords(arr) {
   return arr.reduce(function(countMap, word) {
     countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
     return countMap
   }, {}) // second argument to reduce initialises countMap to {}
 }

 module.exports = countWords