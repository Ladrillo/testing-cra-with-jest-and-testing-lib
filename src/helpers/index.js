import uuid from 'uuid'

export function five() {
  return 5
}

export function asyncFive() {
  return Promise.resolve(5)
}

export function sum(a, b) {
  return a + b
}

export function multiply(a, b) {
  return a * b
}

export function personMaker(name, age) {
  return {
    id: uuid(),
    name,
    age,
  }
}
