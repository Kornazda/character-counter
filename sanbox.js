const engInp = document.getElementById('engInput')
const engButton = document.getElementById('engButton')

let vowAnswer = document.getElementById('vowels')
let consAnswer = document.getElementById('consonants')
let yAnswer = document.getElementById('ys')
let wordsAnswer = document.getElementById('words')
let charAnswer = document.getElementById('chars')

let consonants = 0;
let vowels = 0;
let yCounter = 0;
let wordCounter = 0;
let characterCounter = 0;

const counter = () => {
    for (let i = 0; i < engInp.value.length; i++) {
        if (engInp.value[i] == "a" || engInp.value[i] == "e" || engInp.value[i] == "i" || engInp.value[i] == "o" || engInp.value[i] == "u") {
            vowels++
        } else if (engInp.value[i] == " "){
            wordCounter++
        } else if (engInp.value[i] == "y" || engInp.value[i] == "Y"){
            yCounter++
        } else {
            consonants++
        }
    }

    
    vowAnswer.innerHTML = vowels
    consAnswer.innerHTML = consonants
    yAnswer.innerHTML = yCounter
    wordsAnswer.innerHTML = wordCounter + 1
    characterCounter = consonants + vowels
    charAnswer.innerHTML = characterCounter
}


engButton.addEventListener('click', () => {
     counter()
     consonants = 0;
     vowels = 0;
     yCounter = 0;
     wordCounter = 0;
     characterCounter = 0;
})