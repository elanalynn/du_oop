import { Date } from '../src/Date'
import { DateTime } from '../src/DateTime'
import { expect } from 'chai'
import 'mocha'

describe('DateTime', () => {
  describe('getDate', () => {
    const date = new Date(10, 6, 2012)
    const dateTime = new DateTime(date)

    it('returns a date', () => {
      const result = dateTime.getDate()
      console.log(result)
      expect(result).to.equal(10)
    })
  })
})
