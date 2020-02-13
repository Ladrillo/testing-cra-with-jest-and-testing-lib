export function five() {
  return 5
}

export function sum(a, b) {
  // what should I do to pass the test???
  if (isNaN(a) || isNaN(b)) {
    return null
  }
  if (
    typeof a !== 'number' ||
    typeof b !== 'number'
  ) {
    return null
  }
  return a + b
}

export function multiply(a, b) {
  return a * b
}

export function personMaker(name, age) {
  return {
    id: 1,
    name,
    age,
  }
}

// - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
//     - All instances built with Car:
//         + should initialize with a `tank` at 0
//         + should initialize with an `odometer` at 0
//     - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
//     - Give cars ability to `.drive(distance)`. The distance driven:
//         + Should cause the `odometer` to go up.
//         + Should cause the the `tank` to go down taking `milesPerGallon` into account.
//     - A car which runs out of `fuel` while driving can't drive any more distance:
//         + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.

export class Car {
  constructor(model, mpg) {
    this.model = model
    this.milesPerGallon = mpg
    this.tank = 0
    this.odometer = 0
  }
  fill(gallons) {
    this.tank = this.tank + gallons
  }
  drive(dist) {
    const drivableMiles = this.tank * this.milesPerGallon
    if (dist <= drivableMiles) {
      this.odometer = this.odometer + dist
      this.tank = this.tank - (dist / this.milesPerGallon)
    } else {
      this.odometer = this.odometer + drivableMiles
      this.tank = 0
      return `I ran out of fuel at ${this.odometer} miles!`
    }
  }
}
