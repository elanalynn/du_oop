import { ClassId } from './ClassId'
import { ObjectId } from './ObjectId'
import { DateTime } from './DateTime'

export abstract class CalendarEvent {
  private classId: ClassId
  private objectId: ObjectId
  private label: string

  constructor(classId: ClassId, objectId: ObjectId, label: string) {
    this.label = label
    this.classId = classId
    this.objectId = objectId
  }
  
  abstract isRecurring(): boolean

  abstract isOccuringOn(date: DateTime): boolean

  public getClassId(): ClassId {
    return this.classId
  }

  public getObjectId(): ObjectId {
    return this.objectId
  }

  public getLabel(): string {
    return this.label
  }
}
