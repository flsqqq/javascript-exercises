const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz1234567890';

    const processedStr = str
        .toLowerCase()
        .split('')
        .filter((char) => alphanumerical.includes(char))
        .join('');

    const reversedStr = processedStr.split('').reverse().join('');
    return processedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
