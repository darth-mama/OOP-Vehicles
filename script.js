//Part One

class Vehicle {
  constructor(make, model, year) {
    this.make = make;

    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep.";
  }

  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

//Part Two

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOOOOOM";
  }
}

//PART FOUR
class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  add(plusOne) {
    if (!(plusOne instanceof Vehicle)) {
      throw new Error("Only vehicles are allowed in here!");
    }
    if (this.capacity.length >= this.capacity) {
      throw new Error("Sorry, we're full");
    }
    this.vehicles.push(plusOne);
    return "Vehicle added!";
  }
}
