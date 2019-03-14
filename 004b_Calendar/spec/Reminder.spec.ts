import { ClassId } from '../src/ClassId'
import { ObjectId } from '../src/ObjectId'
import { Date } from '../src/Date'
import { DateTime } from '../src/DateTime'
import { Reminder } from '../src/Reminder'
import { expect } from 'chai'
import 'mocha'

describe('Reminder', () => {
  let classId: ClassId
  let objectId: ObjectId
  let date: Date
  let dateTime: DateTime
  let reminder: Reminder

  beforeEach(() => {
    classId = new ClassId('reminder')
    objectId = new ObjectId()
    date = new Date(10, 6, 2012)
    dateTime = new DateTime(date, 10, 12)
    reminder = new Reminder(classId, objectId, 'appointment', dateTime, 'dance lesson', true)
  })

  describe('getDateTime', () => {
    it('gets the date and time of the reminder', () => {
      const result = reminder.getDateTime()
      expect(result.getDate().getDay()).to.equal(10)
      expect(result.getDate().getMonth()).to.equal(6)
      expect(result.getDate().getYear()).to.equal(2012)
    })
  })

  describe('getDetails', () => {
    it('gets the details of the reminder', () => {
      const result = reminder.getDetails()
      expect(result).to.equal('dance lesson')
    })
  })

  describe('isOccuringOn', () => {
    it('returns true if the reminder occurs on the given date', () => {
      const result = reminder.isOccuringOn(dateTime)
      expect(result).to.equal(true)
    })

    it('returns false if the reminder does not occur on the given date', () => {
      const otherDateTime = new DateTime(new Date(12, 12, 12), 12, 12)
      const result = reminder.isOccuringOn(otherDateTime)
      expect(result).to.equal(false)
    })
  })

  describe('isRecurring', () => {
    it('returns true if the reminder is recurring', () => {
      const result = reminder.isRecurring()
      expect(result).to.equal(true)
    })

    it('returns false if the reminder is not recurring', () => {
      const otherReminder = new Reminder(classId, objectId, 'appointment', dateTime, 'dance lesson', false)
      const result = otherReminder.isRecurring()
      expect(result).to.equal(false)
    })
  })
})
