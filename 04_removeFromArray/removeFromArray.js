const removeFromArray = function(arr,...ind) {
    return arr.filter(item =>(!ind.includes(item)));
};

// Do not edit below this line
module.exports = removeFromArray;
