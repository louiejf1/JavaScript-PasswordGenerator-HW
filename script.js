// DOM Elements

const resultEl = Document.getElementById('result');
const lenghtEl = Document.getElementById('length');
const upperCaseEl = Document.getElementById('upperCase');
const lowerCaseEl = Document.getElementById('lowerCase');
const numbersEl = Document.getElementById('numbers');
const symbolsEl = Document.getElementById('symbols');
const clipbordEl = Document.getElementById('clipbord');



// http://www.net-comber.com/charset.html

const randomGenerator = {
    lowerChar: getRandomLower,
    upperChar: getRandomUpper,
    numberChar: getRandomNum,
    symbolChar: getRandomChar
};

generateEl.addEventListener('click',() => {
        const lenghtValue = lenghtEl.value;

        console.log(lenghtValue);
    }

)


function getRandomLower () {
    return String.fromCharCode(Math.floor(Math.random()* 26) + 97);
}
// console.log(getRandomLower());

function getRandomUpper () {
    return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
}
// console.log(getRandomUpper());

function getRandomNum() {
    return String.fromCharCode(Math.floor(Math.random()* 10) + 48);
}
// console.log(getRandomNum());

function getRandomChar() {
    return String.fromCharCode(Math.floor(Math.random()* 6) + 33);
}
// console.log(getRandomChar());