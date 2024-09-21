const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const findTheOldest = function(array) {
  const sortedOldest = array.sort((a, b) => {
    let onePerson;
    let secondPerson;
    const currentYear = new Date().getFullYear();
    if (a.yearOfDeath !== undefined && b.yearOfDeath !== undefined) {
      onePerson = a.yearOfDeath - a.yearOfBirth;
      secondPerson = b.yearOfDeath - b.yearOfBirth;
    } else if (a.yearOfDeath === undefined) {
      onePerson = currentYear - a.yearOfBirth;
      secondPerson = b.yearOfDeath - b.yearOfBirth;
    } else if (b.yearOfDeath === undefined) {
      secondPerson = currentYear - b.yearOfBirth;
      onePerson = a.yearOfDeath - a.yearOfBirth;
    }
    return secondPerson - onePerson;
  })
  return sortedOldest[0];
};

console.log(findTheOldest(people))
// findTheOldest(people)

// Do not edit below this line
module.exports = findTheOldest;
