// let letter = prompt("enter a letter: ");

// if (
//   letter === "a" ||
//   letter === "e" ||
//   letter === "i" ||
//   letter === "o" ||
//   letter === "u"
// ) {
//   console.log("vowel");
// } else {a
//   console.log("not a vowel");
// }

//// w/ array

let letter = prompt("enter a letter: ");

function findVowel(letter) {
  let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  for (let i = 0; i < vowels.length; ) {
    if (letter === vowels[i]) {
      console.log("vowel");
      break;
    }
  }
  console.log("not a vowel");
}

console.log(findVowel(letter));
