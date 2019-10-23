'use strict';

let myCipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
};
//'block argon meter bells brown croon droop'
const wordToDecode = 'craft block argon meter bells brown croon droop';

function decode(word, cipher){
    let decodedLetter;
    switch(word[0]){
        case Object.keys(cipher)[0]:
            decodedLetter === word[1];
            return decodedLetter;
        case Object.keys(cipher)[1]:
            decodedLetter === word[2];
            return decodedLetter;
        case Object.keys(cipher)[2]:
            decodedLetter === word[3];
            return decodedLetter;
        case Object.keys(cipher)[3]:
            decodedLetter === word[4];
            return decodedLetter;
        default:
            return ' ';
    }
}

let splitWord = wordToDecode.split(' ');
console.log(splitWord);
let newAry;

splitWord.forEach(function(decode, i) {
    console.log(decodedLetter);
  });
// console.log(Object.keys(myCipher)[0]);

console.log(decode(wordToDecode, myCipher));

// const decodedWord = `${decode('craft')}${decode('block')}${decode('argon')}${decode('meter')}${decode('bells')}${decode('brown')}${decode('croon')}${decode('droop')}`;
// console.log(decodedWord);