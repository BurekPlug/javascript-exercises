const reverseString = function(input) {
    const inputArr = input.split("");
    let resultString = "";
    for (let idx = (input.length-1); idx>=0; idx--)
    {
        resultString += inputArr[idx];
    }
    return resultString;
};

// Do not edit below this line
module.exports = reverseString;
