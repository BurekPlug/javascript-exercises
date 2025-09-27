const fibonacci = function(a) {
    let sum = 0;
    fiboArr = [ 0, 1]

    if(typeof a === "string")
        a = Number(a)

    if (Number.isInteger(a))
    {
        if(a<0)
            return ("OOPS");
        
        switch (a) {
            case 0:
                return 0;
            case 1:
                return 1
            default:
                for (let i = 2; i <= a; i++) {
                    fiboArr.push(fiboArr[i-2] + fiboArr[i-1]);
                }
                return fiboArr[a];
        }

    }
};

// Do not edit below this line
module.exports = fibonacci;
