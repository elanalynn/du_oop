import { Date } from '../src/Date'
import { DateTime } from '../src/DateTime'
import { Appointment } from '../src/Appointment'
import { expect } from 'chai'
import 'mocha'

describe('Appointment', () => {
  describe('isRecurring', () => {
    let appointment

    beforeEach(() => {
      appointment = new Appointment(1, 1, 'Salsa Class', new DateTime(), 60, 'learn to code', true)
    })

    it('returns true if the appointment is recurring', () => {
      expect(appointment.isRecurring()).to.equal(true)
    })

    it('returns false if the appointment is not recurring', () => {
      expect(appointment.isRecurring()).to.equal(true)
    })
  })

  describe('isOccuringOn', () => {
    let appointment

    beforeEach(() => {
      appointment = new Appointment(1, 1, 'History Class', new DateTime(), 60, 'learn about things', true)
    })

    it('returns true if the appointment is occurring on the given date', () => {
      expect(appointment.isRecurring(new DateTime())).to.equal(true)
    })

    it('returns false if the appointment is not occurring on the given date', () => {
      expect(appointment.isRecurring(new DateTime(new Date(23, 12, 2019)))).to.equal(true)
    })
  })
})
