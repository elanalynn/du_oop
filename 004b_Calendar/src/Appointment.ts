import { CalendarEvent } from './CalendarEvent'
import { ClassId } from './ClassId'
import { ObjectId } from './ObjectId'
import { Date } from './Date'
import { DateTime } from './DateTime'

export class Appointment extends CalendarEvent {
  // private classId: ClassId
  // private objectId: ObjectId
  private startTime: DateTime
  private endTime: DateTime
  private duration: number
  private details: string
  private recurring: boolean

  constructor(
    classId: ClassId,
    objectId: ObjectId,
    label: string,
    startTime: DateTime,
    duration: number,
    details: string,
    recurring: boolean
  ) {
    super(classId, objectId, label)

    // this.classId = classId
    // this.objectId = objectId
    this.startTime = startTime
    this.duration = duration
    this.details = details
    this.endTime = this.calculateEndTime(this.startTime, this.duration)
    this.recurring = recurring
  }

  public isRecurring(): boolean {
    return this.recurring
  }

  public isOccuringOn(dateTime: DateTime): boolean {
    return dateTime.isBetween(this.startTime, this.endTime)
  }

  private calculateEndTime(startTime, duration): DateTime {
    const dateString = DateTime.dateTimeToStringNumber(this.startTime)

    const minutes = Number.parseInt(dateString.slice(-2) + this.duration)

    DateTime.stringNumberToDateTime(DateTime.dateTimeToStringNumber(this.startTime) + this.duration)

    return new DateTime(new Date(), 2, minutes)
  }
}
