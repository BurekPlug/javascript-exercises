const repeatString = function(string, num) {
    if (num<0) return "ERROR";
    resultstring ="";
    for (let i = 0; i<num; i++) {
        resultstring = resultstring.concat(string);
    }
    return resultstring;
};

// Do not edit below this line
module.exports = repeatString;
