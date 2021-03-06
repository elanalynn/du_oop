import { ClassId } from '../src/ClassId'
import { expect } from 'chai'
import 'mocha'
const fs = require('fs')

describe('ClassId', () => {
  describe('getLastId', () => {
    let classId

    beforeEach(() => {
      classId = new ClassId('monkey')
    })

    it('gets the last class id that was set', () => {
      const result = classId.getLastId('./spec/mocks/classIds')

      expect(result).to.equal('6')
    })
  })
})
