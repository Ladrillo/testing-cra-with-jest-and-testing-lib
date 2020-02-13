// don't forget to import the functions you want to test!
import * as help from './index'

// EACH TEST TESTS A SINGLE THING <- IMPORTANT
// make a good test message
it('sanity check', () => {
  // a single test can have, if needed, multiple assertions
  // all assertions should be testing "the same thing"
  expect(7).toBe(7)
  expect(7).toBeGreaterThan(6)
  expect(7).not.toBe(8)
  expect(7).not.toBeUndefined()
})

// use describe blocks to organize tests
// entirely optional, don't go crazy with the nesting
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
    it('returns a value greater than 4', () => {
      expect(help.five()).toBeGreaterThan(4)
    })
    it('returns a value not NaN', () => {
      expect(help.five()).not.toBeNaN()
    })
    it('returns a value smaller than 6', () => {
      expect(help.five()).toBeLessThan(6)
    })
  })

  describe('sum function', () => {
    it('is able to add up two positive numbers', () => {
      expect(help.sum(1, 2)).toBe(3)
      expect(help.sum(2, 2)).toBe(4)
    })
    it('is able to handle negative numbers', () => {
      expect(help.sum(-1, 1)).toBe(0)
      expect(help.sum(-1, 2)).toBe(1)
      expect(help.sum(-1, -1)).toBe(-2)
    })
    it('returns null if one or both args are not numbers', () => {
      // Product person wants this behavior!!
      expect(help.sum('1', 1)).toBe(null)
      expect(help.sum('1', null)).toBe(null)
      expect(help.sum(1)).toBe(null)
    })
    it('can handle NaN args and return null', () => {
      expect(help.sum(1, NaN)).toBe(null)
      expect(help.sum(NaN, 5)).toBe(null)
    })
  })

  describe('car constructor', () => {
    it('initializes with an empty tank', () => {
      // setup
      const prius = new help.Car('Prius', 50)
      expect(prius.tank).toBe(0)
    })
    it('can fill up the tank', () => {
      // setup
      const focus = new help.Car('Focus', 50)
      focus.fill(10)
      // assertion
      expect(focus.tank).toBe(10)
    })
  })
})
