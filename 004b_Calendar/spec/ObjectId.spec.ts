import { ObjectId } from '../src/ObjectId'
import { expect } from 'chai'
import 'mocha'
const fs = require('fs')

describe('ObjectId', () => {
  describe('getLastId', () => {
    let objectId

    beforeEach(() => {
      objectId = new ObjectId()
    })

    it('gets the last class id that was set', () => {
      const result = objectId.getLastId('./spec/mocks/objectIds')

      expect(result).to.equal('3')
    })
  })
})
