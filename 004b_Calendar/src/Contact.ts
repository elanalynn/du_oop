import { DiaryProduct } from './DiaryProduct'
import { ClassId } from './ClassId'
import { ObjectId } from './ObjectId'

export class Contact extends DiaryProduct {

  constructor(classId: ClassId, objectId: ObjectId) {
    super(classId, objectId)
  }

  public getClassId(): ClassId {
    return new ClassId('contact')
  }

  public getObjectId(): ObjectId {
    return new ObjectId()
  }
}
