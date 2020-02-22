
// Varibles
let pwLenght = 12;

let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCase = 'abcdefghijklmnopqstuvwxyz';
let symbols = "#$%&>?@";
let numbers = '0123456789';

// Temp place holder for item to include form DOM selection
// DomItemsToInclude = '';

    // if (pwitems === lowerCase + upperCase + symbols + numbers) {
    //     items = lowerCase + upperCase + symbols + numbers
    // }
    // if (pwitems === lowerCase + upperCase + symbols) {
    //     items = lowerCase + upperCase + symbols
    // }
    // if (pwitems === lowerCase + upperCase) {
    //     items = lowerCase + upperCase
    // }
    // else {
    //     items = lowerCase
    // };


// Items to inlcude in PW generator
let includedItems = symbols + numbers + upperCase; //change to accept DomItemsToInclude 
// console.log('included chars: ' + includedItems);


let pwitems = includedItems;

// Number of items to itirate over
let n = includedItems.length;
console.log('n is = ' + n + ' chars in length');

// Location for Automatically generated PW
let retVal = '';

// Loop to randomly select chars include in includedItems

for (let i = 0; i < pwLenght; i++) {
    retVal += includedItems.charAt(Math.floor(Math.random() * n));
}

console.log(retVal + ' Length is :' + retVal.length);