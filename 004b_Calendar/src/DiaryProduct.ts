// Java Example
// public class DiaryProduct {
//   public DiaryProduct ( ClassId classId, ObjectId objectId);
//   public ClassId GetClassId();
//   public ObjectId GetObjectId();
//   private ClassId  mClassId;
//   private ObjectId mObjectId;
// }

import { ClassId } from './ClassId'
import { ObjectId } from './ObjectId'
import { Date } from './Date'
import { DateTime } from './DateTime'

export class DiaryProduct {
  private classId: ClassId
  private objectId: ObjectId

  constructor(classId: ClassId, objectId: ObjectId) {
    this.classId = ClassId
    this.objectId = ObjectId
  }

  public getClassId(): ClassId {
    return new ClassId()
  }

  public getObjectId(): ObjectId {
    return new ObjectId()
  }
}