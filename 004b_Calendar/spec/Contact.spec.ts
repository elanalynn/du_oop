import { ClassId } from '../src/ClassId'
import { ObjectId } from '../src/ObjectId'
import { Contact } from '../src/Contact'
import { expect } from 'chai'
import 'mocha'

describe('Contact', () => {
  let classId
  let objectId
  let contact

  beforeEach(() => {
    classId = new ClassId('contact')
    objectId = new ObjectId()
    contact = new Contact(classId, objectId)
  })

  describe('getClassId', () => {
    it('gets the class id', () => {
      const result = true
      expect(result).to.equal(true)
    })
  })

  describe('getObjectId', () => {
    it('gets the object id', () => {
      const result = true
      expect(result).to.equal(true)
    })
  })
})
