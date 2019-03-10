import { DateTime } from '../src/DateTime'
import { Appointment } from '../src/Appointment'
import { expect } from 'chai'
import 'mocha'

describe('Appointment', () => {
  describe('isRecurring', () => {
    let appointment

    beforeEach(() => {
      appointment = new Appointment('Salsa Class', new DateTime(), 60, 'learn to code')
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
      appointment = new Appointment('History Class', new DateTime(), 60, 'learn about things')
    })

    it('returns true if the appointment is occurring on the given date', () => {
      expect(appointment.isRecurring()).to.equal(true)
    })

    it('returns false if the appointment is not occurring on the given date', () => {
      expect(appointment.isRecurring()).to.equal(false)
    })
  })
})
