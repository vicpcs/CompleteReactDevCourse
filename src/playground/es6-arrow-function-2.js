const add = (a, b) => {
  // console.log(arguments) Does not work in arrow functions!
  return a + b;
};
console.log(add(55, 1));

const user = {
  name: 'Vic',
  cities: ['Chicago', 'Minneapolis', 'Madrid'],
  printPlacesLived() {
    return this.cities.map((city) => `${this.name} has lived in ${city}`);
  },
};
console.log(user.printPlacesLived());

// Challenge Area

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
