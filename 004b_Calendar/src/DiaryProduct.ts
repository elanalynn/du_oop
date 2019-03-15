import { ClassId } from './ClassId'
import { ObjectId } from './ObjectId'
import { Date } from './Date'
import { DateTime } from './DateTime'

export class DiaryProduct {
  private classId: ClassId
  private objectId: ObjectId

  constructor(classId: ClassId, objectId: ObjectId) {
    this.classId = classId
    this.objectId = objectId
  }

  public getClassId(): ClassId {
    return this.classId
  }

  public getObjectId(): ObjectId {
    return this.objectId
  }
}
