const palindromes = function (text) {
    //create a single string with pure chars
    partStr = text.split(" ")
    let singString = partStr.join("");

    partStr = singString.split("!")
    singString = partStr.join("");


    partStr = singString.split("?")
    singString = partStr.join("");

    partStr = singString.split(",")
    singString = partStr.join("");

    
    partStr = singString.split(".")
    singString = partStr.join("");


    singString = singString.toUpperCase();

    //test the string
    for (let i = 0; i < (singString.length/2-1); i++)
    {

        if (singString[i] === singString[singString.length-1-i])
            {console.log("continue");
            continue;}
        else
            {console.log("false");
              return false;}
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
