function palindromeChecker(word) {
  let wordArr = word.split("");

  let revWord = [];
  for (let i = wordArr.length - 1; i >= 0; i--) {
    revWord.push(wordArr[i]);
  }

  let newWord = wordArr.toString();
  let newRevWord = revWord.toString();

  if (newWord === newRevWord) {
    return true;
  } else {
    return false;
  }
}

let word = prompt("Enter a word to check if it is a palindrome or not: ");

let answer = palindromeChecker(word);

console.log(answer);
