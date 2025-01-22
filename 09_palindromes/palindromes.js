const palindromes = function (str) {

    const alphanumer = "abcdefghijklmnopqrstuvwxyz0123456789";

    const temp = str.toLowerCase().split('').filter((character)=>{return alphanumer.includes(character);})
    .join('');

    const temp2 = temp.split('').reverse().join('');

    return temp===temp2;
};

// Do not edit below this line
module.exports = palindromes;
