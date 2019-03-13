// Java Example
// public class Contact extends DiaryProduct {
//   public Contact ( ObjectId objectId, …. ) {
//     super( new ClassId( “Contact”), objectId );
//     …
//     }
// }

import { DiaryProduct } from './DiaryProduct'
import { ClassId } from './ClassId'
import { ObjectId } from './ObjectId'

export class Contact extends DiaryProduct {
  // private classId: ClassId
  // private objectId: ObjectId

  constructor(classId: ClassId, objectId: ObjectId) {
    super(classId, objectId)
    // this.classId = ClassId
    // this.objectId = ObjectId
  }

  public getClassId(): ClassId {
    return new ClassId()
  }

  public getObjectId(): ObjectId {
    return new ObjectId()
  }
}
