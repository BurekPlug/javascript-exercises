const findTheOldest = function(persons) {
    //add age
    persons.map(setAge);
    persons = persons.sort((a,b) => b.age - a.age);
    return persons[0]
};

function setAge(val) {
    if (val.yearOfDeath === undefined)
        val.age = (new Date().getFullYear()) - val.yearOfBirth
    else
    {
        val.age = val.age = val.yearOfDeath - val.yearOfBirth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
