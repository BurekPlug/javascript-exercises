const removeFromArray = function(arr, ...args) {
    let resArr=arr.slice();
    for (let arg of args)
    {
        resArr = resArr.filter( item => item !== arg);
    }
    
    return resArr;
};

// Do not edit below this line
module.exports = removeFromArray;
