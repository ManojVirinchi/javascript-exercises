const reverseString = function(str) {
    
    var n = str.length;
    var res=""
    for(var i=n-1;i>=0;i--)
    {
        res+=str.at(i);
    }

    return res;

};

// Do not edit below this line
module.exports = reverseString;
