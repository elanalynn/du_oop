import { Date, Month } from '../src/Date'
import { expect } from 'chai'
import 'mocha'

describe('Date', () => {
  describe('getDay', () => {
    const date = new Date(10, 6, 2012)

    it('returns a day', () => {
      const result = date.getDay()
      expect(result).to.equal(10)
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

  describe('getDayOfWeek', () => {
    let date: Date
    
    beforeEach(() => {
      date = new Date(30, 5, 2012)
    })

    it('returns the correct day of the week', () => {
      const result = date.getDayOfWeek()
      expect(result).to.equal('THURSDAY')
    })
  })

  describe('compareTo', () => {
    let date: Date

    beforeEach(() => {
      date = new Date(15, 2, 2019)
    })
    
    it('returns 1 if the date is after than today', () => {
      const result = date.compareTo(new Date(30, 5, 2020))
      expect(result).to.equal(1)
    })

    it('returns -1 if the date is before than today', () => {
      const result = date.compareTo(new Date(30, 5, 2012))
      expect(result).to.equal(-1)
    })
  })

  describe('addDays', () => {
    let date: Date
    
    beforeEach(() => {
      date = new Date(30, 5, 2012)
    })

    it('adds the correct number of days', () => {
      date.addDays(5)
      const result = date.getDay()
      expect(result).to.equal(35)
    })
  })

  describe('subtractDays', () => {
    let date: Date
    
    beforeEach(() => {
      date = new Date(30, 5, 2012)
    })

    it('subtracts the correct number of days', () => {
      date.subtractDays(5)
      const result = date.getDay()
      expect(result).to.equal(25)
    })
  })

  describe('isBetween', () => {
    let date: Date

    beforeEach(() => {
      date = new Date(30, 5, 2014)
    })

    it('returns true if a date is in the range', () => {
      const start = new Date(22, 5, 2012)
      const end = new Date(22, 10, 2016)
      const result = date.isBetween(start, end)
      expect(result).to.equal(true)
    })

    it('returns false if a date is not in the range', () => {
      const start = new Date(30, 5, 2012)
      const end = new Date(30, 5, 2013)

      const result = date.isBetween(start, end)
      expect(result).to.equal(false)
    })
  }) 

  describe('isLeapYear', () => {
    let date: Date

    it('returns true if a date is a leap year', () => {
      const result = Date.isLeapYear(1984)
      expect(result).to.equal(true)
    })

    it('returns false if a date is not a leap year', () => {
      const result = Date.isLeapYear(3677)
      expect(result).to.equal(false)
    })
  })

  describe('getLastDayOfMonth', () => {
    let date: Date
    
    beforeEach(() => {
      date = new Date(30, 5, 2012)
    })

    it('gets the last day of the February in a non leap year', () => {
      const result = date.getLastDayOfMonth(2, 2019)
      expect(result).to.equal(28)
    })

    it('gets the last day of the February in a leap year', () => {
      const result = date.getLastDayOfMonth(2, 1984)
      expect(result).to.equal(29)
    })

    it('gets the last day of the March', () => {
      const result = date.getLastDayOfMonth(3, 2019)
      expect(result).to.equal(31)
    })

    it('gets the last day of the April', () => {
      const result = date.getLastDayOfMonth(2, 2019)
      expect(result).to.equal(28)
    })
  })
})
