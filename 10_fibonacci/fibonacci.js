const fibonacci = function(n) {
    if (typeof n !== 'number') {
        count = parseInt(countArg)
    }

    if (n < 0) return "OOPS";
    if (n == 0) return 0;
    let arr = new Array(n);

    arr[0]=1;
    arr[1]=1;

    for(let i=2;i<=n;i++)
    {
        arr[i]=arr[i-1]+arr[i-2];
    }

    return arr[n-1];

};

// Do not edit below this line
module.exports = fibonacci;
