/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
    let SArray = S.split('');
    let lettersOnly = S.split('').reverse().filter(char =>  char.match(/^[A-Za-z]/));

    let letterIndex = 0;
    return SArray.map(char => {
        if (char.match(/[A-Za-z]/))
            return lettersOnly[letterIndex++];
        else 
            return char;
    }).join('');
};

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));

// matches non letters /[^A-Za-z]/