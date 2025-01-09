const sumAll = function(a,b) {
    if(a<0 || b<0 || isNaN(a)|| isNaN(b))
        return "ERROR";

        var sum=0;

    if(a<=b)
    {
        for(var i = a;i<=b;i++)
        {
            sum+=i;

        }
    }
    else{
        for(var i=a;i>=b;i--)
        {
            sum+=i;
        }
    }
    return sum;


};

// Do not edit below this line
module.exports = sumAll;
