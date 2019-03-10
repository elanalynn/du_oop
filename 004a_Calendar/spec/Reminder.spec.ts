import { Date } from '../src/Date'
import { DateTime } from '../src/DateTime'
import { Reminder } from '../src/Reminder'
import { expect } from 'chai'
import 'mocha'

describe('Reminder', () => {
  describe('isOccuringOn', () => {
    const date = new Date(10, 6, 2012)
    const dateTime = new DateTime(date)

    it('returns a date', () => {
      const result = dateTime.getDate()
      expect(result).to.deep.equal({ day: 10, month: 6, year: 2012 })
    })
  })
})
