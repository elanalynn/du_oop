import { ClassId } from '../src/ClassId'
import { ObjectId } from '../src/ObjectId'
import { DateTime } from '../src/DateTime'
import { PeriodicAppointment } from '../src/PeriodicAppointment'
import { expect } from 'chai'
import 'mocha'

const fs = require('fs')

describe('PeriodicAppointment', () => {
  let classId
  let objectId
  let occursFirst
  let notToExceedDateTime
  let periodicAppointment

  beforeEach(() => {
    fs.writeFileSync('./spec/mocks/objectIds', '1,2', err => console.log('Error', err))
    classId = new ClassId('PeriodicAppointment')
    objectId = new ObjectId('./spec/mocks/objectIds')
    occursFirst = new DateTime()
    notToExceedDateTime = new DateTime()
    periodicAppointment = new PeriodicAppointment(
      objectId,
      'appointment label',
      occursFirst,
      30,
      notToExceedDateTime,
      2,
      'dance lesson details',
      true
    )
  })

  describe('getClassId', () => {
    it('gets the class id', () => {
      const id = periodicAppointment.getClassId().getId()
      expect(id).to.equal('PeriodicAppointment')
    })
  })

  describe('getObjectId', () => {
    it('gets the object id', () => {
      const id = periodicAppointment.getObjectId().getId()
      expect(id).to.equal(3)
    })
  })

  describe('getLabel', () => {
    it('gets the label', () => {
      const label = periodicAppointment.getLabel()
      expect(label).to.equal('appointment label')
    })
  })

  describe('getOccursFirst', () => {
    it('gets the first occurance', () => {
      const firstOccurance = periodicAppointment.getOccursFirst()
      expect(firstOccurance.getDate().getDay()).to.equal(1)
      expect(firstOccurance.getDate().getMonth()).to.equal(1)
      expect(firstOccurance.getDate().getYear()).to.equal(1970)
    })
  })

  describe('getDurationMinutes', () => {
    it('gets the duration in minutes', () => {
      const duration = periodicAppointment.getDurationMinutes()
      expect(duration).to.equal(30)
    })
  })

  describe('getNotToExceedDateTime', () => {
    it('gets the end DateTime', () => {
      const endDateTime = periodicAppointment.getNotToExceedDateTime()
      expect(endDateTime.getDate().getDay()).to.equal(1)
      expect(endDateTime.getDate().getMonth()).to.equal(1)
      expect(endDateTime.getDate().getYear()).to.equal(1970)
    })
  })

  describe('getPeriodicHours', () => {
    it('gets the periodic hours', () => {
      const hours = periodicAppointment.getPeriodicHours()
      expect(hours).to.equal(2)
    })
  })

  describe('getDetails', () => {
    it('gets the first occurance', () => {
      const details = periodicAppointment.getDetails()
      expect(details).to.equal('dance lesson details')
    })
  })
})
