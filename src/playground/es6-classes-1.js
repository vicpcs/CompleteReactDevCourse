class Person {
  constructor (name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
    }
  getGreeting () {
      return `Hi, I'm ${this.name}!`
  }
  getDesc () {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor (name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor () {
    return !!this.major;
  }
  getDesc () {
    let description = super.getDesc();
    if (this.hasMajor()){
      description += ` Their major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
    constructor (name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting () {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I'm visitng from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const travelerMe = new Traveler('Vic', 24, 'Chicago');
console.log(travelerMe.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());
