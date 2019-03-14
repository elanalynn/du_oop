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
    classId = new ClassId()
    objectId = new ObjectId()
    contact = new Contact(classId, objectId)
  })

  describe('something', () => {
    it('does something', () => {
      const result = true
      expect(result).to.equal(true)
    })
  })
})
