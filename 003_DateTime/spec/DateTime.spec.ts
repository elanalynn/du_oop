import { Date } from '../src/Date'
import { DateTime } from '../src/DateTime'
import { expect } from 'chai'
import 'mocha'

describe('DateTime', () => {
  describe('getDate and setDate', () => {
    const date = new Date(10, 6, 2012)
    const dateTime = new DateTime(date)

    it('returns a date', () => {
      const result = dateTime.getDate()
      expect(result).to.deep.equal({ day: 10, month: 6, year: 2012 })
    })

    it('sets a date', () => {
      dateTime.setDate(new Date(5, 8, 2016))
      const result = dateTime.getDate()
      expect(result).to.deep.equal({ day: 5, month: 8, year: 2016 })
    })
  })

  describe('getHours and setHours', () => {
    const date = new Date(10, 6, 2012)
    const dateTime = new DateTime(date, 4, 38)

    it('returns hours', () => {
      const result = dateTime.getHours()
      expect(result).to.equal(4)
    })

    it('sets hours', () => {
      dateTime.setHours(4)
      const result = dateTime.getHours()
      expect(result).to.equal(4)
    })
  })

  describe('getMinutes and setMinutes', () => {
    const date = new Date(10, 6, 2012)
    const dateTime = new DateTime(date, 4, 38)

    it('returns minutes', () => {
      const result = dateTime.getMinutes()
      expect(result).to.equal(38)
    })

    it('sets minutes', () => {
      dateTime.setMinutes(26)
      const result = dateTime.getMinutes()
      expect(result).to.deep.equal(26)
    })
  })

  describe('compareTo', () => {
    const date = new Date(10, 6, 2012)
    const dateTime = new DateTime(date, 4, 38)

    it('compares DateTime to self', () => {
      const result = dateTime.getDate()
      expect(result).to.deep.equal({ day: 10, month: 6, year: 2012 })
    })
  })

  describe('isBetween', () => {
    const date = new Date(10, 6, 2012)
    const dateTime = new DateTime(date)

    it('returns -1 if the dateTime is before start dateTime', () => {
      const result = dateTime.getDate()
      expect(result).to.deep.equal({ day: 10, month: 6, year: 2012 })
    })

    it('returns 0 if the dateTime is between start and end dateTimes', () => {
      const result = dateTime.getDate()
      expect(result).to.deep.equal({ day: 10, month: 6, year: 2012 })
    })

    it('returns 1 if the dateTime is after the end dateTime', () => {
      const result = dateTime.getDate()
      expect(result).to.deep.equal({ day: 10, month: 6, year: 2012 })
    })
  })

  describe('addTime', () => {
    const date = new Date(10, 6, 2012)
    const dateTime = new DateTime(date)

    it('adds time to DateTime', () => {
      const result = dateTime.getDate()
      expect(result).to.deep.equal({ day: 10, month: 6, year: 2012 })
    })
  })
})
