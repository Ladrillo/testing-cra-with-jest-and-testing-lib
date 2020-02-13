// don't forget to import the functions you want to test!
import * as help from './index'

// TESTS TEST A SINGLE THING
// make a good test message
it('sanity check', () => {
  // a single test can have if needed, multiple assertions
  // all assertions are, testing "the same thing"
  expect(7).toBe(7)
  expect(7).toBeGreaterThan(6)
  expect(7).not.toBe(8)
  expect(7).not.toBeUndefined()
})

// use describe blocks to organize tests
// entirely optional
describe('helpers module', () => {
  describe('five function', () => {
    it('returns five', () => {
      // unit tests test the smaller units of the program in isolation
      // (usually functions and classes)
      // we want to test that the function or method returns the expected value,
      // given certain arguments
      expect(help.five()).toBe(5) // toEqual with [] {}
    })
    it('returns a value that is defined', () => {
      expect(help.five()).not.toBeUndefined()
    })
    it('returs a value greater than 4', () => {
      expect(help.five()).toBeGreaterThan(4)
    })
    it('returs a value not NaN', () => {
      expect(help.five()).not.toBeNaN()
    })
    it('returs a value smaller than 6', () => {
      expect(help.five()).toBeLessThan(6)
    })
  })
})