const findLongestWord = function (string) {
  let words = string.split(' ');
  let longestWord;
  let wordLength = 0;

  for (let i = 0; i < words.length; i++) {
    wordLength = words[1].length;
    if (words[i].length > wordLength) {
      longestWord = words[i];
      return longestWord;
    }
  }
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
