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

    })
    it('returs a value greater than 4', () => {

    })
    it('returs a value not NaN', () => {
      
    })
    it('returs a value smaller than 6', () => {
      
    })
  })

  describe('sum', () => {

  })

  describe('personMaker', () => {

  })
})