const engInp = document.getElementById("engInput");
const form = document.querySelector("form");

const vowAnswer = document.getElementById("vowels");
const consAnswer = document.getElementById("consonants");
const yAnswer = document.getElementById("ys");
const wordsAnswer = document.getElementById("words");
const charAnswer = document.getElementById("chars");

let consonants = 0;
let vowels = 0;
let yCounter = 0;
let wordCounter = 0;
let characterCounter = 0;

const number = "1234567890";
const vowelLetters = "aeiou";

engInp.onkeypress = (e) => {
  const chr = String.fromCharCode(e.which);
  if (number.indexOf(chr) >= 0) return false;
};

const counter = () => {
  if (engInp.value.trim() === "") {
    alert("box has whitespaces please do not use them");
    engInp.value = "";
    return;
  }

  for (let i = 0; i < engInp.value.trim().length; i++) {
    if (vowelLetters.includes(engInp.value[i])) {
      vowels++;
    } else if (engInp.value.trim()[i] === " ") {
      wordCounter++;
    } else if (engInp.value[i].toLowerCase() === "y") {
      yCounter++;
    } else {
      consonants++;
    }
  }

  vowAnswer.innerHTML = vowels;
  consAnswer.innerHTML = consonants;
  yAnswer.innerHTML = yCounter;
  wordsAnswer.innerHTML = wordCounter + 1;
  characterCounter = consonants + vowels;
  charAnswer.innerHTML = characterCounter;
};

form.onsubmit = (e) => {
  e.preventDefault();

  counter();
  consonants = 0;
  vowels = 0;
  yCounter = 0;
  wordCounter = 0;
  characterCounter = 0;
};
