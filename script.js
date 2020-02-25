
// DOM

let pwLocation = document.getElementById('passWordLocation').firstChild.nodeValue; //get value & location of PW location
// console.log(pwLocation);

let pwUpperCaseLocation = document.getElementById('upperCase').checked; //get value & location of PW location
console.log(pwUpperCaseLocation);

let pwNumbrLocation = document.getElementById('lowerCase').checked; //get value & location of PW location
console.log(pwNumbrLocation);

let pwLowerLocation = document.getElementById('numbers').checked; //get value & location of PW location
console.log(pwLowerLocation);

let pwSymbolLocation = document.getElementById('symbols').checked; //get value & location of PW location
console.log(pwSymbolLocation);


let lenght = document.getElementById('pwlength').firstChild;
console.log(lenght);

let pwLenght = 20;
console.log('pwlength is '+pwLenght);

// Varibles 

let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCase = 'abcdefghijklmnopqstuvwxyz';
let symbols = "#$%&>?@";
let numbers = '0123456789';

// Temp place holder for item to include form DOM selection
// DomItemsToInclude = '';

    if (pwUpperCaseLocation === true && pwNumbrLocation === true && pwLowerLocation === true && pwSymbolLocation === true) {
        // includedItems = lowerCase + upperCase + symbols + numbers
        console.log('All True')
        
    }
    if (pwUpperCaseLocation === true && pwLowerLocation === true && pwSymbolLocation === false) {
        // items = lowerCase + upperCase + symbols
        console.log('upper, lower, symbol, is  True')
    }
    if (pwUpperCaseLocation === true &&  pwLowerLocation === true) {
        // items = lowerCase + upperCase
        console.log('upper, lower, is  True')
    }
    else {
        // items = lowerCase
        console.log('Only Lower')
    };


// Items to inlcude in PW generator
let includedItems = symbols + numbers + upperCase; //change to accept DomItemsToInclude 


let pwitems = includedItems;

// Number of items to itirate over
let n = includedItems.length;


// Location for Automatically generated PW
let retVal = '';

// Loop to randomly select chars include in includedItems

for (let i = 0; i < pwLenght; i++) {
    retVal += includedItems.charAt(Math.floor(Math.random() * n));
}

document.getElementById('passWordLocation').textContent = retVal;
console.log(' New pwLocation val is :' + pwLocation);

