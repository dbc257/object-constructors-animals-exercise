const fs = require('fs');
const Animal = require('./Animal');

const contents = fs.readFileSync(process.argv[2], 'utf8');

let data = contents.split('\n');

//! remove first and last lines
// option 1 - shift and pop
data.shift() // remove first value
data.pop() // remove last value

// option 2 - slice
// data = data.slice(1, -1);

// option 3 - loop but skip 0 and last index
// for (let i = 1; i < data.length - 1; i++) {
//   const element = data[i];
  
// }

//! split into columns via the comma
// option 1 - nested for loops
// for (let i = 0; i < data.length; i++) {
//   const row = data[i];
//   const values = row.split(',');
//   // remove the double-quotes
//   for (let j = 0; j < values.length; j++) {
//     values[j] = values[j].slice(1, -1);
//   }
//   data[i] = values;
// }

// option 2 - map
data = data.map((elem) => {
  // option 1 - remove 1st * last ", and then split on comma
  return elem.slice(1, -1).split('","');

  // option 2 - replace all " and split on comma
  // return elem.replace(/"/g, '').split(',');
})

//! Create Animals from data
// // option 1 - loop and push Animals into an array
// const animals = []
// for (let i = 0; i < data.length; i++) {
//   const row = data[i];
//   animals.push(new Animal(row[0], row[1], row[2]));
// }

// option 2 - map over data
const animals = data.map((row) => {
  return new Animal(row[0], row[1], row[2]);
})

//! Find most frequent group 
const groupedAnimals = {};
animals.forEach((animal) => {
  if (!groupedAnimals[animal.species]) {
    groupedAnimals[animal.species] = [];
  }
  groupedAnimals[animal.species].push(animal);
})

const species = Object.keys(groupedAnimals);

species.sort((a,b) => {
  return groupedAnimals[a].length < groupedAnimals[b].length ? 1 : -1;
})
const mostFreq = species[0];
const mostFreqGroup = groupedAnimals[species[0]];

// console.log(mostFreq)
// console.log(mostFreqGroup)
//! Find oldest of most frequent group
mostFreqGroup.sort((a, b) => {
  if (a.birthdate === b.birthdate) {
    return 0;
  } else if (a.birthdate < b.birthdate) {
    return -1;
  } else {
    return 1;
  }
})
const oldest = mostFreqGroup[0];

//! Make oldest speak
oldest.speak();




