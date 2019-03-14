import { ClassId } from '../src/ClassId'
import { ObjectId } from '../src/ObjectId'
import { DateTime } from '../src/DateTime'
import { PeriodicAppointment } from '../src/PeriodicAppointment'
import { expect } from 'chai'
import 'mocha'

describe('PeriodicAppointment', () => {
  let classId
  let objectId
  let occursFirst
  let notToExceedDateTime
  let periodicAppointment

  beforeEach(() => {
    classId = new ClassId('periodicAppointment')
    objectId = new ObjectId()
    occursFirst = new DateTime()
    notToExceedDateTime = new DateTime()
    periodicAppointment = new PeriodicAppointment(
      classId,
      objectId,
      'appointment',
      occursFirst,
      30,
      notToExceedDateTime,
      2,
      'dance lesson',
      true
    )
  })

  describe('something', () => {
    it('does something', () => {
      const result = true
      expect(true).to.equal(true)
    })
  })
})
