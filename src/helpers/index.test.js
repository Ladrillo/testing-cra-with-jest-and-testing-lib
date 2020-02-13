// don't forget to import the functions you want to test!
import * as help from './index'

// this is a test
it('sanity check', () => {
  // assertions
  expect(7).toBe(7)
  expect(7).toBeGreaterThan(6)
  expect(7).not.toBe(8)
  expect(7).not.toBeUndefined()
})

describe('helpers module', () => {
  describe('five function', () => {
    it('returns five', () => {
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