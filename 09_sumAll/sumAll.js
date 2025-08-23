const sumAll = function(fst, snd) {
    
    var lowBound, uppBound;
    
    if(fst>snd)
    {
        uppBound = fst;
        lowBound = snd;
    }
    else
    {
        uppBound = snd;
        lowBound = fst;
    }
    
    if (lowBound < 0 || uppBound < 0 || !Number.isInteger(lowBound)|| !Number.isInteger(uppBound)) return "ERROR";
    
    var sum = 0;
    for (let i = lowBound; i<=uppBound; i++)
    {
    sum += i;
    }
    

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
