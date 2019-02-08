import Date from '../src/Date'
import { expect } from 'chai'
import 'mocha'

describe('Date', () => {
  describe('getDay', () => {
    const date = new Date(10, 6, 2012)

    it('returns a day', () => {
      const result = date.getDay()
      expect(result).to.equal(30)
    })
  })

  describe('setDay', () => {
    let date: Date
    
    beforeEach(() => {
      date = new Date(25, 5, 2012)
    }) 

    it('sets a day if the day argument is a valid day', () => {
      date.setDay(23)
      const result = date.getDay()
      expect(result).to.equal(23)
    })

    it('sets a day if the day argument is a valid day in a month with 31 days', () => {
      date.setDay(31)
      const result = date.getDay()
      expect(result).to.equal(31)
    })


    it('does not set a day if day > 31 in a month with 31 days', () => {
      date.setMonth(1)
      date.setDay(32)
      const result = date.getDay()
      expect(result).to.equal(25)
    })

    it('sets a day if the day argument is a valid day in a month with 30 days', () => {
      date.setMonth(4)
      date.setDay(30)
      const result = date.getDay()
      expect(result).to.equal(30)
    })

    it('does not set a day if day > 30 in in a month with 30 days', () => {
      date.setMonth(4)
      date.setDay(31)
      const result = date.getDay()
      expect(result).to.equal(25)
    })

    it('does not set a day if day > 28 in a non-leap year February', () => {
      date.setMonth(2)
      date.setYear(1997)
      date.setDay(29)
      const result = date.getDay()
      expect(result).to.equal(25)
    })

    it('does not set a day if day > 29 in a leap year February', () => {
      date.setDay(45)
      const result = date.getDay()
      expect(result).to.equal(25)
    })
  })

  describe('getMonth', () => {
    const date = new Date(30, 5, 2012)

    it('returns a month', () => {
      const result = date.getMonth()
      expect(result).to.equal(5)
    })
  })

  describe('setMonth', () => {
    let date: Date

    beforeEach(() => {
      date = new Date(25, 5, 2012)
    })

    it('sets a month if the month argument is a valid month', () => {
      date.setMonth(6)
      const result = date.getMonth()
      expect(result).to.equal(6)
    })

    it('does not set a month if month argument is not a valid month', () => {
      date.setMonth(63)
      const result = date.getMonth()
      expect(result).to.equal(5)
    })
  })

  describe('getYear', () => {
    const date = new Date(25, 5, 2012)

    it('returns a year', () => {
      const result = date.getYear()
      expect(result).to.equal(2012)
    })
  })

  describe('setYear', () => {
    let date: Date
    
    beforeEach(() => {
      date = new Date(30, 5, 2012)
    })

    it('sets a year if the year argument is a valid year', () => {
      date.setYear(3099)
      const result = date.getYear()
      expect(result).to.equal(3099)
    })
  })
})
