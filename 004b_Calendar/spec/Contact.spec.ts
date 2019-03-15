import { ClassId } from '../src/ClassId'
import { ObjectId } from '../src/ObjectId'
import { Contact } from '../src/Contact'
import { expect } from 'chai'
import 'mocha'

const fs = require('fs')

describe('Contact', () => {
  let classId
  let objectId
  let contact

  beforeEach(() => {
    fs.writeFileSync('./spec/mocks/objectIds', '1,2', err => console.log('Error', err))
    classId = new ClassId('contact')
    objectId = new ObjectId('./spec/mocks/objectIds')
    contact = new Contact(classId, objectId)
  })

  describe('getClassId', () => {
    it('gets the class id', () => {
      const id = contact.getClassId().getId()
      expect(id).to.equal('contact')
    })
  })

  describe('getObjectId', () => {
    it('gets the object id', () => {
      const id = contact.getObjectId().getId()
      expect(id).to.equal(3)
    })
  })
})
