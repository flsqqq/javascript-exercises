const findTheOldest = function(peopleArr) {
    
    // get current year if there's no death date
    let currentYear = new Date().getFullYear();
    let oldestAge = 0;
    let currPersonAge = 0;
    let oldest = {};
    
    for (p in peopleArr) {
        let name = peopleArr[p].name;
        let yearOfBirth = peopleArr[p].yearOfBirth;
        let yearOfDeath = peopleArr[p].yearOfDeath;

        // if there's no death date, set current year as year of death
        if (!yearOfDeath) yearOfDeath = currentYear;

        currPersonAge = yearOfDeath - yearOfBirth;

        if (currPersonAge > oldestAge) {
            oldestAge = currPersonAge;
            oldest = peopleArr[p];
        }
    }
    return oldest;
}

// Do not edit below this line
module.exports = findTheOldest;
