const repeatString = function(string, num) {
    resultstring ="";
    for (let i = 0; i<num; i++) {
        resultstring = resultstring.concat(string);
    }
    return resultstring;
};

// Do not edit below this line
module.exports = repeatString;
