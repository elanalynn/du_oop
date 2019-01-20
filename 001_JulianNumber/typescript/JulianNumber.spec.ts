import JulianNumber from './JulianNumber'
import { expect } from 'chai'
import 'mocha'

describe('JulianNumber', () => {
  describe('toJulianNumber', () => {
    const julianNumber: JulianNumber = new JulianNumber()

    it('returns a Julian year below 1000', () => {
      const result = julianNumber.toJulianNumber(5, 'jan', 50)
      expect(result).to.equal(1739327)
    })

    it('returns a Julian year for the 1900s', () => {
      const result = julianNumber.toJulianNumber(1, 'feb', 1957)
      expect(result).to.equal(2435871)
    })

    it('returns a Julian year for the 1400s', () => {
      const result = julianNumber.toJulianNumber(15, 'mar', 1492)
      expect(result).to.equal(2266077)
    })

    it('returns a Julian year for the 2000s', () => {
      const result = julianNumber.toJulianNumber(25, 'dec', 2050)
      expect(result).to.equal(2470167)
    })
  })

  describe('fromJulianNumber', () => {
    const julianNumber: JulianNumber = new JulianNumber()

    it('returns a Gregorian year correctly', () => {
      const result = julianNumber.fromJulianNumber(2299160.5)
      expect(result.day).to.equal(15)
      expect(result.month).to.equal(8)
      expect(result.year).to.equal(1582)
    })
  })
})
