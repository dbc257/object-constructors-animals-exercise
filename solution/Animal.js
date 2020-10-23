function Animal(name, birthdate, species) {
  this.name = name;
  this.birthdate = new Date(birthdate);
  this.species = species;
}
Animal.prototype.getAge = function() {
  let day = new Date();
  let actualAge = Math.abs(this.birthdate.getFullYear() - day.getFullYear());
  return actualAge;
}
Animal.prototype.speak = function() {
  if (this.species === 'dog') {
    console.log(`${this.name}, the ${this.getAge()} year old ${this.species}, says 'Woof'!`);
  } else if (this.species === 'cat') {
    console.log(`${this.name}, the ${this.getAge()} year old ${this.species}, says 'Meow'!`);
  } else if (this.species === 'bird') {
    console.log(`${this.name}, the ${this.getAge()} year old ${this.species}, says 'Tweet'!`);
  }
}

module.exports = Animal;