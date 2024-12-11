'use strict';

const ages = (persons) => {
  const ageByName = {};
  for (const name in persons) {
    ageByName[name] = persons[name].died - persons[name].born;
  }
  return ageByName;
};
const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
}

console.log(ages(persons));
