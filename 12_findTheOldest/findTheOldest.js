const findTheOldest = function(people) {
    return people.reduce((oldest,person)=>{

        if(person.yearOfDeath===undefined)
        {
            let today = new Date();
            person.yearOfDeath = today.getFullYear();
        }
        const personAge = person.yearOfDeath - person.yearOfBirth;
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;

        return personAge > oldestAge ? person : oldest;
    });

};

// Do not edit below this line
module.exports = findTheOldest;
